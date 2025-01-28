[1mdiff --git a/src/components/landing-page/features.tsx b/src/components/landing-page/features.tsx[m
[1mindex 760811b..9f2dfbb 100644[m
[1m--- a/src/components/landing-page/features.tsx[m
[1m+++ b/src/components/landing-page/features.tsx[m
[36m@@ -5,57 +5,7 @@[m [mimport { ArrowRight } from "lucide-react"[m
 import { Button } from "@/components/ui/button"[m
 import { Link } from "@tanstack/react-router"[m
 [m
[31m-interface Feature {[m
[31m-  title: string[m
[31m-  description: string[m
[31m-  image: string[m
[31m-  alt: string[m
[31m-}[m
[31m-[m
[31m-const features: Feature[] = [[m
[31m-  {[m
[31m-    title: "Agile Development Process",[m
[31m-    description:[m
[31m-      "Embrace rapid iteration and continuous improvement with our Agile methodology. We deliver value faster through sprint-based development, regular feedback loops, and adaptive planning that keeps your project ahead of market demands.",[m
[31m-    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=350&fit=crop",[m
[31m-    alt: "Team collaborating on sticky notes on a glass wall"[m
[31m-  },[m
[31m-  {[m
[31m-    title: "AI-Powered Innovation",[m
[31m-    description:[m
[31m-      "Harness the power of artificial intelligence to transform your business. From machine learning algorithms to natural language processing, we implement cutting-edge AI solutions that automate processes, predict trends, and deliver personalized experiences.",[m
[31m-    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop",[m
[31m-    alt: "Abstract visualization of artificial intelligence networks"[m
[31m-  },[m
[31m-  {[m
[31m-    title: "User-Centric Design",[m
[31m-    description:[m
[31m-      "Create exceptional user experiences through research-driven design. Our UX/UI team combines user research, prototyping, and iterative testing to craft intuitive interfaces that delight users while achieving your business goals.",[m
[31m-    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=350&fit=crop",[m
[31m-    alt: "Designer working on user interface wireframes"[m
[31m-  },[m
[31m-  {[m
[31m-    title: "Cloud-Native Architecture",[m
[31m-    description:[m
[31m-      "Build scalable, resilient applications using modern cloud technologies. Our cloud-native approach ensures your applications are highly available, automatically scalable, and cost-efficient while maintaining peak performance.",[m
[31m-    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=350&fit=crop",[m
[31m-    alt: "Abstract cloud computing network visualization"[m
[31m-  },[m
[31m-  {[m
[31m-    title: "Data-Driven Analytics",[m
[31m-    description:[m
[31m-      "Transform raw data into actionable insights. Our analytics solutions help you understand user behavior, track KPIs, and make informed decisions using advanced data visualization and real-time reporting tools.",[m
[31m-    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",[m
[31m-    alt: "Business analytics dashboard on computer screen"[m
[31m-  },[m
[31m-  {[m
[31m-    title: "Security-First Development",[m
[31m-    description:[m
[31m-      "Protect your digital assets with enterprise-grade security. We implement robust security measures throughout the development lifecycle, ensuring your applications are protected against modern cyber threats.",[m
[31m-    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=350&fit=crop",[m
[31m-    alt: "Cybersecurity concept with lock and digital interface"[m
[31m-  }[m
[31m-][m
[32m+[m[32mimport { features } from "@/data/featuresData"[m
 [m
 const Features: React.FC = () => {[m
   return ([m
