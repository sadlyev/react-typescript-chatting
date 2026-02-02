export async function FetchTextViewList() {
  return await fetch(
    "https://697c9801889a1aecfeb2f2bc.mockapi.io/api/notes",
  ).then((response) => response.json());
}

export async function PostNote(name: string, text: string, id: string) {
  const res =  await fetch("https://697c9801889a1aecfeb2f2bc.mockapi.io/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, text, id})
  })

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json();
}
