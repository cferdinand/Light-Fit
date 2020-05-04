import React, { useState } from "react";
import EmojiPicker from "../EmojiPicker";
import actions from "../../helpers/messageActions.js";

const EditForm = ({ data }) => {
  const [message, setMessage] = useState(data.prompt);
  const [time, setTime] = useState(data.time);
  const [emojis, setEmoji] = useState(false);

  const submit = () => {};

  return (
    <div className="form">
      <form onSubmit={submit}>
        <h3>Create A New Prompt</h3>
        <label>
          <textarea
            className="textarea"
            rows="5"
            cols="60"
            type="text"
            name="entry"
            defaultValue={message}
            value={message}
            onChange={(e) => {
              e.persist();
              setMessage(e.target.value);
            }}
            placeholder="Add new entry, select a time of day, click submit..."
            style={{ fontSize: "100%", borderRadius: "10px" }}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              setEmoji(!emojis);
            }}
            className="emoji_active"
          >
            <img src="./images/emoji.png" className="emoji_logo" />
          </button>
        </label>
        {emojis ? (
          <EmojiPicker message={message} setMessage={setMessage} />
        ) : (
          ""
        )}
        <label>
          <div className="select-words"> Select Time of Day:</div>
          <select
            className="select-selected"
            name="timeOfDay"
            defaultValue={time}
            onChange={(e) => {
              e.persist();
              setTime(e.target.value);
            }}
          >
            <option value="" disable="true">
              ---
            </option>
            <option value="Morning">Morning</option>
            <option value="MidDay">MidDay</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </label>
        <button className="modal-button-regular" style={{ margin: "0px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
