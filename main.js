const { createApp, ref, computed} = Vue;

createApp({
    setup() {
        const product = ref('Socks');
        const brand =ref('SE 331')
        const description = ref('Bro, trust me, dont buy it.');
        const image = ref('./assets/images/socks_green.jpg');
        const inStock = ref(true);
        function updateStock() {
            inStock.value = !inStock.value;
        }

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
        function updateImage(variantImage) {
            image.value = variantImage;
        }

        const sizes = ref([
            { id: 1, size: 'S' },
            { id: 2, size: 'M' },
            { id: 3, size: 'L' },
        ]);

        const cart = ref(0);
        function addToCart() {
            cart.value += 1;
        }

        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });

            return {
                product,
                brand,
                description,
                image,
                inStock,
                inventory,
                onSale,
                details,
                variants,
                sizes,
                cart,
                addToCart,
                updateImage,
                updateStock,
            }
    }

}).mount('#app');