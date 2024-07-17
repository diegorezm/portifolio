<script>
import Container from "../../components/container";
import ContactForm from "./contact-form.svelte";
</script>

<Container.Root variant="to_top" containerId="contact">
  <Container.Title> Contact </Container.Title>
  <Container.Body className="flex justify-center mb-2">
    <ContactForm />
  </Container.Body>
</Container.Root>
