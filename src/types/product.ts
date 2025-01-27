export interface ProductFeature {
    title: string;
    items: string[];
}

export interface Product {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    iconColor: string;
    features: ProductFeature[];
    link: string;
}