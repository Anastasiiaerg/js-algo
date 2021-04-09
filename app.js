function writeAlgoDemo() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("Side a=" + side_a + "Side b=" + side_b);
    document.write("Обьем куба" + side_a * side_a * side_a);
    document.write("Площадь квадрата" + side_a * side_a);
    document.write("Площадь прямоугольника" + side_a * side_b);

}