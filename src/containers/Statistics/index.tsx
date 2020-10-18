import React, { memo } from "react";
import Head from "next/head";

interface StatisticsProps {}

const Statistics: React.FC<StatisticsProps> = () => {
  return (
    <>
      <Head>
        <meta name="description" content="statistics" />
      </Head>
      <h1>Spending per day</h1>
      <div>TBD graph put here</div>
      <h1>Spending per category</h1>
      <div>TBD graph put here</div>
    </>
  );
};

export default memo(Statistics);
