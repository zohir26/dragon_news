import swim from '../assets/swimming.png'
import classroom from '../assets/class.png'
import play from '../assets/playground.png'
import bg from '../assets/bg.png'
const QZones = () => {
    return (
        
        <div className='flex flex-col gap-3 mt-8'>
            <h3 className="xl font-semibold">Q Zones</h3>
            <div>
            <img src={swim} alt="" />
             
            </div>

            <div>
            <img src={classroom} alt="" />
             
            </div>

            <div>
            <img src={play} alt="" />
             
            </div>
            
            <div>
            <img src={bg} alt="" />
             
            </div>
        </div>
    );
};

export default QZones;