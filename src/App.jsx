import "./App.css";
import CategoryChart from "./components/CategoryChart.jsx";
import DifficultyChart from "./components/DifficultyChart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
        <CategoryChart
          questions={questions}
          onSelectCategory={setSelectedCategory}
        />
        <DifficultyChart
          questions={questions}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
}

export default App;
