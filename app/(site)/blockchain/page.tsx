import Image from "next/image";
export default function BlockchainPage() {
  return (
    <>
      <title>Blockchain Assets</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Blockchain Assets
            </h1>
            <p>
            RealtyDAO is leading the way in real estate tokenization, providing a smooth and secure means to fragment property ownership via blockchain technology. Through the integration of RealtyDAO with VNOC, we've broadened the horizons beyond conventional domain sales, enabling you to tokenize and transfer domain ownership in a manner that mirrors the real estate market.
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
                <h4 className="mb-1">Revolutionize Domain Tokenization with RealtyDAO Integration</h4>
                <p className="mb-2">
                Welcome to the next level of domain tokenization with VNOC's groundbreaking integration of RealtyDAO. Elevate your domain selling strategy by leveraging the power of blockchain and tokenization, making domain token sales smoother, more efficient, and more accessible than ever before.
                </p>  
                <h4 className="mb-1">Introducing RealtyDAO: The Future of Real Estate Tokenization</h4>
                <p>
                  RealtyDAO is at the forefront of real estate tokenization, offering a seamless and secure way to fractionalize property ownership through blockchain technology. By integrating RealtyDAO with VNOC, we've expanded the possibilities beyond traditional domain sales, allowing you to tokenize and sell domain ownership in a manner that parallels the real estate market.
                </p>
                <h4>Effortless Domain Tokenization: Elevate Your Selling Strategy</h4>
                <p className="mb-2">
                  <h5>1. Simplified Fractional Ownership:</h5> RealtyDAO enables fractional ownership of domains through tokens. This revolutionary concept breaks down domain ownership into smaller, tradable units, unlocking liquidity and democratizing investments.  
                </p>
                <p>
                  <h5>2. Enhanced Accessibility:</h5> Tokenized domain ownership opens the doors for a wider range of investors. Anyone, regardless of their financial capacity, can participate and own a portion of a premium domain, making the market more inclusive.
                </p>
                <p>
                  <h5>3. Increased Liquidity:</h5> Tokenized domains can be bought, sold, and traded on various blockchain-based marketplaces. This increased liquidity enhances the value of your domain by providing an active secondary market for buyers and sellers.
                </p>
                <p>
                  <h5>4. Transparency and Security:</h5> Blockchain ensures transparency and immutability, reducing fraud and enhancing trust in domain transactions. RealtyDAO's integration ensures that domain tokenization is secure, verifiable, and tamper-proof.
                </p>
                <p>
                  <h5>5. Aligning with Realty Trends:</h5> The real estate industry has already recognized the value of tokenization. By aligning domain sales with this trend through RealtyDAO integration, your domain gains credibility and relevance.
                </p> 
                <h4>VNOC + RealtyDAO: A Synergistic Partnership</h4>
                <p>
                  The integration of RealtyDAO within VNOC redefines how domains are sold, giving domain sellers a powerful tool to attract a broader audience and enhance the value of their offerings. Just like real estate properties, your premium domains can now be tokenized, sold as fractional ownership units, and traded with ease.
                </p>
                <h4>Step into the Future of Domain Selling with RealtyDAO</h4>
                <p>
                  Are you ready to embrace the future of domain tokenization? Join VNOC and RealtyDAO's synergistic partnership to revolutionize how premium domains are sold and owned. With blockchain-powered tokenization, your domain sales strategy becomes more dynamic, accessible, and impactful than ever before. Experience the fusion of real estate innovation and domain sales expertise – welcome to the future of domain tokenization with VNOC and RealtyDAO.
                </p>                                                              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}