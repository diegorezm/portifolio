import Image from 'next/image';
import { Specs } from '@/app/interfaces';
import './tag.css';

interface Props {
  tech: Specs;
}

const iconMap = {
  [Specs.Java]: "java.svg",
  [Specs.PostgreSQL]: "postgresql.svg",
  [Specs.Tailwind]: "tailwind.svg",
  [Specs.Nextjs]: "nextjs.svg",
  [Specs.Typescript]: "typescript.svg",
  [Specs.Python]: "python.svg",
  [Specs.Mongodb]: "mongodb.svg",
  [Specs.Svelte]: "svelte.svg",
}

const getIconForTech = (tech: Specs) => {
  return iconMap[tech] || null;
}

const imageLoader = ({ src }: { src: string }) => {
  return `https://raw.githubusercontent.com/diegorezm/portifolio/assets/src/assets/svgs/${src}`
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
      {icon && <Image loader={imageLoader} src={icon} alt={tagName} className="tag__icon" width={100} height={100} quality={100}/>}
      <span className="tag__name">{tagName}</span>
    </div>
  );
}
