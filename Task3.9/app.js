document.write("<h1>Таблиця множення</h1>");

for (let j = 2; j <= 9; j++) {
    document.write("<div style='float: left; width: 80px;'>");
    for (let i = 1; i <= 10; i++) {
        document.write(i + " * " + j + " = " + (i * j) + "<br>");

    }
    document.write("</div>");

} 