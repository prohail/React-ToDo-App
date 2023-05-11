import { useState } from 'react';

function Form(props) {
  const [inp, setinp] = useState("");

  function handleSubmit() {
    const newTodo = {
      id: Date.now(),
      title: inp,
      completed: false
    };

    props.addTodo(newTodo);

    setinp("");
  }

  return (
    <>
    <div className="d-md-flex mb-3 text-center">
      <input
        type="text"
        className="form-control fs-5 text-dark w-100 px-3 py-3 me-4"
        placeholder="Write new To-Do"
        value={inp}
        onChange={(e) => setinp(e.target.value)}
      />

      <input
        className="btn btn-outline-primary fs-5 text-light fw-bold bg-primary mt-3 mt-md-0 py-1 px-5"
        type="button"
        id="add_btn"
        value="Add"
        onClick={(e) => { e.preventDefault(); handleSubmit() }}
      />
      <br />
    </div>
    </>
  );
}

export default Form;
