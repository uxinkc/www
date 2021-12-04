
const URL = 'https://jsonplaceholder.typicode.com/users';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const usersService = {
  
  isLoaded: false,

  getUsers: async (callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      usersService.requestNext( res, callback, 'getUsers' ); 
    } catch(e){
      console.log( 'getUsers' + ' Users SERVICE ERROR', e)
    }
    
  },

  requestNext: (res, callback, methodCalled) => {
    if(res.errors){
      callback({ status: false, errors: res.error });
    } else {
      callback({ status: true, data: res });
    }
  }
  
}