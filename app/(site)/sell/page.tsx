import Image from "next/image";
export default function SellPage() {
  return (
    <>
      <title>Sell</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Sell
            </h1>
            <p>
            VNOC is pleased to announce its partnership with DomainDirectory.com, a leading online directory serving a wide-ranging audience in search of specific domain categories. This strategic alliance guarantees that your domain gets precise exposure to the ideal audience, thereby enhancing the likelihood of a successful sale. Bid farewell to ordinary listings and welcome a carefully curated marketplace that connects your domain with potential buyers who genuinely recognize its worth.
            </p>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative 2xl:-mr-7.5">                
              <div className=" relative aspect-[700/444] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/vnoc-dboard1.png"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/images/hero/vnoc-dboard1.png"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div> 
        </div> 
      </section>
      <section className="pb-16 md:pb-20 lg:pb-24 pt-10 md:pt-10 lg:pt-10">
        <div className="max-w-c-1390 relative mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-4/4 mx-auto">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h4 className="mb-1">Unlocking Value: Sell with VNOC and Harness Vertical Network Effects</h4>
                <p className="mb-2">
                Welcome to VNOC's Sell page, where the power of domaindirectory.com and vertical network effects converge to elevate your domain's potential and generate substantial returns. With VNOC's innovative approach to selling, you're not just parting with a domain – you're tapping into a dynamic ecosystem that maximizes value creation.
                </p>
                <h4 className="mb-1">Introducing DomainDirectory.com: Your Gateway to Targeted Exposure</h4>
                <p className="mb-2">
                VNOC proudly partners with DomainDirectory.com, a premier online directory that caters to a diverse audience seeking specific domain categories. This strategic partnership ensures that your domain receives targeted exposure to the right audience, increasing the chances of a successful sale. Say goodbye to generic listings and hello to a curated marketplace that matches your domain with potential buyers who truly understand its value.
                </p>
                <h4 className="mb-1">Vertical Network Effects: Elevating Domain Value Through Synergy</h4>
                <p className="mb-2">
                Vertical network effects are at the core of VNOC's approach to domain selling. Our platform isn't just about listing domains; it's about integrating related category domains into every domain framework. This integration creates a synergistic effect, where the value of one domain positively impacts the value of others in the same category. Buyers are drawn to comprehensive domain portfolios that offer holistic solutions, making your domain more attractive and valuable.
                </p>
                <h4 className="mb-1">The VNOC Advantage: Selling Redefined</h4>
                <p className="mb-2">
                  <div>
                    <b>1. Tailored Listings:</b> VNOC understands that each domain has a unique story to tell. Our platform allows you to create tailored listings that highlight your domain's features, potential use cases, and the value it brings to buyers.
                  </div>
                  <div>
                    <b>2. Data-Driven Insights:</b> Make informed decisions with VNOC's data-driven insights. Gain access to analytics, market trends, and valuation estimates to price your domain competitively and attract serious buyers.
                  </div>
                  <div>
                    <b>3. Seamless Transactions:</b> VNOC streamlines the selling process with a secure and user-friendly transaction system. Communicate with potential buyers, negotiate terms, and finalize sales with confidence.
                  </div>
                  <div>
                    <b>4. Maximized Exposure:</b> Your domain is showcased on DomainDirectory.com, a platform trusted by domain enthusiasts and professionals alike. Benefit from increased visibility and connect with potential buyers who understand the value of premium domains.
                  </div>
                  <div>
                    <b>5. Category Synergy:</b> Through vertical network effects, your domain gains value from its association with related category domains. This comprehensive approach attracts buyers looking for holistic solutions.
                  </div>
                </p>
                <h4 className="mb-1">Join the VNOC Selling Revolution: Your Domain, Elevated</h4>
                <p className="mb-2">
                Selling your domain isn't just about transferring ownership it's about unlocking its full potential. VNOC's partnership with DomainDirectory.com and the integration of vertical network effects create an environment where your domain thrives in value and significance.
                Ready to redefine how you sell domains? Join VNOC and be part of a selling revolution that maximizes value, exposure, and impact. Your domain deserves more than a standard listing; it deserves a place within an ecosystem that understands and amplifies its worth. Welcome to VNOC Sell, where your domain's potential knows no bounds.
                </p>                                     
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
