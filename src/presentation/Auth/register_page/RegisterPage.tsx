import {  Card, CardBody } from "@nextui-org/react"
import {  MdEmail, MdKey, MdNotStarted, MdPerson } from "react-icons/md";

import { Link } from "react-router-dom";
import { BtnComponent } from "../../shared/components/BtnComponent";
import { CustomInput } from "../../shared/components/CustomInput";
import { HeadText } from "../../shared/components/HeadText";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "../../shared/hooks/useForm";

const initial = { user: '', email: "", password: "" };
export const RegisterPage = () => {
   const { email,user, password, onInputChanged,onChangePSVisible,isPasswordVisible } = useForm(initial);
  return (
    <div className="grid min-h-screen place-content-center ">
      <div className="animate__animated animate__bounceIn">
        <Card
          isBlurred
          className="bg-white rounded-3xl h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] lg:h-[500px] lg:w-[400px]"
        >
          <CardBody className="flex-1">
            <div className=" grid justify-items-center ">
              <BtnComponent className="h-14 sm:h-20 rounded-3xl mb-2">
                <MdNotStarted size={30} />
              </BtnComponent>
              <HeadText
                title=" Register with email"
                body="Make a new doc to bring yor words, data,and teams together. For free"
              />

              <CustomInput
                onChange={onInputChanged}
                name="user"
                placeholder="user"
                value={user}
                startContent={<MdPerson />}
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
                    {!isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye/>}
                  </div>
                }
              />
            </div>

            <div className="flex justify-center">
              <BtnComponent className=" mr-12 ml-12 bg-zinc-950 mt-2 shadow-lg border-t-2 border-gray-700  w-52 sm:w-72  text-white font-sans  justify-center  justify-items-center">
                Register
              </BtnComponent>
            </div>
            <Link
              to="/login"
              className="grid justify-items-end text-end text-xs sm:text-sm mr-12 pt-2"
            >
              Do you have a account?
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}