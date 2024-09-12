<script lang="ts">
  import Container from "../../components/container";
  import projects, { type Project } from "$lib/content/projects";
  import ProjectItem from "./project-item.svelte";
  import ProjectFilterTag from "./project-filter-tag.svelte";
  import { writable } from "svelte/store";
  import { onDestroy } from "svelte";
  import Icon from "@iconify/svelte";

  let filtered = writable<string[]>([]);

  let filteredProjects: Project[] = [...projects];
  const unsub = filtered.subscribe((tags) => {
    filteredProjects =
      tags.length > 0
        ? projects.filter((project) =>
            tags.every((tag) => project.tech.includes(tag)),
          )
        : [...projects];
  });

  onDestroy(() => {
    unsub();
  });
</script>

<Container.Root containerId="projects" variant="to_top">
  <Container.Title>Projects</Container.Title>
  <Container.Body>
    {#if $filtered.length > 0}
      <nav class="flex flex-row justify-between w-full">
        <div class="flex w-full gap-2 mb-2">
          {#each $filtered as tag}
            <ProjectFilterTag {tag} {filtered} />
          {/each}
        </div>

        <button
          class="flex items-center gap-1 px-2 text-lg rounded-full w-fit h-fit bg-cls-purple text-cls-foreground"
          on:click={() => {
            filtered.set([]);
          }}
        >
          <span> clear </span>
          <Icon icon="mdi:close" />
        </button>
      </nav>
    {/if}
    <div
      class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center"
    >
      {#each filteredProjects as project}
        <ProjectItem {project} {filtered} />
      {/each}
    </div>
  </Container.Body>
</Container.Root>
