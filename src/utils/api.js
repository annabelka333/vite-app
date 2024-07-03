import { BaseUrl } from './constants';
export class ApiError extends Error {
  constructor(message, errors = []) {
    super(message);
    this.name = 'ApiError';
    this.errors = errors;
  }
}


//POST,GET,PUT,DELETE  = CRUD
export async function apiGet(from, method = 'GET', body) {
  const url = `${BaseUrl}/${from}`;
  const header = getHeaders();

  const options = {
    headers: header,
    method
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      if(contentType && contentType.indexOf('application/json') !== -1) {
        const errorData = await response.json();
        if(response.status === 409){
          throw new ApiError('User already have appointment', errorData);
        }
        throw new ApiError('Server responded with an error', errorData.errors);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    return await response.json();

  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export function getHeaders(header = {}) {
  const httpHeaders = {
    'Content-Type': 'application/json',
  };

  // const Authorization = localStorage.getItem(KEYSESSIONSTORAGE);
  // if (Authorization) {
  //   Object.assign(httpHeaders, { Authorization: `Bearer ${Authorization}` });
  // }

  Object.entries(header).forEach(([key, value]) => {
    httpHeaders[key] = value;
  });

  return new Headers(httpHeaders);
}
