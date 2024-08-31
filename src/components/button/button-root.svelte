<script lang="ts">
  type Variant = "pink" | "dark" | "outline";
  export let variant: Variant = "outline";
  export let className = "";

  const variantClass = {
    pink: "bg-cls-purple text-cls-foreground hover:opacity-80 transition-all",
    dark: "bg-cls-background text-cls-foreground hover:opacity-75 transition-all",
    outline:
      "border text-cls-foreground border-gray-500 hover:opacity-70 hover:border-cls-foreground transition-all",
  }[variant];
</script>

<div
  class={`flex justify-center items-center font-secondary font-semibold rounded-lg ${variantClass} ${className}`}
>
  <slot />
</div>
