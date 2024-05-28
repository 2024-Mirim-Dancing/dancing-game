import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import MainPage from './pages/main/main-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App;
