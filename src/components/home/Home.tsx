import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-screen h-fit min-h-screen lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover md:bg-[url('/assets/home/background-home-tablet.jpg')] bg-[url('/assets/home/background-home-mobile.jpg')] flex lg:flex-row flex-col lg:p-36 lg:items-end lg:justify-between"
        >
            <div className="flex flex-col font-barlow z-[100]">
                <span className="text-neutral-400 text-3xl">
                    SO, YOU WANT TO TRAVEL TO
                </span>
                <h1 className="text-white font-rosarivo text-[9rem] tracking-wide">
                    SPACE
                </h1>
                <p className="text-neutral-400 lg:w-[29rem] text-xl leading-8">
                    Let's face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you
                    a truly out of this world experience!
                </p>
            </div>
            <Link to={"/destination"} className="text-[2rem] font-rosarivo bg-white lg:size-[16rem] flex justify-center items-center rounded-full">
                <span>EXPLORE</span>
            </Link>
        </motion.main>
    );
}
