 $(document).ready(function(){

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    nav: false,
    responsive: {
      320: {
        nav: true
      },
      769: {
        nav: false
      }
    }
  });

  document.querySelector(".prev").addEventListener("click", function() {
    slider.goTo("prev");
  });

  document.querySelector(".next").addEventListener("click", function() {
    slider.goTo("next");
  });


  // Catalog

  const catalogFitness = $(".catalog__content_fitness"),
        catalogRun = $(".catalog__content_run"),
        catalogTriathlon = $(".catalog__content_triathlon");
  class CardContent {
    constructor (delay, src, alt, subtitle, descr, backList, oldPrice, price, classes){
      this.delay = delay;
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.backList = backList;
      this.oldPrice = oldPrice;
      this.price = price;
      this.classes = classes;
    }
  writeContent(catalog){
    let div = document.createElement("div");
    div.classList.add("catalog-item", "catalog-item_animation", `${this.classes}`);
    div.dataset.wowDelay = `${this.delay}s`;
    div.innerHTML = ` <div class="catalog-item__wrapper">
						<div class="catalog-item__content catalog-item__content_active">
							<img src=${this.src} alt=${this.alt} class="catalog-item__img">
							<div class="catalog-item__subtitle">${this.subtitle}</div>
							<div class="catalog-item__descr">${this.descr}</div>
							<a href="#" class="catalog-item__link catalog-item__link_descr">Szczegóły</a>
						</div>
						<div class="catalog-item__list-wrapper ">
							<ul class="catalog-item__list ">
							${this.backList}
							</ul>
							<a href="#" class="catalog-item__link catalog-item__link_back">Wróć</a>
						</div>
					</div>					
					<hr>
					<div class="catalog-item__footer">
						<div class="catalog-item__prices">
							<div class="catalog-item__old-price">${this.oldPrice}</div>
							<div class="catalog-item__price">${this.price}</div>
						</div>
						<button class="button button_mini">Kupić</button>
					</div>
				</div>`;
        catalog.append(div);
  }
}

  const card1 = new CardContent(
    "0",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT1",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "4 750 RUB",
    "4 500 RUB",
    "wow"
  );
  card1.writeContent(catalogFitness);

  const card2 = new CardContent(
    "0.3",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Suunto M2",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "6 690 RUB",
    "6 641 RUB",
    "wow"
  );
  card2.writeContent(catalogFitness);

  const card3 = new CardContent(
    "0.6",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT1",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "4 750 RUB",
    "4 500 RUB",
    "wow"
  );
  card3.writeContent(catalogFitness);

  const card4 = new CardContent(
    "0",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT4",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "7 390 RUB",
    "7 021 RUB",
    "wow"
  );
  card4.writeContent(catalogFitness);

  const card5 = new CardContent(
    "0.3",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT1",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "4 750 RUB",
    "4 500 RUB",
    "wow"
  );
  card5.writeContent(catalogFitness);

  const card6 = new CardContent(
    "0.6",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Suunto M2",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "6 690 RUB",
    "6 641 RUB",
    "wow"
  );
  card6.writeContent(catalogFitness);

  const card7 = new CardContent(
    "0.0",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT4",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "7 390 RUB",
    "7 021 RUB"
  );
  card7.writeContent(catalogRun);

  const card8 = new CardContent(
    "0",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Suunto M2",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "6 690 RUB",
    "6 641 RUB"
  );
  card8.writeContent(catalogTriathlon);

  const card9 = new CardContent(
    "0.4",
    "image/pulsometr.jpg",
    "Pulsometr_image",
    "Pulsometr Polar FT1",
    "Dla pierwszych kroków  <br> w treningach w oparciu o tętno",
    '<li class="catalog-item__list-item">Podczas treningu usłyszysz dźwiękowe zawiadomienie o potrzebnym tętnie;</li><li class="catalog-item__list-item">Zobaczysz informacyjny graficzny wskaźnik docelowych treningowych stref tętna;</li><li class="catalog-item__list-item">Zobaczysz również informacje o spalonych kaloriach za trening;</li><li class="catalog-item__list-item">Będziesz mógł zobaczyć dane z 10 treningów.</li>',
    "4 750 RUB",
    "4 500 RUB"
  );
  card9.writeContent(catalogTriathlon);


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on("click", function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list-wrapper').eq(i).toggleClass('catalog-item__list-wrapper_active');
        });
      });
    }
    toggleSlide(".catalog-item__link_descr");
    toggleSlide(".catalog-item__link_back");


  // Modal

  $('[data-modal="consultation"]').on("click", function(){
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  
  $('.button_mini').on("click", function(){
    $('.overlay, #order').fadeIn('slow');
  });

  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
  
  });

  // Form Validate

   function validateForms(form){
    $(form).validate({
      rules:{
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Wpisz swoje imię",
          minlength: jQuery.validator.format("Wpisz minimum {0} symbolów!")
        },
        phone: "Wpisz swój numer telefonu",
        email:{
          required: "Wpisz swój email",
          email: "Adres e-mail został wpisany niepoprawnie"
        }
      }
    });
  }
  validateForms("#consultation form");
  validateForms("#order form");
  validateForms(".consultation form");

  $('input[name=phone]').mask("+48 999-999-999");
  
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()){
      return;
    }
  

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
  });


    // scrollUp
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1200 && $(this).width() >= 768){
      $('.pageup').fadeIn();
    }
    else{
      $('.pageup').fadeOut();
    }
  });

  $("a[href='#up']").click(function(){
                 var _href = $(this).attr("href");
                 $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                 return false;
         });
 
         new WOW().init();
 
});



