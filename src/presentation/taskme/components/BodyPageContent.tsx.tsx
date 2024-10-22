import { TaskContainer } from "@components//TaskContainer";
import { Task } from "./Task";



export const BodyPageContent = () => {
  return (
   
      <div className="flex flex-row  justify-around">
        <TaskContainer title="Pending">
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
        </TaskContainer>
        <TaskContainer title="On Progress">
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
        </TaskContainer>
        <TaskContainer title="Done">
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
          <Task
            dateTimeCreated={"Today"}
            hourCreate={"9:30"}
            task={"esta est est"}
          />
        </TaskContainer>
      </div>
  
  );
}