const { createApp, ref, computed} = Vue;

createApp = createApp({
    setup() {
        const cart = ref(0);
        return {
            cart
        }
    }
})
app.component('product-display', productDisplay);
app.mount('#app');