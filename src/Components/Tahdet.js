import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Tahdet({ value }) {
  const filledStars = value;
  const emptyStars = 5 - filledStars;
  const filledStarsArray = Array.from({ length: filledStars }, (_, i) => (
    <StarIcon key={`filled-${i}`} style={{ color: "#FAAF00" }} />
  ));
  const emptyStarsArray = Array.from({ length: emptyStars }, (_, i) => (
    <StarBorderIcon key={`empty-${i}`} />
  ));
  const stars = [...filledStarsArray, ...emptyStarsArray];

  return <Box>{stars}</Box>;
}

export default Tahdet;