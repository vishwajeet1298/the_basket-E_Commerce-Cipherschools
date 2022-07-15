import React, { useEffect, useState } from 'react'
import "./CategoriesData.css"

function CategoriesData() {

  const [productsdata, setProductsData] = useState([])
  console.log(productsdata);

  useEffect(() => {
    fakestore();

  }, [])

  const fakestore = async () => {
    const response1 = await fetch("https://fakestoreapi.com/products");
    //  console.log(response);

    //convert data into OBJECT 
    const jsonData1 = await response1.json();
    //console.log(jsonData);
    setProductsData(jsonData1);

  }
  //fakestore();


  return (

    <div>
      <div className="products_container">
        {productsdata.map((values)=>(
          <div className='products_box'>
          <div className='products_data'>
          <div className='product_image'>
                <img src={values.image}  
                alt="Products" />
              </div>
              <div className='product_details'>
                  <h6 className='product_title'>{values.title} </h6>
                  <p className='product_description'>{values.description}</p>
                  <p className='product_price'>Price:  {values.price}</p>
                  <p className='product_rating'>Rating: {values.rating.rate}</p>
                  <p className='product_count'>Items Left: {values.rating.count}</p>
              </div>
          </div>
        </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default CategoriesData