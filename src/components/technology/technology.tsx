import { motion } from "framer-motion";

export default function Technology() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-screen h-fit min-h-screen lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover md:bg-[url('/assets/technology/background-technology-tablet.jpg')] bg-[url('/assets/technology/background-technology-mobile.jpg')] overflow-x-hidden"
        ></motion.main>
    );
}
