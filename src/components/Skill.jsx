import { Link } from "react-router-dom";
import { skill } from "../assets/data/Homepage_Data";

const showSkill = Object.entries(skill).map(([key,value], index) => (
    <Link to={value.skillLink} key={index} className="flex">
        <li className="flex">
            <ion-icon name={value.skillIconName}></ion-icon>
            <div>
                <h3>{key}</h3>
                <p>{value.skillBrief}</p>
            </div>
        </li>
    </Link>
))

export default function Skill() {
    return (
        <section className="section skill">
            <h1>Skill</h1>
            <ul className="flex">
                {showSkill}

                {/* <Link to="">
                    <li>
                        <ion-icon name="hardware-chip"></ion-icon>
                        <div>
                            <h3>Python</h3>
                            <p>Python is my profession</p>
                        </div>
                    </li>
                </Link> */}
            </ul>
        </section>
    )
}