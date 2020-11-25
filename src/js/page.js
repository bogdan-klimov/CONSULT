const BLOG_WRAPPER = document.getElementById("main-block-blog-wrapper");

const createTempPage = (data) => {
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

const createTempArray = (news, elementsOnPage, start) => {
  return news.slice(
    elementsOnPage * start,
    elementsOnPage * start + elementsOnPage
  );
};

const createShareBlock = () => {
  const shareBlock = document.getElementsByClassName("share-block");
  const iconsBlock = document.getElementsByClassName("icons-block");
  const shareBlockText = document.getElementsByClassName("share-block-text");
  const shareBlockDate = document.getElementsByClassName("share-block-date");

  const blogs = document.getElementsByClassName("blogs");

  Array.from(blogs).forEach((i) => {
    // find a mistake there! make it only with forEach

    shareBlock[i].addEventListener("click", () => {
      shareBlock[i].classList.toggle("share-block-active");
      iconsBlock[i].classList.toggle("icons-block-active");
      shareBlockDate[i].classList.toggle("share-block-date-active");
      shareBlockText[i].classList.toggle("share-block-text-active");
    });
  });
};

const createAllData = (start, paginEl, news, elementsOnPage, BLOG_WRAPPER) => {
  const handleSetActive = (start, paginEl) => {
    for (let j = 0; j < paginEl.length; j++) {
      paginEl[j].classList.remove("pagin-num-active");
      paginEl[start].classList.add("pagin-num-active");
    }
  };

  handleSetActive(start, paginEl);
  BLOG_WRAPPER.innerText = "";
  createTempPage(createTempArray(news, elementsOnPage, start));
  createShareBlock();
};

const getMaxBlogHeight = (news, elementsOnPage) => {
  createTempPage(news);
  const blogs = document.getElementsByClassName("blogs");
  let arr = [];
  for (let i = 0; i < blogs.length; i++) {
    arr.push(blogs[i].offsetHeight);
  }
  const pageHeight = Math.max.apply(null, arr) * elementsOnPage;
  BLOG_WRAPPER.innerText = "";
  return pageHeight;
};

const elementsOnPage = 3;
const paginNums = Math.ceil(news.length / elementsOnPage);
const paginNumber = document.getElementById("pagin-num-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paginEl = document.getElementsByClassName("pagin-num-item");
let tempArray;
let start = 0;

const pageHeight = getMaxBlogHeight(news, elementsOnPage);
createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
BLOG_WRAPPER.style.height = pageHeight + 100 + "px";

const createNumList = () => {};

// finish this function

new Array(paginNums).fill(null).forEach((_, i) => {
  const li = document.createElement("li");
  li.classList.add("pagin-num-item");
  li.innerText = i + 1;
  paginNumber.append(li);
});

Array.from(paginEl).forEach((num) => {
  num.addEventListener("click", () => {
    start = num.innerText - 1;
    createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
  });
});

const nextPage = () => {
  if (start > paginNums - 2) {
    start = -1;
  }
  start++;
  createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
};

const prevPage = () => {
  if (start < 1) {
    start = paginNums;
  }
  start--;
  createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
};

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);

///////////////////////////////////////////////////////////
