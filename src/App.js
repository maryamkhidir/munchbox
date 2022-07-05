import React from 'react';
import { Route, Switch, Router} from 'react-router-dom'
import './App.scss';
import history from './history';
import Images from './assets/imports'
import Dashboard from './pages/Dashboard';
import StatusCodePage from './components/StatusCode';
import MenuBar from './components/MenuBar';
import { AdminReport } from './pages/Report';

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} /> 
          <Route path="/report" component={AdminReport} /> 
          <Route path="*" component={StatusCodePage} />
        </Switch>
      </Layout>
    </Router>
    )
}

const Layout = (props) => {
  return (
    <div style={{flexGrow:1}}>
      <MenuBar />
      {props.children}
    </div>
  )
}

export default App
