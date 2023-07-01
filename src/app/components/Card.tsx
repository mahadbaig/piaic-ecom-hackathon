import { Image as SanityImage } from "sanity";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";

interface IProduct {
  _id: string;
  title: string;
  subtitle: string;
  category: { name: string };
  description: string;
  price: number;
  image: SanityImage;
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
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
const Card = () => {
  return (
    <>
      {data.map((item) => {
        return (
            <div className="flex w-1/3 p-2.5 h-fit items-start flex-col gap-2.5">
            <div className="flex p-2.5 flex-col justify-center items-center gap-2.5">
              {/* Sanity Image */}
            </div>
            <div className="flex flex-col p-2.5 gap-2.5 items-start">
              <h1 className="text-xl text-bold">{item.title}</h1>
              <p className="text-gray-400">{item.category.name}</p>
              <p className="text-xl">${item.price}</p>
              {/* ShadCN button */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
