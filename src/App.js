
import './App.css';
import Counter from './component';
import Mycomponent from './mycomponent-roolkit/my-slices';
import UserProfile from './thunk/component-thunk';

function App() {
  return (
    <div className="App">
       <Counter></Counter>
       <Mycomponent></Mycomponent>
       <UserProfile ></UserProfile>
    </div>
  );
}

export default App;
