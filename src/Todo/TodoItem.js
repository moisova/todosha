import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    padding: ".5rem 1rem",
    border: "1px solid #7e5563",
    borderRadius: "4px",
    width: "50%",
    margin: "0 auto .5rem",
    minHeight: "3rem",
    backgroundColor: "#7e5563",
    fontSize: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  input: {
    marginRight: "1rem",
    width: "18px",
    height: "18px",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join("")}>
        <label className="checkbox-btn">
          <input
            type="checkbox"
            checked={todo.completed}
            style={styles.input}
            onChange={() => onChange(todo.id)}
          />
        </label>
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
