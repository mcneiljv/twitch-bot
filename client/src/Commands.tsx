import React, { useEffect, useState } from "react";
import AddCommand from "./components/AddCommand";
import CommandItem from "./components/CommandItem";
import { getCommands, addCommand, updateCommand, deleteCommand } from "./API";

const Commands: React.FC = () => {
  const [commands, setCommands] = useState<CommandInterface[]>([]);

  useEffect(() => {
    fetchCommands();
  }, []);

  const fetchCommands = (): void => {
    getCommands()
      .then(({ data: { commands } }: CommandInterface[] | any) =>
        setCommands(commands)
      )
      .catch((err: Error) => console.log(err));
  };

  const handleSaveCommand = (
    e: React.FormEvent,
    formData: CommandInterface
  ): void => {
    e.preventDefault();
    addCommand(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Command was not saved.");
        }
        setCommands(data.commands);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateCommand = (command: CommandInterface): void => {
    updateCommand(command)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Command was not updated.");
        }
        setCommands(data.commands);
      })
      .catch((err) => console.log(err));
  };

  const handledDeleteCommand = (_id: string): void => {
    deleteCommand(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Command was not deleted.");
        }
        setCommands(data.commands);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1 className="ui center aligned header">Commands</h1>
      <AddCommand saveCommand={handleSaveCommand} />
      {commands.map((command: CommandInterface) => (
        <CommandItem
          key={command._id}
          updateCommand={handleUpdateCommand}
          deleteCommand={handledDeleteCommand}
          command={command}
        />
      ))}
    </main>
  );
};

export default Commands;
