interface Feature {
  title: string
  description: string
  image: string
  alt: string
}

export const features: Feature[] = [
    {
      title: "AI-Powered Innovation",
      description:
        "Harness the power of artificial intelligence to transform your business. From machine learning algorithms to natural language processing, we implement cutting-edge AI solutions that automate processes, predict trends, and deliver personalized experiences.",
      image: "/images/feature1_AI.webp",
      alt: "Abstract visualization of artificial intelligence networks"
    },
    {
      title: "Data-Driven Analytics",
      description:
        "Transform raw data into actionable insights. Our analytics solutions help you understand user behavior, track KPIs, and make informed decisions using advanced data visualization and real-time reporting tools.",
      image: "/images/feature2_Data.webp",
      alt: "Business analytics dashboard on computer screen"
    },
    {
      title: "Security-First Development",
      description:
        "Protect your digital assets with enterprise-grade security. We implement robust security measures throughout the development lifecycle, ensuring your applications are protected against modern cyber threats.",
      image: "/images/feature3_Security.webp",
      alt: "Cybersecurity concept with lock and digital interface"
    }
  ]
  