export const fetchFilmes = async () => {
  try {
    const results = await fetch('http://copafilmes.azurewebsites.net/api/filmes')
    const json = await results.json();
    return json
  } catch (error) {
    console.log(error);
  }
}