import "./contact.css"
import clientWalmart from "../../assets/walmart.png"
import clientMicrosoft from "../../assets/microsoft.png"
import clientFb from "../../assets/facebook.png"
import clientAdobe from "../../assets/adobe.png"
import facebookIcon from '../../assets/facebook-icon.png'
import youtubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'


const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the opportunity to work with a diverse group of companies some of
                    the notable companies I have worked with includes </p>
                <div className="clientImgs">
                    <img src={clientWalmart} alt="Walmart" className="clientImg"/>
                    <img src={clientMicrosoft} alt="Microsoft" className="clientImg"/>
                    <img src={clientFb} alt="Facebook" className="clientImg"/>
                    <img src={clientAdobe} alt="Adobe" className="clientImg"/>
                </div>

                <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                    <form action="" className="contactForm">
                        <input type="text" className="name" placeholder="Your name"/>
                        <input type="email" className="email" placeholder="Your email"/>
                        <textarea name="message" id="" cols="30" rows="10" className="msg"
                                  placeholder="Your message"></textarea>
                        <button className="submitBtn" type="submit" value="send">Submit</button>

                    </form>
                </div>
                <div className="links">
                    <img src={facebookIcon} alt="Facebook" className="link"/>
                    <img src={twitterIcon} alt="twitter" className="link"/>
                    <img src={youtubeIcon} alt="youtube" className="link"/>
                    <img src={instagramIcon} alt="instagram" className="link"/>
                </div>

            </div>
        </section>
    )
}
export default Contact;
