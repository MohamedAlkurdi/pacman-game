import './App.css'
export default function GameBoard({children}){
    return(
        <div className="board">
            {children}
        </div>
    )
}