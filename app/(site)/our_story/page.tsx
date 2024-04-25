import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';


export default function OurstoryPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-500 to-indigo-700 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl grid gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 space-y-6">
            <div className="text-center lg:text-left lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-300">Our Story: The Company Behind VNOC</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Shaping the Future of Digital Ventures</h1>
              <p className="mt-6 text-xl leading-8 text-indigo-200">
              eCorp, the powerhouse behind VNOC, has been at the forefront of digital innovation since its inception in [Insert Year]. With a steadfast commitment to transforming the digital landscape, eCorp and VNOC share a vision of empowering businesses and individuals to fully leverage their digital potential.
              </p>
            </div>
              <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <CloudArrowUpIcon className="h-6 w-6 text-red-300" />
                <span className="text-red-300">Fast & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <LockClosedIcon className="h-6 w-6 text-red-300" />
                <span className="text-red-300">Private & Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <ServerIcon className="h-6 w-6 text-red-300" />
                <span className="text-red-300">High Performance</span>
              </div>
            

            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[58rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[86rem]"
            src="/images/about/screenshot-about.png"
            alt="About VNOC"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">

            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Mission</h2>
             
              <p>
              Our mission is unwavering: to equip our users with the tools, resources, and community support needed to flourish in the digital era. We are dedicated to democratizing access to state-of-the-art technologies and insights, ensuring that every participant, from startups to established enterprises, can thrive in the evolving digital revolution.
              </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            A Seamless Integration of Technology
            
            </h2>
            <p>
            What distinctly sets us apart is our seamless integration of technology and community. At eCorp and VNOC:
            </p>
            <ul>
              <li className='list-disc mt-2 mb-1 ml-4'>
              <b>Blockchain Innovation:</b> We leverage cutting-edge blockchain technology to ensure secure and transparent digital transactions.
              </li>
              <li className='list-disc mt-2 mb-1 ml-4'>
                <b>Advanced Data Management: </b>Our sophisticated data management tools provide the backbone for robust digital ventures, enhancing operational efficiency and strategic insights.
              </li>
              <li className='list-disc mt-2 mb-1 ml-4'>
                <b>Contrib Network:</b> A thriving ecosystem that fosters collaboration and growth, the Contrib network is integral to our platform, uniting a global community of innovators.
              </li>
            </ul>
   
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Our Vision
            </h2>
            <p>
            Our vision is to foster a global community of digital pioneers who are not just users but active contributors 
            to the digital ecosystem. We envision a future where creativity, innovation, and entrepreneurship are within reach of all, irrespective of their background or expertise.

            </p>

            <h2 className="mt-15 text-2xl font-bold tracking-tight text-gray-900">
            <a href="https://apply.vnoc.com/" className='text-red-300 underline'>Join the VNOC.com Community Today</a>
            </h2>
            <p className='mb-2'>
            Whether you're a digital creative, domain expert, entrepreneur, developer, or TLD owner, 
            VNOC.com is your platform for success. We invite you to join our community of forward-thinkers who are shaping tomorrow's digital world.

            </p>
            

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Contact Us
            </h2>
            <p>
            <a href="/contact">Got questions or want to learn more? </a>
            Feel free to reach out to us at any time. We're here to support your digital journey every step of the way.

            </p>

              <p className="mt-8">
              Strategy: Decentralize with a Purpose - Create, Share, Learn, Grow, Replicate. Swarming. Distribution. Network Intelligence. DATA. Business Model Alignment - .org.
              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
