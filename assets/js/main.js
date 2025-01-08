const newData = [
  {
    id: 1,
    img: "./assets/img/sheikh-mahmood-abadi.jpg",
    name: "شیخ علی محمود آبادی",
    title: "شهادت حضرت امام هادی (ع)",
  },
  {
    id: 2,
    img: "./assets/img/khiabani.jpg",
    name: "کربلایی وحید خیابانی",
    title: "شهادت حضرت زهرا (س)",
  },
  {
    id: 3,
    img: "./assets/img/taha.jpg",
    name: "کربلایی طاها بیک محمدلو",
    title: "شهادت حضرت زهرا (س)",
  },
];

const newAudioContainder = document.getElementById("tazeh");
newData.forEach((data) => {
  let swiperSlide = document.createElement("swiper-slide");
  swiperSlide.className = "slider-title2";

  let imgElem = document.createElement("img");
  imgElem.src = data.img;

  let spanName = document.createElement("a");
  spanName.innerHTML = data.name;
  spanName.href = `/detail.html?name=${data.name}`;
  spanName.className = "title-img";
  spanName.addEventListener("click", (e) => handleClick(e, data.id));

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
  },
  {
    id: 2,
    img: "./assets/img/khiabani.jpg",
    name: "کربلایی وحید خیابانی",
    title: "شهادت حضرت زهرا (س)",
  },
  {
    id: 3,
    img: "./assets/img/taha.jpg",
    name: "کربلایی طاها بیک محمدلو",
    title: "شهادت حضرت زهرا (س)",
  },
];

const audioContainder = document.getElementById("all");
function renderData() {
  Data.forEach((data) => {
    let swiperSlide = document.createElement("swiper-slide");
    swiperSlide.className = "slider-title2";
  
    let imgElem = document.createElement("img");
    imgElem.src = data.img;
  
    let spanName = document.createElement("a");
    spanName.innerHTML = data.name;
    spanName.className = "title-img";
    spanName.addEventListener("click", (e) => handleClick(e, data.id));
  
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
  renderPage(); // Render the page with the ID parameter
}

window.onpopstate = function (event) {
  renderPage(); // Handle browser back and forward buttons
};

function renderPage() {
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

    let spanName = document.createElement("span");
    spanName.innerHTML = Data[id - 1].name;
    spanName.className = "title-detail";
    
    detailContainer.append(imgElem, spanName);

  } else {
    detailContainer.innerHTML = "";
    container.style.display = "block";
  }
}
