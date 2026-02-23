import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import TechStack from "./components/techstack";
import AIChatPanel from "./components/AIChatPanel";
import Footer from "./components/footer";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Hero onOpenChat={() => setChatOpen(true)} />
      <About />
      <Projects />
      <TechStack />
      <Footer />
      <AIChatPanel isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

export default App;
