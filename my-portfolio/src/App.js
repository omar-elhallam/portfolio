// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyWork" element={<MyWork />} />
            <Route path="/portfolio" element={<Home />} />
         </Routes>
      </>
   );
};
 
export default App;