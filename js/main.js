//подключение карусeли
$(document).ready(function () {
	
	
	//находим обертку(разметку) для карусели
	let reviewsCarousel = $("#reviews");

	//создаем карусель в элементе
	reviewsCarousel.owlCarousel ({
		items: 4,
		margin: 30,		
		loop: true,
		navText:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav: false,
			},
			767:{
				items:2,
				nav: false,
			},
			991:{
				items:3,
				nav: true,				
			},
			1199:{
				items:4,
				nav: true,					
			},
		},		
})	

	//находим обертку(разметку) для карусели
	let customersCarousel = $("#customers");

	//создаем карусель в элементе
	customersCarousel.owlCarousel ({
		margin: 30,		
		loop: true,
		navText:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav: false,
			},
			767:{
				items:1,
				nav: true,
			},
		},
	});
});



//подключение модального окна
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
});

// Находим ссылки внутри мобильной навигации
const modalLinks = document.querySelectorAll('.modal a');

// Обходим ссылки методом forEach
modalLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		modalIcon.classList.remove('modal-icon--active'); // Убираем активный класс у иконки моб. навигации
		modal.classList.remove('modal--active'); // Убираем активный класс у блока моб. навигации
	});
})  	





  