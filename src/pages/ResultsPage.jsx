import React from 'react';
import { Bar } from 'react-chartjs-2';


export const ResultsPage = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 132, 162)',
      borderColor: 'rgb(255, 132, 162)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  return (
    <div>
      <h2>Analytics results</h2>
      <div style={{width: '32rem'}}>
        <p>
          Your health has seen a steady decline due to your interest
          in holes. You should reconsider mocking your app data with
          proper health text instead.
        </p>
        <Bar data={data} />
      </div>
    </div>
  )
};
