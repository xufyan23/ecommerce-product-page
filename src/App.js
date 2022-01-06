import { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import Product from './Product/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import productList from '../src/Data';


function App() {
  const [productData, setProductData] = useState([...productList]);
  console.log(productData)
  const [productImages, setProductImages] = useState(productData[0].images);
  console.log(productImages)
  const [activeImage, setActiveImage] = useState(productData[0].images[0].previewImg);
  const [total, setTotal] = useState(0);

  return (
    <div className="">
      <Router>
        <Switch>
          <Route Route path = "/"exact >
            <Header productData={productData} activeImg={activeImage} total={total}/>
            <Product productData={productData} activeImg={activeImage} setActiveImg={setActiveImage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
