const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Sock');
            return {
                product
            };
    }
    
}).mount('#app');