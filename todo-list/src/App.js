import { BrowserRouter, Switch, Route } from 'react-router-dom';

// css
import './App.css';

// components
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/todo" component={() => <ToDoList id="아이유" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
