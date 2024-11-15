import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center py-3 w-11/12 mx-auto">
           <p className="bg-[#c0142b] text-white p-4 rounded-xl font-bold">
            Latest
           </p>
           <p className="text-lg bg-base-200 py-2">
             <Marquee className="space-x-8" pauseOnHover speed={100}>
               <Link>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique suscipit repellat recusandae odio ex.
               </Link>
               <Link>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique suscipit repellat recusandae odio ex.
               </Link>
               <Link>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique suscipit repellat recusandae odio ex.
               </Link>
             </Marquee>
           </p>
        </div>
    );
};

export default LatestNews;