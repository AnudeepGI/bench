import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Upload from "./Pages/Upload";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="upload" element={<Upload />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
