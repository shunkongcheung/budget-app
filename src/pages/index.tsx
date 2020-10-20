import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import axios from "axios";

import Statistics from "../containers/Statistics";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { host, cookie } = ctx?.req?.headers || {};

  try {
    if (!cookie) throw Error();
    const [categories, days] = await Promise.all([
      new Promise((resolve, reject) => {
        axios
          .get(`http://${host}/api/statistics/categories`, {
            headers: { cookie },
          })
          .then((res) => resolve(res.data))
          .catch(reject)
          ;
      }),
      new Promise((resolve, reject) => {
        axios
          .get(`http://${host}/api/statistics/days`, {
            headers: { cookie },
          })
          .then((res) => resolve(res.data))
          .catch(reject);
      }),
    ]);

    return {
      props: {
        categories,
        days,
      },
    };
  } catch (err) {
    ctx.res.statusCode = 302;
    ctx.res.setHeader("location", `/login`);
    ctx.res.end();

    return { props: {} };
  }
};

export default function HomePage(
  props: InferGetStaticPropsType<typeof getServerSideProps>
) {
  return <Statistics {...(props as any)} />;
}
