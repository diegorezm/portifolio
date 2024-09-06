<script lang="ts">
  import type { Project } from "$lib/content/projects";
  import Button from "../../components/button";
  import ProjectTag from './project-tag.svelte'
  export let project: Project;
</script>

<div
  class="w-full h-fit bg-light-card shadow-default-card rounded-lg p-4 space-y-2 2xl:p-4 2xl:space-y-3 overflow-y-auto"
>
  <div class="flex items-center flex-wrap gap-2 w-full h-fit">
  {#each project.tech as tag }
    <ProjectTag tag={tag}/> 
  {/each}
  </div>
  <h1 class="text-2xl 2xl:text-3xl font-semibold">{project.name}</h1>
  {#if project.image !== undefined}
    <img src={project.image} alt={project.name} class="rounded-lg" />
  {/if}
  <p class="font-secondary text-lg 2xl:text-xl text-cls-foreground-secondary">
    {project.description}
  </p>
  <div class="flex flex-col md:flex-row gap-2">
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
