import React from 'react';
import Navber from '../../component/Navber';
import Footer from '../../component/Footer';

const Career = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div>
      <h1 className="text-5xl font-bold">Tech related news</h1>
      <p className="py-6">
        Stay up-to-date with the latest technology news and updates. Get insights into the tech industry, including product launches, industry trends, and expert analysis. Our team of experts provides in-depth coverage to help you stay informed about the rapidly evolving world of technology. Whether you're a tech enthusiast or a professional in the field, our tech news section has something for everyone.
      </p>
    
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Career;