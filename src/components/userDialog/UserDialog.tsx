import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import { UserContext } from "../../contexts/context";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../validation/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UpdateFormData = z.infer<typeof updateUserSchema>;

const UserDialog = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    console.log("UserContext not available.");
    return null;
  }

  const { editUser, setEditUser } = userContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({ resolver: zodResolver(updateUserSchema) });

  const onSubmit = (data: UpdateFormData) => {
    console.log(data);

    const updatedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "")
    );

    if (Object.keys(updatedData).length === 0) {
      console.log("Please fill in at least one field to update");
    }
  };

  return (
    <>
      {/* {editUser && ( */}
      <Dialog
        header={
          <div className="flex justify-content-center align-items-center mt-5 pl-4 text-4xl font-medium text-center">
            Edit
          </div>
        }
        visible={editUser}
        onHide={() => setEditUser(false)}
        className="overflow-hidden"
        contentStyle={{ padding: "0px 36px" }}
        draggable={false}
        footer={<div className="mb-5"></div>}
      >
        <div className="formContainer flex flex-column">
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field mb-3">
              <label
                htmlFor="firstName"
                className="text-xl font-normal"
                style={{ color: "#6b6d7c" }}
              >
                First Name
              </label>
              <InputText
                {...register("firstName")}
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="border-round-lg py-3 px-4 text-base"
              />
              {errors.firstName && (
                <p className="mt-1 mb-0 ml-2 text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="field mb-3">
              <label
                htmlFor="lastName"
                className="text-xl font-normal"
                style={{ color: "#6b6d7c" }}
              >
                Last Name
              </label>
              <InputText
                {...register("lastName")}
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="border-round-lg py-3 px-4 text-base"
              />
              {errors.lastName && (
                <p className="mt-1 mb-0 ml-2 text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="field mb-3">
              <label
                htmlFor="email"
                className="text-xl font-normal"
                style={{ color: "#6b6d7c" }}
              >
                Email
              </label>
              <InputText
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter your email"
                className="border-round-lg py-3 px-4 text-base"
              />
              {errors.email && (
                <p className="mt-1 mb-0 ml-2 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              label="Submit"
              type="submit"
              className="bg-bluegray-800 hover:bg-bluegray-900 border-bluegray-800 hover:border-bluegray-900 w-full mt-3 py-3 text-sm"
              style={{ borderRadius: "10px" }}
            />
          </form>
          <div className="flex justify-content-center mt-2">
            <Button
              label="Cancel"
              outlined
              severity="secondary"
              className="w-full py-3 text-sm"
              style={{ borderRadius: "10px" }}
              onClick={() => setEditUser(false)}
            />
          </div>
        </div>
      </Dialog>
      {/* )} */}
    </>
  );
};

export default UserDialog;
