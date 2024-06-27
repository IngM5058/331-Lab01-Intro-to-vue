const { createApp, ref, computed} = Vue;

createApp = createApp({
    setup() {
        const cart = ref(0);
        const premium = ref(true);
        return {
            cart,
            premium,
        }
    }
})
app.components('product-display', productDisplay);
app.components('product-details', productDetails);
app.mount('#app');