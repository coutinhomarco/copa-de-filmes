export const fetchFilmes = async (callback) => {
  try {
    // const results = await fetch('http://copafilmes.azurewebsites.net/api/filmes')
    const results = await fetch('http://localhost:3002/')
    const json = await results.json();
    callback(false)
    return json
  } catch (error) {
    console.log(error);
  }
}