import "./App.module.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
