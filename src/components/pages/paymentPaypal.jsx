import { useContext } from "react";
import { Appcontext } from "../../context/context";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PaymentPaypal = () => {
  const { sumTotlePrice } = useContext(Appcontext);
const dolar = 3.66;

  const createOrderDate = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    return formattedDate;
  };

  const paypalOptions = {
    "client-id": "Ac2KXCg9SQIJQdEKUR1K7NX4ETWwa0FL1SFTg8OjBRDaN_LeCnOmEEuucaOfF9NgmGaXBJ_WirQS7lOn",
  };

  const handleApprove = (data, actions) => {
    // ניתוב לאחר אישור התשלום
    // ניתן לבצע כאן פעולות נוספות, כגון שמירת הפרטים במסד נתונים
    console.log("Payment approved:", data);
  };

  const sum = (sumTotlePrice / dolar).toFixed(2);
  return (
    <div className="container">
      <div className="row  justify-content-center ">
        <div className="col-7 mt-5  py-5">
          <p className="text-center priceTotlePaypal fw-bold">
            תאריך הזמנה: {createOrderDate()}
          </p>
          <p className="pb-3 text-center priceTotlePaypal fw-bold">
            סך הכל: {sumTotlePrice} ₪
          </p>

          <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: sum,
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
        />
      </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default PaymentPaypal;
