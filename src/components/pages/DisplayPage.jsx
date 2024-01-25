import Header from "../Header";
import Main from "../Main";

export default function DisplayPage({which,setActiveNavItem}) {
    return(
        <>
        <Header nav_active = {which} nav_active_fun = {setActiveNavItem} />
        <Main content_of = {which} />
        </>
    )
}