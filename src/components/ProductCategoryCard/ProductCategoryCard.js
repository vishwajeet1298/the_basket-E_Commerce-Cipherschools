import React, { useEffect, useState } from 'react'
import "./ProductCategoryCard.css"
import electronics_image from "../images/electronics.jpg"
import jewellery_image from "../images/jewellery2.png"
import womensfashion from "../images/womensfashion.jpg"
import mensfashion from "../images/mensfashion.jpg"
import banner from "../images/banner2.jpg"


// const ProductCategoryCard = () => 
function ProductCategoryCard() {

  //creating state variable
  const [category, setCategory] = useState([])
  console.log(category);

  useEffect(() => {
    fakestore();

  }, [])

  const categoriesData1 = [
    {
      iconImage: [electronics_image],
      title: "Electronics"
      
    },
    {
      iconImage: [jewellery_image],
      title: "Jewellery"
    },
    {
      iconImage: [mensfashion],
      title: "Men's Fashion"
    },
    {
      iconImage: [womensfashion],
      title: "Women's Fashion"
    }
  ]


  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    //  console.log(response);

    //convert data into OBJECT 
    const jsonData = await response.json();
    //console.log(jsonData);
    setCategory(jsonData);

  }
  //fakestore();
  return (
    <>
      <div className='banner_container'><img src={banner} alt="Banner_Image" /> </div>
      <div className='category_container'>
        {categoriesData1.map((value,key)=>
        (
          
          <div className='box'>
            <img src={value.iconImage} alt="Category" />
            <div><p className='category_title'>{value.title}</p></div>
          </div> 
        ))}
      </div>
      {/* <div className='category_title'><p>{value.title}</p></div> */}
      

    </>
  )
}

export default ProductCategoryCard