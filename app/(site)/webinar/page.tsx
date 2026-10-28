import { Metadata } from "next";
import { PageHero, Section, ApplyBand, PrimaryButton, TextLink } from "@/components/Site";

export const metadata: Metadata = {
  title: "Webinars - VNOC",
  description: "Live webinars from Contrib and VNOC. Register for a session or browse the sessions.",
};

const SESSIONS_URL =
  "https://app.livestorm.co/p/0fa43c49-393f-4719-8498-e073959e21f7/live?s=dcca3ca3-9e94-4ded-9510-e0299ad28f6b";
const FORM_URL = "https://app.livestorm.co/p/0fa43c49-393f-4719-8498-e073959e21f7/form";

export default function WebinarPage() {
  return (
    <main>
      <PageHero
        title="Join Our Live Webinars"
        intro="Contrib and VNOC run live webinar sessions. Register with the form below, or browse the sessions first."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <PrimaryButton href="#register">Register for a session</PrimaryButton>
          <TextLink href={SESSIONS_URL}>Browse webinar sessions</TextLink>
        </div>
      </PageHero>

      <Section id="register" title="Register for a session">
        <div className="max-w-3xl">
          <iframe
            title="Webinar registration"
            src={FORM_URL}
            width="100%"
            height="780"
            frameBorder="0"
            className="block w-full"
          ></iframe>
        </div>
      </Section>

      <ApplyBand />
    </main>
  );
}
