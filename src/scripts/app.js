(function () {
	//Menu open
	$(".icon--open").on("click", function () {
		$(".nav__menu").toggleClass("show-menu");
		$(this).addClass("display-none");
		$(".icon--close").addClass("display-block");
		$(".header__content").addClass("header__content--darken");
		$(".header").addClass("header--darken");

		//Prevent  scroll when menu is open
		$("body").addClass("body-menu-open");
	});

	//Menu close
	$(".icon--close").on("click", function () {
		$(".nav__menu").toggleClass("show-menu");
		$(".icon--open").removeClass("display-none");
		$(this).removeClass("display-block");
		$(".header__content").removeClass("header__content--darken");
		$(".header").removeClass("header--darken");

		//Allow user to scroll when menu is closed again
		$("body").removeClass("body-menu-open");
	});
})(jQuery);

//Toggle FAQs
(function () {
	$(".question__wrapper").on("click", function () {
		$(this).next().slideToggle();
		$(this).children("svg").toggleClass("rotate-faq-arrow");
	});
})(jQuery);
