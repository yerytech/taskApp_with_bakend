import { Input, InputProps } from "@nextui-org/react";


type ComponentsProps = InputProps

export const CustomInput = ({children,className,...rest}:ComponentsProps) => {
  return (
    <Input
      className={`w-[200px] sm:w-[300px] bg-transparent border-none outline-none shadow-none   p-1 ${className}`}
      {...rest}
    >
      {children}
    </Input>
  );
}