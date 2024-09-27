<script lang="ts">
  import type { Project } from "$lib/content/projects";
  import type { Writable } from "svelte/store";
  import Button from "../../components/button";
  import ProjectTag from "./project-tag.svelte";
  export let project: Project;
  export let filtered: Writable<string[]>;
</script>

<div
  class="flex flex-col justify-between w-full h-full gap-2 p-4 overflow-y-auto transition-all rounded-lg bg-light-card shadow-default-card"
>
  <div class="flex flex-wrap items-center w-full gap-1 h-fit">
    {#each project.tech as tag}
      <ProjectTag {tag} {filtered} />
    {/each}
  </div>
  {#if project.image !== undefined}
    <img src={project.image} alt={project.name} class="rounded-lg" />
  {/if}
  <h1 class="text-2xl font-semibold 2xl:text-3xl">{project.name}</h1>
  <p class="text-xl font-secondary text-cls-foreground-secondary">
    {project.description}
  </p>
  <div class="flex flex-col gap-2 md:flex-row">
    <Button.Root variant="outline" className="w-full 2xl:w-1/3 h-10">
      <Button.Anchor
        label="code"
        href={project.sourceCode}
        icon={"lucide:code"}
        toBlank
      />
    </Button.Root>
    <Button.Root variant="pink" className="w-full 2xl:w-1/3 h-10">
      <Button.Anchor
        label="details"
        href={project.details}
        icon={"lucide:square-arrow-out-up-right"}
        toBlank
      />
    </Button.Root>
  </div>
</div>
