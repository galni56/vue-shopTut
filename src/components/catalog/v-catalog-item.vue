<template>
  <div class='v-catalog-item'>

    <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__company">Company: {{product_data.Company}} </p>
        <p class="v-catalog-item__store">{{product_data.category}}</p>
        <p class="v-catalog-item__deliveryDate">{{product_data.category}}</p>
        <p class="v-catalog-item__CreatedDate">{{product_data.category}}</p>

      </div>
    </v-popup>


    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img" @click="productClick">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__company">Company: {{product_data.Company}} </p>
    <p class="v-catalog-item__store">{{product_data.category}}</p>
    <p class="v-catalog-item__deliveryDate">{{product_data.category}}</p>
    <p class="v-catalog-item__CreatedDate">{{product_data.category}}</p>
    <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"
    >
      Show info
    </button>
    <br>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>

<script>
  import vPopup from '../popup/v-popup'
  // import toFix from '../../filters/toFix'

  export default {
    name: "v-catalog-item",
    components: {
      vPopup
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isInfoPopupVisible: false
      }
    },
    // filters: {
    //   toFix,
    //   formattedPrice
    // },
    computed: {},
    methods: {
      productClick() {
        this.$emit('productClick', this.product_data.article)
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__image {
      width: 100px;
    }
  }
</style>
