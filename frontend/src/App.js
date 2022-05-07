import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import NewPost from './pages/NewPost'

function App() {
  return (
    <div className="App">
     
      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home/>} />
          <Route path='/newpost' element={<NewPost />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
