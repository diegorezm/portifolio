<script lang="ts">
  type Variant = "pink" | "dark" | "outline"
  export let variant: Variant = "outline";
  export let className = "";

  const variantClass = {
    pink: "bg-pink-gradient text-cls-foreground",
    dark: "bg-dark-gradient text-cls-foreground",
    outline:
      "border border-cls-background text-cls-foreground hover:border-cls-foreground",
  }[variant];
</script>

<div 
  class={`flex justify-center items-center font-secondary font-semibold shadow-default rounded-lg ${variantClass} ${className}`}>
    <slot />
</div>
