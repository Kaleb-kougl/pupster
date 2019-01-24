import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavagationBar from './components/NavagationBar/NavagationBar';
import About from './pages/About';
import Search from './pages/Search';
import Discover from './pages/Discover';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid={true} style={{ padding: "0px" }}>
          <Row>
            <Col xs={12} style={{ padding: "0px" }}>
              <NavagationBar />
            </Col>
          </Row>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Grid>
      </Router>
    );
  }
}

export default App;
