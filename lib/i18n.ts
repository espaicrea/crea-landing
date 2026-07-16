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
    home: string;
    about: string;
    mission: string;
    social: string;
    cta: string;
    languageLabel: string;
    primaryLabel: string;
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
    readMore: string;
  };
  social: {
    instagramDescription: string;
    eventsDescription: string;
  };
  footer: {
    description: string;
    aboutOrganization: string;
    legalIdentityLabel: string;
    taxIdLabel: string;
    location: string;
    codeOfConduct: string;
    privacyPolicy: string;
    termsAndConditions: string;
    rightsReserved: string;
  };
  aboutPage: {
    metadata: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      lead: string;
      eventCta: string;
      contactCta: string;
      imageAlt: string;
    };
    identityCard: {
      label: string;
      title: string;
      description: string;
      nonprofit: string;
    };
    mission: {
      label: string;
      title: string;
      statement: string;
      body: string;
    };
    program: {
      label: string;
      title: string;
      intro: string;
      steps: [
        { number: string; title: string; description: string },
        { number: string; title: string; description: string },
        { number: string; title: string; description: string },
      ];
    };
    impact: {
      label: string;
      title: string;
      items: [
        { title: string; description: string },
        { title: string; description: string },
        { title: string; description: string },
      ];
    };
    audience: {
      label: string;
      title: string;
      body: string;
      note: string;
    };
    nonprofit: {
      label: string;
      title: string;
      body: string;
    };
    transparency: {
      label: string;
      title: string;
      intro: string;
      legalName: string;
      taxId: string;
      brand: string;
      legalForm: string;
      legalFormValue: string;
      location: string;
      contact: string;
      website: string;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
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
      home: 'Inici',
      about: 'Qui som?',
      mission: 'La Missió',
      social: "Troba'ns",
      cta: "Apunta't",
      languageLabel: 'Canvia la llengua del web',
      primaryLabel: 'Navegació principal',
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
      readMore: 'Llegeix més sobre [crea]',
    },
    social: {
      instagramDescription: 'Segueix-nos a Instagram',
      eventsDescription: 'Inscriu-te als esdeveniments',
    },
    footer: {
      description: 'Fent realitat les idees dels estudiants de Barcelona des del 2025.',
      aboutOrganization: 'Qui som i què fem',
      legalIdentityLabel: 'Entitat registrada',
      taxIdLabel: 'NIF',
      location: 'Barcelona, Catalunya',
      codeOfConduct: 'Codi de conducta',
      privacyPolicy: 'Política de privacitat',
      termsAndConditions: 'Termes i condicions',
      rightsReserved: 'Tots els drets reservats.',
    },
    aboutPage: {
      metadata: {
        title: '[crea] | Qui som i què fem',
        description:
          "Coneix la missió, les trobades mensuals i la identitat legal de [crea], l'Associació Juvenil de Creadors de Barcelona (NIF G88904081).",
      },
      hero: {
        eyebrow: 'Associació juvenil sense ànim de lucre · Barcelona',
        title: 'TEMPS, ESPAI I COMUNITAT',
        highlight: 'PER FER AVANÇAR IDEES',
        lead:
          "[crea] és la marca pública de l'Associació Juvenil de Creadors de Barcelona. Organitzem trobades mensuals perquè joves, estudiants i persones creatives puguin continuar els seus projectes personals en companyia.",
        eventCta: 'VEURE LA PROPERA TROBADA',
        contactCta: "ESCRIU-NOS",
        imageAlt: 'Participants treballant en projectes personals durant una trobada de [crea]',
      },
      identityCard: {
        label: "L'entitat darrere de la marca",
        title: 'ASSOCIACIO JUVENIL DE CREADORS DE BARCELONA',
        description:
          '[crea] i Espai Crea són els noms públics amb què l’associació presenta les seves activitats al domini espaicrea.cat.',
        nonprofit: 'Entitat juvenil sense ànim de lucre',
      },
      mission: {
        label: 'La nostra missió',
        title: 'Fer que començar sigui més fàcil i continuar, més sostenible.',
        statement:
          'Creem un context recurrent on les persones joves poden reservar temps de qualitat per transformar una idea en passos concrets.',
        body:
          'Molts projectes personals s’aturen per falta de temps, estructura o companyia. La nostra missió és reduir aquestes barreres amb trobades presencials periòdiques, una comunitat oberta i un entorn pensat per avançar. El projecte continua sent de cada participant: nosaltres facilitem les condicions perquè no quedi aparcat.',
      },
      program: {
        label: 'Programa principal',
        title: 'Trobades mensuals per continuar projectes personals',
        intro:
          'Un cop al mes ens reunim presencialment a Barcelona. Cada persona porta un projecte propi —creatiu, tècnic, acadèmic o emprenedor— i dedica la sessió a fer-lo avançar en un entorn compartit.',
        steps: [
          {
            number: '01',
            title: 'Porta un projecte',
            description:
              'Pot ser una idea inicial, una peça en procés o un projecte que vols reprendre. No cal arribar-hi amb tot resolt.',
          },
          {
            number: '02',
            title: 'Reserva temps per avançar',
            description:
              'La trobada crea un compromís concret i recurrent per treballar, prendre decisions i convertir intencions en progrés.',
          },
          {
            number: '03',
            title: 'Comparteix comunitat',
            description:
              'Coincidir amb altres persones creadores permet intercanviar punts de vista, trobar col·laboracions i mantenir la motivació.',
          },
        ],
      },
      impact: {
        label: 'Impacte que busquem',
        title: 'Què volem aconseguir',
        items: [
          {
            title: 'Continuïtat',
            description: 'Que les idees personals deixin de quedar aparcades i avancin de manera sostinguda.',
          },
          {
            title: 'Autonomia',
            description: 'Que cada participant mantingui la propietat, les decisions i el rumb del seu projecte.',
          },
          {
            title: 'Comunitat local',
            description: 'Enfortir una xarxa juvenil i creativa que es troba, comparteix i col·labora a Barcelona.',
          },
        ],
      },
      audience: {
        label: 'A qui ens adrecem',
        title: 'Joves amb una idea que mereix temps',
        body:
          'Ens adrecem principalment a joves, estudiants, persones creatives i emprenedores de Barcelona que volen reservar un espai regular als seus projectes personals. Hi tenen cabuda disciplines i nivells d’experiència diversos.',
        note:
          'No cal tenir una empresa, un projecte acabat ni un equip. Només cal portar alguna cosa que vulguis continuar construint i respectar el codi de conducta de la comunitat.',
      },
      nonprofit: {
        label: 'Sense ànim de lucre',
        title: 'La missió va abans que el benefici econòmic',
        body:
          "L’associació no reparteix beneficis. Els recursos de l’entitat es destinen a sostenir les activitats, els espais, els materials i la comunitat. La nostra activitat principal no és vendre serveis ni generar trànsit comercial: és facilitar que més joves puguin donar continuïtat als seus projectes personals.",
      },
      transparency: {
        label: 'Transparència',
        title: "L'entitat darrere de [crea]",
        intro:
          'Aquesta informació identifica de manera directa la relació entre la marca [crea], el domini espaicrea.cat i l’associació registrada que organitza les activitats.',
        legalName: 'Nom legal complet',
        taxId: 'Identificació fiscal',
        brand: 'Marca pública',
        legalForm: 'Naturalesa jurídica',
        legalFormValue: 'Associació juvenil sense ànim de lucre',
        location: 'Adreça física',
        contact: 'Correu de contacte',
        website: 'Web oficial',
      },
      cta: {
        title: 'Vols avançar el teu projecte amb nosaltres?',
        description:
          'Consulta la propera data, inscriu-t’hi i porta el projecte personal al qual vols dedicar temps.',
        primary: 'PROPERA TROBADA',
        secondary: 'CONTACTA AMB [crea]',
      },
    },
  },
  es: {
    metadata: {
      title: '[crea] - Comunidad Creativa',
      description:
        'Un espacio abierto para estudiantes, creativos y emprendedores donde colaborar en proyectos personales y crecer juntos.',
    },
    nav: {
      home: 'Inicio',
      about: '¿Quiénes somos?',
      mission: 'La Misión',
      social: 'Encuéntranos',
      cta: 'Únete',
      languageLabel: 'Cambiar el idioma de la web',
      primaryLabel: 'Navegación principal',
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
      readMore: 'Conoce mejor [crea]',
    },
    social: {
      instagramDescription: 'Síguenos en Instagram',
      eventsDescription: 'Apúntate a los eventos',
    },
    footer: {
      description: 'Haciendo realidad las ideas de los estudiantes de Barcelona desde 2025.',
      aboutOrganization: 'Quiénes somos y qué hacemos',
      legalIdentityLabel: 'Entidad registrada',
      taxIdLabel: 'NIF',
      location: 'Barcelona, Cataluña',
      codeOfConduct: 'Código de conducta',
      privacyPolicy: 'Política de privacidad',
      termsAndConditions: 'Términos y condiciones',
      rightsReserved: 'Todos los derechos reservados.',
    },
    aboutPage: {
      metadata: {
        title: '[crea] | Quiénes somos y qué hacemos',
        description:
          'Conoce la misión, los encuentros mensuales y la identidad legal de [crea], la Associacio Juvenil de Creadors de Barcelona (NIF G88904081).',
      },
      hero: {
        eyebrow: 'Asociación juvenil sin ánimo de lucro · Barcelona',
        title: 'TIEMPO, ESPACIO Y COMUNIDAD',
        highlight: 'PARA IMPULSAR IDEAS',
        lead:
          '[crea] es la marca pública de la Associacio Juvenil de Creadors de Barcelona. Organizamos encuentros mensuales para que jóvenes, estudiantes y personas creativas puedan continuar sus proyectos personales en compañía.',
        eventCta: 'VER EL PRÓXIMO ENCUENTRO',
        contactCta: 'ESCRÍBENOS',
        imageAlt: 'Participantes trabajando en proyectos personales durante un encuentro de [crea]',
      },
      identityCard: {
        label: 'La entidad detrás de la marca',
        title: 'ASSOCIACIO JUVENIL DE CREADORS DE BARCELONA',
        description:
          '[crea] y Espai Crea son los nombres públicos con los que la asociación presenta sus actividades en el dominio espaicrea.cat.',
        nonprofit: 'Entidad juvenil sin ánimo de lucro',
      },
      mission: {
        label: 'Nuestra misión',
        title: 'Hacer que empezar sea más fácil y continuar, más sostenible.',
        statement:
          'Creamos un contexto recurrente donde las personas jóvenes pueden reservar tiempo de calidad para transformar una idea en pasos concretos.',
        body:
          'Muchos proyectos personales se detienen por falta de tiempo, estructura o compañía. Nuestra misión es reducir esas barreras con encuentros presenciales periódicos, una comunidad abierta y un entorno pensado para avanzar. El proyecto sigue siendo de cada participante: nosotros facilitamos las condiciones para que no quede aparcado.',
      },
      program: {
        label: 'Programa principal',
        title: 'Encuentros mensuales para continuar proyectos personales',
        intro:
          'Una vez al mes nos reunimos presencialmente en Barcelona. Cada persona lleva un proyecto propio —creativo, técnico, académico o emprendedor— y dedica la sesión a hacerlo avanzar en un entorno compartido.',
        steps: [
          {
            number: '01',
            title: 'Trae un proyecto',
            description:
              'Puede ser una idea inicial, una pieza en proceso o un proyecto que quieres retomar. No hace falta llegar con todo resuelto.',
          },
          {
            number: '02',
            title: 'Reserva tiempo para avanzar',
            description:
              'El encuentro crea un compromiso concreto y recurrente para trabajar, tomar decisiones y convertir intenciones en progreso.',
          },
          {
            number: '03',
            title: 'Comparte comunidad',
            description:
              'Coincidir con otras personas creadoras permite intercambiar puntos de vista, encontrar colaboraciones y mantener la motivación.',
          },
        ],
      },
      impact: {
        label: 'Impacto que buscamos',
        title: 'Qué queremos conseguir',
        items: [
          {
            title: 'Continuidad',
            description: 'Que las ideas personales dejen de quedar aparcadas y avancen de forma sostenida.',
          },
          {
            title: 'Autonomía',
            description: 'Que cada participante mantenga la propiedad, las decisiones y el rumbo de su proyecto.',
          },
          {
            title: 'Comunidad local',
            description: 'Fortalecer una red juvenil y creativa que se encuentra, comparte y colabora en Barcelona.',
          },
        ],
      },
      audience: {
        label: 'A quién nos dirigimos',
        title: 'Jóvenes con una idea que merece tiempo',
        body:
          'Nos dirigimos principalmente a jóvenes, estudiantes, personas creativas y emprendedoras de Barcelona que quieren reservar un espacio regular a sus proyectos personales. Tienen cabida disciplinas y niveles de experiencia diversos.',
        note:
          'No hace falta tener una empresa, un proyecto terminado ni un equipo. Solo hay que traer algo que quieras seguir construyendo y respetar el código de conducta de la comunidad.',
      },
      nonprofit: {
        label: 'Sin ánimo de lucro',
        title: 'La misión está por delante del beneficio económico',
        body:
          'La asociación no reparte beneficios. Los recursos de la entidad se destinan a sostener las actividades, los espacios, los materiales y la comunidad. Nuestra actividad principal no es vender servicios ni generar tráfico comercial: es facilitar que más jóvenes puedan dar continuidad a sus proyectos personales.',
      },
      transparency: {
        label: 'Transparencia',
        title: 'La entidad detrás de [crea]',
        intro:
          'Esta información identifica de forma directa la relación entre la marca [crea], el dominio espaicrea.cat y la asociación registrada que organiza las actividades.',
        legalName: 'Nombre legal completo',
        taxId: 'Identificación fiscal',
        brand: 'Marca pública',
        legalForm: 'Naturaleza jurídica',
        legalFormValue: 'Asociación juvenil sin ánimo de lucro',
        location: 'Dirección física',
        contact: 'Correo de contacto',
        website: 'Web oficial',
      },
      cta: {
        title: '¿Quieres impulsar tu proyecto con nosotros?',
        description:
          'Consulta la próxima fecha, inscríbete y trae el proyecto personal al que quieres dedicar tiempo.',
        primary: 'PRÓXIMO ENCUENTRO',
        secondary: 'CONTACTA CON [crea]',
      },
    },
  },
  en: {
    metadata: {
      title: '[crea] - Creative Community',
      description:
        'An open space for students, creatives, and founders to collaborate on personal projects and grow together.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      mission: 'Mission',
      social: 'Find Us',
      cta: 'Join In',
      languageLabel: 'Change the website language',
      primaryLabel: 'Primary navigation',
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
      readMore: 'Learn more about [crea]',
    },
    social: {
      instagramDescription: 'Follow us on Instagram',
      eventsDescription: 'Sign up for upcoming events',
    },
    footer: {
      description: "Bringing Barcelona students' ideas to life since 2025.",
      aboutOrganization: 'Who we are and what we do',
      legalIdentityLabel: 'Registered organization',
      taxIdLabel: 'Tax ID',
      location: 'Barcelona, Catalonia',
      codeOfConduct: 'Code of conduct',
      privacyPolicy: 'Privacy policy',
      termsAndConditions: 'Terms and conditions',
      rightsReserved: 'All rights reserved.',
    },
    aboutPage: {
      metadata: {
        title: '[crea] | Who we are and what we do',
        description:
          'Discover the mission, monthly meetups and legal identity of [crea], the Associacio Juvenil de Creadors de Barcelona (Tax ID G88904081).',
      },
      hero: {
        eyebrow: 'Youth nonprofit association · Barcelona',
        title: 'TIME, SPACE AND COMMUNITY',
        highlight: 'TO MOVE IDEAS FORWARD',
        lead:
          '[crea] is the public brand of the Associacio Juvenil de Creadors de Barcelona. We organize monthly meetups where young people, students and creatives can keep working on their personal projects alongside others.',
        eventCta: 'VIEW THE NEXT MEETUP',
        contactCta: 'EMAIL US',
        imageAlt: 'Participants working on personal projects during a [crea] meetup',
      },
      identityCard: {
        label: 'The organization behind the brand',
        title: 'ASSOCIACIO JUVENIL DE CREADORS DE BARCELONA',
        description:
          '[crea] and Espai Crea are the public names the association uses to present its activities on the espaicrea.cat domain.',
        nonprofit: 'Nonprofit youth association',
      },
      mission: {
        label: 'Our mission',
        title: 'Make starting easier and continuing more sustainable.',
        statement:
          'We create a recurring setting where young people can reserve quality time to turn an idea into concrete steps.',
        body:
          'Many personal projects stall because of a lack of time, structure or company. Our mission is to reduce those barriers through regular in-person meetups, an open community and an environment designed for progress. Each participant remains in control of their project; we provide the conditions that help keep it moving.',
      },
      program: {
        label: 'Main program',
        title: 'Monthly meetups for continuing personal projects',
        intro:
          'Once a month, we meet in person in Barcelona. Each person brings their own project —creative, technical, academic or entrepreneurial— and uses the session to move it forward in a shared environment.',
        steps: [
          {
            number: '01',
            title: 'Bring a project',
            description:
              'It can be an early idea, a work in progress or something you want to pick up again. You do not need to have everything figured out.',
          },
          {
            number: '02',
            title: 'Set aside time to progress',
            description:
              'The meetup creates a concrete, recurring commitment to work, make decisions and turn intentions into progress.',
          },
          {
            number: '03',
            title: 'Share a community',
            description:
              'Working alongside other creators makes it possible to exchange perspectives, find collaborators and sustain motivation.',
          },
        ],
      },
      impact: {
        label: 'The impact we seek',
        title: 'What we aim to achieve',
        items: [
          {
            title: 'Continuity',
            description: 'Help personal ideas stop gathering dust and move forward consistently.',
          },
          {
            title: 'Autonomy',
            description: 'Ensure every participant keeps ownership, decision-making and direction of their project.',
          },
          {
            title: 'Local community',
            description: 'Strengthen a youth creative network that meets, shares and collaborates in Barcelona.',
          },
        ],
      },
      audience: {
        label: 'Who we serve',
        title: 'Young people with an idea that deserves time',
        body:
          'We mainly serve young people, students, creatives and founders in Barcelona who want to reserve regular space for their personal projects. Different disciplines and levels of experience are welcome.',
        note:
          'You do not need a company, a finished project or a team. Just bring something you want to keep building and respect the community code of conduct.',
      },
      nonprofit: {
        label: 'Nonprofit',
        title: 'The mission comes before financial gain',
        body:
          'The association does not distribute profits. Its resources support the activities, spaces, materials and community. Our main activity is not selling services or generating commercial traffic; it is helping more young people give their personal projects the continuity they need.',
      },
      transparency: {
        label: 'Transparency',
        title: 'The organization behind [crea]',
        intro:
          'This information directly identifies the relationship between the [crea] brand, the espaicrea.cat domain and the registered association that organizes the activities.',
        legalName: 'Full legal name',
        taxId: 'Tax identification',
        brand: 'Public brand',
        legalForm: 'Legal nature',
        legalFormValue: 'Nonprofit youth association',
        location: 'Physical address',
        contact: 'Contact email',
        website: 'Official website',
      },
      cta: {
        title: 'Want to move your project forward with us?',
        description:
          'Check the next date, register and bring the personal project you want to spend time on.',
        primary: 'NEXT MEETUP',
        secondary: 'CONTACT [crea]',
      },
    },
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function getPageMetadata(locale: Locale, pathname: string) {
  const copy = getMessages(locale);

  if (pathname.startsWith('/qui-som')) {
    return copy.aboutPage.metadata;
  }

  return copy.metadata;
}
