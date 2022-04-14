// type ProductKinds = 'sofa' | 'bed' | 'table' | 'tv_stand' | 'wardrobe' | 'cabinet' | 'dresser' | 'other'
type ProductCategory = 'furniture' | 'electronics' | 'vehicle' | 'accessory' | 'fashion'
export interface Product {
    id: string,
    productName: string,
    discounted: boolean,
    price: number
    productType: ProductCategory
}

export const products: Array<Product> = [
    {
        id: '123142435464',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Chair',
        productType: 'furniture'
    },
    {
        id: '123142435465',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture'
    },
    {
        id: '123142435466',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture'
    },
    {
        id: '123142435467',
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture'
    },
    {
        id: '123142435468',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture'
    },
    {
        id: '123142435469',
        discounted: false,
        price: 4699,
        productName: 'Onyx Wood Sofa',
        productType: 'furniture'
    },
]