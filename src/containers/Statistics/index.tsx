import React, { memo } from "react";
import Head from "next/head";

import { Doughnut, Line } from "react-chartjs-2";

interface Categories {
  bAndF: number;
  supplies: number;
  bill: number;
}

interface Days {
  bAndF: Array<number>;
  supplies: Array<number>;
  bill: Array<number>;
  days: Array<string>;
}

interface StatisticsProps {
  categories: Categories;
  days: Days;
}

const Statistics: React.FC<StatisticsProps> = ({ categories, days }) => {
  return (
    <>
      <Head>
        <meta name="description" content="statistics" />
      </Head>
      <h1>Spending per day</h1>
      <Line
        data={{
          labels: days.days,
          datasets: [
            {
              label: "B&F",
              data: days.bAndF,
              backgroundColor: "rgba(223, 42, 42, 0.4)",
              borderColor: "rgba(223, 42, 42, 1)",
            },
            {
              label: "Supplies",
              data: days.supplies,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
            },
            {
              label: "Bill",
              data: days.bill,
              backgroundColor: "rgba(117, 184, 81, 0.4)",
              borderColor: "rgba(117, 184, 81, 1)",
            },
          ],
        }}
      />
      <h1>Spending per category</h1>
      <Doughnut
        data={{
          datasets: [
            {
              data: [categories.bAndF, categories.supplies, categories.bill],
              backgroundColor: [
                "rgba(223, 42, 42, 0.4)",
                "rgba(75,192,192,0.4)",
                "rgba(117, 184, 81, 0.4)",
              ],
              borderColor: [
                "rgba(223, 42, 42, 1)",
                "rgba(75,192,192,1)",
                "rgba(117, 184, 81, 1)",
              ],
            },
          ],
          labels: ["B&F", "Supplies", "Bill"],
        }}
      />
    </>
  );
};

export default memo(Statistics);
