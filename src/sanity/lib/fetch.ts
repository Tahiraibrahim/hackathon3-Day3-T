import { createClient } from "next-sanity";


const client = createClient({
    projectId : "9cs6yn3u",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-01-01"
})

export async function sanityFetch({querry,params = {}}: {querry : string ,params?: any}){
    return await client.fetch(querry,params)
}