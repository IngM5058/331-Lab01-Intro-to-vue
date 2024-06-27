const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Socks');
        const description = ref('These Socks is quite green.');
        const image = ref('./assets/images/socks_green.jpg');
        const inStock = ref(true);
        const inventory = ref(100);
        const onSale = ref(true);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
        ]);

        const sizes = ref([
            { id: 1, size: 'S' },
            { id: 2, size: 'M' },
            { id: 3, size: 'L' },
        ]);

            return {
                product,
                description,
                image,
                inStock,
                inventory,
                onSale,
                details,
                variants,
                sizes,
            };
    },
}).mount('#app');