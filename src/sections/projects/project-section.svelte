<script>
  import Container from "../../components/container";
  import projects from "$lib/content/projects";
  import ProjectItem from "./project-item.svelte";
</script>

<Container.Root containerId="projects" variant="to_top">
  <Container.Title>Projects</Container.Title>
  <Container.Body>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-4"
    >
      {#each projects as project}
        <ProjectItem {project} />
      {/each}
    </div>
  </Container.Body>
</Container.Root>
