import { client } from "../../sanity/lib/client"

interface IProduct {
  title : string,
  subtitle : string,
  category : string,
  description : string,
  price : number
}

export const getProductData =async () => {
  // write GROQ query in fetch()
  const res = await client.fetch(`*[_type == 'product']{
    title,
    description,
    subtitle,
    price,
    category
  }`);
  return res;
}

export default async function Home() {

  const data:IProduct[] = await getProductData();
  

  return (
    <>
      {data.map((item) => {
        return(

          <h1>{item.title}</h1>      
        )
      })}
    </>
  )
}
