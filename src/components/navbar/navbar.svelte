<script lang="ts">
  import { onMount } from "svelte";
  import NavLogo from "./nav-logo.svelte";
  import NavItem from "./nav-item.svelte";
  import Icon from "@iconify/svelte";

  let atTop = true;
  let open = false;

  const openCloseMobileMenu = () => {
    open = !open;
  };

  onMount(() => {
    const handleScroll = () => {
      atTop = window.scrollY <= 50;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div>
  <nav
    class={`fixed w-full flex justify-between px-4 md:px-8 py-2 items-center text-xl font-bold ${atTop ? "bg-transparent" : "bg-cls-background top-0"}`}
  >
    <NavLogo />
    <div class="hidden lg:flex space-x-12">
      <NavItem path="/#about" title="About" />
      <NavItem path="/#projects" title="Projects" />
      <NavItem path="/#contact" title="Contact" />
    </div>

    <button
      on:click={openCloseMobileMenu}
      class="text-center lg:hidden rounded-lg bg-transparent hover:cursor-pointer text-2xl"
    >
      <Icon icon="ion:menu" />
    </button>
  </nav>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class={`fixed top-0 left-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.8)] ${open ? "block" : "hidden"}`}
    on:click={openCloseMobileMenu}
  />

  <aside
    class={`fixed right-0 flex flex-col items-center w-full md:w-2/3 min-h-screen z-20 bg-cls-background text-lg font-bold transition-transform ease-in-out duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
  >
    <button
      on:click={openCloseMobileMenu}
      class="flex justify-end text-2xl w-full px-6 py-2"
    >
      <Icon icon="ion:close" />
    </button>

    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <NavItem
        path="/#home"
        title="Home"
        isMobile
        onClick={openCloseMobileMenu}
      />
      <NavItem
        path="/#about"
        title="About"
        isMobile
        onClick={openCloseMobileMenu}
      />
      <NavItem
        path="/#projects"
        title="Projects"
        isMobile
        onClick={openCloseMobileMenu}
      />
      <NavItem
        path="/#contact"
        title="Contact"
        isMobile
        onClick={openCloseMobileMenu}
      />
    </div>
  </aside>
</div>
