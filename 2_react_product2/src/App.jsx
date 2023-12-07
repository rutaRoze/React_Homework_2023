import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import HomePage from "./components/HomePage";
import Contacts from "./components/Contacts";
import ProductDetails from "./components/ProductDetails";
import ErrorPage from "./components/ErrorPage";
import NewProductFillForm from "./components/NewProductFillForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Login from "./authentication/Login";
import UserProfile from "./authentication/UserProfile";
// import Authorization from "./authentication/Auhorization";
// import PERMISSIONS from "./authentication/permissions";
import Authentication from "./authentication/Authentication";
library.add(fas);







function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist/:id" element={<ProductDetails />} />
        {/* <Route
          element={
            <Authorization permissions={[PERMISSIONS.CAN_VIEW_CONTACTS]} />
          }
        > */}
          <Route path="/contacts" element={<Contacts />} />
        {/* </Route> */}
        <Route path="*" element={<ErrorPage />} />
        {/* <Route
          element={
            <Authorization
              permissions={[PERMISSIONS.CAN_VIEW_NEWPRODUCTFORM]}
            />
          }
        > */}
          <Route path="/fillform" element={<NewProductFillForm />} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <Authentication>
              <UserProfile />
            </Authentication>
          }
        />
      </Routes>
    </>
  );
}

export default App;
