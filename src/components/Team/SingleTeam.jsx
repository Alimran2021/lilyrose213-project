import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Img from "../../assets/images/john.png";
const Team = {
  id: 1,
  title: "John Doe",
  des: "Lead Painter",
  img: "../../assets/images/john.png",
};
const SingleTeam = () => {
  return (
    <Container
      sx={{
        width: "320px",
        margin: "auto",
        textAlign: "center",
        padding: "3.5% 40%",
      }}
    >
      <Card xs={12} sx={{ border: "1px solid #10C4FD" }}>
        <CardActionArea
          sx={{
            textAlign: "center",
            backgroundColor: "#0f0f0f",
            paddingTop: "20%",
          }}
        >
          <img
            srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${Img}?w=248&fit=crop&auto=format`}
            loading="lazy"
          />
          <CardContent>
            <Typography
              sx={{ color: "#F2F8FA" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {Team.title}
            </Typography>
            <Typography
              sx={{ color: "#10C4FD" }}
              variant="body2"
              color="text.secondary"
            >
              {Team.des}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default SingleTeam;
