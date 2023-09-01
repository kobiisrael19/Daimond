import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import { RotatingLines } from  'react-loader-spinner'
import Page404 from './page404';
import Layout from './layout';
import Home from '../pages/home';
import Chains from '../pages/categories/chains';
import Rings from '../pages/categories/rings';
import Bracelets from '../pages/categories/bracelets';
import Earrings from '../pages/categories/earrings';
import Sunglasses from '../pages/categories/sunglasses';
import Man from '../pages/categories/man';
import ModleCart from '../pages/categories/modleCart';
import ShoppingCart from '../pages/categories/shoppingCart';
import CategoriesAdmin from '../admin/categoriesAdmin';
import UsersAdmin from '../admin/usersAdmin';
import JewelryAdmin from '../admin/jewelryAdmin';
import HaderAdmin from '../admin/haderAdmin';
import AddFrom from '../admin/addFrom';
import AdditFrom from "../admin/additFrom";
import AddJewelryFrom from '../admin/addJewelryFrom';
import ProductInfo from '../pages/categories/productInfo';
import Fivorit from '../pages/categories/fivorit';
import About from '../footer/about';
import Accessibility from '../footer/accessibility';
import Terms from '../footer/terms';
import Payment from '../pages/payment';
import PaymentPaypal from '../pages/paymentPaypal';
import CityListPage from '../pages/categories/cityListPage';
import PersonalArea from '../hader/personalArea';

const AppRouters = () => {

  const [showSpinner, setShowSpinner] = useState(false);

  // פונקציה שמתבצעת בכל מעבר בין הקומפוננטות
  const switchComponents = () => {
    setShowSpinner(true); // הצגת הספינר
    // הפסקת הספינר (ניתן לשנות את הזמן של setTimeout כפי שרוצים)
    setTimeout(() => setShowSpinner(false), 
    500);
  };

  useEffect(() => {
    // הוסף event listener לעדכון האובייקט המופיע בקומפוננטה הזו
    window.addEventListener('updateSpinner', switchComponents);

    // הוסף cleanup להסרת ה event listener כשהקומפוננטה נעצרת
    return () => {
      window.removeEventListener('updateSpinner', switchComponents);
    };
  }, []);

  // קוד הספינר מהביבליות React Spinners
  const spinner = (
    <div className="spinner">
    <RotatingLines
  strokeColor="black"
  strokeWidth="5"
  animationDuration="0.75"
  width="50"
  visible={true}
/>
    </div>
  );
  return (
    <Router>
         {showSpinner && spinner} {/* הספינר המופיע בכל מעבר בין הקומפוננטות */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/Sunglasses" element={<Sunglasses />} />
          <Route path="/man" element={<Man />} />
          <Route path="/modleCart" element={<ModleCart />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/fivorit" element={<Fivorit />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Accessibility" element={<Accessibility />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cityListPage" element={<CityListPage />} />
          <Route path="/paymentPaypal" element={<PaymentPaypal />} />
          <Route path="/personalArea" element={<PersonalArea />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
        </Route>
        {/* admin routes */}
        <Route path="/admin/*" element={<HaderAdmin />} />
        <Route path="/admin/categoriesAdmin" element={<CategoriesAdmin />} />
        <Route path="/admin/usersAdmin" element={<UsersAdmin />} />
        <Route path="/admin/jewelryAdmin" element={<JewelryAdmin />} />
        <Route path="/admin/addFrom" element={<AddFrom />} />
        <Route path="/admin/additFrom/:id" element={<AdditFrom/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
