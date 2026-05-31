export const LANGUAGE_COOKIE = 'crea-locale';

export const locales = ['ca', 'es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ca';

export const localeLabels: Record<Locale, string> = {
  ca: 'CA',
  es: 'ES',
  en: 'EN',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value !== undefined && value !== null && locales.includes(value as Locale);
}

export function resolveLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

type SiteCopy = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    mission: string;
    social: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    highlight: string;
    description: string;
    nextEvent: string;
    learnMore: string;
    imageAlt: string;
    location: string;
    sessions: string;
  };
  mission: {
    titleLines: [string, string];
    lead: string;
    collaborationTitle: string;
    collaborationDescription: string;
    growthTitle: string;
    growthDescription: string;
  };
  about: {
    title: string;
    eventsTag: string;
    aboutTag: string;
    description: string;
    projectLabel: string;
    eventImageAlt: string;
    brandingImageAlt: string;
  };
  social: {
    instagramDescription: string;
    eventsDescription: string;
  };
  footer: {
    description: string;
    codeOfConduct: string;
    privacyPolicy: string;
    termsAndConditions: string;
    rightsReserved: string;
  };
};

export const messages: Record<Locale, SiteCopy> = {
  ca: {
    metadata: {
      title: '[crea] - Comunitat Creativa',
      description:
        'Un espai obert per a estudiants, creatius i emprenedors on col·laborar en projectes personals i créixer junts.',
    },
    nav: {
      about: 'Qui som?',
      mission: 'La Missió',
      social: "Troba'ns",
      cta: "Apunta't",
      languageLabel: 'Canvia la llengua del web',
    },
    hero: {
      eyebrow: 'Comunitat Creativa',
      titleLines: ['TRANSFORMA', 'LES TEVES IDEES'],
      highlight: 'EN REALITAT',
      description:
        'Un espai obert per a estudiants, creatius i emprenedors on col·laborar en projectes personals i créixer junts.',
      nextEvent: 'PROPERA TROBADA',
      learnMore: 'SABER-NE MÉS',
      imageAlt: 'Espai de co-working',
      location: 'BARCELONA',
      sessions: 'Sessions mensuals',
    },
    mission: {
      titleLines: ['La', 'Missió'],
      lead: "Proporcionem l'espai i el temps necessaris perquè puguis desenvolupar les teves passions.",
      collaborationTitle: 'Col·laboració',
      collaborationDescription: 'Connecta amb talent local.',
      growthTitle: 'Creixement',
      growthDescription: 'Impulsa les teves idees.',
    },
    about: {
      title: 'Qui som?',
      eventsTag: 'ESDEVENIMENTS',
      aboutTag: 'SOBRE NOSALTRES',
      description:
        'Som una comunitat de creatius i emprenedors que es reuneixen mensualment a Barcelona per compartir idees, col·laborar en projectes i créixer junts.',
      projectLabel: 'Projectes personals',
      eventImageAlt: 'Esdeveniment de la comunitat',
      brandingImageAlt: 'Branding',
    },
    social: {
      instagramDescription: 'Segueix-nos a Instagram',
      eventsDescription: 'Inscriu-te als esdeveniments',
    },
    footer: {
      description: 'Fent realitat les idees dels estudiants de Barcelona des del 2025.',
      codeOfConduct: 'Codi de conducta',
      privacyPolicy: 'Política de privacitat',
      termsAndConditions: 'Termes i condicions',
      rightsReserved: 'Tots els drets reservats.',
    },
  },
  es: {
    metadata: {
      title: '[crea] - Comunidad Creativa',
      description:
        'Un espacio abierto para estudiantes, creativos y emprendedores donde colaborar en proyectos personales y crecer juntos.',
    },
    nav: {
      about: '¿Quiénes somos?',
      mission: 'La Misión',
      social: 'Encuéntranos',
      cta: 'Únete',
      languageLabel: 'Cambiar el idioma de la web',
    },
    hero: {
      eyebrow: 'Comunidad Creativa',
      titleLines: ['TRANSFORMA', 'TUS IDEAS'],
      highlight: 'EN REALIDAD',
      description:
        'Un espacio abierto para estudiantes, creativos y emprendedores donde colaborar en proyectos personales y crecer juntos.',
      nextEvent: 'PRÓXIMO ENCUENTRO',
      learnMore: 'SABER MÁS',
      imageAlt: 'Espacio de co-working',
      location: 'BARCELONA',
      sessions: 'Sesiones mensuales',
    },
    mission: {
      titleLines: ['La', 'Misión'],
      lead: 'Proporcionamos el espacio y el tiempo necesarios para que puedas desarrollar tus pasiones.',
      collaborationTitle: 'Colaboración',
      collaborationDescription: 'Conecta con talento local.',
      growthTitle: 'Crecimiento',
      growthDescription: 'Impulsa tus ideas.',
    },
    about: {
      title: '¿Quiénes somos?',
      eventsTag: 'EVENTOS',
      aboutTag: 'SOBRE NOSOTROS',
      description:
        'Somos una comunidad de creativos y emprendedores que se reúne mensualmente en Barcelona para compartir ideas, colaborar en proyectos y crecer juntos.',
      projectLabel: 'Proyectos personales',
      eventImageAlt: 'Evento de la comunidad',
      brandingImageAlt: 'Branding',
    },
    social: {
      instagramDescription: 'Síguenos en Instagram',
      eventsDescription: 'Apúntate a los eventos',
    },
    footer: {
      description: 'Haciendo realidad las ideas de los estudiantes de Barcelona desde 2025.',
      codeOfConduct: 'Código de conducta',
      privacyPolicy: 'Política de privacidad',
      termsAndConditions: 'Términos y condiciones',
      rightsReserved: 'Todos los derechos reservados.',
    },
  },
  en: {
    metadata: {
      title: '[crea] - Creative Community',
      description:
        'An open space for students, creatives, and founders to collaborate on personal projects and grow together.',
    },
    nav: {
      about: 'About Us',
      mission: 'Mission',
      social: 'Find Us',
      cta: 'Join In',
      languageLabel: 'Change the website language',
    },
    hero: {
      eyebrow: 'Creative Community',
      titleLines: ['TRANSFORM', 'YOUR IDEAS'],
      highlight: 'INTO REALITY',
      description:
        'An open space for students, creatives, and founders to collaborate on personal projects and grow together.',
      nextEvent: 'NEXT MEETUP',
      learnMore: 'LEARN MORE',
      imageAlt: 'Co-working space',
      location: 'BARCELONA',
      sessions: 'Monthly sessions',
    },
    mission: {
      titleLines: ['Our', 'Mission'],
      lead: 'We provide the space and time you need to develop your passions.',
      collaborationTitle: 'Collaboration',
      collaborationDescription: 'Connect with local talent.',
      growthTitle: 'Growth',
      growthDescription: 'Move your ideas forward.',
    },
    about: {
      title: 'About Us',
      eventsTag: 'EVENTS',
      aboutTag: 'ABOUT US',
      description:
        'We are a community of creatives and founders who meet monthly in Barcelona to share ideas, collaborate on projects, and grow together.',
      projectLabel: 'Personal projects',
      eventImageAlt: 'Community event',
      brandingImageAlt: 'Branding',
    },
    social: {
      instagramDescription: 'Follow us on Instagram',
      eventsDescription: 'Sign up for upcoming events',
    },
    footer: {
      description: "Bringing Barcelona students' ideas to life since 2025.",
      codeOfConduct: 'Code of conduct',
      privacyPolicy: 'Privacy policy',
      termsAndConditions: 'Terms and conditions',
      rightsReserved: 'All rights reserved.',
    },
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
