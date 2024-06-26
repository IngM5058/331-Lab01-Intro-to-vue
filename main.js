const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks');
        const description = ref('These Socks is quite green.');
        const image = ref('./assets/images/socks_green.jpg');
            return {
                product,
                description,
                image,
            };

    },
}).mount('#app');