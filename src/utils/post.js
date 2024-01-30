const url = 'https://desarrollobeta.es/prueba/';
const userData = {
  user: 'expacioweb',
  pass: 'XKy0$o_n0N1X'
};

const insertPOST = async () => {
    try {
        const fetchAPI = await fetch(`${url}wp-json/wp/v2/posts`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Basic ' + btoa(userData.user + ':' + userData.pass),
            },
            body: JSON.stringify({
                title: 'nueva-entrada-3'
            })})
        const response = await fetchAPI.json();
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(`No se ha podido cargar la información${error}`);
    }
}

const postData = await insertPOST();

console.log(postData);

export default postData;