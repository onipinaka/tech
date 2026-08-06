/**
 * Utility functions for parsing and converting Google Drive image links
 * into direct renderable image URLs.
 */

export function extractGoogleDriveId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const cleaned = url.trim();
  const match =
    cleaned.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    cleaned.match(/[?&]id=([a-zA-Z0-9_-]+)/) ||
    cleaned.match(/\/d\/([a-zA-Z0-9_-]+)/);

  return match && match[1] ? match[1] : null;
}

export function formatGoogleDriveUrl(url: string): string {
  if (!url || typeof url !== 'string') return url;
  const fileId = extractGoogleDriveId(url);
  if (fileId) {
    // lh3.googleusercontent.com/d/FILE_ID is Google's direct high-speed CDN endpoint
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }
  return url;
}

export function processContentImages(content: string): string {
  if (!content || typeof content !== 'string') return content;
  
  // Replace Google Drive links inside HTML img tags or plain href/src attributes
  return content.replace(
    /https:\/\/(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?export=view&id=)|lh3\.googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)[^\s"']*/g,
    (match, id) => `https://lh3.googleusercontent.com/d/${id}`
  );
}
