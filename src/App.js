import {useState,useEffect } from 'react';
import GameBoard from './GameBoard';
import BoardElement from './BoardElement';
import './App.css';
import {matrix} from './data';
import {directionContext} from './directionContext.jsx'
import Score from './Score';
import Intro from './Intro';
import Outro from './outro';
import LoseOutro from './loseOutro';
import audio from './pacman_death.wav'
import winningTheme from './pacman_AwvgsBv.mp3'
export default function App() {
  
  const [Matrix,setMatrix] = useState(matrix);
  const [direction,setDirection] = useState(0);
  const [score,setScore] = useState(0);
  const [gameRunning,setGameRunning] = useState(false);
  const [winState,setWinState] = useState(false)
  const [loseState,setLoseState] = useState(false)

  const flattenedArray = Matrix.reduce((acc, curr) => { return acc.concat(curr)}, []);

  function countReapeted(element){
    let i =0;
    flattenedArray.forEach(item=>{
      if(item === element)i++
    })
    return i;
  }

  function updateGameState(){
    setGameRunning(true);
  }
  function updateWinState(value){
    setWinState(value);
  }
  function updateLoseState(value){
    setLoseState(value)
  }
  function updateDirection(deg){
    setDirection(deg)
  }
  function updateMatrix(array){
    setMatrix(array)
  }

  useEffect(()=>{
  let newScore = (177 - countReapeted(0))*5;
  setScore(newScore);
  if(countReapeted(0) === 0){console.log('you won!');setWinState(true);}
  if(countReapeted('5') === 3 || countReapeted(9) === 0){
    setLoseState(true);
  }
  },[Matrix])

  useEffect(()=>{
    if(loseState){new Audio(audio).play()}
    if(winState){new Audio(winningTheme).play()}
  },[loseState,winState])

  const renderBoard = Matrix.map((row,Xindex)=>{
    return row.map((item,Yindex)=>{
      return <BoardElement  type={`${item}`} x={Xindex} y={Yindex}/>
    })
  })

  return (
    <div className="App">
      <Intro gameState ={gameRunning} updateGameState={updateGameState}/>
      <Outro winState={winState} updateWinState={updateWinState}/>
      <LoseOutro loseState={loseState} updateLoseState={updateLoseState} />
      {gameRunning ?
      <directionContext.Provider value={{direction,Matrix,updateDirection,updateMatrix}}>
      <GameBoard>
      {renderBoard}
      </GameBoard>
      <Score score={score} />
      </directionContext.Provider>
      : ''
      }
    </div>
  );
}