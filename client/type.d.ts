type characterType = {
  id: number;
  name: string;
  real_name: string;
  species: string[];
  citizenship: string;
  gender: string;
  status: string;
  affiliation: affiliationObject[];
  families: familyObject[];
  portrayed: string[];
  first_seen: nameAndUrl;
  last_seen: nameAndUrl;
  season: number[];
  image: string;
  url: string;
};

type affiliationType = {
  id: number;
  name: string;
  leader: nameAndUrl;
  current_member: nameAndUrl[];
  former_member: nameAndUrl[];
  associate: nameAndUrl[];
  url: string;
};

type episodeType = {
  id: number;
  season: number;
  episode: number;
  title: string;
  premiere_date: string;
  written_by: string[];
  directed_by: string;
  preceded_by: nameAndUrl;
  followed_by: nameAndUrl;
  image: string;
  url: string;
};

type nameAndUrl = {
  name: string;
  url: string;
};

interface affiliationObject extends nameAndUrl {
  is_former: boolean;
}

interface familyObject extends nameAndUrl {
  relationship: string;
}

type CharacterCardProps = {
  data: characterType;
};
