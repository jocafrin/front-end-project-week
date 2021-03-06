import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const EditNote = props => {
  return (
    <div className="note-container">
      <h2>Edit Note:</h2>
      <div className="input">
        <input
          onChange={props.inputHandler}
          name="edittitle"
          className="input-title"
          defaultValue={props.edittitle}
        />
        <textarea
          onChange={props.inputHandler}
          name="edittext"
          className="input-body"
          defaultValue={props.edittext}
        />
        <Link className="save" to={`/notes/${props.match.params.id}`}>
          <button onClick={() => props.submitChange(props.match.params.id)}>
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditNote;
