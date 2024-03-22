import emailjs from '@emailjs/browser';
import {Toaster, toast } from "sonner"
import "./contact.css"
import clientWalmart from "../../assets/walmart.png"
import clientMicrosoft from "../../assets/microsoft.png"
import clientFb from "../../assets/facebook.png"
import clientAdobe from "../../assets/adobe.png"
import facebookIcon from '../../assets/facebook-icon.png'
import youtubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'
import {useRef} from "react";


const Contact = () => {
    const form = useRef();

    const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
    const sendEmail = (e) => {
        e.preventDefault();
        if(e.target[0].value.trim().length !== 0 && e.target[2].value.trim().length !== 0) {
            emailjs
                .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {publicKey: VITE_PUBLIC_KEY,})
                .then(
                    () => {
                        // console.log('SUCCESS!');
                        // alert("Message Sent")
                        toast.success("Your message has been successfully sent.", {
                            duration: 8000,
                            description: "We will get back to you soon"
                        })
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );

            e.target.reset();
        } else {
            //alert("Please enter a name and a message");
            toast.error("Missing required information", {
                description: "Please make sure to enter your name and your message too",
                duration: 10000
            });
        }
    }


    return (
        <section id="contactPage">
            <Toaster richColors position="bottom-center" closeButton/>
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
                    <span
                        className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder="Your name" name="from_name" required/>
                        <input type="email" className="email" placeholder="Your email" name="from_email_address" required/>
                        <textarea name="message" id="" cols="30" rows="10" className="msg"
                                  placeholder="Your message" required></textarea>
                        <input type="hidden" value="Portfolio | Web2acx" name="appName"/>
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
