import { compose, setDisplayName } from "composable-styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import MiniTitle from "~components/Body/MiniTitle";

const ComposedNote = compose.div(setDisplayName("Note"))`
  background: rgb(224, 224, 224);
  padding: 10px;
  border-left: 7px solid #222;
  margin: 20px 0px;
  border-radius: 4px;
  line-height: 25px;
`;

const Note = ({ children }) => (
  <ComposedNote>
    <MiniTitle style={{ marginTop: 0 }}>
      <FaRegLightbulb style={{ position: "relative", top: 2 }} /> NOTE{" "}
    </MiniTitle>
    {children}
  </ComposedNote>
);

export default Note;
