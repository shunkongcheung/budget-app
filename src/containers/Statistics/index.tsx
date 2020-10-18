import React, { memo } from "react";
import Head from "next/head";

interface StatisticsProps {}

const Statistics: React.FC<StatisticsProps> = () => {
  return (
    <>
      <Head>
        <meta name="description" content="statistics" />
      </Head>
    </>
  );
};

export default memo(Statistics);
