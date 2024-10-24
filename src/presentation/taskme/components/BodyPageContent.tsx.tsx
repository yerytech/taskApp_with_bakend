import { TaskContainer } from "@components//TaskContainer";

import { Task } from "./Task";

export const BodyPageContent = () => {
  return (
    <div className="flex flex-wrap align-middle  landscape:flex-row justify-around  portrait:flex-wrap portrait:justify-items-start sm:flex-row lg:flex-row">
      <TaskContainer title="Pending">
        {/* //* Todo: i need change whith values real */}
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
      </TaskContainer>
      <TaskContainer title="On Progress">
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
      </TaskContainer>
      <TaskContainer title="Done">
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
        <Task
          task={" Ineed create New Ui design"}
          nameTask={""}
          children={<p>{"nov-10-2224"} </p>}
        />
      </TaskContainer>
    </div>
  );
};
