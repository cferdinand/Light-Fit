import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const EmojiPicker = ({ message, setMessage }) => {
  return (
    <div className="emoji-picker">
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={(emoji) => {
          let newMessage = message + emoji.native;
          console.log(newMessage);
          setMessage(newMessage);
        }}
      />
    </div>
  );
};

export default EmojiPicker;
