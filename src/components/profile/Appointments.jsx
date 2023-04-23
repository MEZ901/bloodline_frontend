import { selectCurrentUser } from "../../features/auth";
import { useSelector } from "react-redux";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Appointments = () => {
  const { firstName, lastName } = useSelector(selectCurrentUser);
  function createData(date, time, status) {
    return { date, time, status };
  }

  const rows = [
    createData("2023/01/06", "10:00", <Chip label="Done" color="success" />),
    createData("2023/01/06", "13:30", <Chip label="Done" color="success" />),
    createData("2023/01/06", "09:00", <Chip label="Done" color="success" />),
    createData("2023/01/06", "12:00", <Chip label="Canceled" color="error" />),
    createData("2023/01/06", "14:30", <Chip label="Done" color="success" />),
  ];
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold text-center">
          Upcoming Appointments
        </h3>
        <div className="flex justify-between gap-4 bg-white p-5 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h4 className="text-lg font-bold">{firstName} {lastName}</h4>
            <p className="text-gray-500">
              <span className="font-bold">Date:</span> 2021/08/01
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">
              <span className="font-bold">Status:</span> Pending
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Time:</span> 10:00
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center">History</h3>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
