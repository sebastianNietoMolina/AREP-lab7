var appClient = (function (){

    function getFahrenheitToCelsius(num, callback){
        $.get("https://5uyngebmp4.execute-api.us-east-1.amazonaws.com/sebnieto?num="+num, function(data){
                callback(data);
            }, 'json');
    }
    return{
        getFahrenheitToCelsius: getFahrenheitToCelsius
    }

})();