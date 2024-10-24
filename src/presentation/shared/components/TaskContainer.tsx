

type TaskContainerProps = React.HTMLAttributes<HTMLDivElement> & {className?:string,title:string}   
 export const TaskContainer = ({className='',children,title,...rest}:TaskContainerProps) => {
    return (
      <div
        className={` grid  p-1 content-center rounded-2xl justify-evenly justify-items-center ${className}`}
        {...rest}
      >
        <h1 className="text-xl font-bold text-gray-700 m-1">{title}</h1>
        {children}
      </div>
    );
}