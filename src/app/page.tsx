import { Image as SanityImage } from "sanity";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Section from "./components/Section";

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

  return (
    <>
      <div className="flex w-full h-fit p-2.5 justify-between items-start">
        <div className="w-1/2 flex flex-col px-2.5 py-12 justify-between items start">
          <div className="flex flex-col items-start gap-7">
            <div className="p-1.5 text-blue-500 text-bold bg-blue-300">
              Sale 70%
            </div>
            <h1 className="text-bold text-6xl">
              An Industrial Take On Streetwear
            </h1>
            <p className="text-lg">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            {/* ShadCN button*/}
          </div>
          <div className="flex px-5 justify-between items-center">
            <Image src={"/vercase.png"} width={92} height={30} alt="vercase" />
            <Image src={"/instyle.png"} width={92} height={30} alt="in-stlye" />
            <Image src={"/bustle.png"} width={92} height={30} alt="bustle" />
            <Image src={"/bazaar.png"} width={92} height={30} alt="bazaar" />
          </div>
        </div>
      </div>

      <Section title="Promotions" heading="Our Promotion Events" />

      <div className="flex items-start gap-5 p-2.5">
        <div className="flex p-2.5 flex-col items-start gap-5">
          <div className="flex p-2.5 items-center gap-2.5">
            <div className="flex flex-col justify-center items-center gap-2.5">
              <h1 className="text-4xl text-bold">Get upto 60%</h1>
              <p className="text-lg">For the summer season</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <Image
                src={"/promo1.png"}
                width={250}
                height={200}
                alt="promo 1"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2.5">
            <h1 className="text-4xl text-bold">Get 30% Off</h1>
            <p className="text-lg">USE PROMO CODE</p>
            <div className="px-5 py-2.5 bg-gray-600 text-bold">
              DINEWEEKENDSALE
            </div>
          </div>
        </div>

        <div className="flex p-2.5 items-start gap-5">
          {promo.map((item) => {
            return (
              <div className="flex py-2.5 flex-col items-start gap-2.5">
                <div className="flex p-2.5 flex-col items-start gap-2.5">
                  <p>{item.title}</p>
                  <p className="text-bold">{item.price}</p>
                </div>
                <div className="flex py-2.5 justify-center items-start gap-2.5">
                  {/* Sanity product image */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
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
                {/* ShadCN button */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
