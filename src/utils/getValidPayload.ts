import * as yup from "yup";

const getValidatePayload = async (data: object) => {
  const schema = yup.object({
    id: yup.string().optional(),
    title: yup.string().required(),
    date: yup.date().required(),
    amount: yup.number().required(),
    category: yup.string().oneOf(["B&F", "Supplies", "Bill"]).required(),
  });

  return await schema.validate(data);
};

export default getValidatePayload;
