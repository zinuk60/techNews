
import { Suspense, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";


const HomeContent = () => {
    const [filternews, setFilterNews]= useState([])
    const newsData=useLoaderData()
    const {id}= useParams()


   useEffect(()=>{
    if(id==0){
        setFilterNews(newsData)
        return
    }else if(id==1) {
        const filteredNews=newsData.filter(news=>news.others.is_today_pick==true)
        setFilterNews(filteredNews)
        return
    }
         const filteredNews=newsData.filter(news=>news.category_id==id)
         setFilterNews(filteredNews)
   },[id,newsData])
  

    
    return (
        <div>
          <Suspense fallback={<div className="text-center mt-5"><span className="loading loading-spinner loading-lg"></span></div>}>
          {
            filternews.map(news=><NewsCard key={news._id} news={news} />)
          }

          </Suspense>
        </div>
    );
};

export default HomeContent;