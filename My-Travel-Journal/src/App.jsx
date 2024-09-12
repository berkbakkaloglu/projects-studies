import React from "react";
import Header from "./Header"
import Content from "./Content"
import data from "./Data"

export default function App() {
    const contentData = data.map(item => {
      return <Content
        key={item.id}
        {...item}
      />
    })
    return (
      <div>
      <Header/>
      {contentData}
      </div>
    )
}