
import { format } from 'date-fns';
import logo from '../assets//logo.png'
import Marquee from 'react-fast-marquee';
const Header = () => {
  console.log(Marquee)
    return (
        <div className='flex justify-center flex-col items-center p-4'>
          <div className='w-[350px]' ><img src={logo} alt="Logo" /></div>
          <p className='mt-5  text-[#706F6F]'> Journalism Without Fear or Favour </p>
          <p className='mt-5  text-[#706F6F]'>{format(new Date(), "EEEE, MMMM MM , yyyy")}</p>
          <div className='flex items-center p-4 gap-10 bg-[#F3F3F3] mt-5'>
            <button className='btn bg-[#D72050] text-white'>latest</button>
     <Marquee.default pauseOnHover={true}>
             <p className='text-[#403F3F] font-semibold text-[18px]'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem vitae veritatis illum repudiandae laboriosam, maxime, rem fuga totam nemo magni itaque cumque, expedita debitis asperiores ex saepe distinctio ut at?
             </p>
            </Marquee.default>
           
          </div>

        </div>
    );
};

export default Header;