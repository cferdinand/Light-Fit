import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Form from "./Forms/Form";
import EditForm from "./Forms/EditForm";
import Delete from "./Forms/DeleteForm";

const NewModal = ({ type, open, setOpen, data, context }) => {
  const ModalForm = () => {
    switch (type) {
      case "new":
        return <Form />;
      case "edit":
        return <EditForm data={data} />;
      case "delete":
        return <Delete setOpen={setOpen} data={data} context={context} />;
      default:
        break;
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="form_modal"
        style={{ bottom: "-20%", top: "20%" }}
      >
        <ModalForm />
      </Modal>
    </div>
  );
};

export default NewModal;
