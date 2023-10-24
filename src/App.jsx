import { useState } from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Board />
      </div>
    </>
  )
}

function Board(){
  return (
    <div className="Board">
      <div>
        <Block />
        <Block />
        <Block />
      </div>
      <div>
        <Block />
        <Block />
        <Block />
      </div>
      <div>
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  )
}

function Block({mark, changeMark}){
  return <div className={`Block ${mark}`} onClick={e=>changeMark()}>

  </div>
}

export default App;

