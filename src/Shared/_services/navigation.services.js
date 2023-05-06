
const URLS = {
  'public': '/api/uxinkc-nav.json'
}
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);

const getREQ = (_payload, _method) => {
  let options = {
    method: _method,
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
  if(_method=='POST') options.body = _payload.body || '';
  return new Request( URLS[_payload.navType], options );
}

export const navigationService = {
  
  isLoaded: false,

  getNavigation: async (_navType, _callback) => {
    const response = await fetch( getREQ({ navType: _navType },'GET') );
    try{
      let res = await response.json();
      navigationService.requestNext( res, _callback, 'getNavigation' ); 
    } catch(e){
      console.log( 'getNavigation' + ' Navigation SERVICE ERROR', e)
    }
  },

  requestNext: (_res, _callback, _methodCalled) => {
    if(_res.errors){
      _callback({ status: false, errors: _res.error });
    } else {
      _callback({ status: true, data: _res });
    }
  } 
}
