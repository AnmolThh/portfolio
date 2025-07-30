import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-screen min-h-fit  w-screen bg-linear-to-b from-background to-accent flex flex-col">
        {/* navbar */}
        <Navbar />

        {/* main content */}
        <Home />
      </div>
    </>
  );
}

export default App;
