import { Col, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Detail from './views/Detail';
import DishesList from './views/DishesList';
import Home from './views/Home';

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
                <Route path="/common" render={() => (
                  <Route path="/common/detail/:id" component={Detail} />
                )} />
                <Route path="/" render={() => (
                  <Switch>
                    <Route path="/dishes" component={DishesList} />
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
