import { useEffect, useState } from "react"

type FormProps={
    user: string;
        email: string;
        password: string;
    
 }



export const useForm = (initial:FormProps) => {
    const [formState, setFormState] = useState(initial);
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const onChangePSVisible = () => {
      return !isPasswordVisible
        ? setIsPasswordVisible(true)
        : setIsPasswordVisible(false);
    };

    const onInputChanged = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
            
        });
    } 
    useEffect(() => {
    console.log(formState);
    
    
    }, [formState])
    
    
    
    return { 
        isPasswordVisible,
        onChangePSVisible,
        ...formState,
        formState,
        onInputChanged
        
      
  }
  
}