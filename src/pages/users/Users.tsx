import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { UserContext } from "../../contexts/context";
import UserDialog from "../../components/userDialog/UserDialog";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const Users = () => {
  const data = {
    email: "nipun.c@softcodeit.com",
    password: "password",
  };

  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    console.log("UserContext not available.");
    return null;
  }

  const { setEditUser } = userContext;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/user/login", data)
      .then((res) => {
        const accessToken = res.data.accessToken;
        console.log(accessToken);
        const config = { headers: { Authorization: `Bearer ${accessToken}` } };

        if (accessToken) {
          axios
            .get("http://localhost:3000/user?page=1&limit=10", config)
            .then((res) => {
              // console.log(res.data.data);

              setUsers(res.data.data);
              console.log(users);

              // console.log(res.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log("This is the user: ", users);
  // }, [users]);

  const actionBodyTemplate = (rowData: User) => {
    return (
      <div>
        <Button
          icon="pi pi-user-edit"
          severity="secondary"
          text
          rounded
          // onClick={() => setEditUser(true)}
          onClick={() => edit(rowData.id)}
        />
        <Button
          icon="pi pi-trash"
          severity="secondary"
          text
          rounded
          onClick={() => deleteUser(rowData.id)}
        />
      </div>
    );
  };

  const edit = (userId: number) => {
    console.log("Edit user ID: ", userId);
    setEditUser(true);
    console.log("After setEditUser: ", userContext.editUser);
  };

  const deleteUser = (userId: number) => {
    console.log("Delete user ID: ", userId);
  };

  // useEffect(() => {
  //   console.log("Current value of editUser in context:", userContext.editUser);
  // }, [userContext.editUser]);

  return (
    <>
      <div className="contentContainer flex flex-column gap-4">
        <div className="titleContainer text-3xl font-semibold">Users</div>
        <Card className="border-round-2xl border-none shadow-1 px-3">
          <DataTable value={users} tableClassName="text-sm">
            <Column field="firstName" header="First Name"></Column>
            <Column field="lastName" header="Last Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column header="Action" body={actionBodyTemplate}></Column>
          </DataTable>
          <UserDialog />
        </Card>
      </div>
    </>
  );
};

export default Users;
