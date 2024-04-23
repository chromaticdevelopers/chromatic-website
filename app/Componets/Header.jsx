"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";

export function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    console.log(showContactModal)

    const contactNumbers = [
        { location: "Delhi", number: "+91 8086611001" },
        { location: "Kerala", number: "+91 7025784463" },


        { location: "Bangalore", number: "+91 9605112527" },
    ];

    const handleContactClick = () => {
        setShowContactModal(true);

    };

    const handlePhoneNumberClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const handlecontactsupdate = () => {
        setToggle(false);
        setShowContactModal(true);

    };
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
                localStorage.setItem("scrollPosition", "sticky");
            } else {
                setIsSticky(false);
                localStorage.setItem("scrollPosition", "");
            }
        };

        const scrollPosition = localStorage.getItem("scrollPosition");
        if (scrollPosition === "sticky") {
            setIsSticky(true);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>{showContactModal && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg ">
                    <h2 className="text-xl flex justify-center font-bold mb-4">Contact us</h2>
                    <ul>
                        {contactNumbers.map((contact, index) => (
                            <li key={index} className="mb-2">
                                <button
                                    className=" flex items-center gap-2 text-lg font-bold"
                                    onClick={() => handlePhoneNumberClick(contact.number)}
                                >
                                    <div className="text-green-700">
                                        <BsTelephoneOutbound />


                                    </div>

                                    <span className="text-[#265F5F]">{contact.location}:</span> {contact.number}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute md:top-[260px] top-[250px] right-[70px] md:right-[600px]">
                        <IoMdClose onClick={() => setShowContactModal(false)} />

                    </div>



                </div>
            </div>
        )}
            {!toggle && (
                <div
                    className={`fixed top-0  left-0 right-0 z-40  md:h-[120px] h-[80px] ${isSticky ? "bg-[#FBFBFB] shadow-md" : ""
                        }`}
                >
                    <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5">
                        <div className="w-full md:max-w-[1228px]  max-md:max-w-full">
                            <div className={`flex justify-between items-center w-full h-full py-4`}
                            >
                                <div className="w-full h-full ">
                                    <img
                                        src={`${isSticky ? "/chrom.jpeg" : "/chrom.jpeg"}`}
                                        alt=""
                                        className="md:w-[100px] object-contain bg-red-400 md:h-[100px] h-[45px] w-[45px] "
                                    />
                                </div>

                                <div className="w-full h-full hidden md:flex justify-end items-center ">
                                    <ul
                                        className={`flex gap-14 justify-center items-center h-full ${isSticky ? "text-[#265F5F]" : "text-black"}`}
                                    >
                                        <li className="font-quicksand text-[18px] font-semibold  leading-[22.5px] relative group h-7 ">
                                            <Link to="home" smooth={true} duration={500}>
                                                {" "}
                                                Home
                                            </Link>

                                            <div className="absolute   inset-x-0 bottom-0 z-50 h-1 rounded-2xl bg-[#265F5F] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                                        </li>
                                        <li className="font-quicksand text-[18px] font-semibold  leading-[22.5px] relative group h-7 ">
                                            <Link to="about-us" smooth={true} duration={500}>
                                                {" "}
                                                About us
                                            </Link>

                                            <div className="absolute   inset-x-0 bottom-0 z-50 h-1 rounded-2xl bg-[#265F5F] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                                        </li>
                                        <li className="font-quicksand text-[18px] font-semibold  leading-[22.5px] relative group h-7 ">
                                            <Link to="service" smooth={true} duration={500}>
                                                Service{" "}
                                            </Link>
                                            <div className="absolute   inset-x-0 bottom-0 z-50 h-1 rounded-2xl bg-[#265F5F] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                                        </li>

                                        <li>
                                            <button
                                                className={`${isSticky
                                                    ? "bg-[#265F5F] text-white"
                                                    : "bg-white text-[#265F5F]"
                                                    } py-[10px] px-[19px] rounded-[39px] group overflow-hidden relative`}
                                                onClick={handleContactClick}
                                            >
                                                <span
                                                    className={`absolute bottom-0 left-0 rounded-t-2xl flex w-full h-0 mb-0 transition-all duration-500 delay-150 ease-out transform translate-y-0  ${isSticky ? "bg-white" : "bg-[#265F5F]"
                                                        } group-hover:h-full opacity-90`}
                                                ></span>
                                                <span
                                                    className={`absolute top-0 left-0 rounded-t-2xl flex w-full h-0 mb-0 transition-all duration-500 delay-150 ease-out transform translate-y-0  ${isSticky ? "bg-white" : "bg-[#265F5F]"
                                                        } group-hover:h-full opacity-90`}
                                                ></span>
                                                <span
                                                    className={`relative ${isSticky
                                                        ? "group-hover:text-[#265F5F]"
                                                        : "group-hover:text-white"
                                                        }  font-quicksand text-[18px] font-semibold  leading-[22.5px]`}
                                                >
                                                    <Link to="contact-us" smooth={true} duration={500} onClick={handleContactClick}>
                                                        Contact us
                                                    </Link>
                                                </span>
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                                <div className="md:hidden block w-[70px] h-[70px] ">
                                    <button
                                        className="w-14 h-14 relative focus:outline-none  rounded"
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <span
                                                className={`block absolute h-0.5 w-7   ${isSticky ? 'text-black' : 'text-[#265F5F]'} bg-current transform transition duration-500 ease-in-out ${toggle ? "rotate-45" : " -translate-y-1.5"
                                                    }`}
                                            ></span>
                                            <span
                                                className={`block absolute h-0.5 w-7 ${isSticky ? 'text-black' : 'text-[#265F5F]'} bg-current transform transition duration-500 ease-in-out ${toggle ? "opacity-0" : ""
                                                    }`}
                                            ></span>
                                            <span
                                                className={`block absolute h-0.5 w-7 ${isSticky ? 'text-black' : 'text-[#265F5F]'} bg-current transform transition duration-500 ease-in-out ${toggle ? "-rotate-45" : "translate-y-1.5"
                                                    }`}
                                            ></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={
                    toggle
                        ? "fixed md:hidden top-0 right-0 w-full  h-screen bg-[#2E7273]  z-10 duration-300"
                        : "fixed md:hidden top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <div className="w-full h-full bg-nav-grade bg-cover p-5">
                    <div className="w-full  flex justify-end">
                        <button
                            className="w-14 h-14 relative focus:outline-none  rounded"
                            onClick={() => setToggle(!toggle)}
                        >
                            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span
                                    className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${toggle ? "rotate-45" : " -translate-y-1.5"
                                        }`}
                                ></span>
                                <span
                                    className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${toggle ? "opacity-0" : ""
                                        }`}
                                ></span>
                                <span
                                    className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${toggle ? "-rotate-45" : "translate-y-1.5"
                                        }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                    <ul className="flex  flex-col gap-2 justify-start ">
                        <li>
                            <div className="font-quicksand text-[30px]  text-white  font-bold leading-[45px]">
                                <Link to="home" smooth={true} duration={500}>
                                    {" "}
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="font-quicksand text-[30px]  text-white  font-bold leading-[45px]">
                                <Link to="about-us" smooth={true} duration={500}>
                                    {" "}
                                    About us
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="font-quicksand text-[30px]  text-white  font-bold leading-[45px]">
                                <Link to="product-list" smooth={true} duration={500}>
                                    {" "}
                                    Products{" "}
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="font-quicksand text-[30px]  text-white  font-bold leading-[45px]" >
                                <Link to="contact-us" smooth={true} duration={500} onClick={handlecontactsupdate}>
                                    Contact us
                                </Link>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

