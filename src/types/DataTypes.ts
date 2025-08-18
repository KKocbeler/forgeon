export interface Variant {
    variantId: string;
    [key: string]: string | number;
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
    images: string[]
    optionValues: {label: string, key: string, values: string[]}[]
    variants: Variant[];
    infoSections: InfoSections[];
    comments: Comments[];
}