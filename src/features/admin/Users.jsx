import { Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

const rows = [
  {
    id: 1,
    firstName: "issam",
    lastName: "mez",
    age: 25,
    cin: "123456789",
    city: "Tunis",
    bloodType: "A+",
    email: "issammez44@gmail.com",
    phone: "123456789",
  },
];

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
        <IconButton aria-label="edit" onClick={() => console.log(params)} >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => console.log(params)} >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const Users = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button variant="contained">Add User</Button>
      </div>
      <div className="h-96">
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Users;
