import "./App.css";
import CategoryChart from "./components/CategoryChart.jsx";
import DifficultyChart from "./components/DifficultyChart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=50");
        const data = await res.json();
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="main">
      <h1>Trivia Analytics</h1>
      <div className="charts-container">
        <CategoryChart questions={questions} />
        <DifficultyChart questions={questions} />
      </div>
    </div>
  );
}

export default App;
