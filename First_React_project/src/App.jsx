import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"

function Page() {
  return (
      
      <div>
        <Header />
        <Content />
        <Footer/>
      </div>
      
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)


