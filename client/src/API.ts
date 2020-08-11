import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getCommands = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const command: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/commands"
    );
    return command;
  } catch (error) {
    throw new Error(error);
  }
};

export const addCommand = async (
  formData: CommandInterface
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const command: Omit<CommandInterface, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveCommand: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-command",
      command
    );
    return saveCommand;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCommand = async (
  command: CommandInterface
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const commandUpdate: Pick<CommandInterface, "status"> = {
      status: true,
    };
    const updatedCommand: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-command/${command._id}`,
      commandUpdate
    );
    return updatedCommand;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCommand = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedCommand: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-command/${_id}`
    );
    return deletedCommand;
  } catch (error) {
    throw new Error(error);
  }
};
