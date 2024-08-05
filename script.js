function initialize(){
     let html = document.getElementById("html-code");
     let css = document.getElementById("css-code");
     let js = document.getElementById("js-code");
     let output = document.getElementById("output").contentWindow.document;

document.body.onkeyup= function(){
    output.open();
    output.writeln(
        html.value+

      "<style>" + css.value + "</style>" +

       "<script>" + js.value + "</script>"
    );

    output.close();
}

}
initialize();