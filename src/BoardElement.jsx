import Ghost from './Ghost';
import Pacman from './Pacman';

export default function BoardElement({type,x,y}){
let className = type === '0' ? 'full' : type === '1' ? "wall" : 'empty';
const food= (<span className="food"></span>);
const sleeper= (<span className="sleeper"></span>);
const ghost =<Ghost type={type} x={x} y={y}/>
const pacman = <Pacman x={x} y={y}/>
let elementInner = type === '0' ? food: type === '9' ? pacman : type>=4&&type<9 ? ghost : type === '3' ? sleeper : '';
return(
    <div className={`element ${className}`}>
        {elementInner}
    </div>
)
}