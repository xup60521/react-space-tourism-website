import { NavLink } from "react-router-dom";
import { route } from "../route";
import Logo from "/assets/shared/logo.svg";
import Menu from "/assets/shared/icon-hamburger.svg"
import { useState } from "react";

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="w-full flex z-30 py-12 items-center overflow-x-hidden">
            <div className="flex justify-center md:pl-16 pl-12 h-fit items-center">
                <img src={Logo} className="size-[3.5rem]" />
            </div>
            <div className="flex-grow h-[1px] lg:bg-neutral-800 bg-transparent translate-x-[2.5rem] z-[100] "></div>
            <nav className="lg:w-3/5 backdrop-blur-2xl md:flex items-center lg:pl-0 lg:gap-16 md:gap-8 md:px-8 hidden backdrop-brightness-150 font-barlow text-lg lg:justify-normal md:justify-center">
                <div className="lg:w-36 flex-shrink lg:block hidden min-w-0"></div>
                {route.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={`nav ${item.path}`}
                        unstable_viewTransition
                        className={(c) => {
                            let className =
                                "text-white h-full py-8 box-border border-b-4 transition flex items-center gap-3 ";
                            if (c.isActive) {
                                className += "border-white ";
                            } else {
                                className += "border-transparent ";
                            }
                            return className;
                        }}
                    >
                        <span className="font-bold lg:block hidden">
                            {index.toString().padStart(2, "0")}
                        </span>
                        <span className="font-thin lg:text-xl">{` ${item.name}`}</span>
                    </NavLink>
                ))}
            </nav>
            <button className="md:hidden flex items-center pr-12" onClick={()=>setOpenMenu(!openMenu)}>
                <img src={Menu} className="size-[2rem]" alt="menu-icon" />
            </button>
            {openMenu && <div className="absolute top-[9.5rem] w-[90vw] left-[50%] -translate-x-[50%] border-2-white rounded-3xl  flex flex-col gap-4 p-4 md:hidden items-center backdrop-blur-2xl backdrop-brightness-125">
            {route.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        unstable_viewTransition
                        onClick={()=>setOpenMenu(false)}
                        className={(c) => {
                            let className =
                                "text-white h-full md:py-8 py-4 box-border border-b-4 transition flex items-center gap-3 w-fit ";
                            if (c.isActive) {
                                className += "border-white ";
                            } else {
                                className += "border-transparent ";
                            }
                            return className;
                        }}
                    >
                        <span className="font-bold lg:block hidden">
                            {index.toString().padStart(2, "0")}
                        </span>
                        <span className="font-thin lg:text-xl">{` ${item.name}`}</span>
                    </NavLink>
                ))}
                </div>}
        </div>
    );
}
