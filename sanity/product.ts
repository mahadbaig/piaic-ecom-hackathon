export const product = {
    name : 'product',  // This name will be shown used data is fetched
    type : 'document', //document type means model which has multiple fields like title, desc etc
    title : 'Product',
    fields : [          // document fields
        {
            name : 'title',     // data fetching name
            title : 'Title',
            type : 'string'
        }
    ]   
}