import Image from 'next/image';
import { specs } from '@/app/interfaces';
import './tag.css';

import javaIcon from '@/assets/svgs/java.svg';
import tailwindIcon from '@/assets/svgs/tailwind.svg';
import nextIcon from '@/assets/svgs/nextjs.svg';
import pythonicon from '@/assets/svgs/python.svg';

import typescriptIcon from '@/assets/svgs/typescript.svg';
import postgreSqlIcon from '@/assets/svgs/postgresql.svg';
import mongodbIcon from '@/assets/svgs/mongodb.svg';

interface Props {
  tech: specs;
}

const iconMap = {
  [specs.Java]: javaIcon,
  [specs.PostgreSQL]: postgreSqlIcon,
  [specs.Tailwind]: tailwindIcon,
  [specs.Nextjs]: nextIcon,
  [specs.Typescript]: typescriptIcon,
  [specs.Python]: pythonicon,
  [specs.Mongodb]: mongodbIcon,
}

const getIconForTech = (tech: specs) => {
  return iconMap[tech] || null;
}

const getTechName = (tech: specs) => {
  switch (tech) {
    case specs.Java:
      return 'Java';
    case specs.PostgreSQL:
      return 'PostgreSQL';
    case specs.Tailwind:
      return 'Tailwind';
    case specs.Nextjs:
      return 'Next.js';
    case specs.Typescript:
      return 'TypeScript';
    case specs.Python:
      return 'Python';
    case specs.Mongodb:
      return 'MongoDB';
    default:
      return '';
  }
}

const colorMap = {
  [specs.Java]: 'var(--red-color)',
  [specs.PostgreSQL]: 'var(--blue-color)',
  [specs.Tailwind]: 'var(--teal-color)',
  [specs.Nextjs]: 'var(--grey-color)',
  [specs.Typescript]: 'var(--sapphire-color)',
  [specs.Python]: 'var(--yellow-color)',
  [specs.Mongodb]: 'var(--green-color)',
}

export default function Tag({ tech }: Props) {
  const icon = getIconForTech(tech)
  const techName = getTechName(tech)
  const backgroundColor = colorMap[tech]
  return (
    <div className="tag" style={{ backgroundColor }}>
      {icon && <Image src={icon} alt={techName} className="tag__icon" />}
      <span className="tag__name">{techName}</span>
    </div>
  )
}

