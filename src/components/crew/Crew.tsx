import {motion} from "framer-motion"

export default function Crew() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-screen h-fit min-h-screen lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover md:bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-[url('/assets/crew/background-crew-mobile.jpg')]"
        ></motion.main>
    );
}