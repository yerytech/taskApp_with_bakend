import { BtnComponent } from "@components//BtnComponent";
import { FacebookIco } from "@components//FacebookIco";
import { GoogleIco } from "@components//GoogleIco";


 export const BtnLoginWithRed = () => {
   return (
     <div className="flex flex-row justify-around mt-2 ">
       <BtnComponent>
         <GoogleIco/>
       </BtnComponent>
       <BtnComponent>
         <FacebookIco/>
       </BtnComponent>
       <BtnComponent>
        
       </BtnComponent>
     </div>

   );
}


