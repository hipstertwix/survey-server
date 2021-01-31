import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 12),
  createData('03:00', 20),
  createData('06:00', 4),
  createData('09:00', 28),
  createData('12:00', 38),
  createData('15:00', 35),
  createData('18:00', 15),
  createData('21:00', 4),
  createData('24:00', 3),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Aantal Responses Vandaag</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Aantal
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.secondary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}