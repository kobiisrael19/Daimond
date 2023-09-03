import axios from "axios";



export const API_URL = "http://localhost:3004";

export const TOKEN_KEY = "products_token";


export const doApiGet = async(_url) => {
  try{
    const {data} = await axios({
      url:_url,
      method:"GET",
      headers:{
        "x-api-key":localStorage[TOKEN_KEY]
      }
    })
    return data;
  }
  catch(err){
    console.log(err);
    throw err;
  }
}
//POST,PUT,DELETE,PATCH
export const doApiMethod = async(_url, _method,_bodyData) => {
  try{
    const {data} = await axios({
      url:_url,
      method:_method,
      data:_bodyData,
      headers:{
        'Content-Type': 'application/json',
        "x-api-key":localStorage[TOKEN_KEY]
      }
    })
    
    return data;
  }
  catch(err){
    throw err;
  }
}


export const doApiPatch = async (_url, _bodyData) => {
  try {
    const { data } = await axios({
      url: _url,
      method: "PATCH",
      data: _bodyData,
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": localStorage[TOKEN_KEY],
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
};
