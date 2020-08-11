interface CommandInterface {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface CommandProps {
  command: CommandInterface;
}

type ApiDataType = {
  message: string;
  status: string;
  commands: CommandInterface[];
  command?: CommandInterface;
};
