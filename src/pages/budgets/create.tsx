import { useCallback } from "react";
import { useRouter } from "next/router";

import BudgetEdit from "../../containers/BudgetEdit";

export default function BudgetCreate() {
  const router = useRouter();

  const handleSubmit = useCallback(
    (data) => {
      // handle submit Data
      alert(JSON.stringify(data));
      router.push("/budgets");
    },
    [router]
  );

  return <BudgetEdit handleSubmit={handleSubmit} />;
}
