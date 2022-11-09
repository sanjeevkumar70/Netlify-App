
import './App.css';
import FetchApi from './components/FetchApi';
import FilterUi from './components/FilterUi';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
     <div className="container">
      <div className="row">
      <div className="col-md-3">
        <FilterUi/>
      </div>
      <div className="col-md-9 my-5">
        <FetchApi/>
      </div>
      </div>
     </div>
    </div>
  );
}

export default App;
