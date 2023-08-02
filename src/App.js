import Paper from "@mui/material/Paper";

function App() {
  return (
    <Paper sx={appBackground} variant="outlined">
      <p>Welcome to circuit haven</p>
    </Paper>
  );
}

const appBackground = {
  width: "95%",
  minHeight: "95vh",
  margin: "auto",
};

export default App;
