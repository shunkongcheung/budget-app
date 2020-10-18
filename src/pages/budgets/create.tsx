import { useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import BudgetEdit from "../../containers/BudgetEdit";

export default function BudgetCreate() {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (data) => {
      await new Promise((resolve) => {
        axios("/api/budgets", {
          method: "POST",
          data,
        }).then(resolve);
      });

      router.push("/budgets");
    },
    [router]
  );

  return <BudgetEdit handleSubmit={handleSubmit} />;
}
