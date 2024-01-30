const url = 'https://desarrollobeta.es/prueba/';
const userData = {
  user: 'expacioweb',
  pass: 'OYDBrJQyY3L38V2na9wT7trX'
};

const getResults = async () => {
    try {
        const fetchAPI = await fetch(`${url}graphql`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Basic ' + btoa(userData.user + ':' + userData.pass)
            },
            body: JSON.stringify({
                query: `query NewQuery {
                  posts {
                    nodes {
                      title
                    }
                  }
                }
                `
            })})
        const response = await fetchAPI.json();
        return response;
    } catch (error) {
        throw new Error(`No se ha podido cargar la información${error}`);
    }
}

const data = await getResults();

export default data;