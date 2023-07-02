// Fetching data from sanity to nextjs
// Clinet connects Next and Sanity
 
import { createClient } from "@sanity/client";

export const client = createClient({
    apiVersion : "2023-06-14",      // taken from sanity studion > vision
    dataset : "production",         
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token : process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
    // API Token generated from sanity management tool and stored in env file manually
    useCdn : true                   // data will cached on CDN
})

// await client.fetch("");