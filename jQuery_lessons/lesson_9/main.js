
$(function() {
	$('p').text('DOM элементы загружены')
});// Готовность DOM элементов

$(window).load(function() {

});// Полная загрузка страницы

$(window).unload(function() {
    alert('Пользователь, пока!');
})// Выход со страницы

$(window).resize(function(event) {
console.log('размеры окна изменены')
});// Изменение размера (например, окна)


$(window).scroll(function(event) {
console.log('Страница прокручена')
});// Прокрутка элемента
