import './App.scss';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import BarChart from './components/BarComponent';
import BgContainer from './components/ImgComponent'
import FormContainer from './components/SignUpComponent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="">
            <main className="mainApp">
              <BgContainer />
              <FormContainer />
            </main>
          </div>
        } />
        <Route path="/randombarchart" element={<BarChart />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
