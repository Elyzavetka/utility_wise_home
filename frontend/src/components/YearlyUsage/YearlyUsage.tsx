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
  { name: "Jan", el: 420, gas: 820, wt: 70 },
  { name: "Feb", el: 230, gas: 140, wt: 20 },
  { name: "Mar", el: 210, gas: 710, wt: 110 },
  { name: "Apr", el: 720, gas: 600, wt: 240 },
  { name: "May", el: 790, gas: 420, wt: 220 },
  { name: "Jun", el: 650, gas: 310, wt: 150 },
  { name: "Jul", el: 600, gas: 280, wt: 120 },
  { name: "Aug", el: 620, gas: 450, wt: 130 },
  { name: "Sep", el: 750, gas: 470, wt: 220 },
  { name: "Oct", el: 790, gas: 510, wt: 230 },
  { name: "Nov", el: 810, gas: 600, wt: 250 },
  { name: "Dec", el: 850, gas: 650, wt: 260 },
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
        <Line type="monotone" dataKey="gas" stroke="#0055A4" />
        <Line type="monotone" dataKey="wt" stroke="#00AEEF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default YearlyUsage;
