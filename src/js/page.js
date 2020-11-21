const BLOG_WRAPPER = document.getElementById("main-block-blog-wrapper");

const madeBlock = (
  nameEl,
  parEl,
  className,
  innerTextEl = null,
  atributeName = null,
  atributeItem = null
) => {
  nameEl.className = className;
  parEl.append(nameEl);
  nameEl.innerText = innerTextEl;
  nameEl.setAttribute(atributeName, atributeItem);
};

const navigateElements = (blog, date) => {
  const actions = document.createElement("div");
  const btn = document.createElement("a");
  const links = document.createElement("div");
  const shareBlock = document.createElement("div");
  const shareDate = document.createElement("span");
  const shareText = document.createElement("span");
  const iconsBlock = document.createElement("div");
  const linksIcon = document.createElement("a");
  const linksIcon2 = document.createElement("a");
  const linksIcon3 = document.createElement("a");
  madeBlock(actions, blog, "actions");
  madeBlock(btn, actions, "button", "Read more", "href", "#");
  madeBlock(links, actions, "links");
  madeBlock(shareBlock, links, "share-block icon-share");
  madeBlock(shareDate, links, "share-block-date", date);
  madeBlock(shareText, links, "share-block-text", "Share:");
  madeBlock(iconsBlock, actions, "icons-block");
  madeBlock(linksIcon, iconsBlock, "icon-facebook", "", "href", "#");
  madeBlock(linksIcon2, iconsBlock, "icon-twitter", "", "href", "#");
  madeBlock(linksIcon3, iconsBlock, "icon-gplus", "", "href", "#");
};

const createNew = (data) => {
  for (let el in data) {
    if (data[el].type === "audio") {
      const blog = document.createElement("div");
      const audio = document.createElement("audio");
      const audioSource = document.createElement("source");
      const blogDesc = document.createElement("div");
      madeBlock(blog, BLOG_WRAPPER, "blogs");
      madeBlock(audio, blog, "", "", "controls", "#");
      madeBlock(audioSource, audio, "", "", "src", "#");
      madeBlock(blogDesc, blog, "blogs-description", data[el].desc);
      navigateElements(blog, data[el].date);
    }

    if (data[el].type === "new") {
      const blog = document.createElement("div");
      const blogImg = document.createElement("div");
      const img = document.createElement("img");
      const dateImg = document.createElement("div");
      const heading = document.createElement("div");
      const blogDesc = document.createElement("div");
      madeBlock(blog, BLOG_WRAPPER, "blogs");
      madeBlock(blogImg, blog, "blogs-img");
      madeBlock(img, blogImg, "#", "", "src", data[el].img);
      madeBlock(dateImg, blogImg, "blogs-img-date", data[el].date);
      madeBlock(heading, blogImg, "blogs-img-heading", data[el].title);
      madeBlock(blogDesc, blog, "blogs-description", data[el].desc);
      navigateElements(blog, data[el].date);
    }

    if (data[el].type === "quote") {
      const blog = document.createElement("div");
      const blockQuote = document.createElement("div");
      const blueBlockWrapper = document.createElement("div");
      const blueBlockWrapperText = document.createElement("p");
      madeBlock(blog, BLOG_WRAPPER, "blogs");
      madeBlock(blockQuote, blog, "blue-block");
      madeBlock(blueBlockWrapper, blockQuote, "blue-block-wrapper");
      madeBlock(
        blueBlockWrapperText,
        blueBlockWrapper,
        "blue-block-wrapper-text",
        data[el].desc
      );

      navigateElements(blog, data[el].date);
    }
  }
};

////////////////////////////////////////////////////////
const createTempArray = (news, elementsOnPage, start) => {
  return news.slice(
    elementsOnPage * start,
    elementsOnPage * start + elementsOnPage
  );
};

const elementsOnPage = 3;

const paginNums = Math.ceil(news.length / elementsOnPage);
let start = 0;
const paginNumber = document.getElementById("pagin-num-text");

for (let i = 0; i < paginNums; i++) {
  const li = document.createElement("li");
  li.classList.add("pagin-num-item");
  li.innerText = i + 1;
  paginNumber.append(li);
}

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let tempArray = createTempArray(news, elementsOnPage, start);

createNew(tempArray);

const paginEl = document.getElementsByClassName("pagin-num-item");
paginEl[start].classList.add("pagin-num-active");

const handleSetActive = (idx) => {
  for (let j = 0; j < paginEl.length; j++) {
    paginEl[j].classList.remove("pagin-num-active");
    paginEl[idx].classList.add("pagin-num-active");
  }
};

Array.from(paginEl).forEach((num, idx) => {
  num.addEventListener("click", () => {
    start = num.innerText - 1;
    handleSetActive(start);
    tempArray = createTempArray(news, elementsOnPage, start);
    BLOG_WRAPPER.innerText = "";
    createNew(tempArray);
  });
});

const nextPage = () => {
  if (start > paginNums - 2) {
    start = -1;
  }
  start++;
  handleSetActive(start);
  tempArray = createTempArray(news, elementsOnPage, start);
  BLOG_WRAPPER.innerText = "";
  createNew(tempArray);
};

const prevPage = () => {
  if (start < 1) {
    start = paginNums;
  }
  start--;
  handleSetActive(start);
  tempArray = createTempArray(news, elementsOnPage, start);
  BLOG_WRAPPER.innerText = "";
  createNew(tempArray);
};

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);

///////////////////////////////////////////////////////////
const blogs = document.getElementsByClassName("blogs");
const blogHeight = blogs[0].offsetHeight;
const pageHeight = blogHeight * elementsOnPage; 
const MARGIN_BLOG_ADN_ARROW = 100;

BLOG_WRAPPER.style.height = pageHeight + MARGIN_BLOG_ADN_ARROW + "px";
/////////////////////////////////////////////////////////

const shareBlock = document.getElementsByClassName("share-block");
const iconsBlock = document.getElementsByClassName("icons-block");
const shareBlockText = document.getElementsByClassName("share-block-text");
const shareBlockDate = document.getElementsByClassName("share-block-date");
const blogsLength = document.getElementsByClassName("blogs").length;

for (let i = 0; i < blogsLength; i++) {
  shareBlock[i].addEventListener("click", () => {
    shareBlock[i].classList.toggle("share-block-active");
    iconsBlock[i].classList.toggle("icons-block-active");
    shareBlockDate[i].classList.toggle("share-block-date-active");
    shareBlockText[i].classList.toggle("share-block-text-active");
  });
}

