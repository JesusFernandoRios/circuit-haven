import Paper from "@mui/material/Paper";
import ItemCard from "./Components/Card/Cards";

function App() {
  return (
    <Paper sx={appContainer} variant="outlined" elevation={8}>
      <h3>Circuit Haven</h3>
      <ItemCard />
    </Paper>
  );
}

const appContainer = {
  display: "flex",
  height: "90%",
  width: "90%",
  backgroundColor: "#FBFBF9",
  color: "#6A706E",
};

export default App;
