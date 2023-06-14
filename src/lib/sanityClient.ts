// Fetching data from sanity to nextjs
// Clinet connects Next and Sanity
 
import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion : "2023-06-14",      // taken from sanity studion > vision
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,         
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn : true                   // data will cached on CDN
})

// await client.fetch();