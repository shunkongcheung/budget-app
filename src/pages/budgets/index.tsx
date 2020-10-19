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

  try {
    if (!cookie) throw Error();
    const data = await new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `http://${host}/api/budgets`,
        headers: { cookie: cookie },
      })
        .then((res) => resolve(res.data))
        .catch(reject);
    });

    return {
      props: { budgets: data as BudgetItem },
    };
  } catch (err) {
    ctx.res.statusCode = 302;
    ctx.res.setHeader("location", `/login?goTo=/budgets`);
    ctx.res.end();

    return { props: {} };
  }
};

export default function BudgetsPage({ budgets }: BudgetsPageProps) {
  return (
    <Budgets
      budgets={budgets.map((itm) => ({ ...itm, date: moment(itm.date) }))}
    />
  );
}
