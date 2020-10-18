import Budgets from "../../containers/Budgets";
import moment, { Moment } from "moment";

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

// should be remove when complet
const getRandomDate = (start: Date) => {
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getServerSideProps = async () => {
  // TODO: complete this section
  const start0 = new Date();
  start0.setDate(start0.getDate() - 10);

  const start1 = new Date();
  start1.setHours(start1.getHours() - 3);

  const start2 = new Date();
  start2.setMinutes(start2.getMinutes() - 10);

  return {
    props: {
      budgets: [
        {
          id: "item1",
          title: "Eat with my babe",
          category: "B&F",
          date: getRandomDate(start0).toISOString(),
          amount: 20.5,
        },
        {
          id: "item2",
          title: "Purchased some medicine",
          category: "Supplies",
          date: getRandomDate(start1).toISOString(),
          amount: 45.2,
        },
        {
          id: "item3",
          title: "Mobile Phone",
          category: "Bill",
          date: getRandomDate(start2).toISOString(),
          amount: 30.5,
        },
        {
          id: "item4",
          title: "Lunch",
          category: "B&F",
          date: getRandomDate(new Date()).toISOString(),
          amount: 15,
        },
      ],
    },
  };
};

export default function BudgetsPage({ budgets }: BudgetsPageProps) {
  return (
    <Budgets
      budgets={budgets.map((itm) => ({ ...itm, date: moment(itm.date) }))}
    />
  );
}
