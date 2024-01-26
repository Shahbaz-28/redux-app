import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserData from "./Components/UserData";
import Togle from "./React Practise/Togle";
import UseRef from "./React Practise/React Hooks/UseRef";
import ContxtProvider from "./React Practise/React Hooks/ContextHook/ContxtProvider";
import MainComp from "./React Practise/React Hooks/ContextHook/MainComp";
import InputHandle from "./Components/InputHandle";

function App() {
  return (

      <ContxtProvider>
      <InputHandle/>
        {/* <MainComp/>
        <Togle/> */}
      </ContxtProvider>
  );
}

export default App;
