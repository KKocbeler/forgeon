export interface Variant {
    [key: string]: string | number
    variantId: string;
    price: number;
    stock: number;
    quantity: number;
}

export interface Comments {
    id: string;
    username: string;
    message: string;
    rating: number;
    createdAt: string;
    totalLikes: number
}

export interface InfoSections {
    title: string
    content: string
}

export interface DataTypes {
    id: string
    name: string
    brand: string
    tags: string[]
    isPublished: boolean
    discount: boolean
    adjustible: boolean
    discountRate: number
    stock: number
    image: string
    images: {[key: string]: string[]}
    optionValues: {label: string, key: string, values: string[]}[]
    variants: Variant[];
    infoSections: InfoSections[];
    comments: Comments[];
}