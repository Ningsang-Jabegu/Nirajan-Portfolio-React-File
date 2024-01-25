import LogoHead from "./LogoHead";
import NavBar from "./NavBar";
export default function Header({nav_active,nav_active_fun}) {
    return (
        <>
            <LogoHead />
            <NavBar active={nav_active} nav_active_fun = {nav_active_fun}/>
        </>
    )
}