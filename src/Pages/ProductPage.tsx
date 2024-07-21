import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../Store/Store';
import { fetchProductsThunk } from '../Store/ProductsSlice';
import ProductDetails from '../Components/Product-details/ProductDetails';
import ProductsSection from '../Components/Products-section/Products-section';
import Gear from '../Components/Gear/Gear';
import Loader from '../Components/Loader/Loader';


const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string | undefined }>();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!slug) {
    return <p>Product ID is missing</p>;
  }

  const product = data.find(product => {
    return product.slug === slug
  });
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <ProductDetails product={product} />;
      <ProductsSection />
      <Gear />
    </>
  )

};

export default ProductPage;