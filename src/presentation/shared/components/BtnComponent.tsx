import { Button, ButtonProps } from "@nextui-org/react"

type ComponentsProps=ButtonProps

export const BtnComponent = ({children,className,...rest}:ComponentsProps) => {
  return (
    <Button   
     
      className={`bg-gray-50  h-8 sm:h-10 ${className || ''}`}
      {...rest}
    >
      {children}
    </Button>
  );
}