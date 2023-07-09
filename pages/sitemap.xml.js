import fs from "fs";
const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.jmhomeoclinic.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return !["_app.js", "_document.js", "404.js", "sitemap.xml.js"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
              </url>
            `;
          })
          .join("")}
      </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
