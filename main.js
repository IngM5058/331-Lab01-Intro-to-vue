const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('These Boots quite dirty');
            return {
                product,
                description
            };

    },
}).mount('#app');