let articles = document.querySelectorAll('.blog-entry');
let filter = document.querySelector('select');
let btn = document.querySelector('.invisible-btn');
let marginRegular = document.querySelector('.regular-articles');
let marginPromo = document.querySelector('.promo-articles');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !=='all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  };
  if (filter.value == 'all') {
    btn.classList.remove('hidden');
    for (let article of articles) {
      article.classList.remove('hidden');
    }
  } else {
    btn.classList.add('hidden');
  }
  if (filter.value == 'recipes' || filter.value == 'photography') {
    marginRegular.classList.add('margin-regular');
    marginPromo.classList.add('margin-promo');
  } else {
    marginRegular.classList.remove('margin-regular');
    marginPromo.classList.remove('margin-promo');
  }
}