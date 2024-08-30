import "./App.css";
import Article from "./components/article";
import Articles from "./components/articles";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
}

export default App;
