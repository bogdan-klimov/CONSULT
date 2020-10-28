const slider = document.getElementById("clients-list-block");
const visible = document.getElementById("visible");

// const testimonialDescription = document.getElementById("testimonial-description");
const sliderWrapper = document.getElementById("clients-slider");

const sliderBtnWrapper = document.createElement("ul");
sliderWrapper.append(sliderBtnWrapper);
sliderBtnWrapper.classList.add("clients-list-carousel");


for (let el in data) {
    const client = document.createElement('li');
    client.classList.add('clients-list-block-item');

    const img = document.createElement('img');
    img.classList.add('client-img');
    img.setAttribute('src', data[el].img);
    img.setAttribute('alt', "client-img");

    const div = document.createElement('div');
    div.classList.add('client-description');

    const h3 = document.createElement("h3");
    h3.classList.add("client-description-header");
    h3.innerText = data[el].name;

    const span = document.createElement("span");
    span.classList.add("client-description-text");
    span.innerText = data[el].position;

    client.append(img);
    client.append(div);
    slider.append(client);
    div.append(h3);
    div.append(span);
}


const sliderEl = document.getElementsByClassName("clients-list-block-item");




const sliderElOnPage = 3;

const sliderElForBtn = Math.ceil(sliderEl.length / sliderElOnPage);

for (let i = 0; i < sliderElForBtn; i++) {
    const sliderBtn = document.createElement("li");
    sliderBtnWrapper.append(sliderBtn);
    sliderBtn.classList.add("clients-list-carousel-item");
    const point = document.createElement("div");
    sliderBtn.append(point);
    point.classList.add("point");
}

const sliderBtns = document.getElementsByClassName("clients-list-carousel-item");

const move = visible.offsetWidth;

sliderBtns[0].classList.add("clients-list-carousel-item-active");


for (let i = 0; i < sliderBtns.length; i++) {

    sliderBtns[i].addEventListener("click", () => {

        slider.style.left = (-move * i) + "px";

        for (let j = 0; j < sliderBtns.length; j++) {
            sliderBtns[j].className = sliderBtns[j].className.replace("clients-list-carousel-item-active", "");
        };

        sliderBtns[i].classList.add("clients-list-carousel-item-active");
    });

};

/////////////////////////////////////////////////////////////////////////

let backgroundsBanner = document.getElementsByClassName("banner-backgrounds");
let leftBtn = document.getElementById("left-rectangle-arrow");
let rightBtn = document.getElementById("right-rectangle-arrow");

const replaceClass = (item, classItem, newClassItem) => {
    item.className = item.className.replace(classItem, newClassItem);
}

backgroundsBanner[0].classList.add("backgrounds-active");

let idx = 0;

leftBtn.onclick = function () {
    replaceClass(backgroundsBanner[idx], "backgrounds-active", "");
    idx -= 1;
    if (idx < 0) {
		idx = backgroundsBanner.length - 1;
	}

	backgroundsBanner[idx].classList.add('backgrounds-active');
};

rightBtn.onclick = function () {
    replaceClass(backgroundsBanner[idx], "backgrounds-active", "");
    idx += 1;
    if (idx > backgroundsBanner.length - 1) {
		idx = 0;
	}

	backgroundsBanner[idx].classList.add('backgrounds-active');
};

/////////////////////////////////////////////////

const mainBlock = documnet.getElementById("about-us-nav");

