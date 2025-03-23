export const request = async(method, url, data, options = {} ) => {

   // let options = requestOption;

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options = {
            ...options,
            headers: {  
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(data)
        }
    }

    const response = await fetch(url,options);

    const result = await response.json();

    // console.log('Result is:', result)
    return result;
}

export default {
    get: request.bind(null, 'GET'),
    // functionName.bind(thisArg, arg1, arg2, ...)
     //! thisArg is the value to which the this keyword will be set when the function is called
     //! arg1,arg2,... Optional arguments that will be pre-set when the new function is called.
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
}
/*
bind is a JavaScript function used to create a new function that, when called has its this value
and initial parameters pre-set
The second argument ex: 'GET' pre-sets the first parameter (method) for the request function to 'GET'.
This means that whenever the bound function is called, method will automatically be 'GET'
*/