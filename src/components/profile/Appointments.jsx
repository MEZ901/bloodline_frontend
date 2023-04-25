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

const Appointments = ({ firstName, lastName, appointments }) => {
  function createData(hospital, date, time, status) {
    return { hospital, date, time, status };
  }

  const rows = [];
  appointments.data.forEach((appointment) => {
    appointment.status != "pending" &&
      rows.push(
        createData(
          appointment.hospital.name,
          appointment.date.split(" ").shift(),
          appointment.date.split(" ").pop().slice(0, -3),
          appointment.status == "done" ? (
            <Chip label="Done" color="success" />
          ) : (
            <Chip label="Canceled" color="error" />
          )
        )
      );
  });

  const upcomingAppointments = appointments.data.filter(
    (appointment) => appointment.status == "pending"
  );

  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold text-center">
          Upcoming Appointments
        </h3>
        {upcomingAppointments.length == 0 ? (
          <p className="text-center">You don't have any upcoming appointments</p>
        ) : (
          <div className="flex justify-between gap-4 bg-white p-5 rounded-lg shadow-md">
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">
                {firstName} {lastName}
              </h4>
              <p className="text-gray-500">
                <span className="font-bold">Date:</span>{" "}
                {upcomingAppointments[0].date.split(" ").shift()}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">Time:</span>{" "}
                {upcomingAppointments[0].date.split(" ").pop().slice(0, -3)}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500">
                <span className="font-bold">Status:</span>{" "}
                {upcomingAppointments[0].status}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">hospital:</span>{" "}
                {upcomingAppointments[0].hospital.name}
              </p>
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold text-center">History</h3>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Hospital</TableCell>
                  <TableCell align="right">Date</TableCell>
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
                      {row.hospital}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
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
