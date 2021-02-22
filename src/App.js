import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {

  const PuchPage = () => (
    <div>
      <h1>PuchPage</h1>
    </div>
  )

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/puch' component={PuchPage} />
      </Switch>
    </div>
  );
}

export default App;
