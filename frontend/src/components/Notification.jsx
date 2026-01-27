import { Snackbar, Alert } from "@mui/material";

export default function Notification({ notify, setNotify }) {
  return (
    <Snackbar
      open={notify.open}
      autoHideDuration={3000}
      onClose={() => setNotify({ ...notify, open: false })}
    >
      <Alert severity={notify.type} variant="filled">
        {notify.msg}
      </Alert>
    </Snackbar>
  );
}
