import "./App.css";
import { Outlet } from "react-router-dom";
import DefalutFooter from "./components/DefalutFooter";
import DefaultNav from "./components/DefaultNav";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4">
      <DefaultNav />
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <DefalutFooter />
    </div>
  );
}

export default App;
