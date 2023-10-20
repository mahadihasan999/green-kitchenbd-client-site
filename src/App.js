import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider";
import DeliveryProvider from "./contexts/DeliveryProvider";
import OrderProvider from "./contexts/OrderProvider";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useState } from "react";

import { MdOutlineTopic } from "react-icons/md";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import OrderSuccessfulScreen from "./screens/OrderSuccessfulScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import useAuth from "./hooks/useAuth";


function App() {
  const [changeHeader, setChangeHeader] = useState(false);
  const onChangeHeader = () => {
    if (window.scrollY >= 10) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  const user =1;

  const PrivateWrapper = ({ auth }) => {
    return user ? <Outlet /> : <Navigate to="/signin" />;
  };
  return (
    <>
      <Router>
        <AuthProvider>
          <OrderProvider>
            <DeliveryProvider>
              <Navbar></Navbar>
              <FloatingWhatsApp
                phoneNumber="+8801979756069"
                accountName="Greeen Kitchen"
                avatar="https://res.cloudinary.com/dmh446knl/image/upload/v1697774208/tkuafwavujksrtbihwrx.png"
              />
              {changeHeader && (
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out  bottom-5 left-5 fixed"
                  id="btn-back-to-top"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    ></path>
                  </svg>
                </button>
              )}

              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/signin" element={<SignInScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route exact path="/foods/:name" element={<FoodDetailScreen />} />
                
                <Route element={<PrivateWrapper />}>
                <Route exact path="/orders" element={<PlaceOrderScreen />} />
                  <Route exact path="/order-successful" element={<OrderSuccessfulScreen />} />
                  {/* <Route exact path="/admin" element={<Admin />} /> */}

                </Route>

                {/* <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
              <PrivateRoute exact path="/foods/:title"><FoodDetailScreen /></PrivateRoute>
              <PrivateRoute exact path="/orders"><PlaceOrderScreen /></PrivateRoute>
              <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
              <PrivateRoute exact path="Admin"><Admin /></PrivateRoute>
              <Route path="*"><ErrorScreen /></Route> */}
              </Routes>
            </DeliveryProvider>
          </OrderProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
