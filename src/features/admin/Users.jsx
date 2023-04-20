import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingSpinner } from "../../components/common";
import {
  openModal,
  selectModal,
  AddUserModal,
  DeleteUserModal,
} from "../modal";
import { useRefetchUsers } from "../../customHooks";
import { useState } from "react";

const Users = () => {
  const dispatch = useDispatch();
  const [userSelected, setUserSelected] = useState({});
  const { isOpen, type } = useSelector(selectModal);
  const { data, isLoading, refetchUsers } = useRefetchUsers();

  const handleOpenModal = (type, params = {}) => {
    params ? setUserSelected({ ...params.row }) : setUserSelected({});
    dispatch(openModal({ type: type }));
  };

  if (isLoading) return <LoadingSpinner open={true} />;

  const rows = [...data?.data];
  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "age", headerName: "Age", width: 70 },
    { field: "cin", headerName: "CIN", width: 100 },
    { field: "city", headerName: "City", width: 100 },
    { field: "bloodType", headerName: "Blood Type", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 100 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => (
        <div className="flex flex-row justify-evenly w-full">
          <IconButton aria-label="edit" onClick={() => console.log(params)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleOpenModal("deleteUser", params)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button variant="contained" onClick={() => handleOpenModal("addUser")}>
          Add User
        </Button>
      </div>
      <div className="h-96">
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
      {isOpen && type === "addUser" && (
        <AddUserModal refetchUsers={refetchUsers} />
      )}
      {isOpen && type === "deleteUser" && (
        <DeleteUserModal refetchUsers={refetchUsers} user={userSelected} />
      )}
    </div>
  );
};

export default Users;
