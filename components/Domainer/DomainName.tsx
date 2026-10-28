import { domainToBrand } from "@/lib/domain-to-brand";

// Shows a domain capitalized (HR2 CamelCase) with its extension dimmed, so the
// name itself reads first. `brand` overrides the spelling when a site has its own.
const DomainName = ({
  domain,
  brand,
  tldClassName = "opacity-50",
}: {
  domain: string;
  brand?: string;
  tldClassName?: string;
}) => {
  const name = brand || domainToBrand(domain);
  const dot = name.lastIndexOf(".");
  if (dot === -1) return <>{name}</>;
  return (
    <>
      {name.slice(0, dot)}
      <span className={tldClassName}>{name.slice(dot)}</span>
    </>
  );
};

export default DomainName;
