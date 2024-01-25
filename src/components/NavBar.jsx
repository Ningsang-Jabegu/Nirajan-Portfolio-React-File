import { Link } from "react-router-dom";
import { navbar_items } from "../assets/data/Homepage_Data";

export default function NavBar({active,nav_active_fun}) {
  const navItemList = Object.entries(navbar_items).map(([key, value], index) => (
    <Link to={value} className={`${active == key? "active":""}`} onClick={()=>nav_active_fun(key)}>
      <li key={index}>{key}</li>
    </Link>
  ));

  return (
    <nav>
      {navItemList}
    </nav>
  );
}
