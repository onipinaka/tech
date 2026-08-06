const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      process.env[match[1].trim()] = match[2].trim();
    }
  });
}

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function main() {
  console.log('\n========================================');
  console.log('🚀 Raion Tech Terminal Blog Creator 🚀');
  console.log('========================================\n');

  try {
    const title = await askQuestion('📌 Enter Blog Title: ');
    if (!title) {
      console.error('Title is required!');
      rl.close();
      return;
    }

    const defaultSlug = slugify(title);
    const customSlug = await askQuestion(`🔗 Enter Slug (Press Enter for default: "${defaultSlug}"): `);
    const slug = customSlug.trim() || defaultSlug;

    const excerpt = await askQuestion('📝 Enter Excerpt (Short summary): ');

    const seoKeywords = await askQuestion('🔍 Enter SEO Keywords (comma separated, e.g. "laptop repair, printer service, delhi"): ');

    const tags = await askQuestion('🏷️  Enter Tags/Categories (comma separated, e.g. "Hardware, Repair, Tech"): ');

    const coverImage = await askQuestion('🖼️  Enter Cover Image URL (or Google Drive link): ');

    console.log('\n📄 Enter Content HTML (End with a blank line and press Enter):');
    let contentLines = [];
    for await (const line of rl) {
      if (line === '') break;
      contentLines.push(line);
    }
    const content = contentLines.join('\n');

    const publishAns = await askQuestion('🚀 Publish blog immediately? (y/n): ');
    const published = publishAns.toLowerCase().startsWith('y');

    let formattedCoverImage = coverImage.trim();
    const driveMatch = formattedCoverImage.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || formattedCoverImage.match(/[?&]id=([a-zA-Z0-9_-]+)/) || formattedCoverImage.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      formattedCoverImage = `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }

    const processedContent = content.trim().replace(
      /https:\/\/(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?export=view&id=)|lh3\.googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)[^\s"']*/g,
      (match, id) => `https://lh3.googleusercontent.com/d/${id}`
    );

    const blogData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      seo_keywords: seoKeywords.trim(),
      tags: tags.trim(),
      cover_image: formattedCoverImage,
      content: processedContent,
      published,
      updated_at: new Date().toISOString()
    };

    console.log('\nSaving blog to Supabase database...');
    const { data, error } = await supabase.from('blogs').insert(blogData).select();

    if (error) {
      console.error('❌ Error saving blog:', error.message);
    } else {
      console.log('✅ Blog created successfully!');
      console.log(`🔗 Slug: /blog/${slug}`);
      console.log(`🏷️  Tags: ${tags || 'None'}`);
      console.log(`🔍 SEO Keywords: ${seoKeywords || 'None'}`);
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err);
  } finally {
    rl.close();
  }
}

main();
