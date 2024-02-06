const url = 'https://desarrollobeta.es/prueba/';
const userData = {
  user: 'expacioweb',
  pass: 'XKy0$o_n0N1X'
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
                query: `query MyQuery {
                    posts {
                        nodes {
                          title(format: RENDERED)
                          content(format: RENDERED)
                          featuredImage {
                            node {
                              mediaItemUrl
                            }
                          }
                        }
                      }
                  }`
            }),
           })
        const response = await fetchAPI.json();
        return response;
    } catch (error) {
        throw new Error(`No se ha podido cargar la información${error}`);
    }
}

export default getResults;