import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
    return (
        <div  className="flex flex-col justify-center items-center py-2 gap-2">
           <div className="logo">
            <img src={logo} alt="" />
            </div>
            <h2 className="text-3xl font-poppins">Journalism without Fear or Favour</h2> 
            <p className="text-lg">
                {
                    moment().format('MMMM Do YYYY, h:mm:ss a')
                }
            </p>
            <p>
               
            </p>
        </div>
    );
};

export default Header;