var app = (function (){

    function getFahrenheitToCelsius(){
        fahrenheit = $("#num").val();
        var celsius = _convertFahrenheitToCelsius(fahrenheit);
        $("#Answer").text("Answer: " + celsius);
    }

    function _convertFahrenheitToCelsius(fahrenheit){
        return ((fahrenheit-32)*5)/9;
    }

    return{
        getFahrenheitToCelsius: getFahrenheitToCelsius
    }

})();