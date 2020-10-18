import { useCallback } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

import BudgetEdit from "../../containers/BudgetEdit";

type Category = "B&F" | "Supplies" | "Bill";

interface BudgetItem {
  title: string;
  category: Category;
  date: string;
  amount: number;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  const { cookie, host } = ctx.req.headers;

  const data = await new Promise((resolve) => {
    axios
      .get(`http://${host}/api/budgets/${id}`, { headers: { cookie } })
      .then((res) => resolve(res.data));
  });

  return {
    props: data as BudgetItem,
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
