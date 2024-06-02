import { motion } from "framer-motion";

export default function Destination() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-screen h-fit min-h-screen lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover md:bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-[url('/assets/destination/background-destination-mobile.jpg')]"
        ></motion.main>
    );
}
