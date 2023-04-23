import CircleIcon from "@mui/icons-material/Circle";

function Card({ data }: CharacterCardProps) {
  return <div>Card</div>;
}

const mapStatus = (data: characterType): JSX.Element => {
  const iconColor = data.status === "Deceased" ? "#FF0000" : "#228B22";
  return (
    <div className="flex flex-row items-center h-5">
      <CircleIcon
        sx={{
          color: iconColor,
          fontSize: "12px",
          marginRight: "5px",
        }}
      />
      <span>{data.status}</span>
    </div>
  );
};

export default Card;
