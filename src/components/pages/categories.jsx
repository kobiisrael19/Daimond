import React, { useEffect, useState } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import {doApiGet , API_URL} from '../../services/apiServices'

const Categories = () => {
  const [categories , setCategories] = useState([]);

  const doApi = async () => {
    try {
      const _url = API_URL + "/categories"
      const data = await doApiGet(_url);
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    doApi();
  },[])

  return (
    <div className="container-fluid pt-5 bgColor">
      <div className="container text-center">
        <div className="row g-5 pt-3 pb-5">
          {categories.map((obj , i) => {
            return <div key={i} className="col-md-6">
            <Link to={obj.link} >
              <div
                className="p-3 boxs"
                style={{backgroundImage:`url(${obj.imgurl})`,}}
              ></div>
            </Link>
            <h2 className=" colorText">{obj.name}</h2>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;