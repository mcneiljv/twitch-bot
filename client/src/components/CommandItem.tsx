import React from "react";

type Props = CommandProps & {
  updateCommand: (command: CommandInterface) => void;
  deleteCommand: (_id: string) => void;
};

const Command: React.FC<Props> = ({
  command,
  updateCommand,
  deleteCommand,
}) => {
  const checkCommand: string = command.status ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkCommand}>{command.name}</h1>
        <span className={checkCommand}>{command.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateCommand(command)}
          className={command.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteCommand(command._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Command;
