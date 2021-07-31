import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Routers from './routes/router';
import Footer from './components/footer';
import Navbar_Admin from './components/header/Navbar_Admin';
import Navbar_notSign from './components/header/Navbar_notSign';
import Navbar_Sign from './components/header/Navbar_Sign';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* the routing components */}
      <Routers /> 
    </BrowserRouter>
    </div>
  );
}

export default App;
