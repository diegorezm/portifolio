import Image from 'next/image';
import { Specs } from '@/app/interfaces';
import './tag.css';

import javaIcon from '@/assets/svgs/java.svg';
import tailwindIcon from '@/assets/svgs/tailwind.svg';
import nextIcon from '@/assets/svgs/nextjs.svg';
import pythonicon from '@/assets/svgs/python.svg';

import typescriptIcon from '@/assets/svgs/typescript.svg';
import postgreSqlIcon from '@/assets/svgs/postgresql.svg';
import mongodbIcon from '@/assets/svgs/mongodb.svg';
import svelteIcon from '@/assets/svgs/svelte.svg';

interface Props {
  tech: Specs;
}

const iconMap = {
  [Specs.Java]: javaIcon,
  [Specs.PostgreSQL]: postgreSqlIcon,
  [Specs.Tailwind]: tailwindIcon,
  [Specs.Nextjs]: nextIcon,
  [Specs.Typescript]: typescriptIcon,
  [Specs.Python]: pythonicon,
  [Specs.Mongodb]: mongodbIcon,
  [Specs.Svelte]: svelteIcon,
}

const getIconForTech = (tech: Specs) => {
  return iconMap[tech] || null;
}

const colorMap = {
  [Specs.Java]: 'var(--red-color)',
  [Specs.PostgreSQL]: 'var(--blue-color)',
  [Specs.Tailwind]: 'var(--teal-color)',
  [Specs.Nextjs]: 'var(--grey-color)',
  [Specs.Typescript]: 'var(--sapphire-color)',
  [Specs.Python]: 'var(--yellow-color)',
  [Specs.Mongodb]: 'var(--green-color)',
  [Specs.Svelte]: 'var(--maroon-color)'
}


export default function Tag({ tech }: Props) {
  const icon = getIconForTech(tech);
  const backgroundColor = colorMap[tech];
  const tagName = Specs[tech].toString()
  return (
    <div className="tag" style={{ backgroundColor }}>
      {icon && <Image src={icon} alt={tagName} className="tag__icon" />}
      <span className="tag__name">{tagName}</span>
    </div>
  );
}
