const slider = document.getElementById("clients-list-block");
const visibleWindow = document.getElementById("visible-window");
const sliderEl = document.getElementsByClassName("clients-list-block-item");
const testimonialDescription = document.getElementById("testimonial-description");
const sliderWrapper = document.getElementById("clients-slider");

const sliderBtnWrapper = document.createElement("ul");
sliderWrapper.append(sliderBtnWrapper);
sliderBtnWrapper.classList.add("clients-list-carousel");

const sliderElOnPage = 3;

const sliderElForBtn = Math.ceil(sliderEl.length/sliderElOnPage);

for (let i = 0; i < sliderElForBtn; i++) {
    const sliderBtn = document.createElement("li");
    sliderBtnWrapper.append(sliderBtn);
    sliderBtn.classList.add("clients-list-carousel-item");

    const point = document.createElement("div");
    sliderBtn.append(point);
    point.classList.add("point");
}

const sliderBtn = document.getElementsByClassName("clients-list-carousel-item");

const move = visibleWindow.offsetWidth;

sliderBtn[0].classList.add("clients-list-carousel-item-active");
for (let i = 0; i < sliderEl.length; i++) {
    sliderBtn[i].addEventListener("click", () => {
        slider.style.left = (-move * i) + "px";
        for (let j = 0; j < sliderBtn.length; j++) {
            sliderBtn[j].className = sliderBtn[j].className.replace("clients-list-carousel-item-active", "");
        };
        sliderBtn[i].classList.add("clients-list-carousel-item-active");
    });
};
/////////////////////////////////////////////////////////////////////////


