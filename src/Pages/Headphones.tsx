import Category from "../Components/Category/Category"
import Gear from "../Components/Gear/Gear"
import ProductList from "../Components/Products-list/ProductList"
import ProductsSection from "../Components/Products-section/Products-section"

const Headphones = () => {
  return (
    <>
      <Category category="headphones" />
      <ProductList category="headphones" />
      <ProductsSection />
      <Gear />
    </>

  )

}

export default Headphones