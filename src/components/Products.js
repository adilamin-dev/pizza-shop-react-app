import Product from "./Product";

const Products = () => {
  return (
    <>
        <div className='container'>
            <h3 className='p-heading'>This is product list.</h3>
            <div className='products-items'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    </>
  )
}

export default Products