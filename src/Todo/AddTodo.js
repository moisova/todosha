import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form
      style={{
        margin: "0 auto 1rem",
        textAlign: "center",
        width: "50%",
      }}
      onSubmit={submitHandler}
    >
      <input
        placeholder={"Enter your to-do"}
        style={{
          width: "80%",
          height: "2rem",
          margin: "0 auto",
          backgroundColor: "#e59a93",
          border: "none",
          borderRadius: "5px",
          fontSize: "18px",
          paddingLeft: ".5rem",
          color: "#28273e",
        }}
        {...input.bind}
      />
      <button
        style={{
          height: "1.8rem",
          marginLeft: ".5rem",
          backgroundColor: "#534153",
          color: "#e59a93",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
        }}
        type="submit"
      >
        Add to-do
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
