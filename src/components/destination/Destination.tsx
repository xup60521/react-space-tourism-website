import { motion } from "framer-motion";
import MoonPNG from "/assets/destination/image-moon.png";
import MarsPNG from "/assets/destination/image-mars.png";
import EuropaPNG from "/assets/destination/image-europa.png";
import TitanPNG from "/assets/destination/image-titan.png";
import { NavLink, Route, Routes } from "react-router-dom";

const destinationPages = [
    {
        name: "moon",
        image: MoonPNG,
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: {
            num: "384,400",
            unit: "km",
        },
        travel_time: {
            num: "3",
            unit: "days",
        },
    },
    {
        name: "mars",
        image: MarsPNG,
        description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!`,
        distance: {
            num: "225",
            unit: "mil. km",
        },
        travel_time: {
            num: "9",
            unit: "months",
        },
    },
    {
        name: "europa",
        image: EuropaPNG,
        description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.`,
        distance: {
            num: "628",
            unit: "mil. km",
        },
        travel_time: {
            num: "3",
            unit: "years",
        },
    },
    {
        name: "titan",
        image: TitanPNG,
        description: `The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn.`,
        distance: {
            num: "1.6",
            unit: "bil. km",
        },
        travel_time: {
            num: "7",
            unit: "years",
        },
    },
];

export default function Destination() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className={`absolute top-0 left-0 w-full h-fit min-h-screen bg-cover flex box-border  overflow-x-hidden 
            lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] 
            md:bg-[url('/assets/destination/background-destination-tablet.jpg')] 
            bg-[url('/assets/destination/background-destination-mobile.jpg')] 
            lg:p-36 lg:pt-48 lg:pb-12 flex-col lg:justify-start items-center 
            px-8 md:py-52 py-36
            `}
        >
            <h3
                className={`flex items-center gap-4 lg:pt-4 pb-8 w-full lg:text-left px-4 flex-row lg:justify-start justify-center`}
            >
                <span className="text-2xl tracking-tighter text-neutral-600 font-bold">
                    01
                </span>
                <span className="text-3xl font-barlow text-white font-light tracking-widest">
                    PICK YOUR DESTINATION
                </span>
            </h3>
            <Routes>
                {destinationPages.map((item, index) => {
                    const path = index === 0 ? "/" : item.name;
                    return (
                        <Route
                            path={path}
                            key={item.name}
                            element={<DestinationSection {...item} />}
                        />
                    );
                })}
            </Routes>
        </motion.main>
    );
}

function DestinationSection(props: {
    name: string;
    image: string;
    description: string;
    distance: {
        num: string;
        unit: string;
    };
    travel_time: {
        num: string;
        unit: string;
    };
}) {
    return (
        <div className={`flex items-center justify-center lg:gap-[10vw] lg:w-fit 
                        lg:flex-row flex-col text-xl leading-8 md:w-[50vw] w-4/5 gap-16 lg:pt-0 pt-12
        `}>
            <img
                src={props.image}
                alt="moon image"
                className="lg:w-[50vh] aspect-square"
            />
            <div className="flex flex-col lg:w-[50vh] h-fit">
                <div className="flex gap-12 items-center w-full text-neutral-400 py-4 lg:justify-start justify-center">
                    {destinationPages.map((item, index) => {
                        const path = index === 0 ? "" : item.name;
                        return (
                            <NavLink
                                to={`/destination/${path}`}
                                className={"text-lg font-barlow font-light"}
                                key={`destination navlink ${path}`}
                            >
                                {item.name.toUpperCase()}
                            </NavLink>
                        );
                    })}
                </div>
                <h2 className="text-[5rem] font-rosarivo text-white py-10 lg:text-left text-center">
                    {props.name.toUpperCase()}
                </h2>
                <p className="text-neutral-500 font-barlow text-lg leading-8 lg:text-left text-center">
                    {props.description}
                </p>
                <div className="w-full p-8 border-b-2 border-neutral-800"></div>
                <div className="py-4 flex gap-16 items-center lg:justify-start justify-between lg:px-0 px-12">
                    <div className="flex flex-col gap-2 py-2">
                        <span className="text-neutral-500 text-xs">
                            AVG. DISTANCE
                        </span>
                        <p className="text-2xl font-rosarivo text-white tracking-tight">
                            <span className=" font-barlow tracking-normal pr-2">
                                {props.distance.num}
                            </span>
                            {props.distance.unit.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 py-2">
                        <span className="text-neutral-500 text-xs">
                            EST. TRAVEL TIME
                        </span>
                        <p className="text-2xl font-rosarivo text-white tracking-tight">
                            <span className=" font-barlow tracking-normal pr-2">
                                {props.travel_time.num}
                            </span>
                            {props.travel_time.unit.toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
