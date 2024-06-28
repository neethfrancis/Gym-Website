import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Team from "./components/Team/team";
import Members from "./components/Members/members";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Team />
      <Members />
      <Footer />
    </div>
  );
}

export default App;