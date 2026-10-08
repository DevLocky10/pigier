import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Level } from "./pages/Level"
import { Session } from "./pages/session"
import { StudiantForm } from "./pages/StudiantForm"
import { ResultPage } from "./pages/ResultPage"


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/level", element: <Level />},
    {path: "/session/:level_id", element: <Session />},
    {path: "/authenticate/:level_id/:session_id", element: <StudiantForm />},
    {path: "/result", element: <ResultPage />},
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
