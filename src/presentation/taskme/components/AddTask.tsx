import { BtnComponent } from "@components//BtnComponent";
import { Task } from "./Task";

export const AddTask = () => {
  return (
    <div className="flex justify-center items-center">
      <Task
        className="h-[400px] w-[400px] sm:w-[500px] lg:w-[600] xl:w-[700] "
        nameTask={"Esto es una tarea"}
        task=" Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  Commodo ipsum nisi culpa id velit cillum ipsum occaecat. Ea irure elit et minim do laborum dolore. Consectetur adipisicing irure commodo ut elit veniam. Irure Lorem eiusmod elit irure est ea tempor enim voluptate labore ad ad occaecat et.  "
        children={
          <div className=" w-full flex flex-row justify-items-center justify-evenly">
            <BtnComponent className=" m-2 text-blue-900 w-[100px]  sm:w-[150px]">
              <p> Save</p>
            </BtnComponent>
            <BtnComponent className=" m-2 text-blue-900  w-[100px] sm:w-[150px]">
              <p> Discard</p>
            </BtnComponent>
          </div>
        }
      />
    </div>
  );
};
