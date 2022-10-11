import { Title } from './UI/Title/Title';
import { News } from './components/News/News';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <button onClick={(event) => setName('button')}>CLick me</button> */}
        <Title>News portal</Title>
        <News />
      </div>
    </div>
  );
}

export default App;
