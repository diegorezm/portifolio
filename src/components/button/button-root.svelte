<script lang="ts">
  type Variant = "pink" | "dark" | "outline"
  export let variant: Variant = "outline";
  export let className = "";

  const variantClass = {
    pink: "bg-pink-gradient text-cls-foreground hover:opacity-80 transition-all",
    dark: "bg-dark-gradient text-cls-foreground hover:opacity-75 transition-all",
    outline:
      "border text-cls-foreground border-cls-foreground hover:opacity-70 transition-all",
  }[variant];
</script>

<div 
  class={`flex justify-center items-center font-secondary font-semibold rounded-lg ${variantClass} ${className}`}>
    <slot />
</div>
