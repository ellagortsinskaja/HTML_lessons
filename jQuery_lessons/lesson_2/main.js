/* Bзаимодействие с элементами*/

$('h2, p') // первый, второй, третий и т.д.
$('h2 span') //outer u inner
$('h2 > span') // parent > child
$('h2 + p') //prev + next
$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next

