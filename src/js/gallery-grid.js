// specify itemSelector so stamps do get laid out
itemSelector: '.grid-item';
// stamp elements
  stamp: '.stamp';

var $container = $('#container');
// Инициализация Масонри, после загрузки изображений
$container.imagesLoaded( function() {
  $container.masonry();
});

