import Logo from "../assets/imgs/Logo.jpg"

const Footer = () => {
    return (
        <div className="border-black absolute left-0 right-0 bottom-0">
            <div className="bg-pink-400 flex justify-between py-10">
                <div className="">
                <a href="/">
            <img className="h-28 p-2 rounded-full"
             alt="logo" 
             src={Logo} /></a> 
             </div>
                <div className="text-white font-bold py-6">© 2023 Wortit</div>
                <div className="flex px-10">
                    <a className="px-7" href="https://www.facebook.com/swiggy.in" rel="nofollow noopener" alt="facebook" target="_blank">
                        <img className="" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" /></a>
                        <a className="px-7" href="https://pinterest.com/swiggyindia" rel="nofollow noopener" alt="pintrest" target="_blank">
                            <img className="" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" /></a>
                            <a className="px-7" href="https://instagram.com/swiggyindia/" rel="nofollow noopener" alt="instagram" target="_blank">
                                <img className="" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" /></a>
                                <a className="px-7" href="https://twitter.com/swiggy" rel="nofollow noopener" alt="twitter" target="_blank">
                                    <img className="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" /></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;