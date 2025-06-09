

import { BarChart, Bar, Cell, XAxis, YAxis,Tooltip, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types'
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','green','#3a0abe'];
const data = [
  {
    name: 'o Kill a Mockingbird',
    totalPages: 281,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Nineteen Eighty-Four',
    totalPages: 328,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'The Great Gatsby',
    totalPages: 218,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Pride and Prejudice',
    totalPages: 279,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'The Catcher in the Rye',
    totalPages: 277,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Harry Potter and the Philosopher',
    totalPages: 309,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'The Hobbit',
    totalPages: 310,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'The Da Vinci Code',
    totalPages: 454,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'The Hunger Games',
    totalPages: 374,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={1200}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
      <Tooltip></Tooltip>
    </BarChart>
  );
}

TriangleBar.propTypes = {
 props: PropTypes.object
 };

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';

