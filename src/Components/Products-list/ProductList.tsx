import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/Store';
import './ProductList.css';
import { useEffect } from 'react';
import { fetchProductsThunk } from '../../Store/ProductsSlice';
import { Link } from 'react-router-dom';

export type ListProps = {
  category: string;
};

const ProductList = ({ category }: ListProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const products = data.filter((product) => product.category === category).reverse();

  return (
    <div>
      {products.length === 0 ? (
        <h2>No {category} Available</h2>
      ) : (
        products.map((product, index) => (
          <div className={`container headphones-list ${index % 2 === 1 ? 'reversed' : ''}`} key={product.id}>
            <picture>
              <source media="(max-width: 500px)" srcSet={product.categoryImage.mobile} />
              <source media="(max-width: 1000px)" srcSet={product.categoryImage.tablet} />
              <img className="list-image" src={product.categoryImage.desktop} alt={product.name} />
            </picture>
            <div>
              <div className="list-info">
                {product.new && <p className="overline ">new product</p>}
                <h2 className="list-h2">{product.name}</h2>
                <p className="list-p">{product.description}</p>
                <Link to={`/product/${product.slug}`}>
                  <button className="button-1">see product</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;