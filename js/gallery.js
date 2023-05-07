const popup = document.getElementById("popup");
const popupExit = document.querySelector("#popup a");
const popupVideo = document.querySelector("#popup-content video");
const popupContent = document.querySelector("#popup-content");

function openPopup(type, src)
{
    if (type === "video")
    {
        popupVideo.style.display = "";
        const source = document.createElement("source");
        source.src = src;
        popupVideo.appendChild(source);
    }
    else if (type === "image")
    {
        popupVideo.style.display = "none";
        const img = document.createElement("img");
        img.src = src;
        popupContent.appendChild(img);
    }

    popup.style.display = "flex";
}

function exitPopup()
{
    const vidSource = document.querySelector("#popup-content video source");
    if (vidSource) vidSource.remove();
    popupVideo.display = "none";

    const img = document.querySelector("#popup-content img");
    console.log(img);
    if (img) img.remove();

    popup.style.display = "none";
}

popupExit.addEventListener("click", exitPopup);