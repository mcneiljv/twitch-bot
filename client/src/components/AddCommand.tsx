import React, { useState } from "react";
import "./AddCommand.css";

type Props = {
  saveCommand: (e: React.FormEvent, formData: CommandInterface | any) => void;
};

const AddCommand: React.FC<Props> = ({ saveCommand }) => {
  const [formData, setFormData] = useState<CommandInterface | {}>();

  const handleForm = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveCommand(e, formData)}>
      <div className="ui three column stackable grid container">
        <div className="column">
          <label htmlFor="name">Command</label>
          <div className="ui input field">
            <input onChange={handleForm} type="text" id="name" />
          </div>
        </div>
        <div className="column">
          <label htmlFor="description">Message</label>
          <div className="ui field">
            <textarea onChange={handleForm} id="description" />
          </div>
        </div>
        <div className="column">
          <button
            className="ui primary button"
            disabled={formData === undefined ? true : false}
          >
            Add Command
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCommand;
