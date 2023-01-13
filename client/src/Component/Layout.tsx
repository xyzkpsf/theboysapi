import { useQuery } from "react-query";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CharacterCard from "./CharacterCard";
import { baseUrl, getRandomInteger } from "../Utils/utils";
import { characterType } from "../Utils/types";

const fetchCharacters = async () => {
  const numArray = getRandomInteger();
  const response = await fetch(`${baseUrl}/character/${numArray}`);
  const res = await response.json();
  return res;
};

function Layout() {
  // todo: set cache
  // todo: handle rerender issue
  // toso: resize

  const { data, status, isPreviousData } = useQuery(
    "characters",
    fetchCharacters,
    {
      staleTime: 10 * (60 * 1000),
      cacheTime: 15 * (60 * 1000),
    }
  );

  // todo: style loading here
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth={false}>
      <Grid container spacing={5}>
        {data.map((item: characterType) => (
          <CharacterCard data={item} key={item.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default Layout;
