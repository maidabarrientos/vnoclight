import { Layer } from "./Stack";

// Descriptions follow each site's own copy.

// In the order value moves through them: a venture is registered, people
// contribute, ownership is tokenized, it gets paid, and the money is held.
export const blockchainStack: Layer[] = [
  {
    role: "Registry",
    domain: "agentdao.com",
    brand: "AgentDAO.com",
    text: "Registers, verifies, connects and pays the AI agents behind ventures in the network.",
  },
  {
    role: "Contribution",
    domain: "contrib.com",
    brand: "Contrib.com",
    text: "Developers, designers and marketers help build ventures and earn tokens for their work.",
  },
  {
    role: "Ownership",
    domain: "realtydao.com",
    brand: "RealtyDAO.com",
    text: "Tokenizes digital assets such as domains, NFTs and gTLDs so ownership can be shared.",
  },
  {
    role: "Payments",
    domain: "paydirect.com",
    brand: "PayDirect.com",
    text: "Accepts USDC, ETH or cards from a single payment link, with instant settlement.",
  },
  {
    role: "Treasury",
    domain: "agentbank.com",
    brand: "AgentBank.com",
    text: "A programmable treasury for each venture: budgets, settlement between agents, cap tables and governance.",
  },
];

// How a person joins: make a profile, then find a venture to work on.
export const communityStack: Layer[] = [
  {
    role: "Profiles",
    domain: "profilesuite.com",
    brand: "ProfileSuite.com",
    text: "Build one profile and claim your own address in the community where you belong: artists, models, athletes, professionals and creators.",
  },
  {
    role: "Contributors",
    domain: "contrib.com",
    brand: "Contrib.com",
    text: "Entrepreneurs, developers, designers and marketers find ventures to help build and earn for the work they put in.",
  },
];

// How each person's share of a venture is recorded and managed.
export const venturePieStack: Layer[] = [
  {
    role: "Equity",
    domain: "eshares.com",
    brand: "eShares.com",
    text: "Turns traditional equity into programmable, liquid tokens on Base and BNB Chain, so everyone's slice of a venture is tracked.",
  },
];

// How ventures get found: social posts, SEO and campaigns, leads, images and links.
export const marketingStack: Layer[] = [
  {
    role: "Social",
    domain: "socialagent.com",
    brand: "SocialAgent.com",
    text: "An AI assistant that writes and schedules social posts for a brand, starting with X (Twitter).",
  },
  {
    role: "SEO and marketing",
    domain: "marketbot.com",
    brand: "MarketBot.com",
    text: "AI SEO and marketing agents that audit a domain with real data, plan keywords and launch campaigns.",
  },
  {
    role: "Leads and email",
    domain: "growagent.com",
    brand: "GrowAgent.com",
    text: "Captures leads, sends email campaigns and onboards contributors.",
  },
  {
    role: "Images",
    domain: "mediabot.com",
    brand: "MediaBot.com",
    text: "Creates and serves niche photos and hero images for any URL.",
  },
  {
    role: "Links",
    domain: "linkagent.com",
    brand: "LinkAgent.com",
    text: "Sponsored link placements on high-traffic sites, tracked with real stats.",
  },
];
