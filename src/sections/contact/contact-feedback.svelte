<script lang="ts">
  type Variant = "normal" | "error";
  export let variant: Variant = "normal";
  export let message: string;

  const feedBack = {
    error: {
      className: "bg-cls-red",
      icon: "ion:close",
    },
    normal: {
      className: "bg-cls-light-green text-cls-background",
      icon: "ion:mark",
    },
  }[variant];
</script>

<div
  class={`flex items-center justify-center fixed top-0 right-4 z-50 w-fit px-4 py-2 rounded-2xl shadow-lg  space-x-2 transition-all duration-300 ease-in-out ${feedBack.className}`}
>
  <p class="text-lg font-secondary">{message}</p>
</div>
