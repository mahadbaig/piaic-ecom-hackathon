import React from "react";
import { client } from "../../../lib/sanityClient";
import { Image } from "sanity";

interface IProduct {
  _id: string;
  title: string;
  subtitle: string;
  category: { name: string };
  description: string;
  price: number;
  image: Image;
}

const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]{
  
        title,
            description,
            subtitle,
            price,
            image,
            category -> { name },
            _id
      }`);
  return res;
};
const data: IProduct[] = await getProductData();

const page = (params) => {
  const id = params.params.product;
  let title , description , subtitle, price, image, category;


  data.map((item) => {
    if(item._id == id){
      title = item.title
      description = item.description
      subtitle = item.subtitle
      price = item.price
      image = item.image
      category = item.category.name
    }
  })
  
  return(
    <h1>{title}</h1>
  )
  
  
  
};


export default page;
