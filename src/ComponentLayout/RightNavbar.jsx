import FindUs from "./FindUs";
import QZones from "./QZones";
import SocialLogin from "./SocialLogin";

const RightNavbar = () => {
    return (
        <div>
            {/* social login */}
            <div>
                <SocialLogin></SocialLogin>
            </div>

            <div>
                <FindUs></FindUs>
            </div>

            <div>
                <QZones></QZones>
            </div>

        </div>
    );
};

export default RightNavbar;