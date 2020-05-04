import React, { useState } from "react";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import NewModal from "./Modal";

const MessageList = ({ list, context }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState("");

  const handleClick = (type, item) => {
    let currentMessage = {
      id: item._id,
      prompt: item.Prompt,
      time: item.Time,
    };
    setType(type);
    setOpen(true);
    setData(currentMessage);
  };

  const collapseable = (e) => {
    e.currentTarget.classList.toggle("active");
    let content = e.currentTarget.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  const List = () => {
    return list.map((item) => {
      let summary =
        item.Prompt.length > 150
          ? `${item.Prompt.slice(0, 150)}...`
          : item.Prompt;
      return (
        <>
          <tr
            className="collapsible"
            id={item._id}
            onClick={(e) => {
              collapseable(e);
            }}
          >
            <td className="prompt_summary">{summary}</td>
            <td className="prompt_icons">
              <Edit
                onClick={(e) => {
                  handleClick("edit", item);
                }}
              />
              <Delete
                value={item._id}
                onClick={(e) => {
                  handleClick("delete", item);
                }}
              />
            </td>
          </tr>
          <div className="content">
            <p className="prompt_full">{item.Prompt}</p>
          </div>
          <tr>
            <td colSpan="3">
              <hr />
            </td>
          </tr>
        </>
      );
    });
  };

  return (
    <>
      <List />
      <NewModal
        type={type}
        open={open}
        setOpen={setOpen}
        data={data}
        context={context}
      />
    </>
  );
};

export default MessageList;
