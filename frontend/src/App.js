import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import NewPost from './pages/NewPost'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
        

        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Main />} />
          <Route path='/newpost' element={<NewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
