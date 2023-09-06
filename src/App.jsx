import Pages from "./pages/Pages";
import Category from "./components/categories/Category";
import Search from "./components/search-bar/Search";
import { BrowserRouter } from "react-router-dom";
import { Nav, Logo } from "./components/styles/Container.styled";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>What to Eat Today?</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
