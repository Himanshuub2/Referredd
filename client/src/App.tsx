import "./App.css";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <MainWrapper>
      <Login />
      <Signup />
    </MainWrapper>
  );
}

export default App;
