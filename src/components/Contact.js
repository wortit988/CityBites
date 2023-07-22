import Finder from "../assets/imgs/Contact.svg"

const Contact = () => {
    return (
        <div className="p-5">
            
            <img className="h-52 mx-auto my-0" 
             alt="Contact" 
             src={Finder} />
             <div className="text-center mt-2 font-bold">Contact Us!</div>
        </div>
    )
}
export default Contact;