import { BrowserRouter } from "react-router-dom";
import Cards from "./components/cards/Cards.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Nav from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Cards />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
