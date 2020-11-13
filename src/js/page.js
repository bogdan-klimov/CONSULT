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

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let start = 0;
let end = 5;

let newsBlock = news.slice(start, end);

nextBtn.addEventListener("click", () => {
  start = start + 5;
  end = end + 5;
  newsBlock = news.slice(start, end);
});

for (let el in news) {
  if (news[el].type === "audio") {
    const blog = document.createElement("div");
    const audio = document.createElement("audio");
    const audioSource = document.createElement("source");
    const blogDesc = document.createElement("div");
    madeBlock(blog, BLOG_WRAPPER, "blogs");
    madeBlock(audio, blog, "", "", "controls", "#");
    madeBlock(audioSource, audio, "", "", "src", "#");
    madeBlock(blogDesc, blog, "blogs-description", news[el].desc);
    navigateElements(blog, news[el].date);
  }

  if (news[el].type === "new") {
    const blog = document.createElement("div");
    const blogImg = document.createElement("div");
    const img = document.createElement("img");
    const dateImg = document.createElement("div");
    const heading = document.createElement("div");
    const blogDesc = document.createElement("div");
    madeBlock(blog, BLOG_WRAPPER, "blogs");
    madeBlock(blogImg, blog, "blogs-img");
    madeBlock(img, blogImg, "#", "", "src", news[el].img);
    madeBlock(dateImg, blogImg, "blogs-img-date", news[el].date);
    madeBlock(heading, blogImg, "blogs-img-heading", news[el].title);
    madeBlock(blogDesc, blog, "blogs-description", news[el].desc);
    navigateElements(blog, news[el].date);
  }

  if (news[el].type === "quote") {
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
      news[el].desc
    );

    navigateElements(blog, news[el].date);
  }
}
///////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////

// const 

