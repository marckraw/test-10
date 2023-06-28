export default function handler(req, res) {
  const url = req?.headers?.host;

  res.send(`User-agent: *
Allow: /

Sitemap: https://${url}/sitemap.xml`);
}
