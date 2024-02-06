const url = 'https://madridenvivo.com/';
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
                query: `query NewQuery {
                    eventos(first: 100) {
                      nodes {
                        destacado
                        relacionConSala
                        title
                        featuredImage {
                          node {
                            mediaDetails {
                              sizes {
                                sourceUrl
                              }
                            }
                          }
                        }
                      }
                    }
                  }`
            }),
            limit: 30,
           })
        const response = await fetchAPI.json();
        return response;
    } catch (error) {
        throw new Error(`No se ha podido cargar la información${error}`);
    }
}

const data = await getResults();

export default data;