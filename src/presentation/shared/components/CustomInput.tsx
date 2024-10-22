import { Input, InputProps } from "@nextui-org/react";


type ComponentsProps = InputProps

export const CustomInput = ({children,className,...rest}:ComponentsProps) => {
  return (
    <Input
          className={`w-[200px] sm:w-[300px] p-1 ${className}`}{
          ...rest
      }
      
      >   {children }</Input>
  );
}