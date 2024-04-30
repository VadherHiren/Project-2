import './css/app.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/tiny-slider.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Header from './Header.js';

// class Demo extends Component {
 
//   render() {
//       return (<ScriptTag isHydrating={true} type="text/javascript" src="some_script.js" />);
//   }
// }
function App() {
  // const Demo = props => (
  //   <ScriptTag type="text/javascript" src="./js/bootstrap.bundle.min.js" />
  //   )
  return (
    <div className="App">
      {/* <Home></Home> */}
      <BrowserRouter>
      {/* <Link to="/"></Link> */}
        <Header></Header>
        {/* <LoginRegis></LoginRegis> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
