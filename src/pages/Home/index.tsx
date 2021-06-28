import React from "react";
import "./style.css";
function Home() {
  return (
    <div className="cover-container mx-auto">
      <div className="typewriter">
        <h1 className="something" style={{ width: "min-content" }}>
          Armaan Lala
        </h1>
      </div>
      <h2 style={{ textAlign: "left", fontSize: 40 }}>Software Developer</h2>
      <h2 style={{ textAlign: "left", fontSize: 32 }}>
        Mathematics and Computer Science Student at Georgia Institute of
        Technology
      </h2>
    </div>
  );
}

export default Home;
