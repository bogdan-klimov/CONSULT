const BLOG_WRAPPER = document.getElementById("main-block-blog-wrapper");

for (let el in news) {

    if (news[el].type === "audio") {
			
        const blog = document.createElement("div");
        blog.classList.add("blogs");
        BLOG_WRAPPER.append(blog);

        const audio = document.createElement("audio");
        audio.setAttribute("controls", "#");
        blog.append(audio);

        const audioSource = document.createElement("source")
        audioSource.setAttribute("src", "#")
        audio.append(audioSource);

        const blogDesc = document.createElement('div');
        blogDesc.classList.add("blogs-description");
        blogDesc.innerText = news[el].desc;
        blog.append(blogDesc);

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
        shareDate.innerText = news[el].date;
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

    if (news[el].type === "new") {

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

        const blogDesc = document.createElement('div');
        blogDesc.classList.add("blogs-description");
        blogDesc.innerText = news[el].desc;
        blog.append(blogDesc);

        const actions = document.createElement("div");
        actions.classList.add("actions");
        blog.append(actions);

        const btn = document.createElement("a");
        btn.setAttribute("href", "#");
        btn.classList.add("button");
        btn.innerText = 'Read more';
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
        shareDate.innerText = news[el].date;
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
    
    if (news[el].type === "quote") {
        const blog = document.createElement("div");
        blog.classList.add("blogs");
        BLOG_WRAPPER.append(blog);

        const blueBlock = document.createElement("div");
        blueBlock.classList.add("blue-block");
        blog.append(blueBlock);

        const blueBlockWrapper = document.createElement("div");
        blueBlockWrapper.classList.add("blue-block-wrapper");
        blueBlock.append(blueBlockWrapper);

        const blueBlockWrapperText = document.createElement("p");
        blueBlockWrapperText.classList.add("blue-block-wrapper-text")
        blueBlockWrapperText.innerText = news[el].desc;
        blueBlockWrapper.append(blueBlockWrapperText);

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
        shareDate.innerText = news[el].date;
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

