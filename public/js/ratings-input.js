const btn = document.querySelector("button");
const post = document.querySelector(".ratings-post");
const widget = document.querySelector(".star-widget");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";

    }

return false;
