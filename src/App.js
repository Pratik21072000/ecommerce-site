import './App.css';
// import { BrowserRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import {Header} from './components/Header';
import {ProductListing} from './components/ProductListing';
import {ProductDetails} from './components/ProductDetail'

function App() {
  return (
    <div className="App container">
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<ProductListing/>}/>
  <Route path="/product/:productId" element={<ProductDetails/>}/>
  <Route>404 Not found</Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
