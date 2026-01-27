import { useEffect, useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Stack,
  Pagination
} from "@mui/material";
import API from "../services/api";
import UserTable from "../components/UserTable";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [notify, setNotify] = useState({ open: false, msg: "", type: "success" });

  const navigate = useNavigate();
  const limit = 5;

  const fetchUsers = async () => {
    try {
      const res = await API.get(`/?page=${page}&limit=${limit}`);
      setUsers(res.data.users);
      setTotal(Math.ceil(res.data.total / limit));
    } catch {
      setNotify({ open: true, msg: "Failed to load users", type: "error" });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      setNotify({ open: true, msg: "User deleted", type: "success" });
      fetchUsers();
    } catch {
      setNotify({ open: true, msg: "Delete failed", type: "error" });
    }
  };

  const handleSearch = async () => {
    if (!search) return fetchUsers();
    const res = await API.get(`/search?query=${search}`);
    setUsers(res.data);
  };

  const handleExport = () => {
    window.open("http://localhost:5000/api/users/export", "_blank");
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 3 }}>
        User Management
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outlined" onClick={handleExport}>
          Export CSV
        </Button>
        <Button variant="contained" onClick={() => navigate("/add")}>
          Add User
        </Button>
      </Stack>

      <UserTable users={users} onDelete={handleDelete} />

      <Pagination
        count={total}
        page={page}
        onChange={(e, val) => setPage(val)}
        sx={{ mt: 3 }}
      />

      <Notification notify={notify} setNotify={setNotify} />
    </Container>
  );
}
