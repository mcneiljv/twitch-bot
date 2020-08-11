import React, { useState } from "react";

type Props = {
  saveCommand: (e: React.FormEvent, formData: CommandInterface | any) => void;
};

const AddCommand: React.FC<Props> = ({ saveCommand }) => {
  const [formData, setFormData] = useState<CommandInterface | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveCommand(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Command</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Message</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Command
      </button>
    </form>
  );
};

export default AddCommand;
