

import { useUtilities } from "@/_composables/useUtilities";
const { checkOnProd } = useUtilities();

let URL = ''; 
if( checkOnProd ) URL = 'https://us-central1-accelerate-ux-api.cloudfunctions.net/getFuture';
else URL = 'http://localhost:5001/accelerate-ux-api/us-central1/getFuture';


const getREQ = (_payload, _method) => {
  return new Request( URL,
    {
      method: _method,
      body: _payload,
      mode: "cors",
      cache: "default"
    }
  );
}

export const insightsService = {
  
  isLoaded: false,

  getFuture: async (_payload, _callback) => {

    const response = await fetch( getREQ(_payload,'POST') );
    try{
      let res = await response.json();
      insightsService.requestNext( res, _callback, 'getFuture' ); 
    } catch(_err){
      console.log( 'getFuture' + ' Home SERVICE ERROR', _err)
    }
    
  },

  requestNext: (_res, _callback, _methodCalled) => {
    if(_res.errors){
      _callback({ status: false, errors: _res.error });
    } else {
      _callback({ status: true, data: _res.data });
    }
  } 
}