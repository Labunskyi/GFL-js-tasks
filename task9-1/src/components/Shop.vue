<template>
  
  <div id="shop">
   <h1>Shop</h1>
    <router-link to="/">Main</router-link>
        <h2>Products</h2>
        <ul>
            <li v-for="(item, key) in productList">{{ item.name }}, cost: ${{ item.price }}
                <button type="button" @click='addToCart(key)'>Add</button>
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

<style scoped>


</style>
