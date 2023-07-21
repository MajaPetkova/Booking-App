import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/home/Home";
import { List } from "./components/list/List";
import { Hotel } from "./components/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/hotels" element={<List/>}></Route>
      <Route path="/hotels/:id" element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
