import Experience from "./Experience";
import IntroContainer from "./IntroContainer";
import Skill from "./Skill";

export default function Main({content_of}){
    return(
        <>
            <IntroContainer />
            <Skill />
            <Experience />
        </>
    )
}