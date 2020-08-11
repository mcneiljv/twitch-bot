import { Response, Request } from "express";
import { CommandInterface } from "./../../types/todo";
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: CommandInterface[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      CommandInterface,
      "name" | "description" | "status"
    >;

    const todo: CommandInterface = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: CommandInterface = await todo.save();
    const allTodos: CommandInterface[] = await Todo.find();

    res.status(201).json({
      message: "Todo added successfully!",
      todo: newTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: CommandInterface | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: CommandInterface[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated successfully!",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: CommandInterface | null = await Todo.findByIdAndRemove(
      req.params.id
    );
    const allTodos: CommandInterface[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted succesfully!",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
