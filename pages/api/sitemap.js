export default function handler(req, res) {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.jmhomeoclinic.com",
  }[process.env.NODE_ENV];
  console.log(baseUrl);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>${baseUrl}/home</loc>
    </url>
     <url>
      <loc>${baseUrl}/index.js</loc>
    </url>
    </urlset>`;

  res.end(xml);
}
