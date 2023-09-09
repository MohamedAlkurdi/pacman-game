import red from './red.gif'
import orange from './orange.gif'
import pink from './pink.gif'
import blue from './blue.gif'
import sleep from './sleep.gif'
import { useState,useEffect,useContext } from 'react'
import {directionContext} from './directionContext'

export default function Ghost({type,x,y}){
  x= +x;
  y= +y;
  const {Matrix,updateMatrix} = useContext(directionContext); 
  const [initialPosition, setInitialPosition] = useState({x, y }); 
  const moves =[ {X:x-1,Y:y}, {X:x,Y:y+1}, {X:x+1,Y:y}, {X:x,Y:y-1},]
  function randomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min }
  const AllGhosts = ['5','6','7','8'];
  const otherGhosts = AllGhosts.filter(ghost=>{
    return ghost !== type;
  })
  useEffect(() => { 
    const interval = setInterval(() => { 
      const newMatrix = [...Matrix];  
      const availableRoads = []; 
      for (let i = 0; i < 4; i++) { 
        const { X, Y } = moves[i]; 
        if (newMatrix[X][Y] === 2 || newMatrix[X][Y] === 0 || newMatrix[X][Y] === 9 || newMatrix[X][Y] === 3){
          availableRoads.push(moves[i]);
        }else{
        }
      }
      if(availableRoads.length > 0){
        const { X: Xdir, Y: Ydir } = availableRoads[randomInt(0,availableRoads.length)];
        if(newMatrix[Xdir][Ydir] !== otherGhosts[0] || newMatrix[Xdir][Ydir] !== otherGhosts[1] ||newMatrix[Xdir][Ydir] !== otherGhosts[2]){
          const next = newMatrix[Xdir][Ydir] === 9 ? 0 : newMatrix[Xdir][Ydir];
          newMatrix[Xdir][Ydir] = type;
          newMatrix[initialPosition.x][initialPosition.y] = next;
          updateMatrix(newMatrix);
          setInitialPosition({ x: Xdir, y: Ydir });
        }
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);
    let src;
    switch(type){
      case '4':
        src = (<img className='ghost' src={sleep} alt='ghost'/>);
        break;
        case '5':
        src = (<img className='ghost' src={red} alt='ghost'/>);
        break;
        case '6':
        src = (<img className='ghost' src={orange} alt='ghost'/>);
        break;
        case '7':
        src = (<img className='ghost' src={pink} alt='ghost'/>);
        break;
        case '8':
        src = (<img className='ghost' src={blue} alt='ghost'/>);
        break;
        default:break;
    }
    return src
}