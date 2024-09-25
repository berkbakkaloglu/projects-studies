import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home page</h1>} />

          <Route element={<AuthRequired />}>
            <Route path="protected" element={<h1>Super secret info here</h1>} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)