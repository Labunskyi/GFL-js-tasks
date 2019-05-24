<template>
  <div>
    
        <h2>Cart</h2>
        <ul>
            <li v-for="(item, key) in cart_list" v-if="item">{{ productList[key].name }}, x{{ item }}. 
                Total: ${{ productList[key].price * item}} 
                <button type="button" @click='removeFromCart(key)'>Remove</button>
            </li>
        </ul>
        <strong>Total: </strong>${{ total }}
  </div>
</template>

<script>
import Products from '@/store/Products';

export default {
           
            data: function() {
                return {
                productList: Products,
                cart_list: JSON.parse(localStorage.cart || '{}'),
              }
            },
            computed: {
                total: function() {
                    var total = 0;
                    for (var i in this.cart_list) {
                        var prod = this.productList[i];
                        var count = this.cart_list[i];
                        total += prod.price * count;
                    }
                    return total;
                }
            },
            methods: {
                addToCart: function(key){
                    if(void 0 === this.cart_list[key]){
                        this.$set(this.cart_list, key, 1);
                        //this.$set(this.total, this.productList.price);
                    } else {
                        this.cart_list[key]++;
                    }
                    this.saveCart();
                    //console.log(this.cart_list[key]);
                },
                removeFromCart: function(key){
                    this.$delete(this.cart_list, key);
                    //delete this.cart_list[key];
                    this.saveCart();
                },
                saveCart: function(){
                    localStorage.cart = JSON.stringify(this.cart_list);
                }
            },
            components: {
              Products,
            }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
