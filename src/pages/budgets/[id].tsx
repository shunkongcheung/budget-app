import { useCallback } from "react";
import { useRouter } from "next/router";

import BudgetEdit from "../../containers/BudgetEdit";

export default function BudgetUpdate() {
  const router = useRouter();

  const handleDelete = useCallback(() => {
    // handle submit Data
    router.push("/budgets");
  }, [router]);

  const handleSubmit = useCallback(
    (data) => {
      // handle submit Data
      alert(JSON.stringify(data));
      router.push("/budgets");
    },
    [router]
  );

  return <BudgetEdit handleDelete={handleDelete} handleSubmit={handleSubmit} />;
}
