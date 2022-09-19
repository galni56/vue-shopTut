import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
      .then((products) => {
        products= products.data
        function compare( a, b ) {
          const date1 = new Date(a.DeliveryDate);
          const date2 = new Date(b.DeliveryDate);

          if ( date1 < date2 ){
            return -1;
          }
          if ( date1 > date2 ){
            return 1;
          }
          return 0;
        }

        products.sort( compare );
        commit('SET_PRODUCTS_TO_STATE', products);
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
}