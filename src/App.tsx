import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "@dr.pogodin/react-helmet"
import { RootLayout } from "@/layout/RootLayout"
import { Home } from "@/pages/Home"
import { Projects } from "@/pages/Projects"
import { Events } from "@/pages/Events"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
import { ScrollToTop } from "@/components/ScrollToTop"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/etkinlikler" element={<Events />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </RootLayout>
      </Router>
    </HelmetProvider>
  )
}

export default App
