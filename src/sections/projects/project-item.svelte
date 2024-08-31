<script lang="ts">
  import type { Project } from "$lib/content/projects";
  import Button from "../../components/button";
  export let project: Project;
  const techStr = project.tech.join(", ");
</script>

<div
  class="w-full h-full bg-light-card shadow-default-card rounded-lg p-2 space-y-2 2xl:p-4 2xl:space-y-3 overflow-y-auto"
>
  <p class="text-cls-light-green text-md 2xl:text-lg">{techStr}</p>
  <h1 class="text-xl 2xl:text-2xl">{project.name}</h1>
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
