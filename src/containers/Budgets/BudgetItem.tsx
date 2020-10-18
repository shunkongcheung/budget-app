import React, { memo, useMemo } from "react";
import Link from "next/link";
import moment, { Moment } from "moment";

import classNames from "./BudgetItem.module.css";

type Category = "B&F" | "Supplies" | "Bill";

interface BugetItemProps {
  id: string;
  title: string;
  category: Category;
  date: Moment;
  amount: number;
}

const BugetItem: React.FC<BugetItemProps> = ({
  id,
  title,
  category,
  date,
  amount,
}) => {
  const timeDesc = useMemo(() => {
    const now = moment();
    const diffDays = now.diff(date, "days");
    const diffHours = now.diff(date, "hours");
    const diffMins = now.diff(date, "minutes");

    if (diffDays > 0) return `${diffDays} days ago`;
    if (diffHours > 0) return `${diffHours} hours ago`;
    if (diffMins > 0) return `${diffMins} minutes ago`;
    return "Just now";
  }, [date]);

  return (
    <Link href={`/budgets/edit/${id}`}>
      <div className={classNames.container}>
        <div className={classNames.header}>
          <h5 className={classNames.title}>{title}</h5>
          <small>{timeDesc}</small>
        </div>
        <p className={classNames.content}>{category}</p>
        <small>$ {amount.toFixed(2)}</small>
      </div>
    </Link>
  );
};

export default memo(BugetItem);
