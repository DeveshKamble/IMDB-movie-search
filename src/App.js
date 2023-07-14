import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MovieList from "./MovieList";


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <SideBar />
        <MovieList />
        <Routes>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
