export const SectionH5 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Dream Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            our talented team of professionals
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          At Chromatic Developers, our tight-knit team is driven by passion, expertise, and a shared commitment to excellence. With a blend of technical prowess and creative flair, we work collaboratively to turn ideas into innovative solutions. Together, we're dedicated to delivering exceptional results and exceeding client expectations every step of the way.
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex ">
          <a
                      href="https://www.linkedin.com/in/mohammed-shafi-50774b19b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
            <img
              className="object-cover transform duration-500 hover:scale-110  w-20 h-20 mr-4 rounded-full shadow"
              src="shafi.jpeg"
              alt="Person"
            />
             </a>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">MOHAMMED SHAFI</p>
              <p className="text-sm text-gray-800">Marketing Team Head</p>
              
            </div>
          </div>
          <div className="flex">
          <a
                      href="https://www.linkedin.com/in/akash-ak-509022234/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
            <img
              className="object-cover transform duration-500 hover:scale-110  w-20 h-20 mr-4 rounded-full shadow"
              src="akash.jpeg"
              alt="Person"
            />
            </a>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">AKASH AK</p>
              <p className="text-sm text-gray-800">Design Team Head</p>
            </div>
          </div>
          <div className="flex">
          <a
                      href="https://www.linkedin.com/in/sudheesh448/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
            <img
              className="object-cover transform duration-500 hover:scale-110  w-20 h-20 mr-4 rounded-full shadow"
              src="sudeesh.jpeg"
              alt="Person"
            />
            </a>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">SUDEESH U</p>
              <p className="text-sm text-gray-800">Engineer Team Head</p>
            </div>
          </div>
    
       
   
    

  
        </div>
      </div>
    );
  };