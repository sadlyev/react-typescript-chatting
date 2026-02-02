import { useState } from "react";
import "./SearchField.css";
import { ButtonField } from "../ButtonField/ButtonField";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../QueryClient";
import { PostNote } from "../../api/notes";

export const SearchField = () => {
  const [nameState, setNameState] = useState("");
  const [textState, setTextState] = useState("");

  function handleNameInput(e: string) {
    return setNameState(e);
  }

  function handleTextInput(e: string) {
    return setTextState(e);
  }

  const myMutation = useMutation({
    mutationFn: () => PostNote(nameState, textState, performance.now().toString()),
    onSuccess() {
        queryClient.invalidateQueries({queryKey: ["notes"]})
    }
  },
  queryClient
)

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
 

  if (!nameState && !textState) return

   myMutation.mutate();

  setNameState("")
  setTextState("")
    
}

    return (
    <form className="input_wrapper" onSubmit={formSubmit}>
      <div className={"input_container"}>
          <input
          required
          className="input_field"
            placeholder="Your Name..."
            value={nameState}
            onChange={(e) => handleNameInput(e.currentTarget.value)}
          ></input>
          <input
          required
          className="input_field"
            placeholder="Type Your Message to Everyone..."
            value={textState}
            onChange={(e) => handleTextInput(e.currentTarget.value)}
          ></input>
      </div>
      <ButtonField isLoading={myMutation.isPending} className={"input_btn"} type="submit">Send</ButtonField>
    </form>
  );


  
};
