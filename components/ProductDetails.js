const productDetails = {
    template: 
    /*html*/
    `
        
        <h2>Product Details</h2>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
    `,

    setup () {
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);

        return {
            details
        }
    }
}