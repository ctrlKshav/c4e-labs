export interface Product {
  name: string
  badge: string
  title: string
  description: string
  statistic?: {
    value: string
    label: string
  }
  theme: {
    primary: string
    secondary: string
    accent: string
  }
  channels: string[]
  imageSrc: string
}

