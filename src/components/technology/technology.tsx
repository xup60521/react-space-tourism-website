import { motion } from "framer-motion";
import VehicleLandscape from "/assets/technology/image-launch-vehicle-landscape.jpg";
import VehiclePortrait from "/assets/technology/image-launch-vehicle-portrait.jpg";
import CapsuleLandscape from "/assets/technology/image-space-capsule-landscape.jpg";
import CapsulePortrait from "/assets/technology/image-space-capsule-portrait.jpg";
import SpaceportLandscape from "/assets/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "/assets/technology/image-spaceport-portrait.jpg";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

const technologies = [
    {
        title: "Launch vehicle",
        description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
        it's quite an awe-inspiring sight on the launch pad!`,
        landscape: VehicleLandscape,
        portrait: VehiclePortrait,
    },
    {
        title: "Spaceport",
        description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. Based in the 
        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
        of the Earth’s rotation for launch.`,
        landscape: SpaceportLandscape,
        portrait: SpaceportPortrait,
    },
    {
        title: "Space capsule",
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`,
        landscape: CapsuleLandscape,
        portrait: CapsulePortrait,
    },
];

export default function Technology() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className={`absolute top-0 left-0 w-full h-fit min-h-screen bg-cover flex box-border  overflow-x-hidden 
            lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] 
            md:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
            bg-[url('/assets/technology/background-technology-mobile.jpg')] 
            lg:p-36 lg:pt-48 lg:pb-12 flex-col lg:justify-start items-center 
            px-0 md:py-52 py-36
            `}
        >
            <h3
                className={`flex items-center gap-4 lg:pt-4 pb-8 w-full lg:text-left px-4 flex-row lg:justify-start justify-center`}
            >
                <span className="text-2xl tracking-tighter text-neutral-600 font-bold">
                    03
                </span>
                <span className="text-3xl font-barlow text-white font-light tracking-widest">
                    SPACE LAUNCH 101
                </span>
            </h3>
            <Routes>
                {technologies.map((item, index) => {
                    const path = index === 0 ? "/" : item.title;
                    return (
                        <Route
                            path={path}
                            element={<TechnologySection {...item} />}
                        />
                    );
                })}
            </Routes>
        </motion.main>
    );
}

function TechnologySection(props: {
    title: string;
    description: string;
    landscape: string;
    portrait: string;
}) {
    const location = useLocation();
    return (
        <div className="flex lg:flex-row flex-col w-full items-center flex-grow">
            <div className="flex lg:flex-col gap-6 px-4 lg:py-0 pt-8 pb-16">
                {technologies.map((item, index) => {
                    const path = index === 0 ? "" : item.title;
                    return (
                        <NavLink
                            to={`/technology/${path}`}
                            key={`technology slot ${item.description}`}
                            className={(c) => {
                                if (path === "") {
                                    if (
                                        location.pathname === "/technology" ||
                                        location.pathname === "/technology/"
                                    ) {
                                        return "size-16 text-black bg-white font-barlow text-2xl border-white border-[1px] rounded-full flex items-center justify-center";
                                    }
                                    return "size-16 text-white font-barlow text-2xl border-neutral-600 border-[1px] rounded-full flex items-center justify-center";
                                }
                                if (c.isActive) {
                                    return "size-16 text-black bg-white font-barlow text-2xl border-white border-[1px] rounded-full flex items-center justify-center";
                                }
                                return "size-16 text-white font-barlow text-2xl border-neutral-600 border-[1px] rounded-full flex items-center justify-center";
                            }}
                        >
                            {index + 1}
                        </NavLink>
                    );
                })}
            </div>
            <div className="flex flex-col px-8 lg:items-start items-center">
                <span className="text-sm text-neutral-400 font-barlow">
                    THE TERMINOLOGY...
                </span>
                <h3 className="text-white font-rosarivo text-[3rem] lg:py-3 py-6">
                    {props.title.toUpperCase()}
                </h3>
                <p className="text-neutral-400 font-barlow md:w-[50vw] w-4/5 lg:w-[29rem] leading-8 lg:text-left text-center">
                    {props.description}
                </p>
            </div>
            <div className="flex justify-end flex-grow lg:py-0 py-48 relative lg:w-fit w-full">
                <img src={props.portrait} className="lg:translate-x-[9rem] lg:block hidden" />
                <img src={props.landscape} className="lg:hidden w-full" />
            </div>
        </div>
    );
}
