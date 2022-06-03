import './styles/App.css';
import {useState, useEffect} from 'react'
import './styles/board.css'
import Square from './components/Square';
import { Patterns } from './Patterns';

function App() {
  
  const [board, setBoard] = useState(["","", "","","", "","","", "",])
  const [result, setResult] = useState({winner:'none', state:'none'})
  const [turn, setTurn ] = useState('X')


 useEffect(() => {
   checkWinner();

   if(turn == "X"){
    setTurn("O")
  } else {
    setTurn("X")
  }
 }, [board])
  

 useEffect(() => {
   if(result.state != 'none'){
    alert(`game finished: winner player is : ${result.winner}`)

   }

 },[result])


  const ChooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
      if(idx == square && val ==""){
        return turn; 
      }
      return val;
    })
    );
    
  };

 const checkWinner = () => {
  Patterns.forEach((element) => {
    const firstPlayer = board[element[0]];
    if(firstPlayer == '') return;
    let foundWinner = true;
        element.forEach((index) => {
      if(board[index] != firstPlayer){
          foundWinner = false
      }
    })
    if(foundWinner){
      setResult({winner:'Player1', state: 'won'})
    }
  });
  };



  return (
<div>


Turn:{turn}

<div className="App">


      <div className='board'>
      <div className='row'>
      <Square val={board[0]} ChooseSquare={() => {ChooseSquare(0)}} />
      <Square val={board[1]} ChooseSquare={() => {ChooseSquare(1)}} />
      <Square val={board[2]} ChooseSquare={() => {ChooseSquare(2)}}/>
      </div>
      <div className='row'>
      <Square val={board[3]} ChooseSquare={() => {ChooseSquare(3)}}/>
      <Square val={board[4]} ChooseSquare={() => {ChooseSquare(4)}}/>
      <Square val={board[5]} ChooseSquare={() => {ChooseSquare(5)}}/>
      </div>
      <div className='row'>
      <Square val={board[6]} ChooseSquare={() => {ChooseSquare(6)}}/>
      <Square val={board[7]} ChooseSquare={() => {ChooseSquare(7)}}/>
      <Square val={board[8]} ChooseSquare={() => {ChooseSquare(8)}}/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
