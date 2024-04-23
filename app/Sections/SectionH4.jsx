import {img} from '../../public/our stack.png'
export const SectionH4 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
            our <span className='text-[#265F5F]'>tech stack</span> 
          
            </h5>
            <p className="mb-6 text-gray-900">
            We focus on emerging technologies for building high performing web & mobile products that can be securely deployed in the cloud.
            </p>
            <hr className="mb-5 border-gray-300" />
           
          </div>
          <div>
            <img
              className="object-contain w-full h-56 rounded  sm:h-96"
              src="our stack.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };