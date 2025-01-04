const newData = [
  {img: "./assets/img/sheikh-mahmood-abadi.jpg", name: "شیخ علی محمود آبادی", title: "شهادت حضرت امام هادی (ع)"},
  {img: "./assets/img/khiabani.jpg", name: "کربلایی وحید خیابانی", title: "شهادت حضرت زهرا (س)"},
  {img: "./assets/img/taha.jpg", name: "کربلایی طاها بیک محمدلو", title: "شهادت حضرت زهرا (س)"},
];
const newAudioContainder = document.getElementById('tazeh')
newData.forEach(data => {
  let swiperSlide = document.createElement('swiper-slide');
  swiperSlide.className = 'slider-title2';

  let imgElem = document.createElement('img');
  imgElem.src = data.img;

  let spanName = document.createElement('span');
  spanName.innerHTML = data.name;
  spanName.className = 'title-img';
  
  let spanTitle = document.createElement('span');
  spanTitle.innerHTML = data.title;
  spanTitle.className = 'below-title';

  swiperSlide.append(imgElem, spanName, spanTitle);
  newAudioContainder.append(swiperSlide)
  console.log(newAudioContainder);
});

