import Slider from './components/Slider';
import ComingSoon from './components/ComingSoon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Slider />
      <ComingSoon />
      <ToastContainer />
    </>
  );
}

export default App;
