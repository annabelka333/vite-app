import { BaseUrl } from "./constants";

//POST,GET,PUT,DELETE  = CRUD
async function apiGet( from, method='GET', body ) {
    const url = `${BaseUrl}/${from}`;
    const header = new Header();

    const options = {
        headers: header,
        method
    };

    if (body) {
        Object.assign(options, { body: JSON.stringify(body) });
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}
 