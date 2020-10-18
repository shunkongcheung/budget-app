import Head from "next/head";
import Link from "next/link";
import { Moment } from "moment";

import BudgetItem from "./BudgetItem";

import classNames from "./Budgets.module.css";

type Category = "B&F" | "Supplies" | "Bill";

interface BudgetItemProps {
  id: string;
  title: string;
  category: Category;
  date: Moment;
  amount: number;
}

interface BudgetsProps {
  budgets: Array<BudgetItemProps>;
}

function Budget({ budgets }: BudgetsProps) {
  return (
    <>
      <Head>
        <meta name="description" content="budget page" />
      </Head>
      <h1>BUDGETS</h1>
      <div className={classNames.createContainer}>
        <Link href="/budgets/edit">
          <button className={classNames.createBtn}>Add Item</button>
        </Link>
      </div>
      {budgets.map((itm) => (
        <BudgetItem {...itm} key={`BudgetItem-${itm.id}`} />
      ))}
    </>
  );
}

export default Budget;
