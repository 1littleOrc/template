
//создаем переменные "Карта" и "Метка"
ymaps.ready(init);
var myMap, 
myPlacemark;

//Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
function init(){ 
  myMap = new ymaps.Map("map", {
    center: [55.814457, 49.188044],
    zoom: 16,
  }); 

//Пишем свойства для нашей метки
myPlacemark = new ymaps.Placemark([55.814457, 49.188044], {
  hintContent: 'Тут описание, которое всплывает при наведении',
  balloonContent: ''
}, {
            // Опции.
            // Необходимо указать данный тип макета. Показываем что это изображение.
            iconLayout: 'default#image',
            // Своё изображение иконки метки. Указываем путь до картинки
            iconImageHref: 'img/map_icon.png',
            // Размеры метки. 
            iconImageSize: [100, 100],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-50, -50]
          });            
    //Добавляем метку на карту + убираем скролл мышкой 
    myMap.geoObjects.add(myPlacemark);  
    myMap.behaviors.disable('scrollZoom');
  }

	$(document).ready(function() {
		$(".ajaxform").submit(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          // $("#thank_you_modal").modal("show");
          // $(".ajaxform").trigger("reset");
      });
	});