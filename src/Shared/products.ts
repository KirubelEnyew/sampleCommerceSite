type ProductKinds = 'sofa' | 'bed' | 'table' | 'tv_stand' | 'wardrobe' | 'cabinet' | 'dresser' | 'other'
type ProductCategory = 'furniture' | 'electronics' | 'vehicle' | 'accessory' | 'fashion'
interface Product {
    productName: string,
    discounted: boolean,
    price: number
    productType: ProductCategory
}

export const products: Array<Product> = [
    {
        discounted: true,
        price: 4699,
        productName: 'Onyx Wood Chair',
        productType: 'furniture'
    }
]