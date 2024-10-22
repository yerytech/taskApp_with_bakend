import {  Card, CardBody } from "@nextui-org/react"
import {  MdEmail, MdExitToApp, MdKey, } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "@hooks/useForm";
import { BtnComponent } from "@components//BtnComponent";
import { HeadText } from "@components//HeadText";
import { CustomInput } from "@components//CustomInput";
import { BtnLoginWithRed } from "./components/BtnLoginWithRed";






const initial = { user:'', email: "", password: "" };

export const LoginPage = () => {
  const { email, password, onInputChanged ,onChangePSVisible,isPasswordVisible } = useForm(initial);
  
 
  return (
    <div className="grid min-h-screen place-content-center ">
      <div className="animate__animated animate__bounceIn">
        <Card
          isBlurred
          className="bg-white rounded-3xl h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] lg:h-[500px] lg:w-[400px] mr-4"
        >
          <CardBody className="flex-1">
            <div className=" grid justify-items-center ">
              <BtnComponent className="h-14 sm:h-20 rounded-3xl mb-2">
                <MdExitToApp size={30} />
              </BtnComponent>
              <HeadText
                title="Sing in with email"
                body=" Make a new doc to bring yor words, data,and teams together. For free"
              />

              <CustomInput
                onChange={onInputChanged}
                name="email"
                placeholder="Email"
                value={email}
                startContent={<MdEmail />}
              />

              <CustomInput
                onChange={onInputChanged}
                value={password}
                name="password"
                placeholder="Password"
                type={!isPasswordVisible ? "Password" : "text"}
                startContent={<MdKey />}
                endContent={
                  <div
                    role="button"
                    onClick={onChangePSVisible}
                  >
                    {!isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                }
              />
            </div>
            <Link
              to="/register"
              className="grid justify-items-end text-end text-xs sm:text-sm mr-12 pt-2"
            >
              Create a acount?{" "}
            </Link>

            <div className="flex justify-center">
              <BtnComponent className=" mr-12 ml-12 bg-zinc-950 mt-2 shadow-lg border-t-2 border-gray-700  w-52 sm:w-72  text-white font-sans  justify-center  justify-items-center">
                Get Started
              </BtnComponent>
            </div>
            <p className="grid justify-items-center text-xs sm:text-sm mt-2 text-gray-600">
              Or sing in with
            </p>
            <BtnLoginWithRed/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}