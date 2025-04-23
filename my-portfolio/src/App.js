// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';
import TestBackground from './TestBackground';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyWork" element={<MyWork />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/TestBackground" element={<TestBackground />} />
         </Routes>
      </>
   );
};
 
export default App;