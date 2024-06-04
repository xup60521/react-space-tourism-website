import { motion } from "framer-motion";

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
            px-8 md:py-52 py-36
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
        </motion.main>
    );
}

