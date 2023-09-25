import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import "./team.css";
import Teams from "./team.json";
import TeamImg from "../../assets/images/john.png";
import TopHeader from "../topHeader/TopHeader";
import SingleTeam from "./SingleTeam";

const Team = () => {
  return (
    <>
      <TopHeader />
      <div className="teamList">
        <Container>
          <Hidden only={"lg"}>
            <Box sx={{ paddingTop: "20%" }}></Box>
          </Hidden>
          <Hidden only={"xs"}>
            <Typography sx={{ paddingTop: "15%" }}>
              <SingleTeam />
            </Typography>
          </Hidden>
          <Grid
            sx={{
              // padding: " 5% 24px",
              padding: " 5% 0px",
              margin: "15% 15%",
              textAllign: "center",
            }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Teams.map((team, index) => (
              <Grid item rowSpacing={0} xs={6} sm={3} md={3} key={index}>
                <Card sx={{ cursor: "default", border: "1px solid #10C4FD" }}>
                  <CardActionArea
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#0f0f0f",
                      paddingTop: "20%",
                    }}
                  >
                    <img
                      srcSet={`${TeamImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${TeamImg}?w=248&fit=crop&auto=format`}
                      loading="lazy"
                    />
                    <CardContent>
                      <Typography
                        sx={{ color: "#F2F8FA" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {team.title}
                      </Typography>
                      <Typography
                        sx={{ color: "#10C4FD" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {team.des}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Team;
