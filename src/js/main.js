// const slider = document.getElementById("clients-list-block");
// const visible = document.getElementById("visible");
// const sliderWrapper = document.getElementById("clients-slider");
// const SLIDES_ON_PAGE = 3;

// const sliderBtnWrapper = document.createElement("ul");
// sliderWrapper.append(sliderBtnWrapper);
// sliderBtnWrapper.classList.add("clients-list-carousel");

// for (let el in data) {
//     const client = document.createElement('li');
//     client.classList.add('clients-list-block-item');

//     const img = document.createElement('img');
//     img.classList.add('client-img');
//     img.setAttribute('src', data[el].img);
//     img.setAttribute('alt', "client-img");

//     const div = document.createElement('div');
//     div.classList.add('client-description');

//     const h3 = document.createElement("h3");
//     h3.classList.add("client-description-header");
//     h3.innerText = data[el].name;

//     const span = document.createElement("span");
//     span.classList.add("client-description-text");
//     span.innerText = data[el].position;

//     client.append(img);
//     client.append(div);
//     slider.append(client);
//     div.append(h3);
//     div.append(span);
// }


// const sliderEl = document.getElementsByClassName("clients-list-block-item");

// const sliderElForBtn = Math.ceil(sliderEl.length / SLIDES_ON_PAGE);

// for (let i = 0; i < sliderElForBtn; i++) {
//     const sliderBtn = document.createElement("li");
//     sliderBtnWrapper.append(sliderBtn);
//     sliderBtn.classList.add("clients-list-carousel-item");
//     const point = document.createElement("div");
//     sliderBtn.append(point);
//     point.classList.add("point");
// }

// const sliderBtns = document.getElementsByClassName("clients-list-carousel-item");

// const move = visible.offsetWidth;

// sliderBtns[0].classList.add("clients-list-carousel-item-active");


// for (let i = 0; i < sliderBtns.length; i++) {

//     sliderBtns[i].addEventListener("click", () => {

//         slider.style.left = (-move * i) + "px";

//         for (let j = 0; j < sliderBtns.length; j++) {
//             sliderBtns[j].className = sliderBtns[j].className.replace("clients-list-carousel-item-active", "");
//         };

//         sliderBtns[i].classList.add("clients-list-carousel-item-active");
//     });

// };

// /////////////////////////////////////////////////////////////////////////

// let backgroundsBanner = document.getElementsByClassName("banner-backgrounds");
// let leftBtn = document.getElementById("left-rectangle-arrow");
// let rightBtn = document.getElementById("right-rectangle-arrow");

// const replaceClass = (item, classItem, newClassItem) => {
//     item.className = item.className.replace(classItem, newClassItem);
// }

// backgroundsBanner[0].classList.add("backgrounds-active");

// let idx = 0;

// leftBtn.onclick = function () {
//     replaceClass(backgroundsBanner[idx], "backgrounds-active", "");
//     idx -= 1;
//     if (idx < 0) {
// 		idx = backgroundsBanner.length - 1;
// 	}

// 	backgroundsBanner[idx].classList.add('backgrounds-active');
// };

// rightBtn.onclick = function () {
//     replaceClass(backgroundsBanner[idx], "backgrounds-active", "");
//     idx += 1;
//     if (idx > backgroundsBanner.length - 1) {
// 		idx = 0;
// 	}

// 	backgroundsBanner[idx].classList.add('backgrounds-active');
// };

/////////////////////////////////////////////////
const BLOG_WRAPPER = document.getElementById("main-block-blog-wrapper");
const BLOG_LENGHT = 3;

for (let el in news) {
    const blog = document.createElement("div");
    blog.classList.add("blogs");
    BLOG_WRAPPER.append(blog);

    const blogImg = document.createElement("div");
    blogImg.classList.add("blogs-img");
    blog.append(blogImg);

    const img = document.createElement("img");
    img.setAttribute("src", news[el].img)
    blogImg.append(img);

    const dateImg = document.createElement("div");
    dateImg.classList.add("blogs-img-date");
    dateImg.innerText = news[el].date;
    blogImg.append(dateImg);

    const heading = document.createElement("div");
    heading.classList.add("blogs-img-heading");
    blogImg.append(heading);
    heading.innerText = news[el].title;

    const actions = document.createElement("div");
    actions.classList.add("actions");
    blog.append(actions);

    const btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.classList.add("button");
    btn.innerText = news[el].btn;
    actions.append(btn);

    const links = document.createElement("div");
    links.classList.add("links");
    actions.append(links);

    const shareBlock = document.createElement("div");
    shareBlock.classList.add("share-block");
    shareBlock.classList.add("icon-share");
    links.append(shareBlock);

    const shareDate = document.createElement("span");
    shareDate.classList.add("share-block-date");
    shareDate.innerText = "13-feb-2016";
    links.append(shareDate);
    
    const shareText = document.createElement("span");
    shareText.classList.add("share-block-text");
    shareText.innerText = "Share:";
    links.append(shareText);

    const iconsBlock = document.createElement("div");
    iconsBlock.classList.add("icons-block");
    actions.append(iconsBlock);

    const linksIcon = document.createElement("a");
    linksIcon.setAttribute("href", "#");
    linksIcon.classList.add("icon-facebook");
    iconsBlock.append(linksIcon);

    const linksIcon2 = document.createElement("a");
    linksIcon2.setAttribute("href", "#");
    linksIcon2.classList.add("icon-twitter");
    iconsBlock.append(linksIcon2);

    const linksIcon3 = document.createElement("a");
    linksIcon3.setAttribute("href", "#");
    linksIcon3.classList.add("icon-gplus");
    iconsBlock.append(linksIcon3);
}
///////////////////////////////////////////////////////////
const shareBlock = document.getElementsByClassName("share-block");
const iconsBlock = document.getElementsByClassName("icons-block");
const shareBlockText = document.getElementsByClassName("share-block-text");
const shareBlockDate = document.getElementsByClassName("share-block-date");

const blogsLenght = document.getElementsByClassName("blogs").length;

for (let i = 0; i < blogsLenght; i++) {
    shareBlock[i].addEventListener("click", () => {
        shareBlock[i].classList.toggle("share-block-active");
        iconsBlock[i].classList.toggle("icons-block-active");
        shareBlockDate[i].classList.toggle("share-block-date-active");
        shareBlockText[i].classList.toggle("share-block-text-active");
    });
};

