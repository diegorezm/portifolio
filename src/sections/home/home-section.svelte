<script>
import Container from "../../components/container";
import Button from "../../components/button";
import PurpleText from "../../components/purple-text/purple-text.svelte";
</script>

<Container.Root variant="hero" containerId="home" isFullscreen>
  <Container.Body>
    <div class="flex flex-col gap-8 md:gap-12 justify-center items-center w-fit m-auto h-full">
      <h1 class="block text-center text-6xl lg:text-7xl font-bold font-primary">
        Hello!
        <br /> My name is <PurpleText>Diego</PurpleText>,<br />
        i'm a <PurpleText>fullstack</PurpleText> developer!
      </h1>
      <div class="flex justify-center md:justify-start w-full gap-8 text-lg">
        <Button.Root variant="pink" className="w-fit px-1 md:w-1/4 h-12">
          <Button.Anchor
            label="See my resume!"
            href="https://diegorezm.github.io/curriculum/cv_fullstack_en.pdf"
            toBlank
          />
        </Button.Root>
        <Button.Root variant="dark" className="w-fit px-1 md:w-1/4 h-12">
          <Button.Anchor label="Contact me!" href="/#contact" />
        </Button.Root>
      </div>
    </div>
  </Container.Body>
</Container.Root>
