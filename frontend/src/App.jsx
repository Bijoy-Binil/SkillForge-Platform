import "./App.css";
import Header from "./components/Header";
import {Route,Routes} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import LearningPath from "./pages/LearningPath";
import Skills from "./pages/Skills";
import JobMatches from "./pages/JobMatches";
import ResumeBuilder from "./pages/ResumeBuilder";
import GitHub from "./pages/GitHub";
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
