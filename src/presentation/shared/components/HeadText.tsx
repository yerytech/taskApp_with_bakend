
interface HeadTextProps {
  title: string;
  body: string;
}


export const HeadText = ({title,body }:HeadTextProps) => {
     
  return (
      <div className="grid justify-items-center">
              <h1 className=" grid justify-items-center font-sans font-bold text-sm sm:text-lg ">
                {title}
              </h1>
              <p
                className="grid  ml-10 mr-10 pb-5  font-sans  text-center  text-xs sm:text-sm
                 text-gray-500 "
              >
                {body}
          </p>
          </div>

  );
}