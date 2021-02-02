const pc_header = document.querySelectorAll(".product-configuration-header"),
    pc_HeaderTabs = document.querySelectorAll(".product-configuration-header-tab"),
    colorCards = document.querySelectorAll(".color-card"),
    wheelCards = document.querySelectorAll(".exterior-content .general-card"),
    interiorCards = document.querySelectorAll(".interior-content .general-card"),
    modelCards = document.querySelectorAll(".model-card"),
    span = document.querySelectorAll(".span"),
    tabfooterForwardButtons = document.querySelectorAll(".tab-footer-btn"),
    tabFooterPreviousLinks = document.querySelectorAll(".tab-footer-a"),
    carouselImage = document.querySelector(".carousel-item"),
    carouselIndicators = document.querySelectorAll(".indicators"),
    estPrice = document.querySelectorAll(".estPrice"),
    toggleScreenBtn = document.querySelector(".toggleScreenBtn"),
    mainProductConfiguration = document.querySelector(".main-content-product-configuration"),
    mainHeader = document.querySelector(".main-header"),
    mainProductImages = document.querySelector(".main-content-img"),
    thumbnails = document.querySelectorAll(".thumbnail"),
    labels = document.querySelectorAll(".labels"),
    inputs = document.querySelectorAll(".inputs"),

    configureImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000291_vv00000370@1024x576.driver.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000370@1024x576.backseats.webp"
    ],

    exteriorImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000370@1024x576.backseats.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000291_vv00000370@1024x576.driver.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp"
    ],

    interiorImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000291_vv00000370@1024x576.driver.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000238_vv00000370@1024x576.backseats.webp"
    ],

    colorImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.rear.webp"
    ],

    wheelImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.side.webp"
    ],

    interiorColorImages = [
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp",
        "https://rivian.com/compimg/r1t/1.3/us/vv00000291_vv00000367_vv00000544@2048x1792.front.webp"
    ],

    modelImages = {
        md1: configureImages,
        md2: colorImages
    },

    colorclickImages = {
        c0: colorImages,
        c1: wheelImages,
        c2: interiorColorImages,
        c3: wheelImages,
        c4: interiorColorImages
    },

    wheelClickImages = {
        w0: wheelImages,
        w1: colorImages,
        w2: interiorColorImages,
        w3: wheelImages
    },

    interiorClickedImages = {
        i0: interiorColorImages,
        i1: colorImages,
        i2: wheelImages
    },

    model = {
        id1: "model",
        id2: "modelPrice",
        className: ".model-card",
        data: {
            m1: { name: "Model A", price: 50000 },
            m2: { name: "Model B", price: 55000 }
        }
    },

    exteriorColors = {
        id1: "exteriorColor",
        id2: "exteriorColorPrice",
        className: ".tab-exterior-color-cards",
        data: {
            c0: { name: "Silver", price: 1500 },
            c1: { name: "Black", price: 2500 },
            c2: { name: "White", price: 2000 },
            c3: { name: "Gray", price: 1800 },
            c4: { name: "Blue", price: 1200 }
        }
    },

    wheels = {
        id1: "wheel",
        id2: "wheelPrice",
        className: ".exterior-content .tab-general-cards",
        data: {
            w0: { name: '20" Wheel 1', price: 1100 },
            w1: { name: '21" Wheel 2', price: 2000 },
            w2: { name: '22" Wheel 3', price: 1300 },
            w3: { name: '23" Wheel 4', price: 1500 }
        }
    },

    interiorColors = {
        id1: "interiorColor",
        id2: "interiorColorPrice",
        className: ".interior-content",
        data: {
            i0: { name: "Black Mountain", price: 1100 },
            i1: { name: "Ocean Coast", price: 2000 },
            i2: { name: "Forest Edge", price: 1300 }
        }
    };

let price = 0,
    screenToggled = false,
    toggledAt = "",
    selectedBgImages = [];


function addClassOnClick(arr, className) {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        arr[i].addEventListener("click", function () {
            removeClass(arr, className);
            this.classList.add(className);
            if (className === "selected") {
                showTabOnClick(i);
            }
            if (arr === colorCards) {
                selectedBgImages = colorclickImages[this.id];
                updatePurchaseInfo(exteriorColors);
            }
            if (arr === wheelCards) {
                selectedBgImages = wheelClickImages[this.id];
                updatePurchaseInfo(wheels);
            }
            if (arr === interiorCards) {
                selectedBgImages = interiorClickedImages[this.id];
                updatePurchaseInfo(interiorColors);
            }
            if (arr === modelCards) {
                selectedBgImages = modelImages[this.id];
                removeClass(span, "card-selected");
                const el = document.querySelector(".model-card-selected").childNodes[1];
                el.classList.add("card-selected");
                updatePurchaseInfo(model);
            }
            if (arr === thumbnails) {
                carouselImage.style.backgroundImage = "url(" + selectedBgImages[i] + ")";
            }
            if (arr === inputs) {
                labels[i].classList.remove("typeA");
                labels[i].classList.add("typeB");
                this.classList.add("inputIsFocused");
            }
        }
        )
    }
}

function addClass(arr, className) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add(className);
    };
};

function removeClass(arr, className) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(className);
    };
};

function hideTabContent() {
    const currentTab = document.getElementsByClassName("product-configuration-tab")[0];
    currentTab.classList.remove("product-configuration-tab");
    currentTab.classList.add("product-configuration-ta");
}

function showTabContent(id) {
    hideTabContent();
    const element = document.getElementById(id);
    element.classList.add("product-configuration-tab");
    element.classList.remove("product-configuration-ta");
    determinebackgroundImages(id, setBackgoundImages);
    document.getElementById(id).scrollTo(0, 0);
    document.querySelector(".main-content-product-configuration").scrollTo(0, 0);
    determinebackgroundImages(id, changeImageOnClick);
}

function showTabOnClick(index) {
    switch (index) {
        case 0:
            $("#slider").css('transform', 'translate(0,0)');
            showTabContent("01");
            break;
        case 1:
            $("#slider").css('transform', 'translate(110%,0)');
            showTabContent("02");
            break;
        case 2:
            $("#slider").css('transform', 'translate(218%,0)');
            showTabContent("03");
            break;
        case 3:
            $("#slider").css('transform', 'translate(328%,0)');
            showTabContent("04");
            break;
        default:
            break;
    }
}


function footerComponentsFunction(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", function () {
            removeClass(pc_HeaderTabs, "selected");
            if (this.id === "b1" || this.id === "p3") {
                showTabContent("02");
                pc_HeaderTabs[1].classList.add("selected");
                $("#slider").css('transform', 'translate(110%,0)');
            }
            if (this.id === "b2" || this.id === "p4") {
                showTabContent("03")
                pc_HeaderTabs[2].classList.add("selected");
                $("#slider").css('transform', 'translate(218%,0)');
            }
            if (this.id === "b3") {
                showTabContent("04");
                pc_HeaderTabs[3].classList.add("selected");
                $("#slider").css('transform', 'translate(328%,0)');
            }
            if (this.id === "p2") {
                showTabContent("01");
                pc_HeaderTabs[0].classList.add("selected");
                $("#slider").css('transform', 'translate(0,0)');
            }
            if (this.id === "b4") {
                $("#05").css("display", "block");
                document.getElementById("05").scrollTo(0, 0);
                $("#01,#02,#03,#04,.carousel-indicators,.product-configuration-header,.product-configuration-footer").addClass("noDisplay");
                $(".main-header").css("border-bottom", " 0.1rem solid rgb(240, 241, 240)")
                $(".main-header-nav a").css("color", "black");
                toggleScreenBtn.style.display = "none";
                $("body").css("backgroundColor", "white");
                addClassOnClick(inputs, "s");
                $("#back").click(function () {
                    showTabContent("04");
                    $("#05").css("display", "none");
                    toggleScreenBtn.style.display = "block";
                    $("#01,#02,#03,#04,.carousel-indicators,.product-configuration-header,.product-configuration-footer").removeClass("noDisplay");
                    $(".main-header-nav a").css("color", "white");
                    $(".main-header").css("border-bottom", " 0.1rem solid rgb(36,36,36)")
                    $("body").css("backgroundColor", "rgb(21,21,21)");

                })
            }
        })
    }
}


function updatePurchaseInfo(dataObj) {
    const name = document.getElementById(dataObj.id1);
    const priceObj = document.getElementById(dataObj.id2);
    const data = dataObj.data[document.querySelector(dataObj.className + " .card-selected").id];
    price += data.price;
    name.textContent = data.name;
    if (data.price === null) {
        priceObj.textContent = "Included";
    }
    else {
        priceObj.textContent = "$" + data.price;
    }
    updateTotalPrice();
    setBackgoundImages(selectedBgImages);
    changeImageOnClick(selectedBgImages);
}

function determinebackgroundImages(id, func) {
    switch (id) {
        case "01":
            selectedBgImages = configureImages;
            func(selectedBgImages);
            break;
        case "02":
            selectedBgImages = exteriorImages;
            func(selectedBgImages);
            break;
        case "03":
            selectedBgImages = interiorImages;
            func(selectedBgImages);
            break;
        default:
            selectedBgImages = configureImages;
            func(selectedBgImages);
            break;
    }
}

function setBackgoundImages(arr) {
    removeClass(carouselIndicators, "active");
    carouselImage.style.backgroundImage = "url(" + arr[0] + ")";
    carouselIndicators[0].classList.add("active");
    for (let j = 0; j < thumbnails.length; j++) {
        thumbnails[j].style.backgroundImage = "url(" + selectedBgImages[j] + ")";
    }
}
function changeImageOnClick(arr) {
    for (let i = 0; i < carouselIndicators.length; i++) {
        carouselIndicators[i].addEventListener("click", function () {
            removeClass(carouselIndicators, "active");
            this.classList.add("active");
            carouselImage.style.backgroundImage = "url(" + arr[i] + ")";
        })
    }
    for (let j = 0; j < thumbnails.length; j++) {
        thumbnails[j].style.backgroundImage = "url(" + selectedBgImages[j] + ")";
    }
}

function updateTotalPrice() {
    const selectedModel = document.querySelector(".model-card .card-selected");
    const selectedColor = document.querySelector(".tab-exterior-color-cards .card-selected");
    const selectedWheel = document.querySelector(".exterior-content .tab-general-cards .card-selected");
    const selectedInteriorColor = document.querySelector(".interior-content .card-selected");
    price = model.data[selectedModel.id].price + exteriorColors.data[selectedColor.id].price + wheels.data[selectedWheel.id].price + interiorColors.data[selectedInteriorColor.id].price;
    for (let i = 0; i < estPrice.length; i++) {
        estPrice[i].textContent = "$" + price;
    }
}

function toggleScreen() {
    toggleScreenBtn.addEventListener("click", function () {
        screenToggled = !screenToggled;
        if (screenToggled) {
            toggleScreenBtn.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgMTJoNnY2TTE4IDhoLTZWMm03LTFsLTcgN20tNCA0bC03IDciIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)";
        }
        else {
            toggleScreenBtn.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMjAuMDIzSDFWMTMuOTZNMTMgMS44MzVoNnY2LjA2M20wLTYuMDYxTDEyIDguOTFtLTQgNC4wNGwtNyA3LjA3MyIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)";
        }
        imageFullScreen();
    })
}


function imageFullScreen() {
    if (screenToggled & screen.width > 1399) {
        $("#01,#02,#03,#04,.product-configuration-header,.main-header").addClass("noDisplay");
        $(".product-configuration-footer").addClass("footerAtScreenToggle");
        $(".product-configuration-footer").css("right", "0");
        mainProductImages.classList.add("atScreenToggle");
    }
    else if (screenToggled & screen.width < 1400) {
        toggledAt = "1399";
        removeClass(thumbnails, "noDisplay");
        $(".main-content").addClass("screenToggleBelow1399Main");
        $(".main-content").css("padding", "15px");
        $(".main-content-product-configuration,.carousel-indicators,.main-header").addClass("noDisplay");
        $(".carousel-item").addClass("screenToggleBelow1399Carousel");
        $(".carousel-item").remove("carousel-item");
        $(".carousel-inner").addClass("screenToggleBelow1399Img");
        $("carousel-inner").remove("carousel-inner");
        $(".carousel").css("overflow", "initial");
        mainProductImages.classList.add("screenToggleBelow1399Img");
        mainProductImages.classList.remove("main-content-img")
    }
    else if (toggledAt === "1399") {
        addClass(thumbnails, "noDisplay");
        $(".main-content").removeClass("screenToggleBelow1399Main");
        $(".main-content").css("padding", "0px");
        $(".main-content-product-configuration,.carousel-indicators,.main-header").removeClass("noDisplay");
        $(".carousel-item").removeClass("screenToggleBelow1399Carousel");
        $(".carousel-item").addClass("carousel-item");
        $(".carousel-inner").removeClass("screenToggleBelow1399Img");
        $("carousel-inner").add("carousel-inner");
        $(".carousel").css("overflow", "hidden");
        mainProductImages.classList.remove("screenToggleBelow1399Img");
        mainProductImages.classList.add("main-content-img");
    }
    else {
        $("#01,#02,#03,#04,.carousel-indicators,.product-configuration-header,.main-header").removeClass("noDisplay");
        $(".product-configuration-footer").removeClass("footerAtScreenToggle");
        $(".product-configuration-footer").css("right", "28%");
        mainProductImages.classList.remove("atScreenToggle");
    }
}

if (screen.width < 1400) {
    addClass(thumbnails, "noDisplay");
}

addClassOnClick(pc_HeaderTabs, "selected");
addClassOnClick(colorCards, "card-selected");
addClassOnClick(wheelCards, "card-selected");
addClassOnClick(interiorCards, "card-selected");
addClassOnClick(modelCards, "model-card-selected");
footerComponentsFunction(tabfooterForwardButtons);
footerComponentsFunction(tabFooterPreviousLinks);
determinebackgroundImages("01", changeImageOnClick);
toggleScreen();
addClassOnClick(thumbnails, "thumbnail-selected");
