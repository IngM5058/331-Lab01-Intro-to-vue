const { createApp, ref, computed} = Vue;

createApp({
    setup() {
        const product = ref('Socks');
        const brand =ref('SE 331')
        const description = ref('made with tear of 13 yo kids');
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
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
        ]);
        function updateImage(variantImage) {
            image.value = variantImage;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });

        const selectedVariant = ref(0);
        function updateVariant(index) {
            selectedVariant.value = index;
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
                title,
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