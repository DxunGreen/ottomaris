import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import "./index.css"
import App from "./App.tsx"
import Geog560AnnoBib from "./Geog560AnnoBib.tsx"
import PageNotFound from "./PageNotFound.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />

          <Route path="projects">
            <Route path="geog-560-annotated-bibliography" element={<Geog560AnnoBib />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
