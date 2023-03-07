import Footer from "component/shared/footer";
import { Outlet } from "react-router-dom";
function App() {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();

  return (
    <div className="w-full h-full">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
