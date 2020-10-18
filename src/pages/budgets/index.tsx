import { GetServerSidePropsContext } from "next";
import axios from "axios";
import moment, { Moment } from "moment";

import Budgets from "../../containers/Budgets";

type Category = "B&F" | "Supplies" | "Bill";

interface BudgetItem {
  id: string;
  title: string;
  category: Category;
  date: Moment;
  amount: number;
}

interface BudgetsPageProps {
  budgets: Array<BudgetItem>;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { host, cookie } = ctx.req.headers;

  const data = await new Promise((resolve) => {
    axios
      .get(`http://${host}/api/budgets`, { headers: { cookie } })
      .then((res) => resolve(res.data));
  });

  return {
    props: { budgets: data as BudgetItem },
  };
};

export default function BudgetsPage({ budgets }: BudgetsPageProps) {
  return (
    <Budgets
      budgets={budgets.map((itm) => ({ ...itm, date: moment(itm.date) }))}
    />
  );
}
