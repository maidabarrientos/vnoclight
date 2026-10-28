/* eslint-disable @next/next/no-img-element */
// Network logos always come from BrandIdentity. They are drawn for light
// backgrounds, so they sit on a white tile wherever the page is dark.
const BrandLogo = ({ domain, className = "" }: { domain: string; className?: string }) => (
  <span
    className={`inline-flex items-center justify-center shrink-0 bg-white rounded-md ring-1 ring-rule dark:ring-0 px-2 ${className}`}
  >
    <img
      src={`https://www.brandidentity.com/logo/${domain}`}
      alt=""
      loading="lazy"
      className="max-h-full max-w-full object-contain"
    />
  </span>
);

export default BrandLogo;
