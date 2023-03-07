import Footer from "component/shared/footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="w-full h-full">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
