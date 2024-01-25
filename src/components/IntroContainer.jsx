import { Link } from "react-router-dom";
import profile_pic from "../../public/images/Homepage/profile_picture.png";
import cv from "../../public/resources/Resume-Nirajan.pdf"

export default function IntroContainer(){
    return(
        <main className="introduction">
            <div>
                <h1>Welcome to My Portfolio</h1>
                <p className="text-normal">Hi, I am Nirajan Khatiwada, A Data Science Enthusiast.</p>
                <button><a href={cv} target="_blank">View CV <ion-icon name="eye"></ion-icon></a></button>
            </div>
            <div>
                <img src={profile_pic} />
            </div>
        </main>
    )
}