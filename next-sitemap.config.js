/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://www.vnoc.com',
  // List the pages in sitemap.xml itself (not an index) and write robots.txt
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ['/error', '/api/*', '/.well-known/*', '/skill.md'],
  additionalPaths: async (config) => [
    await config.transform(config, '/.well-known/agent.json'),
    await config.transform(config, '/.well-known/skill.md'),
    await config.transform(config, '/skill.md'),
  ],
};
