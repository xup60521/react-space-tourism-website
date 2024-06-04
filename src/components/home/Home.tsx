import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className={`absolute top-0 left-0 w-full h-fit min-h-screen overflow-x-hidden
            lg:bg-[url('/assets/home/background-home-desktop.jpg')] 
            bg-cover md:bg-[url('/assets/home/background-home-tablet.jpg')] 
            bg-[url('/assets/home/background-home-mobile.jpg')] 
            flex lg:flex-row flex-col lg:p-36 lg:pt-52 lg:justify-center lg:gap-[min(25vw,20rem)] justify-center px-8 py-52 text-center lg:text-left items-center gap-36
            `}
        >
            <div className="flex flex-col font-barlow z-20 lg:items-start items-center">
                <span className="text-neutral-400 text-3xl">
                    SO, YOU WANT TO TRAVEL TO
                </span>
                <h1 className="text-white font-rosarivo text-[9rem] tracking-wide">
                    SPACE
                </h1>
                <p className="text-neutral-400 text-xl leading-8 md:w-[50vw] w-4/5 lg:w-[29rem] ">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>
            <Link
                to={"/destination"}
                className="text-[2rem] font-rosarivo bg-white lg:size-[16rem] flex justify-center items-center rounded-full size-[12rem]"
            >
                <span>EXPLORE</span>
            </Link>
        </motion.main>
    );
}
