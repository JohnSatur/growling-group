import ogImg from '@images/isotipo.png';

export const SITE = {
  title: 'Growling Group',
  tagline: 'Seguridad industrial',
  description: 'Grupo de seguridad industrial que ofrece soluciones integrales para la protección de personas y equipos. Somos una empresa comprometida con la seguridad y el bienestar de nuestros clientes.',
  descriptionShort: 'Grupo de seguridad industrial que ofrece soluciones integrales para la protección de personas y equipos.',
  url: 'https://growlingroup.com',
  author: 'Juan Carlos Marín',
}

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  stucturedData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: 'es-MX',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
  }
}

export const OG = {
  locale: 'es-MX',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title} - ${SITE.tagline}`,
  description: SITE.description,
  image: ogImg,
}

export const CONTACT_INFO = {
  address: {
    street: "Av. Independencia 123, Col. Centro",
    city: "Veracruz",
    state: "Veracruz",
    zipCode: "91700",
    country: "México",
    full: "Av. Independencia 123, Col. Centro, Veracruz, Ver. 91700, México"
  },
  phone: {
    display: "+52 229 123 4567",
    link: "+522291234567"
  },
  email: {
    general: "contacto@tuempresa.com",
    support: "soporte@tuempresa.com",
    sales: "ventas@tuempresa.com"
  },
  social: {
    facebook: "https://facebook.com/tuempresa",
    instagram: "https://instagram.com/tuempresa",
    linkedin: "https://linkedin.com/company/tuempresa",
    tiktok: "https://tiktok.com/@tuempresa"
  },
  businessHours: {
    weekdays: "Lunes - Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábado: 9:00 AM - 2:00 PM",
    sunday: "Domingo: Cerrado"
  },
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2850.0596782636544!2d-96.87660758563503!3d19.51258073545483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1753204394677!5m2!1ses!2smx",
    directionsUrl: "https://maps.app.goo.gl/68AjugiKmfBoG18C8"
  }
};

// Información general de la empresa
export const COMPANY_INFO = {
  name: "Tu Empresa",
  legalName: "Tu Empresa S.A. de C.V.",
  rfc: "TUE123456789",
  description: "Consultoría empresarial especializada en servicios ambientales, protección civil, inspección industrial y capacitación certificada.",
  founded: "2020",
  employees: "10-50"
};

// Servicios principales
export const SERVICES = {
  environmental: "Servicios Ambientales",
  civilProtection: "Protección Civil",
  boilers: "Calderas y Recipientes a Presión",
  drones: "Inspección con Drones",
  training: "Capacitación Certificada",
  procedures: "Trámites Gubernamentales"
};
