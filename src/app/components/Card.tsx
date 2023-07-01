
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import React from 'react'
import {client} from '../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";

const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}

const Card = ({title, subtitle, price, image}:any) => {
  return (
    <>
      
        
            <div className="flex lg:w-1/3 md:w-1/3 w-full p-2.5 h-fit items-start flex-col gap-2.5">
            <div className="flex p-2.5 flex-col justify-center items-center gap-2.5">
              <Image src={urlFor({image}).url()} alt="Product image"/>
            </div>
            <div className="flex flex-col p-2.5 gap-2.5 items-start">
              <h1 className="text-xl text-bold">{title}</h1>
              <p className="text-gray-400">{subtitle}</p>
              <p className="text-xl">${price}</p>
              <Button>
                <ShoppingCart /> Add To Cart
              </Button>
            </div>
          </div>
        
     
    </>
  );
};

export default Card;
