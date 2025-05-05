import "./App.css";
import Header from "./components/Header";
import {Route,Routes} from 'react-router-dom'
import Dashboard from "./components/pages/Dashboard";
import LearningPath from "./components/pages/LearningPath";
import Skills from "./components/pages/Skills";
import JobMatches from "./components/pages/JobMatches";
import ResumeBuilder from "./components/pages/ResumeBuilder";
import GitHub from "./components/pages/GitHub";
function App() {


  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="learning-paths" element={<LearningPath />} />
      <Route path="skills" element={<Skills />} />
      <Route path="job-matches" element={<JobMatches />} />
      <Route path="resume-builder" element={<ResumeBuilder />} />
      <Route path="github" element={<GitHub />} />
      </Routes>
 
    </>
  );
}

export default App;
