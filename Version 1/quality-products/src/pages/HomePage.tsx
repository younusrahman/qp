import React from 'react'



interface parameter {
  height : number|undefined
}

export default function Home(props : parameter) {
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => console.log(typeof(props.height))}>click m e</button>
    </main>
  )
}
