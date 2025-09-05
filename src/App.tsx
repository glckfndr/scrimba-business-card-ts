import "./App.css";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import About from "./components/Interests";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <Info />
        <About />
        <Interests />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
