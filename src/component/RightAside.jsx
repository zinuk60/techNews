
import swimming from '../assets/swimming.png'
import classroom from '../assets/class.png'
import playGround from '../assets/playground.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import { GrGoogle } from 'react-icons/gr';

const RightAside = () => {
    return (
        <div>
       <p className='font-bold text-2xl'>Login With</p>
      <div className='grid grid-cols-1 gap-3 mt-5'>
           <button className='btn hover:text-blue-500   flex items-center '><GrGoogle></GrGoogle>Login with Google</button>
            <button className='btn  hover:text-blue-500 flex items-center'><FaGithub></FaGithub> Login with Github</button>
      </div>
      <div className=''>
        <h1 className='font-bold text-2xl mt-5'>Find Us On</h1>
        <div className="join join-vertical w-full ">
  <button className="btn join-item hover:text-blue-500 flex justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item hover:text-blue-500 flex justify-start"><FaInstagram></FaInstagram> Instagram</button>
  <button className="btn join-item hover:text-blue-500 flex justify-start"><FaTwitter></FaTwitter> Twitter</button>
</div>


      </div>
      <div className='mt-5 flex flex-col justify-center items-center'>
        <img src={swimming} alt="Swimming" />
        <img src={classroom} alt="Classroom" />
        <img src={playGround} alt="Playground" />
      </div>
        </div>
    );
};

export default RightAside;