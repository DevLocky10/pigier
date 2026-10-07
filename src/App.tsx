import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Levels } from "./pages/Levels"


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/level", element: <Levels />},
    {path: "/session/:level_id", element: <div>Page des sessions</div>},
    {path: "/authenticate/:level_id/:session_id", element: <div>Formulaire d'indentification</div>},
    {path: "/result", element: <div>Page des résultats</div>}
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
