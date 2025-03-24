import fs from 'fs';
import path from 'path';

const pages = [
  { url: 'https://weblibron.com/', lastmod: '2023-10-01', changefreq: 'monthly', priority: 1.0 },
  { url: 'https://weblibron.com/aboutus', lastmod: '2024-03-23', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://weblibron.com/solution', lastmod: '2024-03-23', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://weblibron.com/showcase', lastmod: '2024-03-23', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://weblibron.com/privacy', lastmod: '2024-03-23', changefreq: 'yearly', priority: 0.5 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully.');
