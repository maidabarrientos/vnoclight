import Image from "next/image";
export default function BuildPage() {
  return (
    <>
      <title>Build</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Build
            </h1>
            <p>
            VNOC goes beyond frameworks; it's dedicated to nurturing your creative capabilities. Utilizing our automated task ordering system, requesting services such as logo designs, content creation, and various tasks is as effortless as a few clicks. Our AI-powered content generator skillfully crafts engaging blog posts, social media content, and more, customized to match your brand's tone and objectives.
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
                <h4 className="mb-1">Build Your Vision with VNOC: Where Creativity Meets Automation</h4>
                <p className="mb-2">
                Welcome to VNOC's Build page, your gateway to turning your digital dreams into reality faster and smarter than ever before. With cutting-edge AI features, automated processes, and a robust collaborative ecosystem, VNOC is your partner in creating impactful brands and ventures in record time.
                </p> 
                <h4 className="mb-1">Streamlined Brand Creation: AI-Powered Auto Frameworks and Categorization</h4>
                <p className="mb-2">
                Imagine uploading your domain, and within moments, VNOC's AI engine categorizes it perfectly. Our AI understands industry trends, target audiences, and content types, assigning your domain to the most suitable framework. This streamlined categorization saves you time and helps you focus on the creative aspects that matter most.
                </p>
                <h4 className="mb-1">Unleash Your Creativity: Auto Task Orders and Content Generation</h4>
                <p className="mb-2">
                VNOC isn't just about frameworks; it's about fostering your creative potential. With our automated task ordering system, requesting logo designs, content creation, and other tasks is as simple as a few clicks. Our AI-driven content generator crafts compelling blog posts, social media content, and more, tailored to your brand's voice and objectives.
                </p>
                <h4 className="mb-1">Tap into the Power of Collaboration: VNOC's Contrib Network</h4>
                <p className="mb-2">
                Collaboration fuels innovation. VNOC's Contrib Network brings together professionals, experts, and enthusiasts ready to contribute to your venture's success. Our platform automatically sends out tasks to the Contrib Network and VNOC community through our weekly newsletter, ensuring your projects receive the attention they deserve.
                </p>
                <h4 className="mb-1">Supercharge Your SEO: Insights from SpyFu</h4>
                <p className="mb-2">
                VNOC integrates with SpyFu, a leading SEO tool, to supercharge your ventures' search engine performance. Our AI analyzes SpyFu data, providing you with actionable insights to optimize your content, meta-data, and keywords. Achieve better visibility and higher rankings on search engines, driving organic traffic to your brands.
                </p>
                <h4 className="mb-1">Automated Partner Matching: Your Ideal Collaborators, Instantly</h4>
                <p className="mb-2">
                Looking for the perfect partner to elevate your venture? VNOC's AI considers project requirements, objectives, and expertise to automatically match you with potential collaborators from the Contrib Network. Say goodbye to time-consuming searches and hello to efficient and productive partnerships.
                </p>
                <h4 className="mb-1">Efficiency at Every Step: Your Time-Saving Solution</h4>
                <p className="mb-2">
                VNOC compresses time, infusing every step of your venture creation with AI-driven efficiency. Auto frameworks, seamless partner matches, content generation, and automated task orders streamline your journey from idea to fully realized brand.
                </p>
                <h4 className="mb-1">Get Started with VNOC Build: Redefine Possibilities</h4>
                <p className="mb-2">
                Empower your creative aspirations, leverage AI automation, and unlock the potential of collaboration with VNOC Build. Join us in redefining the pace at which innovative ideas come to life. Let's turn your vision into a reality that exceeds expectations.
                <br/>Your brand-building journey starts here, with VNOC Build. Get ready to create, collaborate, and conquer the digital landscape like never before.
                </p>                          
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
