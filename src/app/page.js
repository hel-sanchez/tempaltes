"use client";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Template1 from './Templates/template-1/template-1';
import Template2 from './Templates/template-2/template-2';
import Template3 from './Templates/template-3/template-3';
import Template4 from './Templates/template-4/template-4';
import Template5 from './Templates/template-5/template-5';
import Template6 from './Templates/template-6/template-6';
import Home from './Home/home';
import New1 from './Templates/new-template/new-1';
import T1 from './Templates/t1/t1';
import T2 from './Templates/t2/t2';
import N1 from './Templates/newer/New1';
import F1 from './Templates/form/form1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Template-1" element={<Template1 />} />
        <Route path="/Template-2" element={<Template2 />} />
        <Route path="/Template-3" element={<Template3 />} />
        <Route path="/Template-4" element={<Template4 />} />
        <Route path="/Template-5" element={<Template5 />} />
        <Route path="/Template-6" element={<Template6 />} />
        <Route path="/New-1" element={<New1 />} />
        <Route path="/T1" element={<T1 />} />
        <Route path="/T2" element={<T2 />} />
        <Route path="/N1" element={<N1 />} />
        <Route path="/F1" element={<F1 />} />
      </Routes>
    </Router>
  );
}

export default App;
