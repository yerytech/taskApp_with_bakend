import { CustomInput } from "@components//CustomInput";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/react";
import { useState } from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

type AddtaskProps = CardProps & {
  task: string;
  nameTask: string;
};

export const Task = ({
  children,

  task,
  nameTask,
  className,
}: AddtaskProps) => {
  const [checkValue, isChecked] = useState(false);
  return (
    <Card
      className={`w-[150px] sm:w-[200px]  bg-pink-100 lg:w-[300px] xl:w-[400px]   m-2 ${className}`}
    >
      <CardHeader>
        <div className=" flex flex-row  justify-between  items-center  w-full ">
          <CustomInput
            readOnly={true}
            color="primary"
            className=" w-[130px] sm:w-[130px] "
            placeholder="Add Task Name"
            value={nameTask}
          ></CustomInput>
          <div
            typeof="buton"
            onClick={() => {
              isChecked(!checkValue);
            }}
            className="flex flex-row justify-center items-center"
          >
            {checkValue ? (
              <MdCheckCircle
                size={30}
                className="text-blue-500"
              />
            ) : (
              <MdRadioButtonUnchecked
                size={30}
                className="text-blue-500"
              />
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        {
          <textarea
            className="bg-transparent outline-none flex-col w-[100%] h-[100%] sm:h-[150px] lg:h-[200px] xl:h-[300px]"
            value={task}
          />
        }
      </CardBody>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
