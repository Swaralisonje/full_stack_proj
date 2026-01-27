import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users, onDelete }) {
  const navigate = useNavigate();

  return (
    <Paper sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow key={u._id}>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
              <TableCell>{u.age}</TableCell>
              <TableCell align="center">
                <Stack direction="row" spacing={1}>
                  <Button onClick={() => navigate(`/view/${u._id}`)}>
                    View
                  </Button>
                  <Button onClick={() => navigate(`/edit/${u._id}`)}>
                    Edit
                  </Button>
                  <Button color="error" onClick={() => onDelete(u._id)}>
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
