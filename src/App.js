import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import MainPage from './pages/main/main-page';
import NicknamePage from './pages/nickname/nickname-page';
import TeacherPage from './pages/teacher/teacher-page';
import RankingPage from './pages/ranking/ranking-page';
import StartPage from './pages/game/start';
import EndPage from './pages/end/end';
import ExplainPage from './components/explain/explain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/nickname' element={<NicknamePage />} />
        <Route path='/teacher' element={<TeacherPage />} />
        <Route path='/ranking' element={<RankingPage/>} />
        <Route path='/start' element={<StartPage/>} />
        <Route path='/end/:teacherName' element={<EndPage />} />
        <Route path='/explain' element={<ExplainPage />} />
      </Routes>
    </Router>
  )
}

export default App;
