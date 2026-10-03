export interface Website {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  extra_long_description?: string;
  category: string;
  color: string;
  image: string;
  tags: string[];
  year: string;
  status: WebsiteStatus;
  features: string[];
  href?: string;
}

export enum WebsiteStatus {
  completed = "Completado",
  ongoing = "Ongoing"
}

export const websites: Website[] = [
  {
    id: "portfolio-photography",
    title: "Sara Montoya Fotografía",
    short_description: "Portfolio de fotografía. Proyecto final de curso.",
    long_description: `Portfolio profesional para fotógrafa especializada en fotografía de familia y eventos. 
    El proyecto se desarrolló como trabajo final de curso, enfocándose en crear una experiencia visual inmersiva 
    que destacara el trabajo artístico de la fotógrafa mediante una navegación intuitiva y galerías optimizadas.`,
    extra_long_description: `Se implementó una galería interactiva con lightbox personalizado, transiciones suaves entre imágenes 
    y un sistema de filtrado por categorías (retratos, books, eventos). El diseño minimalista permite que las fotografías 
    sean el protagonista absoluto, mientras que la optimización de imágenes garantiza tiempos de carga rápidos sin 
    comprometer la calidad visual.`,
    category: "portfolio",
    color: "from-rose-500 to-amber-500",
    image: "/images/websites/sm-foto.webp",
    tags: ["HTML5", "CSS3", "JS"],
    year: "2015",
    status: WebsiteStatus.completed,
    features: [
      "Galería interactiva con lightbox y transiciones suaves",
      "Sistema de filtrado por categorías fotográficas",
      "Diseño minimalista centrado en el contenido visual",
      "Optimización de imágenes para rendimiento rápido"
    ]
  },
  {
    id: "ecommerce-bq",
    title: "Tienda bq",
    short_description: "Tienda online de bq",
    long_description: `Plataforma de comercio electrónico para la tienda oficial de bq, fabricante español de smartphones y tablets. 
    El proyecto incluyó el desarrollo de catálogos de productos, carrito de compras y sistema de pago integrado, 
    todo ello diseñado para ofrecer una experiencia de compra fluida y segura.`,
    extra_long_description: `Se implementó un sistema de gestión de inventario en tiempo real, integración con múltiples pasarelas de pago 
    (PayPal, tarjeta de crédito), módulo de seguimiento de pedidos y área de cliente para gestionar historial de compras. 
    La arquitectura basada en Magento permitió escalar el catálogo y manejar alto tráfico durante campañas promocionales.`,
    category: "E-commerce",
    color: "from-emerald-500 to-cyan-500",
    image: "/images/websites/bq-store.webp",
    tags: ["Magento", "jQuery"],
    year: "2016",
    status: WebsiteStatus.completed,
    features: [
      "Gestión de inventario en tiempo real",
      "Integración con múltiples pasarelas de pago",
      "Módulo de seguimiento de pedidos",
      "Área de cliente con historial de compras"
    ]
  },
  {
    id: "diwo-bq",
    title: "DIWO",
    short_description: "Blog de DIWO para bq",
    long_description: `Blog corporativo de DIWO (Do It With Others), iniciativa de bq para la comunidad maker y tecnológica. 
    El proyecto consistió en adaptar un theme de WordPress para crear un blog multilenguaje con diseño personalizado 
    y optimización para contenido técnico y tutoriales.`,
    extra_long_description: `Se desarrolló un sistema de custom post types para tutoriales y proyectos, integración con Discourse 
    como sistema de comentarios, newsletter automatizado y optimización SEO específica para contenido técnico. 
    El diseño responsive garantiza una experiencia óptima tanto en escritorio como en dispositivos móviles.`,
    category: "Blog",
    color: "from-slate-500 to-zinc-500",
    image: "/images/websites/diwo.webp",
    tags: ["Wordpress", "poedit"],
    year: "2017",
    status: WebsiteStatus.completed,
    features: [
      "Sistema de custom post types para tutoriales",
      "Integración con Discourse para comentarios",
      "Newsletter automatizado con Mailchimp",
      "Optimización SEO para contenido técnico"
    ]
  },
  {
    id: "website-bq",
    title: "bq",
    short_description: "Web oficial de la empresa de telefonia española bq",
    long_description: `Sitio web corporativo de bq, empresa española líder en tecnología y dispositivos electrónicos. 
    El proyecto incluyó el desarrollo de múltiples landing pages, formulario de contacto complejo y 
    integración con sistemas de soporte y ticketing.`,
    extra_long_description: `Se implementó un sistema de gestión de contenido modular mediante Twig, integración con CRM para 
    captura de leads y optimización SEO técnica avanzada. 
    El diseño dinámico permite actualizar secciones promocionales sin necesidad de desarrollo adicional.`,
    category: "website",
    color: "from-orange-500 to-yellow-500",
    image: "/images/websites/bqcom.webp",
    tags: ["Twig", "SEO"],
    year: "2018",
    status: WebsiteStatus.completed,
    features: [
      "Sistema de gestión de contenido modular con Twig",
      "Integración con CRM para captura de leads",
      "Optimización SEO técnica avanzada"
    ]
  },
  {
    id: "eshop-old-llamaya",
    title: "llamaya eShop",
    short_description: "Tienda online de la marca llamaya",
    long_description: `Desarrollo de tienda online para llamaya, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto incluyó la implementación de un configurador de tarifas, integración con sistemas de provisioning 
    y desarrollo de flujos de compra optimizados para conversión.`,
    extra_long_description: `Se creó un configurador interactivo de tarifas que permite a los usuarios personalizar su plan según 
    necesidades, integración en tiempo real con sistemas de activación de líneas y gestión de portabilidades. 
    El diseño sigue las guidelines de marca mientras optimiza la experiencia de usuario para maximizar conversiones.`,
    category: "eshop",
    color: "from-red-500 to-pink-500",
    image: "/images/websites/old-llamaya.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2019",
    status: WebsiteStatus.completed,
    features: [
      "Configurador interactivo de tarifas",
      "Integración con sistemas de provisioning",
      "Gestión de portabilidades en tiempo real",
      "Flujos de compra optimizados para conversión"
    ]
  },
  {
    id: "eshop-masmovil",
    title: "MASMOVIL eShop",
    short_description: "Tienda online de la marca MASMOVIL",
    long_description: `Plataforma de comercio electrónico para MASMOVIL, uno de los principales operadores de telecomunicaciones en España. 
    El proyecto involucró el desarrollo de un sitio de alto tráfico con focus en la velocidad de carga y experiencia de usuario, 
    integrando múltiples productos de telecomunicaciones (móvil, fibra, fijo).`,
    extra_long_description: `Se implementó arquitectura server-side rendering para SEO óptimo, sistema de caché avanzado, 
    integración con sistemas de billing y activación, y A/B testing para optimización continua de conversiones. 
    El diseño mobile-first responde a que más del 70% del tráfico proviene de dispositivos móviles.`,
    category: "eshop",
    color: "from-blue-500 to-indigo-500",
    image: "/images/websites/masmovil.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2020",
    status: WebsiteStatus.ongoing,
    features: [
      "Arquitectura server-side rendering para SEO",
      "Sistema de caché avanzado para alto tráfico",
      "Integración con sistemas de billing",
      "A/B testing para optimización de conversiones"
    ],
    href: "https://www.masmovil.es",
  },
  {
    id: "eshop-yoigo",
    title: "Yoigo eShop",
    short_description: "Tienda online de la marca YOIGO",
    long_description: `Desarrollo de tienda online para Yoigo, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/yoigo.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2021",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.yoigo.com",
  },
  {
    id: "eshop-euskaltel",
    title: "Euskaltel eShop",
    short_description: "Tienda online de la marca Euskaltel",
    long_description: `Desarrollo de tienda online para Euskaltel, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/euskaltel.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.euskaltel.com",
  },
  {
    id: "eshop-guuk",
    title: "Guuk eShop",
    short_description: "Tienda online de la marca Guuk",
    long_description: `Desarrollo de tienda online para Guuk, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/guuk.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.guuk.com",
  },
  {
    id: "eshop-r",
    title: "R eShop",
    short_description: "Tienda online de la marca R",
    long_description: `Desarrollo de tienda online para R, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/rcable.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.mundo-r.com",
  },
  {
    id: "eshop-racctel",
    title: "Racctel+ eShop",
    short_description: "Tienda online de la marca Racctel+",
    long_description: `Desarrollo de tienda online para Racctel+, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/racctel.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.racctelplus.cat",
  },
  {
    id: "eshop-telecable",
    title: "Telecable eShop",
    short_description: "Tienda online de la marca Telecable",
    long_description: `Desarrollo de tienda online para Telecable, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/telecable.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.telecable.es",
  },
  {
    id: "eshop-lebara",
    title: "Lebara eShop",
    short_description: "Tienda online de la marca Lebara",
    long_description: `Desarrollo de tienda online para Lebara, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/lebara.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2023",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.lebaraspain.es",
  },
  {
    id: "eshop-llamaya",
    title: "Llamaya eShop",
    short_description: "Tienda online de la marca Llamaya",
    long_description: `Desarrollo de tienda online para Llamaya, marca de telecomunicaciones del grupo MASMOVIL. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/llamaya.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2025",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.llamaya.com",
  },
{
    id: "eshop-jazztel",
    title: "Jazztel eShop",
    short_description: "Tienda online de la marca Jazztel",
    long_description: `Desarrollo de tienda online para Jazztel, marca de telecomunicaciones del grupo MASORANGE. 
    El proyecto consistió en crear una experiencia de compra moderna y diferenciada, con especial atención 
    a la simplificación del proceso de contratación de tarifas y dispositivos.`,
    extra_long_description: `Se implementó un diseño visual distintivo que refleja la personalidad joven de la marca, 
    con animaciones suaves y micro-interacciones que mejoran el engagement. El proceso de compra se redujo a 
    mínimos pasos, implementando validación en tiempo real y sugerencias personalizadas basadas en el uso del cliente.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/jazztel.webp",
    tags: ["React", "NextJS", "Material UI"],
    year: "2025",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño visual distintivo y diferenciado",
      "Proceso de compra simplificado",
      "Micro-interacciones para mayor engagement",
      "Sugerencias personalizadas basadas en uso"
    ],
    href: "https://www.jazztel.com",
  },
];
