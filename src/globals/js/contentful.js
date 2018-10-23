/**
 * ! contentful API details !
 * @ contentful :  It helps you to easily access your Content stored in Contentful with your JavaScript applications
 * @ url : https://contentful.com
 * @ API reference  : https://www.contentful.com/developers/docs/references/content-delivery-api/
 * @ Login : https://app.contentful.com/spaces
 *
 * ! this module is to make call to contnetful api and get the json data based on the content type
 * @ space : This is the space ID. A space is like a project folder in Contentful terms
 * @ accessToken : This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * @ item : This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
 * 
 */

import * as contentful from 'contentful';

export default class Contentful {

  getdata(item){

    const client = contentful.createClient({
      space: 'budcj4bvbace',
      accessToken: '56c6f0194ddc63accf64ea6c67406b1002039c56ca8915e7e4d81e196d3c8285'
    });

    return  client.getEntries({'content_type': item});
  }
}