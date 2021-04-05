var app = (function (){

    var cel;

    function getFahrenheitToCelsius(){
        var fahrenheit = $("#num").val();
        appClient.getFahrenheitToCelsius(fahrenheit, _setCelsius)
    }

    function _setCelsius(data){
        $("#Answer").text("Answer: " + JSON.stringify(data));
    }
    return{
        getFahrenheitToCelsius: getFahrenheitToCelsius
    }

})();