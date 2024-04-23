import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdOutlineGroups3 } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { ImMobile } from "react-icons/im";

export const SectionH2 = () => {
    return (
      <div id="service" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <div className="text-[#265F5F] text-2xl">
                <GiEarthAfricaEurope/>


                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">WEB APPLICATIONS
</h6>
              <p className="mb-3 text-sm text-gray-900">
              Your business needs are our priority, so we use certain strategies in our development life cycle, which would prove to be the best for your business.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <div className="text-[#265F5F] text-2xl">
                <MdOutlineGroups3/>


                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">STRATEGIC OUTSOURCING
</h6>
              <p className="mb-3 text-sm text-gray-900">
              Techversant is an IT Sourcing Company and we are flexible when it comes to your outsourcing needs.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <div className="text-[#265F5F] text-2xl">
                <GrCloudSoftware/>


                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">SOFTWARE TESTING
</h6>
              <p className="mb-3 text-sm text-gray-900">
              We have a blend of Highly Well-versed Software Engineers & experienced Testing team ready for Support, Integrate & Product Testin
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <div className="text-[#265F5F] text-2xl">
                <BsCart4/>


                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">E-COMMERCE
</h6>
              <p className="mb-3 text-sm text-gray-900">
              We are an e-commerce website development company that uses the smartest way to get noticed as per the brand promotion point of view.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
             < div className="text-[#265F5F] text-2xl">
             <RiPencilRuler2Fill />


                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">UI/UX DESIGN
</h6>
              <p className="mb-3 text-sm text-gray-900">
              Techversant is the most renowned UX/UI Designing Company as we have achieved an unmatched skill level that many companies simply dream of.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              < div className="text-[#265F5F] text-2xl">
              <ImMobile />



                </div>
              </div>
              <h6 className="mb-2 font-semibold leading-5">MOBILE APPLICATIONS
</h6>
              <p className="mb-3 text-sm text-gray-900">
              Having the best in industry developers in Android, iOS and Windows Operating System, we provide expert solutions for Mobile Application Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };