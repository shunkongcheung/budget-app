import { useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BudgetEdit from "../../containers/BudgetEdit";

export default function BudgetCreate() {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        await new Promise((resolve, reject) => {
          axios("/api/budgets", {
            method: "POST",
            data,
          })
            .then(resolve)
            .catch(reject);
        });
      } catch (ex) {
        router.push("/login");
      }

      router.push("/budgets");
    },
    [router]
  );

  return <BudgetEdit handleSubmit={handleSubmit} />;
}
