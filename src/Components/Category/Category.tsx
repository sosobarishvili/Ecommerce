import './Category.css'

type Props = {
  category: string
}

const Category = ({ category }: Props) => {
  return (
    <div className="category-container">
      <h2 className='category-h2'>{category}</h2>
    </div>

  )
}

export default Category