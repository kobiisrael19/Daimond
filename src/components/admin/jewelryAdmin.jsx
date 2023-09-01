// import React from "react";
// import { useEffect, useState } from "react";
// import { API_URL, doApiGet } from "../../services/apiServices";
// import { Link, useSearchParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// import PagesBtns from "./pagesBtns";
// import "./haderAdmin.css";

// const JewelryAdmin = () => {
//   const [ar, setAr] = useState([]);
//   const [query] = useSearchParams();

//   useEffect(() => {
//     doApi();
//   }, [query]);

//   const doApi = async () => {
//     const page = query.get("page") || 1;
//     const url = API_URL + "/jewelry?page=" + page;

//     try {
//       const data = await doApiGet(url);
//       console.log(data);

//       setAr(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div dir="rtl">
//       <div>
//         <div className="container-lg ">
//           {/* <AuthAdminComp/> */}

//           <h2 className="mt-4">כל המוצרים שיש במערכת:</h2>
//           <div className="text-sm-start">
//             {" "}
//             <Link to="/admin/addFrom">
//               {" "}
//               <button className="btn btn-dark mt-3 "> + הוספת מוצר</button>
//             </Link>
//           </div>
//           <div className="row mt-3">
//             <table className="table tab  table-striped">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th className="col">שם המוצר</th>
//                   <th className="col">אודות המוצר</th>
//                   <th className="col">קטגוריה</th>
//                   <th className="col">מחיר</th>
//                   <th className="col">מחיקה/עריכה</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ar.map((item, i) => {
//                   const page = query.get("page") || 1;
//                   return (
//                     <tr key={item._id}>
//                       <td>{(page - 1) * 20 + i + 1}</td>
//                       <td>{item.name}</td>
//                       <td>{item.info}</td>
//                       <td>{item.category}</td>
//                       <td>{item.price}0 ₪</td>
//                       <td>
//                         <button className="btn border-0 ">
//                           {" "}
//                           <FontAwesomeIcon
//                             className="coloriconAdmin1"
//                             icon={faTrash}
//                             size="xl"
//                           />
//                         </button>
//                         <Link to={`/admin/addJewelryFrom/${item._id}`}>
//                           <button className="btn border-0 ps-3  coloriconAdmin2">
//                             <FontAwesomeIcon
//                               className="coloriconAdmin2"
//                               icon={faPenToSquare}
//                               size="xl"
//                             />
//                           </button>
//                         </Link>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-center pb-5">
//             <PagesBtns
//               linkTo={"/admin/jewelryadmin?page="}
//               cssClass="btn btn-dark ms-2"
//               apiUrl={API_URL + "/jewelry/count"}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JewelryAdmin;





import React from "react";
import { useEffect, useState } from "react";
import { API_URL, doApiGet ,doApiMethod} from "../../services/apiServices";
import { Link, useSearchParams,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import PagesBtns from "./pagesBtns";
import "./haderAdmin.css";

const JewelryAdmin = () => {
  const [ar, setAr] = useState([]);
  const [query] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  }, [query]);

  const doApi = async () => {
    const page = query.get("page") || 1;
    const url = API_URL + "/jewelry?page="+page;

    try {
      const data = await doApiGet(url);
      console.log(data);
      setAr(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toAdditFrom = ()=>{
    nav("/admin/addFrom");
  }
  const navigateToEdit = (productId) => {
    nav(`/admin/additfrom/${productId}`);
  };
  const onDelClick = async(_delId)=>{
    if (window.confirm("delete jewelry?")){
    try {
      const url = API_URL+"/jewelry/"+_delId;
      const data = await doApiMethod(url,"DELETE");
      if(data.deletedCount){
        doApi();
      }
    } catch (error) {
      console.log(error);
    }
  }
  }

  return (
    <div dir="rtl">
      <div>
        <div className="container-lg ">

          <h2 className="mt-4">כל המוצרים שיש במערכת:</h2>
          <div className="text-sm-start">
             
              <button onClick={toAdditFrom} className="btn btn-dark mt-3 "> + הוספת מוצר</button>
          
          </div>
          <div className="row mt-3">
            <table className="table tab  table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="col">שם המוצר</th>
                  <th className="col">אודות המוצר</th>
                  <th className="col">קטגוריה</th>
                  <th className="col">מחיר</th>
                  <th className="col">מחיקה/עריכה</th>
                </tr>
              </thead>
              <tbody>
                {ar.map((item, i) => {
                  const page = query.get("page") || 1;
                  return (
                    <tr key={item._id}>
                      <td>{(page - 1) * 20 + i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.info}</td>
                      <td>{item.category}</td>
                      <td className="bbttnn">{item.price.toFixed(2)} ₪</td>
                      <td>
                        <button onClick={()=>{onDelClick(item._id)}} className="btn border-0 ">
                    
                          <FontAwesomeIcon
                            className="coloriconAdmin1"
                            icon={faTrash}
                            size="xl"
                          />
                        </button>

                          <button  onClick={() => navigateToEdit(item._id)} className="btn border-0 ps-3  coloriconAdmin2">
                            <FontAwesomeIcon
                              className="coloriconAdmin2"
                              icon={faPenToSquare}
                              size="xl"
                            />
                          </button>
                      
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="text-center pb-5">
            <PagesBtns
              linkTo={"/admin/jewelryadmin?page="}
              cssClass="btn btn-dark ms-2"
              apiUrl={API_URL + "/jewelry/count"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryAdmin;