import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {
  affiliationObject,
  nameAndUrl,
  CharacterCardProps,
} from "../Utils/types";

const mapAffiliation = (affiliation: affiliationObject[]): JSX.Element[] => {
  // todo: distinguish former affilication and not former
  return (affiliation || []).map((a) => (
    <Typography variant="body2" key={a.name}>
      <Link
        href={a.url}
        color="inherit"
        underline="none"
        rel="noopener"
        target="_blank"
      >
        {a.name}
      </Link>
    </Typography>
  ));
};

const mapSeen = (seen: nameAndUrl): JSX.Element | undefined => {
    if (seen && seen.url && seen.name) {
        return (
            <Typography component={"span"} variant="body2">
              <Link
                href={seen.url}
                color="inherit"
                underline="none"
                rel="noopener"
                target="_blank"
              >
                {seen.name}
              </Link>
            </Typography>
          );
    }
};

const CharacterCard = ({ data }: CharacterCardProps) => {
  return (
    <Grid item sm={12} md={6} lg={4} key={data.id}>
      <Box
        sx={{
          alignItems: "center",
          width: "500px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "3px",
        }}
      >
        <img src={data.image} alt="" className="characterImg" />
        <Box
          sx={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          {/* todo: need to map the original url into href here */}
          <Link
            href={data.url}
            variant="h5"
            color="inherit"
            underline="none"
            rel="noopener"
            target="_blank"
          >
            {data.name}
          </Link>
          <Typography variant="body2">Status:&nbsp;{data.status}</Typography>

          {/* need to pass down an array here and map name and url */}
          <Typography variant="body2">Affiliation:</Typography>
          <Typography variant="h6">
            {mapAffiliation(data.affiliation)}
          </Typography>
          <Typography variant="body2">First Seen:</Typography>
          <Typography variant="body2">{mapSeen(data.first_seen)}</Typography>
          <Typography variant="body2">Last Seen:</Typography>
          <Typography variant="body2">{mapSeen(data.last_seen)}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterCard;
