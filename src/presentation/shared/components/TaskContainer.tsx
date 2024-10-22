

type TaskContainerProps = React.HTMLAttributes<HTMLDivElement> & {className?:string,title:string}   
 export const TaskContainer = ({className='',children,title,...rest}:TaskContainerProps) => {
    return <div className={` grid  w-[190px] sm:w-[240px] lg:w-[340px] xl:w-[440px] m-1 content-center rounded-2xl justify-center justify-items-center ${className}`}{...rest}>
        <h1 className="text-xl font-bold text-gray-700 m-1" >{title}</h1>
        {children}
  </div>;
}