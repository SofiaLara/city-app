import './App.css';
import CounterApp from './CounterApp';
import ToggleApp from './ToggleApp';
import ListApp from './ListApp';
import CallsApp from './CallsApp';
import HigherOrder from './HigherOrder';
import ReduxApp from './ReduxApp';
//import here all the main containers for each app
//each app is a different react exercise

function App() {
  return (
    <div className="App">
      <a href='#'>Learn React</a>
      <h2>Intermediate React</h2>
      <p>This first exercise is about passing information from child to parent by creating a counter using Render-Props and Context</p>
      <CounterApp />

      <p>This exercise is about creating a toggle!</p>
      <ToggleApp />

      <p>This second exercise is about forms, creating a list in which we can add and remove elements</p>
      <ListApp />

      <p>This third exercise is about API calls, displaying data coming from an API</p>
      <CallsApp />
      
      <h2>Advanced React</h2>
      <p>This fourth exercise is about creating a reusable component</p>
      <HigherOrder />

      <p>This fifth exercise is about using Redux!</p>
      <ReduxApp />
    </div>
  );
}

export default App;
