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

  const navigateElements = (blog, data) => {
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
    madeBlock(shareDate, links, "share-block-date", data);
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

const createTempArray = (data, elementsOnPage, start) => {
  return data.slice(
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
  Array.from(blogs).forEach((_, idx) => {
    shareBlock[idx].addEventListener("click", () => {
      shareBlock[idx].classList.toggle("share-block-active");
      iconsBlock[idx].classList.toggle("icons-block-active");
      shareBlockDate[idx].classList.toggle("share-block-date-active");
      shareBlockText[idx].classList.toggle("share-block-text-active");
    });
  });
};

const createAllData = (start, paginEl, data, elementsOnPage, BLOG_WRAPPER) => {
  const handleSetActive = (start, paginEl) => {
    Array.from(paginEl).forEach((j) => {
      paginEl[+j.innerText - 1].classList.remove("pagin-num-active");
      paginEl[start].classList.add("pagin-num-active");
    });
  };
  handleSetActive(start, paginEl);
  BLOG_WRAPPER.innerText = "";
  createTempPage(createTempArray(data, elementsOnPage, start));
  createShareBlock();
};

const getMaxBlogHeight = (news, elementsOnPage) => {
  createTempPage(news);
  const blogs = document.getElementsByClassName("blogs");
  let arr = [];
  Array.from(blogs).forEach((_, idx) => {
    arr.push(blogs[idx].offsetHeight);
  });
  const pageHeight = Math.max.apply(null, arr) * elementsOnPage;
  BLOG_WRAPPER.innerText = "";
  BLOG_WRAPPER.style.height = pageHeight + 100 + "px";
  // return pageHeight;
};

const createNumList = (paginNums, paginNumber, paginEl, start) => {
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
};

const createPostFeature = (randomNum) => {
  const itemFeature = document.createElement("li");
  itemFeature.classList.add("feature-post-list-item");
  featurePostBlock.append(itemFeature);

  const postDesc = document.createElement("a");
  postDesc.classList.add("featured-post-list-item-description");
  postDesc.setAttribute("href", news[randomNum].link);
  itemFeature.append(postDesc);

  const featureImg = document.createElement("img");
  featureImg.setAttribute("src", news[randomNum].img);
  featureImg.setAttribute("alt", "featured-post-img-1");
  featureImg.classList.add("assets/img/featured-post-img-1.png");
  postDesc.append(featureImg);

  const featurePostDescription = document.createElement("span");
  featurePostDescription.classList.add("featured-post-description");
  featurePostDescription.innerText = news[randomNum].title;
  postDesc.append(featurePostDescription);

  const featurePostDate = document.createElement("span");
  featurePostDate.classList.add("featured-post-date");
  featurePostDate.innerText = news[randomNum].date;
  postDesc.append(featurePostDate);
};

const elementsOnPage = 3;
const paginNums = Math.ceil(news.length / elementsOnPage);
const paginNumber = document.getElementById("pagin-num-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paginEl = document.getElementsByClassName("pagin-num-item");
const searchInput = document.getElementById("input-search");
let start = 0;

// let pageHeight = getMaxBlogHeight(news, elementsOnPage);
// BLOG_WRAPPER.style.height = pageHeight + 100 + "px";

getMaxBlogHeight(news, elementsOnPage);

createNumList(paginNums, paginNumber, paginEl, start);
createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);

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
paginEl[0].classList.add("pagin-num-active");

////////////////////////////////////////////////////////////////////
const featurePostBlock = document.getElementById("featured-post-list");
let newsPosition = [];

for (let el in news) {
  if (news[el].type === "new") {
    newsPosition.push(news[el].position);
  }
}

const randomForNum1 = Math.round(Math.random() * (newsPosition.length - 1));
const randomForNum2 = Math.round(Math.random() * (newsPosition.length - 1));
const randomForNum3 = Math.round(Math.random() * (newsPosition.length - 1));

const randomNum1 = newsPosition[randomForNum1];
const randomNum2 = newsPosition[randomForNum2];
const randomNum3 = newsPosition[randomForNum3];

createPostFeature(randomNum1);
createPostFeature(randomNum2);
createPostFeature(randomNum3);

///////////////////////////////////////

searchInput.addEventListener("keyup", (e) => {
  // 1. при пустом значении в инпуте возвращать в исходное положение
  // 2. при несовпадении в поиске возвращать сообщение "информация не найдена"
  // 3. сформировать актуальную пагинацию при поиске данных (сохраняя elementsOnPage = 3)

  const filteredData = news
    .filter((ad) => ad.type === "new")
    .filter((ad) =>
      ad.title.toUpperCase().includes(e.target.value.toUpperCase())
    );

  console.log(filteredData);

  getMaxBlogHeight(filteredData, filteredData.length + 1);

  createAllData(
    start,
    paginEl,
    filteredData,
    filteredData.length,
    BLOG_WRAPPER
  );
});

///

// const blogs = document.getElementsByClassName("blogs");
// const inputText = searchInput.value.toUpperCase();

// const blogsHeading = document.getElementsByClassName("blogs-img-heading");
// const itemPagin = document.getElementsByClassName("pagin-num-item");

// searchInput.addEventListener("focus", () => {
//   for (let i = 1; i < itemPagin.length; i++) {
//     itemPagin[i].style.display = "none";
//   }
//   changeBlogsFocus(news.length);
// });

// searchInput.addEventListener("blur", () => {
//   for (let i = 0; i < itemPagin.length; i++) {
//     itemPagin[i].style.display = "block";
//   }
//   changeBlogsFocus(3);
// });

// const searchFunc = () => {
//   Array.from(blogs).forEach = (_, idx) => {
//     filtrationElementsHeading = blogsHeading[idx];
//     if (filtrationElementsHeading.toUpperCase().indexOf(inputText) > -1) {
//       blogs[idx].style.display = "";
//     } else {
//       blogs[idx].style.display = "none";
//     }
//   };
// };

// searchInput.onkeyup = searchFunc();
