// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';
import MarathonDev from './pages/MarathonDev'; // Import the new component
import LogismProject from './pages/LogismProject'; // Import the new component
import ServicePlatform from './pages/ServicePlatform'; // Import the new component

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyWork" element={<MyWork />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="MarathonDev" element={<MarathonDev />} />
            <Route path="LogismProject" element={<LogismProject />} />
            <Route path="ServicePlatform" element={<ServicePlatform />} />
         </Routes>
      </>
   );
};
 
export default App;