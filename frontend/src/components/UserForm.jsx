import {
  TextField,
  Button,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

export default function UserForm({ edit = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch data in edit mode
  useEffect(() => {
    if (edit && id) {
      API.get(`/${id}`).then((res) => setFormData(res.data));
    }
  }, [edit, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit) {
      await API.put(`/${id}`, formData);
    } else {
      await API.post("/", formData);
    }

    navigate("/");
  };

  return (
    <Paper sx={{ maxWidth: 500, margin: "30px auto", padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        {edit ? "Edit User" : "Add User"}
      </Typography>

      <Stack spacing={2} component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="Phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <TextField
          label="Age"
          name="age"
          type="number"
          required
          value={formData.age}
          onChange={handleChange}
        />

        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          {edit ? "Update" : "Save"}
        </Button>
      </Stack>
    </Paper>
  );
}
