import "./skills.css"
import uiDesignImg from "../../assets/ui-design.png";
import webDesignImg from "../../assets/website-design.png";
import appDesignImg from "../../assets/app-design.png";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">I am a skilled and passionate front-end web developer with experience in designing intuitive, responsive and accessible user experience. I am skilled at building user interfaces with HTML, CSS, JavaScript and Reactjs. I use frameworks such as Material UI, TailwindsCSS, ChakraUI and Ant Design to craft amazing user interfaces</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={uiDesignImg} alt="UI/UX Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Design user interfaces using tools such as figma and adobe xd</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesignImg} alt="Web Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Developement</h2>
                        <p>Design and develope website using HTML, CSS, Javascript and Reactjs</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesignImg} alt="App Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>Develops Mobile app using ReactNative and Desktop apps using Electron</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;
