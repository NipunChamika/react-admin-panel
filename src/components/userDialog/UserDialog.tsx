import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import { UserContext } from "../../contexts/context";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const UserDialog = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    console.log("UserContext not available.");
    return null;
  }

  const { editUser, setEditUser } = userContext;

  return (
    <>
      {editUser && (
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
            <form className="p-fluid">
              <div className="field mb-3">
                <label
                  htmlFor="firstName"
                  className="text-xl font-normal"
                  style={{ color: "#6b6d7c" }}
                >
                  First Name
                </label>
                <InputText
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="border-round-lg py-3 px-4 text-base"
                />
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
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="border-round-lg py-3 px-4 text-base"
                />
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
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  className="border-round-lg py-3 px-4 text-base"
                />
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
      )}
    </>
  );
};

export default UserDialog;
