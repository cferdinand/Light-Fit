import React from "react";
import actions from "../../helpers/messageActions.js";

const DeleteModal = ({ setOpen, data, context }) => {
  const deletePrompt = () => {
    actions
      .delete(data)
      .then(() => {
        return actions.getEntries("Morning");
      })
      .then((entries) => {
        context.setState({ prompts: entries });
      })
      .catch((err) => {
        console.log("Deletion Error: ", err);
      });
    setOpen(false);
  };
  return (
    <div className="delete">
      <div className="alert-modal">
        <h2 id="simple-modal-title">
          Are you sure you want to delete this {data.time} entry?
        </h2>
        <div className="buttons">
          <button
            className="modal-button"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
          <button className="modal-button-confirm" onClick={deletePrompt}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
