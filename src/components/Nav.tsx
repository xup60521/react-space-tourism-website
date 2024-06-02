import { NavLink } from "react-router-dom";
import { route } from "../route";
import Logo from "/assets/shared/logo.svg";

export default function Nav() {
    return (
        <div className="w-full flex z-30 py-12 items-center">
            <div className="flex justify-center pl-16 h-full items-center">
                <img src={Logo} className="size-[3.5rem]" />
            </div>
            <div className="flex-grow border-t-[1px] border-neutral-600 translate-x-[2.5rem] z-40"></div>
            <nav className="w-3/5 backdrop-blur-2xl flex items-center gap-16 backdrop-brightness-150 justify-center font-barlow text-lg">
                {route.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        unstable_viewTransition
                        className={(c) => {
                            let className =
                                "text-white -translate-x-[5rem] h-full py-8 box-border border-b-4 transition flex items-center gap-3 ";
                            if (c.isActive) {
                                className += "border-white ";
                            } else {
                                className += "border-transparent ";
                            }
                            return className;
                        }}
                    >
                        <span className="font-bold text-xl">
                            {index.toString().padStart(2, "0")}
                        </span>
                        <span className="font-thin">{` ${item.name}`}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
