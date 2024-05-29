import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import MainPage from './pages/main/main-page';
import NicknamePage from './pages/nickname/nickname-page';
import TeacherPage from './pages/teacher/teacher-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/nickname' element={<NicknamePage />} />
        <Route path='/teacher' element={<TeacherPage />} />
      </Routes>
    </Router>
  )
}

export default App;
