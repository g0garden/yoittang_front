
import { Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


//<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  );
};

export default App;
