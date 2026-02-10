import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));

// Placeholder pages — will be built out incrementally
const PlaceholderPage = lazy(() => import("./pages/Placeholder"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<PlaceholderPage />} />
            <Route path="/properties/:id" element={<PlaceholderPage />} />
            <Route path="/developments" element={<PlaceholderPage />} />
            <Route path="/services" element={<PlaceholderPage />} />
            <Route path="/investment" element={<PlaceholderPage />} />
            <Route path="/about" element={<PlaceholderPage />} />
            <Route path="/team" element={<PlaceholderPage />} />
            <Route path="/blog" element={<PlaceholderPage />} />
            <Route path="/blog/:id" element={<PlaceholderPage />} />
            <Route path="/contact" element={<PlaceholderPage />} />
            <Route path="/faq" element={<PlaceholderPage />} />
            <Route path="/testimonials" element={<PlaceholderPage />} />
            <Route path="/careers" element={<PlaceholderPage />} />
            <Route path="/dashboard" element={<PlaceholderPage />} />
            <Route path="/admin" element={<PlaceholderPage />} />
            <Route path="/privacy-policy" element={<PlaceholderPage />} />
            <Route path="/terms-of-service" element={<PlaceholderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
