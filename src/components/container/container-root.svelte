<script lang="ts">
  type Variant = "hero" | "normal";

  export let variant: Variant = "normal";
  export let isFullscreen = false;
  export let containerId: string;

  const heightClass = isFullscreen ? "min-h-screen" : "min-h-full";

  const variantClass = {
    hero: "bg-hero-gradient",
    normal: "bg-cls-background"
  }[variant];
</script>

<section
  id={containerId}
  class={`flex flex-col justify-center items-center w-full antialiased ${heightClass} ${variantClass}`}
>
  <slot />
</section>
