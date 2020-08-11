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
    <div className="ui four column doubling stackable grid">
      <div className="column">
        <div className="ui segment">
          <h1 className={checkCommand}>{command.name}</h1>
        </div>
      </div>

      <div className="column">
        <div className="ui segment">
          <p className={checkCommand}>{command.description}</p>
        </div>
      </div>

      <div className="column">
        <div className="ui segment">
          <button
            onClick={() => updateCommand(command)}
            className="positive ui button"
          >
            Complete &nbsp;<i className="edit icon"></i>
          </button>
        </div>
      </div>

      <div className="column">
        <div className="ui segment">
          <button
            onClick={() => deleteCommand(command._id)}
            className="negative ui button"
          >
            Delete &nbsp;<i className="cursor-pointer trash alternate icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Command;
