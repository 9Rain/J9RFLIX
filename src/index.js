import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (<div>Not found</div>)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);