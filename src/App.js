import "./App.css";
import Header from "./components/Header";
import FilterableMovieArea from "./components/FilterableMovieArea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterableMovieArea />
      <Footer />
    </div>
  );
}

export default App;
