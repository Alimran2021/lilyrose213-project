import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
// import Lead from "./lead.json";
import Img from "../../assets/images/img-2.png";
const lead = {
  id: 1,
  img: "img-2.png",
  title: "Lead Painter",
  des: "In work truculency abhorrent be list jazzy jacarandas in a fizzy jinx fig jump jukebox zappy jupe",
};
function SingleLead() {
  return (
    <Card>
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
            {lead.title}
          </Typography>
          <Typography
            sx={{ color: "#10C4FD", width: "302px", margin: "auto" }}
            variant="body2"
            color="text.secondary"
          >
            {lead.des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SingleLead;
