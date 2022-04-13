
import './assets/css/main.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UIPDA1001 from './UIPDA01/UIPDA1001';
import Lo10102 from './Lo10102';
import Re10101 from './product/Re10101';
import Re10102 from './product/Re_10102';
import Lo10201 from './product/Lo10201';
import Lo10202 from './product/Lo10202';
import Lo10301 from './product/Lo10301';

function AppMain() { 
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<UIPDA1001 />}></Route>
          <Route path="/Lo10102" element={<Lo10102 />}></Route>
          <Route path="/product/Lo10201" element={<Lo10201 />}></Route>
          <Route path="/product/Lo10202" element={<Lo10202 />}></Route>
          <Route path="/product/Lo10301" element={<Lo10301 />}></Route>
          <Route path="/product/Re10101" element={<Re10101 />}></Route>
          <Route path="/product/Re_10102" element={<Re10102 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default AppMain;
