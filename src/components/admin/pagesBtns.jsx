import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PagesBtns = (props) => {

    const [pages,setPages] = useState(0);
  
  
    useEffect(() => {
      doApi();
    },[])
  
    const doApi = async() => {
      try{
        const url = props.apiUrl;
        const resp = await axios.get(url);
        console.log(resp.data);
        setPages(resp.data.pages);
      }
      catch(err){
        console.log(err);
      }
    }

  return (
    <div>
      
      {[...Array(pages)].map((item,i) => {
        return (
          <Link key={i} to={props.linkTo+(i+1)} className={props.cssClass}>{i+1}</Link>
        )
      })}
    </div>
  )
}

export default PagesBtns