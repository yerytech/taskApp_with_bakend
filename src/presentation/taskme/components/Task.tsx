import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { MdDone, MdStar } from "react-icons/md";


 
type NeedTask = {
  dateTimeCreated:string,
  hourCreate: string,
  task: string,
  
  
}

export const Task = ({ dateTimeCreated, task ,hourCreate}:NeedTask) => {
  return (
    <Card className=" w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[400px]  h-40 mt-2 bg-light-card ">
      <CardHeader className=" flex-row   justify-between">
        <div className="flex flex-row space-x-2 align-top">
          <MdStar color="orange" />
          <h4>{dateTimeCreated}</h4>
        </div>
        <div>
          <MdDone />
        </div>
      </CardHeader>
      <CardBody>
        <p className=" text text-ellipsis text-lg text-light-text" >{task}</p>
      </CardBody>
      <CardFooter>{hourCreate}</CardFooter>
    </Card>
  );
}