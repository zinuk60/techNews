import { use } from "react";
import { NavLink } from "react-router";

const categoriesData=fetch('/categories.json').then((res)=>res.json())
const LeftAside = () => {
    const categories=use(categoriesData)
    console.log(categories)
    return (
        <div>
            <p className="">All Categories({categories.length})</p>
            {
                categories.map((category)=>(
                <div key={category.id} className="p-2 grid grid-cols-1 gap-2">
                    <NavLink className='btn bg-white hover:bg-[#E7E7E7]' to={`/category/${category.id}`}>{category.name}</NavLink>
                </div>
                  
                
                ))
            }
        </div>
    );
};

export default LeftAside;