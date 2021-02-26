import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="react-logo" />
        <h1 style={{ marginBottom: 16 }}>Create-React-App</h1>
        <small>@mahabubdev</small>

        {/* <Router basename="/cicd-ghpages-react"> */}
        <Router>
          <div style={{
            margin: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem 0'
          }}>
            <Link to='/'>Page_One</Link>
            <Link to='/two'>Page_Two</Link>
            <Link to='/h37b3ru'>Page_404</Link>
          </div>

          <Switch>
            <Route path={'/'} component={pageOne} exact />
            <Route path={'/two'} component={pageTwo} exact />
            <Route path={'/*'} component={notFound} exact />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

// https://mahabubdev.github.io/cicd-ghpages-react

// components
const pageOne = () => {
  return (
    <>
      <h2>Page no. 1</h2>
    </>
  );
}

const pageTwo = () => {
  return (
    <>
      <h2>Page no. 2</h2>
    </>
  );
}

const notFound = () => {
  return (
    <>
      <h2 style={ { color: 'red' } }>Page not found! 404 Error.</h2>
    </>
  );
}

export default App;
