
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

import React from 'react'
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";


const Card = ({title, subtitle, price, image}:any) => {
  return (
    <>
          <div className="flex p-5 mb-5 hover:shadow-lg h-fit items-start flex-col gap-2.5">
            <div className="flex p-2.5 flex-col justify-center items-center gap-2.5">
              <Image src={urlForImage(image).url()} alt="Product image" width={300} height={400}/>
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
