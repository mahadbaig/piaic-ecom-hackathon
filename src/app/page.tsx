import { Image as SanityImage } from "sanity";
import { client } from "../../sanity/lib/client";
import Navbar from "./components/Navbar";

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
  // write GROQ query in fetch()
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

  return (
    <>

      <div className="flex justify-between">
        {data.map((item) => {
          return (
            <div className="flex w-1/3 p-2.5 h-fit items-start flex-col gap-2.5">
              <h1 className="text-xl text-bold">{item.title}</h1>
              <p className="text-gray-400">{item.category.name}</p>
              <p className="text-xl">${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
