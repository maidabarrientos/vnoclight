import { Metadata } from "next";
import { PageHero, Section, Rows, Prose, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Blockchain assets",
  description:
    "Tokenization is an optional VNOC tool: split ownership of a domain into tokens through RealtyDAO and sell or share them with contributors.",
};

const partners = [
  {
    title: "RealtyDAO.com",
    domain: "realtydao.com",
    brand: "RealtyDAO.com",
    text: "RealtyDAO tokenizes real estate so a property can be owned in parts. Connected to VNOC, it does the same for a domain: you can tokenize a name and sell or transfer ownership in shares.",
    href: "https://www.realtydao.com",
  },
  {
    title: "Contrib.com",
    domain: "contrib.com",
    brand: "Contrib.com",
    text: "The contribution network, where people help build and grow ventures. Tokens give you a way to share ownership with the contributors who put in the work.",
    href: "/contribution",
  },
];

const benefits = [
  {
    title: "Own a domain in parts",
    text: "Ownership is split into smaller units as tokens, so a name doesn't have to change hands all at once.",
  },
  {
    title: "More people can buy in",
    text: "Someone who can't buy a premium name outright can still own a share of it.",
  },
  {
    title: "Shares that can be traded",
    text: "Tokens can be bought, sold and traded on blockchain marketplaces, which gives a name a second way to find buyers.",
  },
  {
    title: "A public record of ownership",
    text: "The blockchain keeps a transparent record of who owns what, and it can't be changed after the fact.",
  },
];

export default function BlockchainPage() {
  return (
    <main>
      <PageHero
        title="Tokenize a Domain When It Makes Sense"
        intro="Tokenization is one of the optional tools in VNOC. Through RealtyDAO, you can split ownership of a domain into tokens and sell or share them, the way RealtyDAO does for real estate."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="/apply">Apply for access</PrimaryButton>
          <TextLink href="/#blockchain">See the blockchain stack</TextLink>
        </div>
      </PageHero>

      <Section
        title="How it works"
        intro="Two network sites handle it: one tokenizes the name, the other is where the people who share in it come from."
      >
        <Rows items={partners} />
      </Section>

      <Section tone="paper" title="What tokenizing a name gives you">
        <Rows items={benefits} tone="paper" />
      </Section>

      <Section title="One option among several">
        <Prose>
          <p>
            You don&apos;t have to tokenize anything to use VNOC. Selling a name outright, building a brand on it and
            earning from its traffic all work the same way. Tokenization is there for the names where owning a share
            makes more sense than owning the whole.
          </p>
          <p>
            <TextLink href="/why">See everything VNOC does for a portfolio</TextLink>
          </p>
        </Prose>
      </Section>

      <ApplyBand />
    </main>
  );
}
