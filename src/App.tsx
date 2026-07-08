import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProofreadEasterEgg } from './components/ProofreadEasterEgg'

function App() {
  return (
    <div className="paper-grain min-h-screen">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProofreadEasterEgg />
    </div>
  )
}

export default App
