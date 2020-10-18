import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import axios from "axios";

import Statistics from "../containers/Statistics";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { host, cookie } = ctx.req?.headers || {};

  try {
    const [categories, days] = await Promise.all([
      new Promise((resolve) => {
        axios
          .get(`http://${host}/api/statistics/categories`, {
            headers: { cookie },
          })
          .then((res) => resolve(res.data));
      }),
      new Promise((resolve) => {
        axios
          .get(`http://${host}/api/statistics/days`, {
            headers: { cookie },
          })
          .then((res) => resolve(res.data));
      }),
    ]);

    return {
      props: {
        categories,
        days,
      },
    };
  } catch (err) {
    const { url } = ctx.req;
    ctx.res.setHeader("location", `/login?goTo=${url}`);
    ctx.res.statusCode = 302;
    ctx.res.end();

    return { props: {} };
  }
};

export default function HomePage(
  props: InferGetStaticPropsType<typeof getServerSideProps>
) {
  return <Statistics {...(props as any)} />;
}
