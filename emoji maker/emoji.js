
const emojiTitle = ["Select Color", "Select Eye", "Select Mouth"];
const skinTypes = ["assets/skin/green.png", "assets/skin/yellow.png", "assets/skin/red.png"]
const eyeTypes = ["assets/eyes/closed.png", "assets/eyes/laughing.png", "assets/eyes/long.png",
    "assets/eyes/normal.png", "assets/eyes/rolling.png", "assets/eyes/winking.png"];
const mouthTypes = ["assets/mouth/open.png", "assets/mouth/sad.png", "assets/mouth/smiling.png",
    "assets/mouth/straight.png", "assets/mouth/teeth.png"]

const emojiShow = document.getElementsByClassName("emoji--view")[0];
const emojiUpper = document.getElementsByClassName("upper-view")[0];
const emojiLower = document.getElementsByClassName("lower-view")[0];
const toMouthEyeCard = document.getElementsByClassName("fa-chevron-left")[0];
const toEyeMouthCard = document.getElementsByClassName("fa-chevron-right")[0];
const skinSelection = Array.from(document.getElementsByClassName("skin"));
const itemPlacement = document.getElementsByClassName("list-choice")[0];
const title = document.getElementsByClassName("emoji-type")[0];
const firstBackArrow = document.getElementsByClassName("fa-chevron-left")[0];
const selectedSkin = Array.from(document.getElementsByClassName("skin"));
const selectedEye = Array.from(document.getElementsByClassName("eye"));
const selectedMouth = Array.from(document.getElementsByClassName("mouth"));

firstBackArrow.style.display = "none";
title.innerText = emojiTitle[0];

skinSelection.forEach((item, index) => {
    item.style.display = "inline";
    item.style.backgroundImage = `url(${skinTypes[index]}`;
    item.style.backgroundSize = "cover";
    item.style.cursor = "pointer";
})

toEyeMouthCard.addEventListener("click", () => {
    const listItemSkin = Array.from(document.getElementsByClassName("skin"));
    const listItemEye = Array.from(document.getElementsByClassName("eye"));
    const listItemMouth = Array.from(document.getElementsByClassName("mouth"));
    firstBackArrow.style.display = "inline";
    if (toEyeMouthCard.getAttribute("class").includes("toEye")) {
        title.innerText = emojiTitle[1];
        listItemSkin.forEach(element => {
            element.style.display = "none";
        });
        listItemEye.forEach((item, index) => {
            item.style.display = "inline";
            item.style.backgroundImage = `url(${eyeTypes[index]}`;
            item.style.backgroundSize = "cover";
            item.style.backgroundColor = "yellow";
            item.style.cursor = "pointer";
        });
        toMouthEyeCard.className = "fas fa-chevron-left toSkin";
        toEyeMouthCard.className = "fas fa-chevron-right toMouth"
    }
    else if (toEyeMouthCard.getAttribute("class").includes("toMouth")) {
        title.innerText = emojiTitle[2];
        listItemEye.forEach(element => {
            element.style.display = "none";
        });
        listItemMouth.forEach((item, index) => {
            item.style.display = "inline";
            item.style.backgroundImage = `url(${mouthTypes[index]}`;
            item.style.backgroundSize = "cover";
            item.style.backgroundColor = "yellow";
            item.style.cursor = "pointer";
        });
        toEyeMouthCard.style.display = "none";
        toMouthEyeCard.style.display = "inline";
        toMouthEyeCard.className = "fas fa-chevron-left toEye"
    }

});

toMouthEyeCard.addEventListener("click", () => {
    const listItemSkin = Array.from(document.getElementsByClassName("skin"));
    const listItemEye = Array.from(document.getElementsByClassName("eye"));
    const listItemMouth = Array.from(document.getElementsByClassName("mouth"));
    console.log(toMouthEyeCard.getAttribute("class").includes("toSkin"))
    if (toMouthEyeCard.getAttribute("class").includes("toEye")) {
        console.log("may")
        title.innerText = emojiTitle[1];
        listItemMouth.forEach(element => {
            element.style.display = "none";
        });
        listItemEye.forEach((item, index) => {
            item.style.display = "inline";
            item.style.backgroundImage = `url(${eyeTypes[index]}`;
            item.style.backgroundSize = "cover";
            item.style.backgroundColor = "yellow";
            item.style.cursor = "pointer";
        });
        toEyeMouthCard.className = "fas fa-chevron-right toMouth"
        toMouthEyeCard.className = "fas fa-chevron-left toSkin"
        toMouthEyeCard.style.display = "inline";
        toEyeMouthCard.style.display = "inline";
    }
    else if (toMouthEyeCard.getAttribute("class").includes("toSkin")) {
        console.log("skin")
        title.innerText = emojiTitle[0];
        listItemEye.forEach(element => {
            element.style.display = "none";
        });
        listItemSkin.forEach((item, index) => {
            item.style.display = "inline";
            item.style.backgroundImage = `url(${skinTypes[index]}`;
            item.style.backgroundSize = "cover";
            item.style.cursor = "pointer";
        });
        toMouthEyeCard.style.display = "none";
        toEyeMouthCard.style.display = "inline";
        toEyeMouthCard.className = "fas fa-chevron-right toEye"
    }

});

selectedSkin.forEach((item) => {
    item.addEventListener("click", () => {
        emojiShow.style.backgroundImage = `${item.style.backgroundImage}`;
        emojiShow.style.backgroundSize = "cover";

    })
});

selectedEye.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.style.backgroundImage.slice(5, item.style.backgroundImage.length - 2))
        emojiUpper.src = `${item.style.backgroundImage.slice(5, item.style.backgroundImage.length - 2)}`;
        emojiUpper.style.display = "inline";
        console.log(emojiUpper);
    })
});

selectedMouth.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.style.backgroundImage.slice(5, item.style.backgroundImage.length - 2))
        emojiLower.src = `${item.style.backgroundImage.slice(5, item.style.backgroundImage.length - 2)}`;
        emojiLower.style.display = "inline";
        console.log(emojiLower);
    })
});

//     const temp = document.getElementsByClassName("list--item");
//     list = temp;
//     // console.log(document.getElementsByClassName("list--item"));
// }

//     else if (listItems[0].getAttribute("class").includes("eye")) {
//         title.innerText = emojiTitle[2];
//         listItems.forEach(element => {
//             listItemsPlacement.removeChild(element)
//         });
//         mouthTypes.forEach(path => {
//             let item = document.createElement("div");
//             item.setAttribute("class", "list--item mouth");
//             item.style.backgroundImage = `url(${path})`;
//             item.style.backgroundColor = "yellow";
//             item.style.backgroundSize = "cover";
//             item.style.cursor = "pointer";
//             listItemsPlacement.appendChild(item);
//         });
//         const temp = document.getElementsByClassName("list--item");
//         list = temp;
//     }

// });
// skinTypes.forEach(path => {
//     let item = document.createElement("div");
//     item.setAttribute("class", "list--item skin");
//     item.style.backgroundImage = `url(${path})`;
//     item.style.backgroundSize = "cover";
//     item.style.cursor = "pointer";
//     itemPlacement.appendChild(item);
// });

// let list = Array.from(document.getElementsByClassName("list--item"));

    // const listItems = Array.from(document.getElementsByClassName("list--item"));
    // const listItemsPlacement = document.getElementsByClassName("list-choice")[0];
//     // firstBackArrow.style.display = "inline";
//     // console.log(listItems[0].getAttribute("class").includes("skin"));
//     if (listItems[0].getAttribute("class").includes("mouth")) {
//         title.innerText = emojiTitle[1];
//         listItems.forEach(element => {
//             listItemsPlacement.removeChild(element);
//         });
//         eyeTypes.forEach(path => {
//             let item = document.createElement("div");
//             item.setAttribute("class", "list--item eye");
//             item.style.backgroundImage = `url(${path})`;
//             item.style.backgroundColor = "yellow";
//             item.style.backgroundSize = "cover";
//             item.style.cursor = "pointer";
//             listItemsPlacement.appendChild(item);
//         });
//         const temp = document.getElementsByClassName("list--item");
//         list = temp;
//         // console.log(document.getElementsByClassName("list--item"));
//     }

//     else if (listItems[0].getAttribute("class").includes("eye")) {
//         title.innerText = emojiTitle[0];
//         firstBackArrow.style.display = "none";
//         listItems.forEach(element => {
//             listItemsPlacement.removeChild(element)
//         });
//         skinTypes.forEach(path => {
//             let item = document.createElement("div");
//             item.setAttribute("class", "list--item skin");
//             item.style.backgroundImage = `url(${path})`;
//             item.style.backgroundSize = "cover";
//             item.style.cursor = "pointer";
//             listItemsPlacement.appendChild(item);
//         });
//         const temp = document.getElementsByClassName("list--item");
//         list = temp;
//     }

// });
// const eye = document.getElementsByClassName("eye");
// console.log(eye);
// itemPlacement.childNodes.forEach(event => {
//     event.addEventListener("click", () => {
//         console.log(event)
//         if (event.getAttribute("class").includes("eye")) {
//             let str = event.getAttribute("style");
//             eyeTypes.forEach(path => {
//                 if (str.includes(path)) {
//                     emojiShow.style.backgroundImage = `url(${path})`;
//                     emojiShow.style.backgroundSize = "cover";
//                 }
//             });
//         }
//     });
// });
