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
library.add(fas);

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist/:id" element={<ProductDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/fillform" element={<NewProductFillForm />} />
      </Routes>
    </>
  );
}

export default App;
