import Button from "@/components/button";
import { Project } from "@/content/projects";
import { IoCodeSharp } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";

type Props = {
  project: Project;
};
export default function ProjectItem({ project }: Props) {
  const techStr = project.tech.join(", ");
  return (
    <div className="w-full h-full bg-light-card shadow-default-card rounded-lg p-2 space-y-1 2xl:p-4 2xl:space-y-3">
      <p className="text-cls-light-green text-md 2xl:text-lg">{techStr}</p>
      <h1 className="text-xl 2xl:text-2xl">{project.name}</h1>
      <p className="font-secondary text-lg 2xl:text-xl text-cls-foreground-secondary">
        {project.description}
      </p>
      <div className="flex gap-2">
        <Button.Root variant="outline" className="w-1/4 2xl:w-1/3 h-10">
          <Button.Anchor
            label="code"
            href={project.sourceCode}
            Icon={IoCodeSharp}
            toBlank
          />
        </Button.Root>
        <Button.Root variant="outline" className="w-1/4 2xl:w-1/3 h-10">
          <Button.Anchor
            label="details"
            href={project.details}
            Icon={LuArrowUpRight}
            toBlank
          />
        </Button.Root>
      </div>
    </div>
  );
}
