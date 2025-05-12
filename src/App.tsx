
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from 'framer-motion';

import Layout from './components/layout/Layout';
import Index from "./pages/Index";
import DevStats from "./pages/DevStats";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Products from "./pages/Products";
import FreeCourses from "./pages/FreeCourses";
import PremiumCourses from "./pages/PremiumCourses";
import ComingSoon from "./pages/ComingSoon";
import HireMe from "./pages/HireMe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <NextUIProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/dev-stats" element={<DevStats />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/free-courses" element={<FreeCourses />} />
                  <Route path="/premium-courses" element={<PremiumCourses />} />
                  <Route path="/coming-soon" element={<ComingSoon />} />
                  <Route path="/hire-me" element={<HireMe />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </NextUIProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
