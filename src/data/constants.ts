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
