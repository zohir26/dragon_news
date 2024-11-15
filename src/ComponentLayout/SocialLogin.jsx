import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold">Login With</h2>
            <div className="space-y-2 mt-2">
                <button className="btn">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;