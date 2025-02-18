import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", el: 400, gas: 600, wt: 60 },
  { name: "Feb", el: 600, gas: 200, wt: 90 },
  { name: "March", el: 200, gas: 800, wt: 120 },
  { name: "Apr", el: 800, gas: 600, wt: 250 },
];

const YearlyUsage: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="el" stroke="#D98E04" />
        <Line type="monotone" dataKey="gas" stroke="#28A745" />
        <Line type="monotone" dataKey="wt" stroke="#3E92CC" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default YearlyUsage;
