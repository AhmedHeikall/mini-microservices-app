import PostCreate from "./components/posts/PostCreate";
import PostList from "./components/posts/PostList";
import "./app.css";
function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Mini Microservices App</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
