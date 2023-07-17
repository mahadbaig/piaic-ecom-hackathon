import Link from "next/link";
import { client } from "../../lib/sanityClient";
import Card from "../components/Card";

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

const data = await getProductData();
console.log(data);

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row flex-wrap justify-between mt-16 mb-16">
      {data.map((item: any) => {
        return (
          <>
            
              <Card
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                _id = {item._id}
              />
           
          </>
        );
      })}
    </div>
  );
};

export default page;
