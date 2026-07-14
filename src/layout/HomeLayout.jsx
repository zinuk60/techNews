
import Header from '../component/Header';
import Navber from '../component/Navber';
import LeftAside from '../component/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../component/RightAside';
import '../index.css'
import Footer from '../component/Footer';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto poppins '>
         <header>
              <Header></Header>
         </header>

          <nav>
             <Navber></Navber>
          </nav>
            
        <div className='grid md:grid-cols-12 mt-5  '>
               <aside className='col-span-6 md:col-span-3'>
             <LeftAside></LeftAside>
           </aside>
         <main className='col-span-6 px-8'>
             <Outlet></Outlet>
          </main>
            

            <aside className='col-span-6 md:col-span-3'>
                  <RightAside></RightAside>
            </aside>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default HomeLayout;