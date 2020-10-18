import { useCallback } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

import BudgetEdit from "../../containers/BudgetEdit";

type Category = "B&F" | "Supplies" | "Bill";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  console.log("on budgets/[id]. ID is: ", id);

  return {
    props: {
      title: "Original Title",
      date: moment().toISOString(),
      category: "B&F" as Category,
      amount: 5,
    },
  };
};

export default function BudgetUpdate(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleDelete = useCallback(async () => {
    // handle submit Data
    await new Promise((resolve) => {
      axios(`/api/budgets/${id}`, { method: "DELETE" }).then(resolve);
    });

    router.push("/budgets");
  }, [router]);

  const handleSubmit = useCallback(
    async (data) => {
      await new Promise((resolve) => {
        axios(`/api/budgets/${id}`, { method: "PUT", data }).then(resolve);
      });

      router.push("/budgets");
    },
    [router]
  );
  return (
    <BudgetEdit
      {...props}
      date={moment(props.date)}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
    />
  );
}
