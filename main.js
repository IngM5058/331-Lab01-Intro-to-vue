const { createApp, ref, computed, reactive} = Vue;

const app = createApp({
    setup() {
        const cart = ref([]);
        const productCounter = ref(0);
        const premium = ref(true);

        function updateCart(id) {
            if (cart.value.includes(id)) {
                updateCount(id);
            }
            else {
                cart.value.push(id);
                updateCount();
            }
            
        }

        function updateCount() {
            productCounter.value++;
        }

        function removeCart(id) {
            productCounter.value--;
            if (cart.value.includes(id)) {
                cart.value.splice(cart.value.indexOf(id), 1);
            }
        }

        return {
            cart,
            productCounter,
            premium,
            updateCart,
            updateCount,
            removeCart
        }
    }
})
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
.mount('#app');