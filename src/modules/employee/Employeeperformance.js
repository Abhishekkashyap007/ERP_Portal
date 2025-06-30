import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const data = [
//   {
//     name: 'Jan-Feb',
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490,
//   },
//   {
//     name: 'Mar-Apr',
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590,
//   },
//   {
//     name: 'May-June',
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350,
//   },
//   {
//     name: 'July-Aug',
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480,
//   },
//   {
//     name: 'Sep-Oct',
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460,
//   },
//   {
//     name: 'Nov-Dec',
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380,
//   },
// ];

function Employeeperformance() {

  // const { id } = useParams();

  const [date, setdate] = useState({});

  const myapi = async () => {
    await axios.get('https://fakestoreapi.com/products').then((d) => {
      console.log(d.data);
      setdate(d.data);
    })
  }

  useEffect(() => {
    myapi();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={date}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="id" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Employeeperformance
