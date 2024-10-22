import { FaPlus } from "react-icons/fa";

// import {  FaPlus } from "react-icons/fa6";
type FABProps = React.HTMLAttributes<HTMLButtonElement>&{className?:string};
export const FAB = ({className='', ...rest}:FABProps) => {
  return (
    <button className={`fixed bottom-4 right-4 flex rounded-full justify-center w-[60px] h-[60px] justify-items-center  bg-orange-500  hover:bg-amber-900   items-center shadow-lg ${className}`}{...rest} > 
     <FaPlus className="text-2xl text-white" />
    </button>
  );
}