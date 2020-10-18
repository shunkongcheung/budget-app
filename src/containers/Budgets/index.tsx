import Head from "next/head";
import Link from "next/link";

import BudgetItem from "./BudgetItem";

import classNames from "./Budgets.module.css";

// should be remove when complet
const getRandomDate = (start: Date) => {
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

function Budget() {
  const start0 = new Date();
  start0.setDate(start0.getDate() - 10);

  const start1 = new Date();
  start1.setHours(start1.getHours() - 3);

  const start2 = new Date();
  start2.setMinutes(start2.getMinutes() - 10);

  return (
    <>
      <Head>
        <meta name="description" content="budget page" />
      </Head>
      <div className={classNames.container}>
        <h1>BUDGETS</h1>
        <div className={classNames.createContainer}>
          <Link href="/budgets/edit">
            <button className={classNames.createBtn}>Add Item</button>
          </Link>
        </div>
        <BudgetItem
          id="item1"
          title="Eat with my babe"
          category="B&F"
          date={getRandomDate(start0)}
          amount={20.5}
        />
        <BudgetItem
          id="item2"
          title="Purchased some medicine"
          category="Supplies"
          date={getRandomDate(start1)}
          amount={45.2}
        />
        <BudgetItem
          id="item3"
          title="Mobile"
          category="Bill"
          date={getRandomDate(start2)}
          amount={30}
        />
        <BudgetItem
          id="item4"
          title="Mobile"
          category="Bill"
          date={getRandomDate(new Date())}
          amount={30}
        />
      </div>
    </>
  );
}

export default Budget;
