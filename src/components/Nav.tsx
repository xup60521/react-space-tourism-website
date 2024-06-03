import { NavLink } from "react-router-dom";
import { route } from "../route";
import Logo from "/assets/shared/logo.svg";

export default function Nav() {
    return (
        <div className="w-full flex z-30 py-12 items-center overflow-x-hidden">
            <div className="flex justify-center pl-16 h-full items-center">
                <img src={Logo} className="size-[3.5rem]" />
            </div>
            <div className="flex-grow h-[1px] lg:bg-neutral-800 bg-transparent translate-x-[2.5rem] z-[100] "></div>
            <nav className="lg:w-3/5 backdrop-blur-2xl md:flex items-center lg:pl-0 lg:gap-16 md:gap-8 md:px-8 hidden backdrop-brightness-150 font-barlow text-lg lg:justify-normal md:justify-center">
                <div className="lg:w-36 flex-shrink lg:block hidden min-w-0"></div>
                {route.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
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
                        <span className="font-thin md:text-sm lg:text-xl">{` ${item.name}`}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
