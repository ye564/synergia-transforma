import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import EducacionFormacion from "./pages/EducacionFormacion";
import ApoyoPsicologico from "./pages/ApoyoPsicologico";
import EmpleabilidadEmprendimiento from "./pages/EmpleabilidadEmprendimiento";
import AsesoriaLegal from "./pages/AsesoriaLegal";
import Admisiones from "./pages/Admisiones";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/formacion-educativa" element={<EducacionFormacion />} />
          <Route path="/apoyo-psicologico" element={<ApoyoPsicologico />} />
          <Route path="/empleabilidad-emprendimiento" element={<EmpleabilidadEmprendimiento />} />
          <Route path="/asesoria-legal" element={<AsesoriaLegal />} />
          <Route path="/admisiones" element={<Admisiones />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
