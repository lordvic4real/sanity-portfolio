import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/projects";
import Post from "./components/post";
import NavBar from "./components/navbar";
import SinglePost from "./components/single-post";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:slug" component={SinglePost} />
          <Route path="/post" component={Post} />
          <Route path="/projects" component={Project} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
