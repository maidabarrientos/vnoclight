import Image from "next/image";
export default function PartnerPage() {
  return (
    <>
      <title>Partner</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Partner
            </h1>
            <p>
            VNOC partnerships extend beyond a simple association. We've seamlessly integrated our partner feature into all domain frameworks, guaranteeing that your collaborative efforts are deeply ingrained in the core of your digital assets.
            VNOC's partner feature empowers you to access a broader audience base by leveraging each other's networks, effectively reaching audiences that may have otherwise remained untapped.
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
               <h4 className="mb-1">Collaborate and Thrive with VNOC's Partner Ecosystem</h4>
                <p className="mb-2">
                  Welcome to VNOC's Partner Page, where collaboration meets innovation. Discover how partnering with VNOC can take your digital ventures to new heights. Whether you're a domain investor, entrepreneur, or business owner, our partner ecosystem is designed to amplify your success and drive unprecedented growth.
                </p>  
                <h4 className="mb-1">Why Partner with VNOC?</h4>
                <br></br>
                <p className="mb-2">
                  <h5>1. Integrated Domain Frameworks:</h5> At VNOC, partnership goes beyond a mere association. We've seamlessly integrated our partner feature with all domain frameworks, ensuring that your collaborative efforts are deeply embedded in the heart of your digital assets.
                </p>
                <p className="mb-2">
                  <h5>2. Synergy in Network Domains:</h5> Unlock additional synergies by partnering with network-related domains. VNOC recognizes the power of interconnected domains, and our partner ecosystem lets you harness this potential for enhanced visibility and impact.
                </p>
                <p className="mb-2">
                  <h5>3. Amplify Your Reach:</h5> VNOC's partner feature enables you to tap into a wider audience base, leveraging each other's networks to reach audiences that might have remained untapped otherwise. 
                </p> 
                <p>
                  <h5>4. Strategic Growth:</h5> Collaborative ventures often lead to strategic growth opportunities. By joining forces with VNOC and its partners, you position yourself to explore new horizons and create innovative digital solutions.
                </p>
                <p>
                  <h5>5. Mutual Benefit:</h5> Our partner ecosystem is built on the foundation of mutual benefit. As you contribute to the success of our domain frameworks, you gain access to a network of like-minded individuals and businesses, fostering growth on both sides.
                </p> 
                <h4 className="mb-1">Experience VNOC's Partner Ecosystem</h4>   
                <p>
                  <h5>1. Seamless Integration:</h5> Partnering with VNOC is effortless. Our platform seamlessly integrates your collaborative efforts with domain frameworks, ensuring your partnership becomes an integral part of the venture's success story.
                </p> 
                <p>
                  <h5>2. Network Synergy:</h5> VNOC recognizes the potential of network-related domains. By partnering within this framework, you amplify your influence and contribute to the creation of a powerful network effect.
                </p>
                <p>
                  <h5>3. Amplified Visibility:</h5> VNOC's partner ecosystem provides a spotlight for your collaborative efforts. Leverage our platform to showcase your ventures to a broader audience, driving visibility and engagement.
                </p>
                <p>
                  <h5>4. Strategic Opportunities:</h5> VNOC's partner ecosystem opens the door to strategic growth and innovation. Collaborate with domain owners, entrepreneurs, and business leaders to explore new avenues and create novel solutions.
                </p>
                <h4 className="mb-1">Join VNOC's Partner Ecosystem and Transform Collaboration into Success</h4>
                <p>
                Step into a world where collaboration transforms into unparalleled success. Partner with VNOC and experience the power of integrated domain frameworks and network synergy. Together, we're rewriting the rules of digital ventures and setting the stage for exceptional growth. Join VNOC's partner ecosystem today and amplify your impact in the digital landscape.
                </p>                                   
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
