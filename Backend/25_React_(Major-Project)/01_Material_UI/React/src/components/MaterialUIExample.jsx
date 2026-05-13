import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



export default function MaterialUIExample() {
  let handleClick = () => {
    console.log("click activated");
  };
  return (
    <div>
      <h3>Weather App</h3>


      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>{" "}
      &nbsp;


      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      &nbsp;


      <Button
        variant="contained"
        onClick={handleClick}
        color="success"
        size="small"
      >
        Click me!
      </Button>
      &nbsp;


      <Button variant="contained" onClick={handleClick} color="error">
        Click me!
      </Button>
      &nbsp;

      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      &nbsp;


      <Alert severity="error">This is an error Alert.</Alert>
    </div>
  );
}
