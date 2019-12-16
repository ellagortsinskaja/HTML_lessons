/* Взаимодействие с элементами по атрибутам*/
$('a[download]').css('border','1px solid red'); //Простой атрибут
$('a[href="http://ya.ru"]').css('border','1px solid red');// Полное соответствие
$('a[href!="http://ya.ru"]').css('border','1px solid red'); //олное несоответствие
$('a[href^="http"]').css('border','1px solid red'); // Начинается с....
$('a[href$=".com"]').css('border','1px solid red'); // Заканчивается на.....
$('a[href*="google"]').css('border','1px solid red'); //Содержит....
$('a[data-target|="main"]').css('border','1px solid red'); // Имеет префикс
$('a[href][download]').css('border','1px solid red'); //Имеет одновременно несколько атрибутов

