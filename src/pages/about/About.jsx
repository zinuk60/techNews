import React from 'react';
import Navber from '../../component/Navber';
import Footer from '../../component/Footer';

const About = () => {
    return (
        <div className="mt-5">
            <Navber></Navber>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
       This is a news website where you can find the latest news and updates from around the world. We provide accurate and reliable information to keep you informed about current events. Our team of experienced journalists works tirelessly to bring you the most relevant news stories, covering a wide range of topics including politics, technology, entertainment, sports, and more. Stay connected with us for the latest news and insights.
      </p>
     
    </div>
  </div>
</div>
<Footer></Footer>
      </div>
    );
};

export default About;