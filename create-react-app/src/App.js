import "./App.css";
import Introduction from './components/introduction'
import Profile from './components/profile'

function App() {
  return (
    <div>
      <Profile/>
      <Introduction name='obit'/>
      <Introduction name='robertho'/>
    </div>
  );
}

export default App;
