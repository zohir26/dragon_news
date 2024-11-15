import { useEffect, useState } from "react";


const LeftNavbar = () => {
   const [categories, setCategories] = useState([])
   useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((result)=> result.json())
    .then((data)=>setCategories(data.data.news_category))
   },[])
    return (
        <div className="">
            <h2 className="font-semibold text-center">All Category</h2>
            <div className=" flex flex-col gap-3 mt-4">
                {categories.map(category => (
                    <button 
                    className="btn"
                     key={category.category_id}>
                        {category.category_name}</button>
                ) )
                
                }
            </div>
        </div>
    );
};

export default LeftNavbar;