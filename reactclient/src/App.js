import React, { useEffect, useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import './widget.css';
import socket from './utilities/socketConnection';
import Widget from './Widget';

function App() {

  const [performanceData, setPerformanceData] = useState();
  
  useEffect( () =>{
    socket.on('data', (data) =>{
      const currentState = ({...performanceData});
      currentState[data.macA] = data;
      setPerformanceData(currentState);
    }); 

    return () => {
      socket.off('data');
    }
  })


  function RenderWidget(){    
    let widgets = [];
    Object.entries(performanceData).forEach(([key,value]) => {
      widgets.push(<Widget key={key} item={value} />)
    });    
    return widgets;
  }

  return (
    <div className="App">
      {performanceData ? RenderWidget() : ''}
      
    </div>
  );
}

export default App;
