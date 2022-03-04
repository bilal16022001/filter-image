// filter image
let ul = document.querySelectorAll("ul li")
let image = document.querySelectorAll(".images img")

ul.forEach(el => {
    image.forEach(img => {
        el.addEventListener("click", function (e) {
            ul.forEach(el => {
                el.classList.remove("active")
            })
            el.classList.add("active");

            if (el.dataset.filter == img.dataset.filter || el.dataset.filter == "all") {
                img.style.display = "flex";
            }
            else {
                img.style.display = "None";
            }
        })
    })
})




// let ul = document.querySelectorAll("ul li")
// let image = document.querySelectorAll(".images img")

// ul.forEach((el, index1) => {
//     image.forEach((img, index2) => {
//         if (index2 == 0) {
//             img.style.display = "flex"

//         } else {
//             img.style.display = "none"
//         }
//         el.addEventListener("click", function (e) {
//             if (index1 == index2) {
//                 img.style.display = "flex"
//             } else {
//                 img.style.display = "none"
//             }
//         })
//     })
// })


