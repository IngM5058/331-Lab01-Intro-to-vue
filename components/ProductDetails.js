const productDetails = {
    template: 
    /*html*/
    `
        
        <h2>Product Details</h2>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        <button></button>
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