export const ApiService = {
    get: function(url){
        return new Promise( resolve => {
            fetch(url)
            .then( response => response.json() )
            .then( response => {
                // console.log('got results')
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    return resolve(response)
                }
            })         
        });
    }
}