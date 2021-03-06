import React from "react";

type Props = CommandProps & {
  updateCommand: (command: CommandInterface) => void;
  deleteCommand: (_id: string) => void;
};

const CommandItem: React.FC<Props> = ({
  command,
  updateCommand,
  deleteCommand,
}) => {
  const checkCommand: string = command.status ? `line-through` : "";
  return (
    <div className="ui segment">
      <div className="ui three column stackable grid container">
        <div className="column">
          <h1 className={checkCommand}>{command.name}</h1>
          <p className={checkCommand}>{command.description}</p>
        </div>

        <div className="column">
          <button
            onClick={() => updateCommand(command)}
            className="positive ui button"
          >
            Complete &nbsp;<i className="edit icon"></i>
          </button>

          <button
            onClick={() => deleteCommand(command._id)}
            className="negative ui button"
          >
            Delete &nbsp;
            <i className="cursor-pointer trash alternate icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommandItem;
