import { Box, Card, Grid, Typography } from "@mui/material";
import Leads from "./lead.json";
import Img from "../../assets/images/img-2.png";
import groupArrow from "../../assets/images/group-arrow.png";
import SingleLead from "./SingleLead";
import { Hidden } from "@mui/material";
function LeadPointer() {
  return (
    <>
      <SingleLead />
      <Hidden only="xs">
        <Box sx={{ textAlign: "center", cursor: "default" }}>
          {" "}
          <img
            srcSet={`${groupArrow}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${groupArrow}?w=248&fit=crop&auto=format`}
            loading="lazy"
          />
        </Box>
      </Hidden>
      <Grid
        sx={{
          // padding: "0px 24px",
          margin: "15% 15%",
          backgroundColor: "#000000",
          textAllign: "center",
        }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Leads.map((lead, index) => (
          <Grid item rowSpacing={0} xs={6} sm={4} md={4} key={index}>
            <Card sx={{ cursor: "default" }}>
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#000000",
                  paddingTop: "20%",
                  border: "1px solid #000000",
                }}
              >
                <img
                  srcSet={`${Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
                <Box>
                  <Typography
                    sx={{ color: "#F2F8FA" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {lead.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#10C4FD", fontSize: "17px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {lead.des}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default LeadPointer;
