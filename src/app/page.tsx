import { Image as SanityImage } from "sanity";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Section from "./components/Section";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

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

export default async function Home() {
  const data: IProduct[] = await getProductData();
  const showcase: IProduct[] = [data[0], data[1], data[2]];
  const promo: IProduct[] = [data[3], data[4]];
  console.log(showcase[0].title);

  return (
    <>
      <div className="flex w-full lg:flex-row md:flex-row flex-col h-fit p-2.5 justify-between items-start">
        <div className="lg:w-1/2 md:w-1/2 w-full space-between flex flex-col px-2.5 py-12 justify-between items-start">
          <div className="flex flex-col items-start gap-7">
            <div className="py-1.5 px-2.5 text-blue-700 text-bold bg-blue-300">
              Sale 70%
            </div>
            <h1 className="text-bold lg:text-7xl text-5xl">
              An Industrial Take On Streetwear
            </h1>
            <p className="lg:text-2xl md:text-2xl text-xl">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            {/* ShadCN button*/}
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row mt-16 w-full justify-between items-center">
            <div className="flex justify-between w-full">
              <Image
                src={"/vercase.png"}
                width={92}
                height={30}
                alt="vercase"
              />
              <Image
                src={"/instyle.png"}
                width={92}
                height={30}
                alt="in-stlye"
              />
            </div>
            <div className="flex justify-between w-full">
              <Image src={"/bustle.png"} width={92} height={30} alt="bustle" />
              <Image src={"/bazaar.png"} width={92} height={30} alt="bazaar" />
            </div>
          </div>
        </div>

        <div>
          <Image src={"/hero.png"} width={500} height={500} alt="hero" />
        </div>
      </div>

      <Section title="Promotions" heading="Our Promotion Events" />

      <div className="flex lg:flex-row flex-col items-start gap-5 p-2.5">
        <div className="flex p-2.5 flex-col items-start gap-5 lg:w-1/2 w-full ">
          <div className="flex h-52 p-2.5 items-center justify-between gap-2.5 bg-gray-400 w-full">
            <div className="flex flex-col justify-center items-center w-full gap-2.5">
              <h1 className="text-4xl text-bold">Get upto 60%</h1>
              <p className="text-lg">For the summer season</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <Image
                src={"/promo1.png"}
                width={800}
                height={300}
                alt="promo 1"
              />
            </div>
          </div>
          <div className="flex flex-col py-2.5 h-52 justify-center items-center gap-2.5 w-full bg-gray-900 text-white">
            <h1 className="text-4xl text-bold">Get 30% Off</h1>
            <p className="text-lg">USE PROMO CODE</p>
            <div className="px-5 py-2.5 bg-gray-600 text-bold">
              DINEWEEKENDSALE
            </div>
          </div>
        </div>

        <div className="flex w-full p-2.5 items-start gap-5 lg:w-1/2 justify-between">
          {promo.map((item) => {
            return (
              <div className="flex py-2.5 flex-col items-start gap-2.5 w-full ">
                <div className="flex p-2.5 flex-col items-start gap-2.5">
                  <p>{item.title}</p>
                  <p className="text-bold">${item.price}</p>
                </div>
                <div className="flex py-2.5 justify-center items-start gap-2.5">
                  {/* Sanity product image */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Section title="Our Products" heading="Check What We Have" />

      <div className="flex flex-col lg:flex-row md:flex-row justify-between">
        {showcase.map((item) => {
          return (
            <div className="flex w-1/3 p-2.5 h-fit items-start flex-col gap-2.5">
              <div className="flex p-2.5 flex-col justify-center items-center gap-2.5">
                {/* Sanity Image */}
              </div>
              <div className="flex flex-col p-2.5 gap-2.5 items-start">
                <h1 className="text-xl text-bold">{item.title}</h1>
                <p className="text-gray-400">{item.category.name}</p>
                <p className="text-xl">${item.price}</p>
                {/* <Button>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add To Cart
                </Button> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
