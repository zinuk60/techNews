import { CiShare2 } from "react-icons/ci";
import { FaBookmark, FaEye,  FaStar } from "react-icons/fa";

 
const NewsCard = ({ news }) => {
    return (
        <div className="h-fit w-full  bg-white mb-8 shadow-xl">
           <div className="flex justify-between items-center bg-[#f3f3f3] p-4 ">
            <div className="flex justify-center items-center gap-5 ">
                <img className="rounded-full  h-[60px] w-[60px] " src={news.author.img } alt="" />
                <div className="text-[12px] text-[#403F3F] font-bold">
                    <p className="">{news.author.name}</p>
                    <p className="text-[#706F6F]">{news.author.published_date}</p>
                </div>
            </div>
            <div className="flex justify-center items-center text-2xl gap-5 ">
                <FaBookmark></FaBookmark>
               <CiShare2></CiShare2>
            </div>
           </div>
           <div className="p-5">
            <p className="text-2xl font-bold font-black my-4 ">{news.title}</p>
               <img src={news.thumbnail_url} alt="" />
            <p className="text-[#706F6F]"> {  news.details.slice(0, 200)} <span className="text-orange-600">....Read More</span></p>
            <div className="border-t-1 border-gray-300 mt-5"></div>
           </div>
           
           <div className="flex justify-between items-center mt-5 p-5">
            <div className="text-orange-400 flex justify-center items-center gap-1">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <p className="text-[#706F6F] ml-2" >{news.rating.number}</p>
            </div>
            <div className="text-[#706F6F] flex justify-center items-center gap-3 p-5">
                <FaEye></FaEye>
                <p className="">{news.total_view}</p>
            </div>
           </div>
        </div>
    );
};

export default NewsCard;