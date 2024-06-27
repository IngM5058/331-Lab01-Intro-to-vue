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
app.component('product-display', productDisplay);
app.mount('#app');