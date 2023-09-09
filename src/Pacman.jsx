
import logo from './pacman.gif';
import { useContext, useState, useEffect } from 'react';
import { directionContext } from './directionContext';

export default function Pacman({x,y}) {

  const [initialPosition, setInitialPosition] = useState({ x: +x, y: +y });
  const { direction, updateDirection, updateMatrix, Matrix } = useContext(directionContext);
  const pacmanDirection = { rotate: `${direction}deg` };

  useEffect(() => {
    const handleDocumentKeyDown = (e) => {
      const code = e.keyCode;
      switch (code) {
        case 38: // top
        case 87:
          handleMove(270);
          break;
        case 39: // right
        case 68:
          handleMove(0);
          break;
        case 37: // left
        case 65:
          handleMove(180);
          break;
        case 40: // bottom
        case 83:
          handleMove(90);
          break;
        default:
          console.log('error');
          break;
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [Matrix]); 

  function handleMove(degree) {
    updateDirection(degree);
    const newMatrix = [...Matrix];
    const { x, y } = initialPosition;

    switch (degree) {
      case 270:
          if(newMatrix[x - 1][y]!==1){
          newMatrix[x][y] = 2;
          newMatrix[x - 1][y] = 9; 
          setInitialPosition((prevState) => ({ ...prevState, x: x - 1 }));
          updateMatrix(newMatrix)
        }
      break;
      case 180:
          if(newMatrix[x ][y-1]!==1){
          newMatrix[x][y] = 2;
          newMatrix[x ][y-1] = 9; 
          setInitialPosition((prevState) => ({ ...prevState, y: y - 1 }));
          updateMatrix(newMatrix)}
      break;
      case 90:
          if(newMatrix[x+1][y]!==1){
          newMatrix[x][y] = 2;
          newMatrix[x+1][y] = 9; 
          setInitialPosition((prevState) => ({ ...prevState, x: x + 1 }));
          updateMatrix(newMatrix)}
      break;
      case 0:
          if(newMatrix[x][y+1]!==1){
          newMatrix[x][y] = 2;
          newMatrix[x][y+1] = 9; 
          setInitialPosition((prevState) => ({ ...prevState, y: y + 1 }));
          updateMatrix(newMatrix)}
      break;
      default:
        console.log('error');
    }
  }
  return <img src={logo} alt='pacman' style={pacmanDirection} className="pacman"></img>;
}
