import React, { memo, useCallback, useMemo } from "react";
import { Formik, Form } from "formik";
import moment, { Moment } from "moment";
import * as yup from "yup";

import { Input } from "../../components";

import classNames from "./BudgetEdit.module.css";

type Category = "B&F" | "Supplies" | "Bill";

interface BudgetItem {
  title: string;
  category: Category;
  date: Moment;
  amount: number;
}

type HandleSubmit = (data: BudgetItem) => any;

interface BudgetEditProps extends Partial<BudgetItem> {
  handleDelete?: () => any;
  handleSubmit: HandleSubmit;
}

const BudgetEdit: React.FC<BudgetEditProps> = ({
  handleDelete,
  handleSubmit,
}) => {
  const schema = useMemo(
    () =>
      yup.object({
        title: yup.string().required(),
        date: yup.date().required(),
        category: yup.string().oneOf(["B&F", "Supplies", "Bill"]).required(),
        amount: yup.number().min(0),
      }),
    []
  );

  const handleDeleteWithConfirm = useCallback(() => {
    if (confirm("Do you want to delete the item?")) handleDelete();
  }, []);

  return (
    <>
      <h1>Budget Edit</h1>
      <Formik
        initialValues={{ title: "", category: "", date: moment(), amount: 0 }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input type="text" name="title" label="Title" />
          <Input type="datetime-local" name="date" label="Date" />
          <Input
            type="select"
            name="category"
            label="Category"
            options={["B&F", "Supplies", "Bill"].map((itm) => ({
              title: itm,
              value: itm,
            }))}
          />
          <Input type="number" name="amount" label="Amount" />
          <div className={classNames.btnGroup}>
            <button type="submit" className={classNames.submitBtn}>
              Submit
            </button>
            {handleDelete && (
              <button
                type="button"
                className={classNames.deleteBtn}
                onClick={handleDeleteWithConfirm}
              >
                Delete
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default memo(BudgetEdit);
