import Image from "next/image";
export default function WhyPage() {
  return (
    <>
      <title>Why VNOC</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Why VNOC
            </h1>
            <p>
            VNOC leverages blockchain technology to provide unmatched levels of security, transparency, and efficiency when it comes to managing your digital assets. With our comprehensive suite of blockchain tools, you can seamlessly transfer assets to the blockchain and even distribute fractional ownership to contributors via our Blockchain Asset Marketplace.
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
                <p className="text-base text-body-color dark:text-body-color-dark">
                In a rapidly evolving digital landscape, the need for a platform that empowers individuals and businesses to maximize their online assets has never been greater. Welcome to VNOC – Your Next-Gen Digital Asset Platform. Our cutting-edge technology and innovative approach are revolutionizing the way you manage, build, and monetize your digital assets. Here's why VNOC should be your top choice:
                </p>
                <h4 className="mb-1">Unleash the power of Blochain</h4>
                <p className="mb-2">
                VNOC harnesses the power of blockchain technology to offer unparalleled security, transparency, and efficiency in managing your digital assets. Our integrated blockchain tools allow you to push assets onto the blockchain and even allocate fractional ownership to contributors through our Blockchain Asset Marketplace.
                </p>
                <h4 className="mb-1">Centralize and Control</h4>
                <p className="mb-2">
                Say goodbye to scattered tools and fragmented processes. VNOC's Control Panel provides a centralized hub for managing your ventures, assets, and data. With real-time data insights and flexible data management options, you're empowered to make informed decisions and optimize your strategies.
                </p>
                <h4 className="mb-1">Comprehensive Network Apps</h4>
                <p className="mb-2">
                VNOC offers a wide range of internal apps that seamlessly integrate into your ventures. With over 22 integrated apps, you can customize your experience to suit your specific needs. From communication tools to task automation, VNOC empowers you to streamline your workflows and enhance collaboration.
                </p>
                <h4 className="mb-1">Built-In Brand Builder</h4>
                <p className="mb-2">
                Turning a dormant domain into a thriving business has never been easier. VNOC's Brand Builder empowers you to transform underutilized domains into high-growth ventures. With custom and default frameworks, you'll have the tools to create and manage brands that resonate in the digital world.
                </p>
                <h4 className="mb-1">Contrib Network</h4>
                <p className="mb-2">
                Become a part of VNOC's thriving community through the Contrib Network. Whether you're a talented individual looking to contribute your skills or an entrepreneur seeking the right professionals, Contrib Network connects you with the right people to enhance your ventures.
                </p>
                <h4 className="mb-1">Monetize your Ddigital Assets</h4>
                <p className="mb-2">
                VNOC puts the power of monetization in your hands. From flexible domain monetization options to referral programs and network ad optimization, you have the tools to generate revenue from your brands while keeping control over your strategies.
                </p>
                <h4 className="mb-1">Proven Vertical Management</h4>
                <p className="mb-2">
                Our proven frameworks take the guesswork out of managing verticals. VNOC's strategies and tools are designed to convert visitors into engaged contributors, giving your brands a competitive edge.
                </p>
                <h4 className="mb-1">Unmatched Social Tools</h4>
                <p className="mb-2">
                Harness the potential of social media with VNOC's Social Suite application. Effortlessly create, manage, and distribute content across your social handles, amplifying your online presence with ease.
                </p>
                <h4 className="mb-1">Expertise Meets Innovation</h4>
                <p className="mb-2">
                Backed by a team of industry experts, VNOC combines decades of experience with cutting-edge technology. This synergy creates a platform that not only addresses your current needs but anticipates future trends, keeping you ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
