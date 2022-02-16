import { Routes, Route, Navigate } from "react-router-dom";
import Activation from "./components/Activation";
import Reset from "./components/Reset";

const App = () => {
  return (
    <div className="">

      <Routes>
        <Route path="/activate/:token" element={<Activation />} />
        <Route path="/resetpassword/:token" element={<Reset />} />
        <Route path="/" element={<Navigate to ="/activate/:token" />}/>
      </Routes>

    </div>
  );
}

export default App;
