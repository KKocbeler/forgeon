export interface Product {
    id: string
    name: string
    brand: string
    image: string
    discountRate: number
    variant: {
        [key: string] : string | number 
        price: number
        quantity: number
        stock: number
    }
}