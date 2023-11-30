import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Main from './pages/Main';
import Footer from './component/Footer';
import Render from './component/Render';


function App() {
  return (
    <div className="App">
      <Nav />
      <Render />
      <Footer />
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Main />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }