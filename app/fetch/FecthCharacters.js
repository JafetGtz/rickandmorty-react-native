



export const HandleGetCharapters = async () => {
  const URI = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(URI);
  const data = await response.json();
  const {  results } = data;
  return results;
}



export const handleSearch = async (keyboard) => {
    const URI = `https://rickandmortyapi.com/api/character/?name=${keyboard}`
    const response = await fetch(URI);
    const data = await response.json();
    if(data.error === "There is nothing here"){
        return false;
    }else {
    return data.results;
         
    }

}