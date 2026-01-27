import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Card, CardContent, Typography, Button, Container } from "@mui/material";

export default function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then((res) => setUser(res.data));
  }, [id]);

  if (!user) return null;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h6">User Details</Typography>
          <Typography>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Phone: {user.phone}</Typography>
          <Typography>Age: {user.age}</Typography>
          <Typography>Address: {user.address}</Typography>

          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
