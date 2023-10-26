import { useState } from 'react';
import './App.css';


function App() {

  return (
    <>
      <div className='App'>
        <Board />
      </div>
    </>
  )
}

function Board(){
  const [marks, setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const changeMark = (i)=>{
    const m =[...marks];
    m[i] = 1;
    setMarks(m);
  }

  return (
    <div className="Board">
      <div>
        <Block mark={marks[0]} position={0} changeMark={changeMark} />
        <Block mark={marks[1]} position={1} changeMark={changeMark} />
        <Block mark={marks[2]} position={2} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[3]} position={3} changeMark={changeMark} />
        <Block mark={marks[4]} position={4} changeMark={changeMark} />
        <Block mark={marks[5]} position={5} changeMark={changeMark} />
      </div>
      <div>
        <Block mark={marks[6]} position={6} changeMark={changeMark} />
        <Block mark={marks[7]} position={7} changeMark={changeMark} />
        <Block mark={marks[8]} position={8} changeMark={changeMark} />
      </div>
    </div>
  )
}

function Block({mark, changeMark, position}) {
  return <div className= {`Block mark${mark}`} 
          onClick={e=> changeMark(position)}>
  </div>
}

export default App;

