var data = {
	reviews: [
		{
			text: 'С командой ПроПечать сотрудничаем давно и очень тесно. Ребята изготавливают для нас различные рекламные и интерьерные конструкции, а также печатную, полиграфическую продукцию. Результат работы всегда радует',
			photo: 'img/clients/client1.jpg',
			name: 'Инна Обухович',
			position: 'дизайнер-оформитель интеръеров',
			isActive: true,
		},
		{
			text: 'ПроПечать – активная команда трудоголиков, всегда выполняют всё вовремя, качественно и по доступной цене. Работайте с ними по долгосрочным контрактам и у вас всегда будут с ними хорошая цена на продукцию и услуги. Спасибо вам ребята!',
			photo: 'img/clients/client2.jpg',
			name: 'Анастасия Перец',
			position: 'маркетинг, реклама, туризм',
			isActive: false,
		},
		{
			text: 'Ребята из ПроПечать выполнили для меня множество заказов. Их продукцией я успешно пользуюсь на протяжении долгого времени. К примеру, пресс-волл, который изготовила мне эта компания, сделал знаменитым мой проект в СМИ. Много товаров и услуг я получила от них бесплатно, просто в знак дружбы',
			photo: 'img/clients/client3.jpg',
			name: 'Нелли Землянская',
			position: 'руководитель проекта',
			isActive: false,
		},
	],
	rText: 'С командой ПроПечать сотрудничаем давно и очень тесно. Ребята изготавливают для нас различные рекламные и интерьерные конструкции, а также печатную, полиграфическую продукцию. Результат работы всегда радует',
	rPhoto: 'img/clients/client1.jpg',
	rName: 'Инна Обухович',
	rPosition: 'дизайнер-оформитель интеръеров',
	num: 0,
}
var reviewApp = new Vue({
	el: '#reviewApp',
	data: data,
	methods: {
		showPrev: function() {
			if (this.num == 0) {
				this.num = 3;
				this.num = this.num - 1;
				this.rText = this.reviews[this.num].text;
				this.rPhoto = this.reviews[this.num].photo;
				this.rName = this.reviews[this.num].name;
				this.rPosition = this.reviews[this.num].position;
			}
			else {
				this.num = this.num - 1;
				this.rText = this.reviews[this.num].text;
				this.rPhoto = this.reviews[this.num].photo;
				this.rName = this.reviews[this.num].name;
				this.rPosition = this.reviews[this.num].position;
			}
		},
		showNext: function() {
			if (this.num == 2) {
				this.num = -1;
				this.num = this.num + 1;
				this.rText = this.reviews[this.num].text;
				this.rPhoto = this.reviews[this.num].photo;
				this.rName = this.reviews[this.num].name;
				this.rPosition = this.reviews[this.num].position;
			}
			else {
				this.num = this.num + 1;
				this.rText = this.reviews[this.num].text;
				this.rPhoto = this.reviews[this.num].photo;
				this.rName = this.reviews[this.num].name;
				this.rPosition = this.reviews[this.num].position;
			}
		}
	}
})