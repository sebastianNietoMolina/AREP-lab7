package app;

import spark.Request;
import spark.Response;

import static spark.Spark.*;

public class App {

    public static void main(String... args){
        port(getPort());
        get("hello", (req,res) -> "Hello Docker!");
        get("convert", (req,res) -> convert(req, res));
    }

    public static String convert(Request req, Response res){
        Double fahrenheit = Double.parseDouble(req.queryParams("num"));
        Double celsius = ((fahrenheit-32)*5)/9;
        String answer =  "{ \"input\": "+fahrenheit+" \", output\": "+ celsius +"}";
        return answer;
    }

    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }
}
