<script lang="ts">
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import NavLogo from './nav-logo.svelte';
  import NavItem from './nav-item.svelte';
    import Icon from '@iconify/svelte';

  let atTop = true;
  let openMobileMenu = false;

  const openCloseMobileMenu = () => {
    openMobileMenu = !openMobileMenu;
  };

  onMount(() => {
    const handleScroll = () => {
      atTop = window.scrollY <= 50;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div data-at-top={atTop}>
  <nav class={`fixed w-full flex justify-between px-4 md:px-8 py-2 items-center text-xl font-bold ${atTop ? 'bg-transparent' : 'bg-cls-background top-0'}`}>
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
            <Icon icon="ion:menu"/>
    </button>
  </nav>

  {#if openMobileMenu}
    <div>
      <button
        class="w-screen h-screen z-10 bg-[rgba(0,0,0,0.8)] fixed top-0 left-0"
        on:click={openCloseMobileMenu}
      />
      <div 
        transition:slide={{ delay: 150, duration: 150, easing: quintOut, axis: 'y' }}
        class="fixed flex flex-col items-center w-full min-h-1/2 z-20 bg-cls-background text-lg font-bold">
        <div class="flex justify-between items-center w-full px-6 py-2 text-xl shadow-black shadow-sm">
          <NavLogo />
          <button on:click={openCloseMobileMenu} class="text-2xl">
            <Icon icon="ion:close"/>
          </button>
        </div>
        <NavItem path="/#home" title="Home" isMobile onClick={openCloseMobileMenu} />
        <NavItem path="/#about" title="About" isMobile onClick={openCloseMobileMenu} />
        <NavItem path="/#projects" title="Projects" isMobile onClick={openCloseMobileMenu} />
        <NavItem path="/#contact" title="Contact" isMobile onClick={openCloseMobileMenu} />
      </div>
    </div>
  {/if}
</div>
