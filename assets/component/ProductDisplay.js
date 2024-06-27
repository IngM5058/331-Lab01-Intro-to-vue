const productDisplay = {

    template: 
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- image goes here -->
                    <img :src="image" alt="product" />
                </div>
            </div>

            <!-- Product Info -->
            <div class="product-info">
                <h1><a :href="'http://www.camt.cmu.ac.th'">{{title}}</a></h1>
                <p>{{description}}</p>
            </div>

            <!-- Stock Button -->
            <div class="StockButton">
                <button class="button" @click="updateStock"v-if="inStock">
                    In Stock
                </button>

                <button class="button" @click="updateStock"v-else>
                    Out of Stock
                </button>
            </div>
            
            <!-- Shipping -->
            <p>Shipping: {{shipping}}</p>

            <img class="out-of-stock-image" :disabled='inStock' src="assets/images/inStock.png" alt="" :class="{disabledButton: !inStock}" style="width: 20%; height: 20%">

            <p v-if="onSale">On Sale</p>
            <p v-else></p>

            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>

            <!-- Color Circle -->
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" 
                class="color-circle" :style="{backgroundColor: variant.color}">
            </div>

            <!-- Empty space between Color Circle and size-->
            <p></p>

            <div v-for="size in sizes" :key="size.id">
                {{size.size}}
            </div>

            <!-- Add to Cart Button -->
            <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add to Cart</button>     
        </div>
    `,
    props: {
        premium: Boolean
    },
    setup(props) {
        // const image = ref('./assets/images/socks_green.jpg');
        // const inStock = ref(true);
        const shipping = computed(() => {
            if (premium) {
                return 'Free';
            }
            else {
                return 30;
            }
        });
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
                shipping
            }
    }
}
