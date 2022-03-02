(function () {
	$(".icon--open").on("click", function () {
		$(".nav__menu").toggleClass("show-menu");
		$(this).addClass("display-none");
		$(".icon--close").addClass("display-block");
		$(".header__content").addClass("header__content--darken");
		$(".header").addClass("header--darken");
	});

	$(".icon--close").on("click", function () {
		$(".nav__menu").toggleClass("show-menu");
		$(".icon--open").removeClass("display-none");
		$(this).removeClass("display-block");
		$(".header__content").removeClass("header__content--darken");
		$(".header").removeClass("header--darken");
	});
})(jQuery);
