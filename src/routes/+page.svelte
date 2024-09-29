<script lang="ts">
  import Navbar from "../components/navbar/navbar.svelte";
  import AboutSection from "../sections/about/about-section.svelte";
  import ContactSection from "../sections/contact/contact-section.svelte";
  import HomeSection from "../sections/home/home-section.svelte";
  import ProjectSection from "../sections/projects/project-section.svelte";
</script>

<div>
  <Navbar />
  <div class="space-y-6">
    <HomeSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
  </div>
</div>
