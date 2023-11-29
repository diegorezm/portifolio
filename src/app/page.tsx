import Home from "./components/home";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Projects from "./components/projects";
import { Toaster } from 'react-hot-toast'
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Tech />
      <Contact />
      <Toaster
        position="bottom-right"
        reverseOrder={false}

        toastOptions={{
          duration: 2500,
          style: {
            background: '#363636',
            color: '#fff',
          },

          error: {
            style: {
              background: 'var(--red-color)',
              color: 'var(--fg-color)'
            }
          },

          success: {
            style: {
              color: 'var(--green-color)',
              background: 'var(--mantle)',
            },
          },
        }}

      />
    </>
  )
}
