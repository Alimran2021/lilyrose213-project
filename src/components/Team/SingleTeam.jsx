import { Box, Card, Container, Typography } from "@mui/material";
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
        cursor: "default",
        width: "300px",
        border: "1px solid #10C4FD",
        textAlign: "center",
        borderRadius: "4px",
        padding: "3.5% 40%",
      }}
    >
      <img
        srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${Img}?w=248&fit=crop&auto=format`}
        loading="lazy"
      />
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
    </Container>
  );
};

export default SingleTeam;
