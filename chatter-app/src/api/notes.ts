export async function FetchTextViewList() {
  return await fetch(
    "https://697c9801889a1aecfeb2f2bc.mockapi.io/api/notes",
  ).then((response) => response.json());
}
