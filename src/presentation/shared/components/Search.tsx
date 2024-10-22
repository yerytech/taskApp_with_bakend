import { MdSearch } from "react-icons/md"
import { CustomInput } from "./CustomInput"




export const Search = () => {
  return (
      <div> 
      <CustomInput className="ml-2"
        placeholder="Search Task"
        endContent={<MdSearch/>}
      />

    </div>
  )
}