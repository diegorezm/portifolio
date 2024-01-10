import socialMedia from '@/assets/proj/social-media.png'
import agendaApp from '@/assets/proj/agenda-app.png'
import cardapioApp from '@/assets/proj/cardapio-app.png'
import schooApp from '@/assets/proj/school-app.png'
import startpageApp from '@/assets/proj/start-page.png'

import { ProjectsInterface, specs } from "../interfaces"

export const projectList: ProjectsInterface[] = [
  {
    id: 1,
    name: "School dashboard",
    github: "https://github.com/diegorezm/school_app",
    tech: [
      specs.Java,
      specs.PostgreSQL,
      specs.Tailwind,
      specs.Nextjs,
      specs.Typescript,
    ],
    showcase: "https://www.youtube.com/watch?v=5Qfbx32a8pQ",
    image: schooApp,
  },
  {
    id: 2,
    name: "Start page",
    github: "https://github.com/diegorezm/start_page",
    tech: [
      specs.Typescript,
      specs.svelte
    ],
    showcase: "https://diegorezm.github.io/start_page/",
    image: startpageApp,
  },
  {
    id: 3,
    name: "Social media",
    github: "https://github.com/diegorezm/social-media-nextjs",
    tech: [
      specs.Tailwind,
      specs.Nextjs,
      specs.Typescript,
      specs.Mongodb,
    ],
    showcase: "https://www.youtube.com/watch?v=CrwErznp5sY",
    image: socialMedia,
  },
  {
    id: 4,
    name: "Agenda app",
    github: "https://github.com/diegorezm/agenda-app",
    tech: [
      specs.Tailwind,
      specs.Nextjs,
      specs.Typescript,
      specs.Mongodb,
    ],
    showcase: "https://www.youtube.com/watch?v=iH5q3USLrf0",
    image: agendaApp,
  },
  {
    id: 5,
    name: "Cardapio app",
    github: "https://github.com/diegorezm/app-cardapio",
    tech: [
      specs.Tailwind,
      specs.Nextjs,
      specs.Typescript,
      specs.Python,
      specs.PostgreSQL,
    ],
    showcase: "https://www.youtube.com/watch?v=TUMEW0zo2nQ",
    image: cardapioApp,
  },
];

