const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks');
        const description = ref('These Socks is quite green.');
        const image = ref('./assets/images/socks_green.jpg');
        const inStock = ref(true);
        const inventory = ref(100);
            return {
                product,
                description,
                image,
                inStock,
                inventory,
            };

    },
}).mount('#app');