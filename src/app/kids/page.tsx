import { client } from "../../lib/sanityClient";
import { Image } from "sanity";
import Card from "../components/Card";

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
  const res =
    await client.fetch(`*[_type == "product" && category->name == "Kids"]{
  
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
console.log(data);

const page = () => {
  return(
    <div className="flex flex-col lg:flex-row md:flex-row flex-wrap justify-between">
        {
            data.map((item) => {
                return(
                  <>
                  <Card
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    image={item.image}
                    _id = {item._id}
                  />
                </>
                )
            })
        }
    </div>
  ) 

};

export default page;