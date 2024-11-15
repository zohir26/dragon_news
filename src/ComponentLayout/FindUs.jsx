import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const FindUs = () => {
    return (
        <div>
            {/* 
            Find Us On */}
            <div className="mt-6 ">
                <h2 className="text-xl font-semibold">Find Us On</h2>
            </div>
            <div className="join flex flex-col  join-vertical mt-2 justify-start">
                <button className="btn join-item">                    <Link to='www.facebook.com'>
                        <button className="btn join-item w-full ">
                            <FaFacebook />
                            Facebook
                        </button>
                    </Link></button>
                <button className="btn join-item">                    <Link to='www.twitter.com'>
                        <button className="btn join-item w-full ">
                            <FaXTwitter />
                            Twitter
                        </button>
                    </Link></button>
                <button className="btn join-item">                    <Link to='www.whatsapp.web.com'>
                        <button className="btn join-item w-full ">
                            <FaWhatsapp />
                            Whatsapp
                        </button>
                    </Link></button>
            </div>
        </div>
    );
};

export default FindUs;