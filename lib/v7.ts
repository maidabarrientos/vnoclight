// eCorp v7 protocol surfaces for vnoc.com — same responses as the VNOC v7 kit
// (managevnoc workers/_shared/v7-kit.js) serves on every network lander.
export const V7_HOST = "vnoc.com";
export const V7_BRAND = "Vnoc.com"; // domainToBrand("vnoc.com") from the kit
export const V7_SUBTITLE = "An eCorp Venture";
export const V7_SCHEMA = "ecorp-smart-entity/2.0";

// Public Agent Card v2, served from one origin for the whole network.
export const V7_CARD_URL = `https://app.vnoc.com/api/v1/mcp/domains/card?domain=${V7_HOST}`;

export const skillMarkdown = () =>
  `# ${V7_BRAND}\n\n` +
  `${V7_SUBTITLE}\n\n` +
  "Machine-callable Smart Entity surfaces: `/.well-known/agent.json`, `/api/status`, `/api/mcp`, `/api/a2a`, `/api/x402`.\n";

export const markdown = (body: string) =>
  new Response(body, { headers: { "content-type": "text/markdown; charset=utf-8" } });
