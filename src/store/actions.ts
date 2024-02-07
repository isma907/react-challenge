import { PeriodicForm } from "./reducer";

export const setFormState = (data: PeriodicForm) => ({
  type: "SET_FORM_STATE",
  payload: data,
});
