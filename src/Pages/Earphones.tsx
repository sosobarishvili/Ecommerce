import Category from "../Components/Category/Category"
import Gear from "../Components/Gear/Gear"
import ProductList from "../Components/Products-list/ProductList"
import ProductsSection from "../Components/Products-section/Products-section"


const Earphones = () => {
  return (
    <>
      <Category category="earphones" />
      <ProductList category="earphones" />
      <ProductsSection />
      <Gear />
    </>
  )

}

export default Earphones