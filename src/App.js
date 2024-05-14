import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import ConnectionExample from './components/ConnectionExample';
import SignUp from './components/register';
import SignIn from './components/login';
import Logout from './components/logout';

/*class connectionExample extends React.Component {
  componentDidMount() {
      const apiUrl = 'http://127.0.0.1:8000/api/';
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
      return <div>Example connection</div>;
  }
}
*/

function App() {
  return (
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/test-api" element={<ConnectionExample />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;