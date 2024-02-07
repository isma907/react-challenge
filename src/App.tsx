import "./App.css";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { setFormState } from "./store/actions";
import { PeriodicForm } from "./store/reducer";
import Breakify from "./Breakify";

function App() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<PeriodicForm>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(setFormState(data as PeriodicForm));
  };

  return (
    <main className="main_wrapper">
      <section className="form_container">
        <Breakify />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_control_row">
            <div className="form_control_wrapper">
              <label>First Name</label>
              <input
                type="text"
                className="form_control"
                {...register("firstname")}
              />
            </div>

            <div className="form_control_wrapper">
              <label>Last Name</label>
              <input
                type="text"
                className="form_control"
                {...register("lastname")}
              />
            </div>
          </div>

          <button type="submit" className="form_button">
            Breakify
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
