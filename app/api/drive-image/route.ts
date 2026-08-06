import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('Missing image ID parameter', { status: 400 });
  }

  try {
    // Attempt direct fetch from Google Drive export download endpoint
    const driveUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download`;
    const response = await fetch(driveUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      // Fallback to lh3 CDN fetch
      const lh3Url = `https://lh3.googleusercontent.com/d/${id}`;
      const lh3Response = await fetch(lh3Url);
      if (lh3Response.ok) {
        const contentType = lh3Response.headers.get('content-type') || 'image/jpeg';
        const buffer = await lh3Response.arrayBuffer();
        return new NextResponse(buffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      }
      return new NextResponse('Image not found or not publicly accessible', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error: any) {
    return new NextResponse(`Error proxying image: ${error.message}`, { status: 500 });
  }
}
