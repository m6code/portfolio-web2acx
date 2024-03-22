import "./intro.css"
import {Link} from "react-scroll";
import btnImgHire from "../../assets/hireme.png"
import bgIntro from "../../assets/image_2.png"
export const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I am
                    <span className="introName"> Benjamin</span>
                    <br/> Front-end Developer
                </span>
                <p className="introPara">I am a skilled front-end developer with experience in creating fast, responsive and accessible website</p>
                <Link><button className="btn"><img src={btnImgHire} alt="Hire me"/>Hire Me</button></Link>
            </div>
            <img src={bgIntro} alt="Intro Background" className="bg"/>
            {/*<img src="https://source.unsplash.com/random" alt="Intro Background" className="bg"/>*/}
        </section>
    )
}