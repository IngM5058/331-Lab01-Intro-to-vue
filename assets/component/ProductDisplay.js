const productDisplay = {

    template: 
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="">
                </div>
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)" 
                    class="color-circle" 
                    :style="{backgroundColor: variant.color}">
                </div>

                <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
            </div>
        </div>
        
    `,
    setup() {
        // const image = ref('./assets/images/socks_green.jpg');
        // const inStock = ref(true);
        const product = ref('Socks');
        const brand =ref('SE 331')
        const description = ref('made with tear of 13 yo kids');
        function updateStock() {
            inStock.value = !inStock.value;
        }

        const inventory = ref(100);

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);

        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, Sale: true},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, Sale: false},
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

        const onSale = computed(() => {
            return variants.value[selectedVariant.value].Sale;
        });
        function updateSale() {
            onSale.value = !onSale.value;
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
            if (onSale.value == true) { 
            return brand.value + ' ' + product.value + ' ' + 'On Sale';
            }
            else {
                return brand.value + ' ' + product.value;
            }
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
                updateSale,
                updateVariant,
            }
    }
}
