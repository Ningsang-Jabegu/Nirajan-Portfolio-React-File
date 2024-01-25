import { Link } from "react-router-dom"
import { experience } from "../assets/data/Homepage_Data"
const showExperience = Object.entries(experience).map(([key,value],index) => (
    <Link key={index} className="flex">
        <li>
            <div className="exp-logo-container">
            <img src={value.skillProviderLogo} />
            </div>
            <div>
                <h3>{key}</h3>
                <h5>{value.skillTitle}</h5>
                <p>{value.started} - {value.ended}</p>
            </div>
        </li>
    </Link>
))
export default function Experience() {
    return(
        <section className="section experience">
            <h1>Organization</h1>
            <ul className="flex">
                {showExperience}
            </ul>
        </section>
    )
}