<script lang="ts">
  type Variant = "hero" | "to_top" | "to_bottom";

  export let variant: Variant = "to_bottom";
  export let isFullscreen = false;
  export let containerId: string;

  const heightClass = isFullscreen ? "min-h-screen" : "min-h-full";

  const variantClass = {
    hero: "bg-hero-gradient",
    to_top: "bg-bt-gradient",
    to_bottom: "bg-tb-gradient",
  }[variant];
</script>

<section
  id={containerId}
  class={`flex flex-col justify-center items-center w-full antialiased ${heightClass} ${variantClass}`}
>
  <slot />
</section>
