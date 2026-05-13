import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  // now info will come in the form of props
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // const INIT_URL =
  //   "https://plus.unsplash.com/premium_photo-1770660249019-7a3d5069e471?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const HOT_URL = "https://images.unsplash.com/photo-1691422066850-de273fe9008d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1687879794744-99e2898cab0d?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // let info = {
  //   city: "Varanasi",
  //   feelslike: 43.45,
  //   humidity: 35,
  //   temp: 39.05,
  //   tempMax: 39.05,
  //   tempMin: 39.0,
  //   weather: "haze",
  // };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature: {info.temp}&deg;C </p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>The weather feels like : {info.feelslike}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelslike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
