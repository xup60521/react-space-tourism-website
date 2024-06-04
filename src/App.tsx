import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import { route } from "./route.ts";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();
    return (
        <div className="w-full h-screen bg-black flex flex-col overflow-x-hidden">
            <Nav />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {route.map((item, index) => (
                        <Route path={`${item.path}/*`} element={item.element()} key={`top route ${item.path} ${index}`} />
                    ))}
                </Routes>
            </AnimatePresence>
        </div>
    );
}
