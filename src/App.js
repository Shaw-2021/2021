import './App.css';
import Price from './price';

function App() {
  const date=new Date();
  const year=date.getFullYear();
  const month=date.getMonth()+1;
  const day=date.getDate();

  return (
    <div className="App">
      <h1>Bitcoin</h1>
      <Price></Price>
      <div className='footer'>{day}/{month}/{year}</div>
    </div>
  );
}

export default App;
