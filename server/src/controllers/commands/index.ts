import { Response, Request } from "express";
import { CommandInterface } from "../../types/command";
import Command from "../../models/command";

const getCommands = async (req: Request, res: Response): Promise<void> => {
  try {
    const commands: CommandInterface[] = await Command.find();
    res.status(200).json({ commands });
  } catch (error) {
    throw error;
  }
};

const addCommand = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      CommandInterface,
      "name" | "description" | "status"
    >;

    const command: CommandInterface = new Command({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newCommand: CommandInterface = await command.save();
    const allCommands: CommandInterface[] = await Command.find();

    res.status(201).json({
      message: "Command added successfully!",
      command: newCommand,
      commands: allCommands,
    });
  } catch (error) {
    throw error;
  }
};

const updateCommand = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateCommand: CommandInterface | null = await Command.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allCommands: CommandInterface[] = await Command.find();
    res.status(200).json({
      message: "Command updated successfully!",
      command: updateCommand,
      commands: allCommands,
    });
  } catch (error) {
    throw error;
  }
};

const deleteCommand = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCommand: CommandInterface | null = await Command.findByIdAndRemove(
      req.params.id
    );
    const allCommands: CommandInterface[] = await Command.find();
    res.status(200).json({
      message: "Command deleted succesfully!",
      command: deletedCommand,
      commands: allCommands,
    });
  } catch (error) {
    throw error;
  }
};

export { getCommands, addCommand, updateCommand, deleteCommand };
