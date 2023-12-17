import { Title, container, themeClass } from "./App.css";

function App() {
  return (
    <div className={`${themeClass} ${container}`}>
      <header>
        <h1 className={Title}>Anais Yun</h1>
        <h2>Experienced FrontEnd Developer</h2>
        <h3>
          I build Web and Mobile applications with JavaScript / React. And I
          believe programming can make life easier.
        </h3>
      </header>
      <main></main>
    </div>
  );
}

export default App;
