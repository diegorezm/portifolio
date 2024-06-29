import Container from "@/components/container";
import projects from "@/content/projects";
import ProjectItem from "./project-item";
export default function ProjectsSection() {
  return (
    <Container.Root containerId="projects" variant="to_top">
      <Container.Title> Projects </Container.Title>
      <Container.Body>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-2">
          {projects.map((e, i) => (
            <ProjectItem project={e} key={i + 1} />
          ))}
        </div>
      </Container.Body>
    </Container.Root>
  );
}
