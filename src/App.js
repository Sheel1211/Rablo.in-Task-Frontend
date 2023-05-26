import "./App.css";
import InputForm from "./components/InputForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { useEffect } from "react";
import { getAllProducts, getFeaturedProducts, getMaxProducts , getMinProducts} from "./actions/product";


function App() {
  const dispatch = useDispatch();
  const {featured, products,maxProducts,minProducts } = useSelector((state) => state.product);

  const {loading}=useSelector((state)=>state.product);
  
  useEffect(() => {
    dispatch(getAllProducts());
    console.log(loading);
    dispatch(getFeaturedProducts());
    dispatch(getMaxProducts(50000));
    dispatch(getMinProducts(5000));

  }, [dispatch]);

  
  

  return (
    <Router>
      {loading ? "":(
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Table products={products} /><InputForm /> </>} />
          <Route path="/featured" element={<Table products={featured}/>}/>
          <Route path="/Max" element={<Table products={maxProducts}/>}/>
          <Route path="/Min" element={<Table products={minProducts}/>}/>
        </Routes>
        
      </>
      )};
    </Router>
  );
}

export default App;
