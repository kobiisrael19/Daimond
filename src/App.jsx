// import AppRouters from "./components/routers/appRouters";
// import { useEffect, useState } from "react";
// import { Appcontext } from "./context/context";
// import Badge from "react-bootstrap/Badge";
// import "./App.css";
// import WhatsAppButton from "../whatsAppButton";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { API_URL, TOKEN_KEY, doApiGet, doApiMethod } from "./services/apiServices";


// function App() {
//   const [data, setData] = useState(null);
//   const [userCart, setUserCart] = useState([]);
//   let [token, setToken] = useState(localStorage[TOKEN_KEY]);
//   const [globalUserCart, setGlobalUserCart] = useState([]);
//   // עגלת קניות
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   // מועדפים
//   const [favourites, setFavourites] = useState([]);
//   const [cartCountFavourites, setCartCountFavourites] = useState(0);
//   const [buttonColors, setButtonColors] = useState({});

//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   useEffect(() => {
//     if (token) {
//       fetchUserCart();
//       setIsLoggedIn(true);
//       console.log("llllll")
//       // Fetch user data and favorites here if needed
//     }
//   }, [token]);


//   const fetchUserCart = async () => {
//     try {
//       if (token) {
//         console.log(token);
//         const url = API_URL + "/users/userInfo";
//         const data = await doApiGet(url);
//         setData(data);
//         setUserCart(data.favs_ar);
//         setGlobalUserCart(data.favs_ar);
  
//         // Calculate the total quantity of all products
//         let totalQuantity = 0;
//         for (const product of data.favs_ar) {
//           totalQuantity += product.count;
//         }
  
//         setCartCount(totalQuantity);
//         setCart(data.favs_ar);
        
//       } else {
//         // If not logged in, reset the cart
//         setCart([]);
//         setCartCount(0);
//       }
//     } catch (error) {
//       console.error("Error fetching user cart:", error);
//     }
//   };
  
 


//   // סל קניות
//   const addToCart = async (product) => {
//     const existingProduct = cart.find((item) => item._id === product._id);
//     let updatedCart = [];

//     if (existingProduct) {
//       updatedCart = cart.map((item) =>
//         item._id === product._id ? { ...item, count: item.count + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       updatedCart = [...cart, { ...product, count: 1 }];
//       setCart(updatedCart);
//     }

//     setCartCount((prevCount) => prevCount + 1);

//     const token = localStorage[TOKEN_KEY];
//     if (token) {
//       const url = API_URL + "/users/updateFavs";
//       const userCartResponse = await doApiMethod(url, "PATCH", { favs_ar: updatedCart });
//       setUserCart(userCartResponse);
//       setGlobalUserCart(userCartResponse);
//     }

//     handleShow();
//   };
  
//   const removeFromCart = async (product) => {
//     const updatedCart = cart.map((item) =>
//       item._id === product._id ? { ...item, count: item.count - 1 } : item
//     );
//     const filteredCart = updatedCart.filter((item) => item.count > 0);
//     setCart(filteredCart);
//     setCartCount((prevCount) => prevCount - 1);
  
//     // Check if user is logged in
//     const token = localStorage[TOKEN_KEY];
//     if (token) {
//       const url = API_URL + "/users/updateFavs";
//       const userCartResponse = await doApiMethod(url, "PATCH", { favs_ar: filteredCart });
//       setUserCart(userCartResponse);
//       setGlobalUserCart(userCartResponse);
//     }
//   };

 
  

//   const calculateTotal = () => {
//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//       total += cart[i].price * cart[i].count;
//     }
//     return total;
//   };

//   //  מועדפים
//   const handleClick = (id) => {
//     const isRed = buttonColors[id] === "red";

//     if (isRed) {
//       removeFromfavourites(id);
//     }

//     setButtonColors((prevColors) => ({
//       ...prevColors,
//       [id]: isRed ? "" : "red",
//     }));
//   };

//   const addTofavourites = (product) => {
//     const productId = product._id;

//     if (buttonColors[productId] === "red") {
//       removeFromfavourites(productId);
//       return;
//     }

//     setFavourites([...favourites, product]);
//     setCartCountFavourites(cartCountFavourites + 1);
//   };

//   const removeFromfavourites = (id) => {
//     const updatedCart = favourites.filter((item) => item._id !== id); 
//     setFavourites(updatedCart);
//     setCartCountFavourites(updatedCart.length);

//     setButtonColors((prevColors) => ({
//       ...prevColors,
//       [id]: "",
//     }));
//   };


//   // עמוד תשלום
//   const shipping1 = 24.0;
//   const shipping2 = 29.9;
//   const [shippingPrice, setShippingPrice] = useState(shipping1);
//   const [selectedShippingOption, setSelectedShippingOption] =
//     useState("option1");

//     const sumTotlePrice = (calculateTotal() + shippingPrice).toFixed(2);

//     const handleShippingOption = (option) => {
//       if (option === "option1") {
//         setShippingPrice(shipping1);
//       } else if (option === "option2") {
//         setShippingPrice(shipping2);
//       }
//     };
  
//     const handleShippingOptionChange = (event) => {
//       setSelectedShippingOption(event.target.value);
//       handleShippingOption(event.target.value); // קריאה לפונקציה handleShippingOption כאשר מתבצע שינוי בבחירת המשתמש
//     };
//   return (
//     <div dir="rtl">
    
//       {/* כאוונטר סל קניות */}
//       { cartCount > 0 &&(
//         <Badge
//           pill
//           bg="danger"
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "65px",
//             fontSize: "8px",
//           }}
//         >
//           {cartCount}
//         </Badge>
//       )}
//       {/* כאוונטר מועדפים */}
//       {cartCountFavourites > 0 && (
//         <Badge
//           pill
//           bg="danger"
//           style={{
//             position: "absolute",
//             top: "11px",
//             left: "132px",
//             fontSize: "8px",
//           }}
//         >
//           {cartCountFavourites}
//         </Badge>
//       )}

//       <Appcontext.Provider
//         value={{
//           setIsLoggedIn,
//           isLoggedIn,
//           data,
//           // סל קניות
//           addToCart,
//           cartCount,
//           cart,
//           removeFromCart,
//           show,
//           calculateTotal,
//           handleClose,
//           handleShow,
//           userCart: globalUserCart,
//           fetchUserCart,
//           token,
//           setToken,
//           // מועדפים
//           addTofavourites,
//           buttonColors,
//           handleClick,
//           favourites,
//           removeFromfavourites,
//           // עמוד תשלום
//           selectedShippingOption,
//           handleShippingOption,
//           handleShippingOptionChange,
//           shipping1,
//           shipping2,
//           shippingPrice,
//           sumTotlePrice
//         }}
//       >

//         <AppRouters />
//         <ToastContainer />
//         <WhatsAppButton />
//       </Appcontext.Provider>
//     </div>
//   );
// }

// export default App;



import AppRouters from "./components/routers/appRouters";
import { useEffect, useState } from "react";
import { Appcontext } from "./context/context";
import Badge from "react-bootstrap/Badge";
import "./App.css";
import WhatsAppButton from "../whatsAppButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL, TOKEN_KEY, doApiGet, doApiMethod } from "./services/apiServices";


function App() {
  const [data, setData] = useState(null);
  const [userCart, setUserCart] = useState([]);
  let [token, setToken] = useState(localStorage[TOKEN_KEY]);
  const [globalUserCart, setGlobalUserCart] = useState([]);
  // עגלת קניות
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState({});
  // מועדפים
  const [favourites, setFavourites] = useState([]);
  const [cartCountFavourites, setCartCountFavourites] = useState(0);
  const [buttonColors, setButtonColors] = useState({style:
    // ... your existing button colors
     "goldenrod"// Change this to your preferred default color
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (token) {
      fetchUserCart();
      fetchUserFavourites();
      setIsLoggedIn(true);
      console.log("llllll")
      // Fetch user data and favorites here if needed
    }
  }, [token]);


  const fetchUserCart = async () => {
    try {
      if (token) {
        console.log(token);
        const url = API_URL + "/users/userInfo";
        const data = await doApiGet(url);
        setData(data);
        setUserCart(data.cart_ar);
        setGlobalUserCart(data.cart_ar);
      
    
        // Calculate the total quantity of all products
        let totalQuantity = 0;
        for (const product of data.cart_ar) {
          totalQuantity += product.count;
        }
  
        setCartCount(totalQuantity);
        setCart(data.cart_ar);
        
        
      } else {
        // If not logged in, reset the cart
        setCart([]);
        setCartCount(0);
      }
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  const fetchUserFavourites = async () => {
    try {
      const url = API_URL + "/users/userInfo";
      const data = await doApiGet(url);
      setFavourites(data.favs_ar);
      setCartCountFavourites(data.favs_ar.length)
      // Update the button colors based on fetched favourites
      const newButtonColors = {};
      data.favs_ar.forEach((product) => {
        newButtonColors[product._id] = "red";
      });
      setButtonColors(newButtonColors);
    } catch (error) {
      console.error("Error fetching user favourites:", error);
    }
  };
  
 


  // סל קניות
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };


  

  const addToCart = async (product, quantity) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    let updatedCart = [];
  
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, count: item.count + quantity } : item
      );
      setCart(updatedCart);
    } else {
      updatedCart = [...cart, { ...product, count: quantity }];
      setCart(updatedCart);
    }
  
    setCartCount((prevCount) => prevCount + quantity);
    setQuantity(1);
    const token = localStorage[TOKEN_KEY];
    if (token) {
      const url = API_URL + "/users/updateCart";
      const userCartResponse = await doApiMethod(url, "PATCH", { cart_ar: updatedCart });
      setUserCart(userCartResponse);
      setGlobalUserCart(userCartResponse);
    }
  
    handleShow();
  };
  
  
  // const removeFromCart = async (product) => {
  //   const updatedCart = cart.map((item) =>
  //     item._id === product._id ? { ...item, count: item.count - 1 } : item
  //   );
  //   const filteredCart = updatedCart.filter((item) => item.count > 0);
  //   setCart(filteredCart);
  //   setCartCount((prevCount) => prevCount - 1);
  
  //   // Check if user is logged in
  //   const token = localStorage[TOKEN_KEY];
  //   if (token) {
  //     const url = API_URL + "/users/updateCart";
  //     const userCartResponse = await doApiMethod(url, "PATCH", { cart_ar: filteredCart });
  //     setUserCart(userCartResponse);
  //     setGlobalUserCart(userCartResponse);
  //   }
  // };

  const removeFromCart = async (product) => {
    const updatedCart = cart.map((item) =>
      item._id === product._id
        ? { ...item, count: (item.count || 0) - 1 }
        : item
    );
    const filteredCart = updatedCart.filter((item) => item.count > 0);
    setCart(filteredCart);
  
    const newCartCount = filteredCart.reduce((total, item) => total + (item.count || 0), 0);
    setCartCount(newCartCount);
  
    // Update personal quantities
    const newQuantities = { ...quantities };
    if (newQuantities[product._id]) {
      newQuantities[product._id] -= 1;
    }
    setQuantities(newQuantities);
  
    // Check if user is logged in
    const token = localStorage[TOKEN_KEY];
    if (token) {
      const url = API_URL + "/users/updateCart";
      const userCartResponse = await doApiMethod(url, "PATCH", { cart_ar: filteredCart });
      setUserCart(userCartResponse);
      setGlobalUserCart(userCartResponse);
    }
  };
  
  
  
  
  

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].count;
    }
    return total;
  };

  //  מועדפים
  const handleClick = async (id, product) => {
    const isRed = buttonColors[id] === "red";
  
    if (isRed) {
      await removeFromfavourites(id);
    } else {
      await addTofavourites(product);
    }
  
    setButtonColors((prevColors) => ({
      ...prevColors,
      [id]: isRed ? "" : "red",
    }));
  };
  
  const addTofavourites = async (product) => {
    const productId = product._id;
  
    if (buttonColors[productId] === "red") {
      await removeFromfavourites(productId);
      return;
    }
  
    const updatedFavourites = [...favourites, product];
  
    setFavourites(updatedFavourites);
    setCartCountFavourites(cartCountFavourites + 1);
  
    const token = localStorage[TOKEN_KEY];
    if (token) {
      const url = API_URL + "/users/updateFavs";
      await doApiMethod(url, "PATCH", { favs_ar: updatedFavourites });
    }
  
    setButtonColors((prevColors) => ({
      ...prevColors,
      [productId]: "red",
    }));
  };
  
  const removeFromfavourites = async (id) => {
    const updatedFavourites = favourites.filter((item) => item._id !== id);
  
    setFavourites(updatedFavourites);
    setCartCountFavourites(updatedFavourites.length);
  
    const token = localStorage[TOKEN_KEY];
    if (token) {
      const url = API_URL + "/users/updateFavs";
      await doApiMethod(url, "PATCH", { favs_ar: updatedFavourites });
    }
  
    setButtonColors((prevColors) => ({
      ...prevColors,
      [id]: "",
    }));
  };
  




  // עמוד תשלום
  const shipping1 = 24.0;
  const shipping2 = 29.9;
  const [shippingPrice, setShippingPrice] = useState(shipping1);
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("option1");

    const sumTotlePrice = (calculateTotal() + shippingPrice).toFixed(2);

    const handleShippingOption = (option) => {
      if (option === "option1") {
        setShippingPrice(shipping1);
      } else if (option === "option2") {
        setShippingPrice(shipping2);
      }
    };
  
    const handleShippingOptionChange = (event) => {
      setSelectedShippingOption(event.target.value);
      handleShippingOption(event.target.value); // קריאה לפונקציה handleShippingOption כאשר מתבצע שינוי בבחירת המשתמש
    };
  return (
    <div dir="rtl">
    
      {/* כאוונטר סל קניות */}
      { cartCount > 0 &&(
        <Badge
          pill
          bg="danger"
          style={{
            position: "absolute",
            top: "10px",
            left: "65px",
            fontSize: "8px",
          }}
        >
          {cartCount}
        </Badge>
      )}
      {/* כאוונטר מועדפים */}
      {cartCountFavourites > 0 && (
        <Badge
          pill
          bg="danger"
          style={{
            position: "absolute",
            top: "11px",
            left: "132px",
            fontSize: "8px",
          }}
        >
          {cartCountFavourites}
        </Badge>
      )}

      <Appcontext.Provider
        value={{
          setIsLoggedIn,
          isLoggedIn,
          data,
          handleIncrement,
          handleDecrement,
          quantity,
          quantities,
          setQuantities,
          // סל קניות
          addToCart,
          cartCount,
          setCartCount,
          cart,
          setCart,
          removeFromCart,
          show,
          calculateTotal,
          handleClose,
          handleShow,
          userCart: globalUserCart,
          setUserCart,
          fetchUserCart,
          token,
          setToken,
          // מועדפים
          addTofavourites,
          buttonColors,
          handleClick,
          favourites,
          removeFromfavourites,
          // עמוד תשלום
          selectedShippingOption,
          handleShippingOption,
          handleShippingOptionChange,
          shipping1,
          shipping2,
          shippingPrice,
          sumTotlePrice
        }}
      >

        <AppRouters />
        <ToastContainer />
        <WhatsAppButton />
      </Appcontext.Provider>
    </div>
  );
}

export default App;