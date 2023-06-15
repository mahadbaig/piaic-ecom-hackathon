import { defineField } from "sanity";

export const product = {
    name : 'product',  // This name will be shown used data is fetched
    type : 'document', //document type means model which has multiple fields like title, desc etc
    title : 'Product',
    fields : [          // document fields
        {
            name : 'title',     // data fetching name shown in JSON
            title : 'Title',    // Display name in Sanity Studio
            type : 'string'
        },
       defineField({
            name : 'category',
            title : 'Category',
            type : 'reference',
            to : [
                {type : 'category'}
            ]
           
        }),
        {
            name : 'subtitle',
            title : 'Sub Title',
            type : 'string'
        },
        {
            name : 'description',
            title : 'Description',
            type : 'string'
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image'
        },
        {
            name : 'price',
            title : 'Price',
            type : 'number'
        },
    ]   
}