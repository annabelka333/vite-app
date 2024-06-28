import { BaseUrl, KEYSESSIONSTORAGE } from './constants';


//POST,GET,PUT,DELETE  = CRUD
export async function apiGet(from, method = 'GET', body) {
  const url = `${BaseUrl}/${from}`;
  const header = new Headers();

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
    //TODO: add Errors handing classes;
    console.log(error);
    throw error;
  }
}

export function getHeaders(header = {}) {
  const httpHeaders = {
    'Content-Type': 'application/json',
  };

  const Authorization = sessionStorage.getItem(KEYSESSIONSTORAGE);
  if (Authorization) {
    Object.assign(httpHeaders, { Authorization });
  }

  if (header) {
    Object.keys(header).map(key => Object.assign(httpHeaders, { [key]: header[key] }));
  }

  return new Headers(httpHeaders);
}
