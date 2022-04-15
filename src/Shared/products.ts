type FurnitureProductKinds = 'sofa' | 'bed' | 'table' | 'tv_stand' | 'wardrobe' | 'cabinet' | 'dresser' | 'other'
type ElectronicProductKinds = 'TV' | 'smartPhone' | 'laptop' | 'headphone' | 'speaker' | 'mouse' | 'keyboard' | 'other'
type ProductCategory = 'furniture' | 'electronics' | 'vehicle' | 'accessory' | 'fashion'
export type ProductKind = FurnitureProductKinds | ElectronicProductKinds

export interface Product {
    id: string,
    productName: string,
    discounted: boolean,
    price: number
    productType: ProductCategory,
    productKind: ProductKind
}

export const products: Array<Product> = [
    {
        id: '123142435464',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Table',
        productType: 'furniture',
        productKind: 'table'
    },
    {
        id: '123142435465',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture',
        productKind: 'sofa'
    },
    {
        id: '123142435466',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Bed',
        productType: 'furniture',
        productKind: 'bed'
    },
    {
        id: '123142435467',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood TV Stand',
        productType: 'furniture',
        productKind: 'tv_stand'
    },
    {
        id: '123142435468',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture',
        productKind: 'sofa'
    },
    {
        id: '123142435469',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture',
        productKind: 'sofa'
    },
]

export const electronicProducts: Array<Product> = [
    {
        id: '123142435414',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Chair',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
    {
        id: '123142435425',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
    {
        id: '123142435436',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
    {
        id: '1231424354337',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
    {
        id: '123142435448',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
    {
        id: '123142435459',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'electronics',
        productKind: 'smartPhone'
    },
]

export const cartData = [
    {
        product: {
            id: '123142435469',
            discounted: false,
            price: 4699,
            productName: 'Onyx Wood Sofa',
            productType: 'furniture'
        },
        quantity: 1
    },
    {
        product: {
            id: '123142435460',
            discounted: false,
            price: 4699,
            productName: 'Onyx Wood Sofa',
            productType: 'furniture'
        },
        quantity: 1
    }
]