import { motion } from "framer-motion";
import DouglasHurley from "/assets/crew/image-douglas-hurley.png";
import AnoushehAnsari from "/assets/crew/image-anousheh-ansari.png";
import MarkShuttleworth from "/assets/crew/image-mark-shuttleworth.png";
import VictorGlover from "/assets/crew/image-victor-glover.png";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

const crews = [
    {
        title: "Commander",
        name: "Douglas Hurley",
        description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.`,
        image: DouglasHurley,
    },
    {
        title: "Flight Engineer",
        name: "Anousheh Ansari",
        description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space. `,
        image: AnoushehAnsari,
    },
    {
        title: "Pilot",
        name: "Victor Glover",
        description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer. `,
        image: VictorGlover,
    },
    {
        title: "Mission Specialist",
        name: "Mark Shuttleworth",
        description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.`,
        image: MarkShuttleworth,
    },
] satisfies {
    title: string;
    name: string;
    description: string;
    image: string;
}[];

export default function Crew() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className={`absolute top-0 left-0 w-full h-fit min-h-screen bg-cover flex box-border  overflow-x-hidden 
            lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] 
            md:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
            bg-[url('/assets/crew/background-crew-mobile.jpg')] 
            lg:p-36 lg:pt-48 lg:pb-0 flex-col lg:justify-start items-center 
            px-8 md:pt-52 pt-36
            `}
        >
            <h3
                className={`flex items-center gap-4 lg:pt-4 pb-8 w-full lg:text-left px-4 flex-row lg:justify-start justify-center`}
            >
                <span className="text-2xl tracking-tighter text-neutral-600 font-bold">
                    02
                </span>
                <span className="text-3xl font-barlow text-white font-light tracking-widest">
                    MEET YOUR CREW
                </span>
            </h3>
            <Routes>
                {crews.map((item, index) => {
                    const path = index === 0 ? "/" : item.name;
                    return (
                        <Route
                            path={path}
                            key={item.name}
                            element={<CrewSection {...item} />}
                        />
                    );
                })}
            </Routes>
        </motion.main>
    );
}

function CrewSection(props: {
    title: string;
    name: string;
    description: string;
    image: string;
}) {
    const location = useLocation();
    return (
        <div className="min-h-0 w-full flex lg:flex-row flex-col flex-grow justify-center">
            <div className="flex flex-col lg:w-1/2 justify-center px-4">
                <div className="flex flex-col lg:text-left text-center lg:items-start items-center lg:py-0 py-12">
                    <span className="text-3xl font-rosarivo text-neutral-500">
                        {props.title}
                    </span>
                    <h3 className="text-[3rem] font-rosarivo text-white pt-2 pb-4">
                        {props.name}
                    </h3>
                    <p className="font-barlow leading-8 max-w-full text-neutral-300 md:w-[50vw] w-4/5 lg:w-[29rem] ">
                        {props.description}
                    </p>
                </div>
                <div className="flex gap-4 lg:pt-32 lg:pb-0 pb-24 w-full lg:justify-normal justify-center">
                    {crews.map((item, index) => {
                        const path = index === 0 ? "" : `${item.name}`;
                        return (
                            <NavLink
                                to={`/crew/${path}`}
                                key={item.name}
                                className={(c) => {
                                    if (path === "") {
                                        if (
                                            location.pathname === "/crew" ||
                                            location.pathname === "/crew/"
                                        ) {
                                            return "text-transparent size-4 rounded-full bg-neutral-50 ";
                                        }
                                        return "text-transparent size-4 rounded-full bg-neutral-700 ";
                                    }
                                    if (c.isActive) {
                                        return "text-transparent size-4 rounded-full bg-neutral-50 ";
                                    }
                                    return "text-transparent size-4 rounded-full bg-neutral-700 ";
                                }}
                            >
                                .
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center items-end min-h-0 overflow-hidden lg:w-1/2">
                <img
                    src={props.image}
                    alt={`a picture of ${props.name}`}
                    className=" object-cover w-3/4"
                />
            </div>
        </div>
    );
}
