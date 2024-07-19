import Category from "../Components/Category/Category"
import Gear from "../Components/Gear/Gear"
import ProductList from "../Components/Products-list/ProductList"
import ProductsSection from "../Components/Products-section/Products-section"


const Speakers = () => {
  return (
    <>
      <Category category="speakers" />
      <ProductList category="speakers" />
      <ProductsSection />
      <Gear />
    </>
  )
}

export default Speakers