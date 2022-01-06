import {useState} from 'react';
import './Product.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import Container from 'react-bootstrap/esm/Container';
import ProductInfo from '../ProductInfo/ProductInfo';

const Product = ({ productData, activeImg, setActiveImg }) => {

  return (
    <Container>
      <div className="product-block">
        <div className="product-img-block">
          <ImageSlider images={productData[0].images} setActiveImg={setActiveImg} activeImg={activeImg} />
        </div>
        <div className="product-info-text">
          <ProductInfo  productData={productData}/>
        </div>
      </div>
    </Container>
  );
};

export default Product;
