const newSoundsData = [
  {
    id: 1,
    img: "./assets/img/sheikh-mahmood-abadi.jpg",
    name: "شیخ علی محمود آبادی",
    title: "شهادت حضرت امام هادی (ع)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 2,
    img: "./assets/img/khiabani.jpg",
    name: "کربلایی وحید خیابانی",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 3,
    img: "./assets/img/taha.jpg",
    name: "کربلایی طاها بیک محمدلو",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
];

const newAudioContainder = document.getElementById("tazeh");
newSoundsData.forEach((data) => {
  let swiperSlide = document.createElement("swiper-slide");
  swiperSlide.className = "slider-title2";
  swiperSlide.addEventListener("click", (e) => handleClick(e, data.id));

  let imgElem = document.createElement("img");
  imgElem.src = data.img;

  let spanName = document.createElement("a");
  spanName.innerHTML = data.name;
  spanName.href = `/detail.html?name=${data.name}`;
  spanName.className = "title-img";

  let spanTitle = document.createElement("span");
  spanTitle.innerHTML = data.title;
  spanTitle.className = "below-title";

  swiperSlide.append(imgElem, spanName, spanTitle);
  newAudioContainder.append(swiperSlide);
});

const Data = [
  {
    id: 1,
    img: "./assets/img/sheikh-mahmood-abadi.jpg",
    name: "شیخ علی محمود آبادی",
    title: "شهادت حضرت امام هادی (ع)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 2,
    img: "./assets/img/khiabani.jpg",
    name: "کربلایی وحید خیابانی",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 3,
    img: "./assets/img/taha.jpg",
    name: "کربلایی طاها بیک محمدلو",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 4,
    img: "./assets/img/khiabani.jpg",
    name: "کربلایی وحید خیابانی",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
  {
    id: 5,
    img: "./assets/img/taha.jpg",
    name: "کربلایی طاها بیک محمدلو",
    title: "شهادت حضرت زهرا (س)",
    audio: "./assets/sounds/1.mp3",
    paragraf: `میبینی بند دلم پاره شده
    دخترت تو صحرا آواره شده
    پاشو که میون این حرومیا
    صحبت غارت گهواره شده
    دور تو یه عده کردن شادی
    با لب تشنه دیدم جون دادی
    نیزه رو وقتی به پهلوت میزد یاد درد مادرم افتادی
    وای من وای من ای حسین
    رو خاک صحرا چرا میزدنت
    بمیرم که بی هوا میزدنت
    جون من به لب رسید تا دیدم
    پیر مردا با عصا میزدنت
    زیرو رو شد بدنت واویلا
    خاک و خون شد کفنت واویلا
    جوری گیر افتادی تو اون گودال
    پاره شد پیروهنت واویلا
    وای من وای من ای حسین`,
  },
];

const audioContainder = document.getElementById("all");
function renderData() {
  Data.forEach((data) => {
    let swiperSlide = document.createElement("swiper-slide");
    swiperSlide.className = "slider-title2";
    swiperSlide.addEventListener("click", (e) => handleClick(e, data.id));

    let imgElem = document.createElement("img");
    imgElem.src = data.img;

    let spanName = document.createElement("a");
    spanName.innerHTML = data.name;
    spanName.className = "title-img";

    let spanTitle = document.createElement("span");
    spanTitle.innerHTML = data.title;
    spanTitle.className = "below-title";

    swiperSlide.append(imgElem, spanName, spanTitle);
    audioContainder.append(swiperSlide);
  });
}
renderData();

function handleClick(e, id) {
  e.preventDefault();
  window.history.pushState({}, "", `?id=${id}`);
  renderPageDetail(); // Render the page with the ID parameter
}

window.onpopstate = function (event) {
  renderPageDetail(); // Handle browser back and forward buttons
};

function renderPageDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const container = document.querySelector(".sliders");
  const detailContainer = document.querySelector(".detail");

  if (id) {
    console.log(id);
    container.style.display = "none";

    detailContainer.innerHTML = "";
    let imgElem = document.createElement("img");
    imgElem.src = Data[id - 1].img;

    let spanName = document.createElement("h3");
    spanName.innerHTML = Data[id - 1].name;
    spanName.className = "title-detail";

    let audioElem = document.createElement("audio");
    audioElem.src = Data[id - 1].audio;
    audioElem.controls = true;

    let paragrafAudio = document.createElement("p");
    paragrafAudio.innerHTML = Data[id - 1].paragraf;
    slicedParagraf(paragrafAudio);

    let notSlicedBtn = document.createElement("button");
    notSlicedBtn.innerHTML = "ادامه متن";
    notSlicedBtn.className = "btn-slice";
    notSlicedBtn.onclick = function () {
      paragrafAudio.innerHTML = Data[id - 1].paragraf;
      notSlicedBtn.style.display = "none";
    };

    detailContainer.append(imgElem, spanName, audioElem, paragrafAudio, notSlicedBtn);
  } else {
    detailContainer.innerHTML = "";
    container.style.display = "block";
  }
}


function slicedParagraf(paragraf) {
  let slicedParagraf = paragraf.innerHTML.slice(0, 140);
  paragraf.innerHTML = `${slicedParagraf}...`;
}