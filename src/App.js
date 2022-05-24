import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./article";
const getStorageItem = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [theme, setTheme] = useState(getStorageItem());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <section className="section-content">
        <div className="title">
          <h1>My Random Data</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>

        {data.map((item) => {
          return (
            <div className="article-data">
              <Article key={item.id} {...item} />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default App;
