import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-content">
          <Row justify='center' type='flex'>
            <Col span='2'>
              <NavLeft></NavLeft>
            </Col>
            <Col span='10'>
              <Switch>
                <Route path="/" render={() => (
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Redirect to="/home" />
                  </Switch>
                )} />
              </Switch>
            </Col>
            <Col span='5'>
              <NavRight></NavRight>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
