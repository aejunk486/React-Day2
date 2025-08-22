import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import MemberList from "./pages/MemberList";

function App() {
 
  return (
    <div style={{ padding: "1rem" }}>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberListpage" element={<MemberList />} />
      </Routes>
    </div>
  );
}

export default App;
