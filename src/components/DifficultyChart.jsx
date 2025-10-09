import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DifficultyChart({ questions }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All"];
  for (let i = 0; i < questions.length; i++) {
    const foundCategory = questions[i].category;
    if (!categories.includes(foundCategory)) {
      categories.push(foundCategory);
    }
  }

  let filteredQuestions = questions;
  if (selectedCategory !== "All") {
    filteredQuestions = questions.filter(
      (q) => q.category === selectedCategory
    );
  }

  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  for (let i = 0; i < filteredQuestions.length; i++) {
    const diff = filteredQuestions[i].difficulty;
    if (diff === "easy") easyCount++;
    else if (diff === "medium") mediumCount++;
    else if (diff === "hard") hardCount++;
  }

  const chartData = [
    { name: "Easy", value: easyCount },
    { name: "Medium", value: mediumCount },
    { name: "Hard", value: hardCount },
  ];

  return (
    <div className="pie-container">
      <h3>Questions by Difficulty</h3>

      <div className="pie-select">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer className="pie-responsive-container">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            <Cell fill="#82ca9d" />
            <Cell fill="#8884d8" />
            <Cell fill="#ffc658" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DifficultyChart;
