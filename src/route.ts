import Crew from "./components/crew/Crew"
import Destination from "./components/destination/Destination"
import Home from "./components/home/Home"
import Technology from "./components/technology/technology"

export const route = [{
    path: "/",
    name: "HOME",
    element: Home
}, {
    path: "/destination",
    name: "DESTINATION",
    element: Destination
}, {
    path: "/crew",
    name: "CREW",
    element: Crew
}, {
    path: "/technology",
    name: "TECHNOLOGY",
    element: Technology
}]