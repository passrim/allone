import logo from './logo.svg';
import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './product/Product';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Main />}></Route> 
          <Route path="/product/:productId" element={<Product />}></Route> {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */} 
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}



export default App;
