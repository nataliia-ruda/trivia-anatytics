import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";

function CategoryChart({ questions }) {

  const categoryCounts = {};
  
  for (let i = 0; i < questions.length; i++) {
    const foundCategory = questions[i].category;
    if (!categoryCounts[foundCategory]) {
      categoryCounts[foundCategory] = 1;
    } else {
      categoryCounts[foundCategory]++;
    }
  }

  const categoryData = [];
  for (const category in categoryCounts) {
    categoryData.push({ category, count: categoryCounts[category] });
  }

  categoryData.sort((a, b) => b.count - a.count);

  return (
    <div className="bar-container">
      <h3>Questions by Category</h3>
      <ResponsiveContainer className="bar-responsive-container" >
        <BarChart
          data={categoryData}
          layout="vertical"
          margin={{ top: 10, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" allowDecimals={false} />
          <YAxis
            dataKey="category"
            type="category"
            tick={{ fontSize: 12 }}
            width={80}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" radius={[4, 4, 4, 4]}>
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;
