const BLOG_WRAPPER = document.getElementById("main-block-blog-wrapper");
const elementsOnPage = 3;
const paginNums = Math.ceil(news.length / elementsOnPage);
const paginNumber = document.getElementById("pagin-num-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paginEl = document.getElementsByClassName("pagin-num-item");
const searchInput = document.getElementById("input-search");
const modalWindowBackground = document.getElementById("modal-window-background");
const iconClose = document.getElementById("icon-close");
const modalWindowBlog = document.getElementById("modal-window-blog");
const featurePostBlock = document.getElementById("featured-post-list");
let start = 0;


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
  const btn = document.createElement("div");
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

const createTempPage = (data) => {
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
      madeBlock(img, blogImg, "blogImage", "", "src", data[el].img);
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
  createModalWindow();
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
  BLOG_WRAPPER.style.height = pageHeight + 200 + "px";
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

const nextPage = (data) => {
  if (start > paginNums - 2) {
    start = -1;
  }
  start++;
  createAllData(start, paginEl, data, elementsOnPage, BLOG_WRAPPER);
};

const prevPage = (data) => {
  if (start < 1) {
    start = paginNums;
  }
  start--;
  createAllData(start, paginEl, data, elementsOnPage, BLOG_WRAPPER);
};

const switchFeatureNumber = (num1, num2) => {
  if (num1 === num2) {num1 = newsPosition[randomForNum1];}
}   

const cheackedPostFeature = (num1, num2) => {
  if (num1 != num2) {
    return
  } else {
    switchFeatureNumber(num1, num2);
    // cheackedPostFeature();
  }
} 

const createModalWindowBlock = (id) => {
  const blog = document.createElement("div");
  const blogImg = document.createElement("div");
  const img = document.createElement("img");
  const dateImg = document.createElement("div");
  const heading = document.createElement("div");
  const blogDesc = document.createElement("div");
  madeBlock(blog, modalWindowBlog, "blogs");
  madeBlock(blogImg, blog, "blogs-img");
  madeBlock(img, blogImg, "blogImage", "", "src", news[id].img);
  madeBlock(dateImg, blogImg, "blogs-img-date", news[id].date);
  madeBlock(heading, blogImg, "blogs-img-heading", news[id].title);
  madeBlock(blogDesc, blog, "blogs-description", news[id].article);
  blogDesc.style.color = "white";
  console.log('id: ', id);
};

const createModalWindow = () => {
  const modalWindow = document.getElementById("modal-window");
  const btns = document.getElementsByClassName("button");
  // fix this place
  // перебирать по news
  modalWindowBackground.addEventListener("click", () => {
    modalWindow.className = "modal-window";
    modalWindowBackground.className = "";
    iconClose.classList.remove = "icon-close-active";
    document.body.style.overflow = "";
    modalWindowBlog.innerHTML = "";
  });
  
  Array.from(btns).forEach( (_, idx) => {
    btns[idx].addEventListener("click", () => {
      console.log('btns: ', btns[idx]);
      modalWindow.classList.add("modal-window-active");
      modalWindowBackground.classList.add("modal-window-background-active");
      iconClose.classList.add("icon-close-active");
      document.body.style.overflow = "hidden";
      createModalWindowBlock(idx);
    });
  });
}

getMaxBlogHeight(news, elementsOnPage);
createNumList(paginNums, paginNumber, paginEl, start);
createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
nextBtn.addEventListener("click", () => nextPage(news));
prevBtn.addEventListener("click", () => prevPage(news));
paginEl[0].classList.add("pagin-num-active");
////////////////////////////////////////////////////////////////////

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

cheackedPostFeature(randomNum1, randomNum2);
cheackedPostFeature(randomNum2, randomNum3);
cheackedPostFeature(randomNum3, randomNum1);

createPostFeature(randomNum1);
createPostFeature(randomNum2);
createPostFeature(randomNum3);

///////////////////////////////////////

const errorText = document.getElementById("error-text");
const blogs = document.getElementsByClassName("blogs");
const paginNumberBlock = document.getElementById("arrows-block");

searchInput.addEventListener("keyup", (e) => {
  console.log(e);

  const filteredData = news
    .filter((ad) => ad.type === "new")
    .filter((ad) =>
      ad.title.toUpperCase().includes(e.target.value.toUpperCase())
    );

  getMaxBlogHeight(filteredData, filteredData.length);

  createAllData(
    start,
    paginEl,
    filteredData,
    filteredData.length,
    BLOG_WRAPPER
  );

  paginNumberBlock.style.display = "none";

  if (!e.target.value) {
    getMaxBlogHeight(news, elementsOnPage);
    createAllData(start, paginEl, news, elementsOnPage, BLOG_WRAPPER);
    paginNumberBlock.style.display = "flex";
  }

  if (blogs.length === 0) {
    const errorText = document.createElement("span");
    errorText.classList.add("error-text");
    BLOG_WRAPPER.append(errorText);
    errorText.innerText = "Data not found";
    paginNumberBlock.style.display = "none";
  }
});


