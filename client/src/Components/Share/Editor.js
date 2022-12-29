// import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor({ value, setValue }) {
  // const [value, setValue] = useState("**Hello world!!!**");
  // console.log(value);

  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} preview={"edit"} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </div>
  );
}
