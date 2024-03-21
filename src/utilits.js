import ReactDOM from "react-dom";
const preloader_ = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

//   function mouseEvent(element) {
//     ReactDOM.findDOMNode(element).addEventListener("mouseenter", function () {
//       e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
//     });
//     ReactDOM.findDOMNode(element).addEventListener("mouseleave", function () {
//       e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
//     });
//   }
//   if (myCursor.length) {
//     if (document.body) {
//       let n,
//         i = 0,
//         o = !1;
//       (window.onmousemove = function (s) {
//         // console.log(document.querySelector(this));
//         o ||
//           (t.style.transform =
//             "translate(" + s.clientX + "px, " + s.clientY + "px)"),
//           (e.style.transform =
//             "translate(" + s.clientX + "px, " + s.clientY + "px)"),
//           (n = s.clientY),
//           (i = s.clientX);
//       }),
//         document.body.addEventListener(
//           "mouseenter",
//           // "a,.kura_tm_topbar .trigger, .cursor-pointer",
//           function () {
//             let a = document.querySelectorAll("a");
//             e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

//             for (let i = 0; i < a.length; i++) {
//               const element = a[i];
//               mouseEvent(element);
//             }

//             hamburger && mouseEvent(hamburger);
//             kura_tm_topbar && mouseEvent(kura_tm_topbar);
//             pointer && mouseEvent(pointer);
//           }
//         ),
//         (e.style.visibility = "visible"),
//         (t.style.visibility = "visible");
//     }
//   }
};

export const preloader = () => {
  preloader_();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 3000);
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    ReactDOM.findDOMNode(a).addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};
// Data image
export const dataImage = () => {
  let d = document.querySelectorAll("[data-img-url");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-img-url"
    )})`;
  }
};

export const imgToSVG = () => {
  document.querySelectorAll("img.svg").forEach((el) => {
    const imgID = el.getAttribute("id");
    const imgClass = el.getAttribute("class");
    const imgURL = el.getAttribute("src");

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/html");
        let svg = xmlDoc.querySelector("svg");

        if (typeof imgID !== "undefined") {
          svg.setAttribute("id", imgID);
        }

        if (typeof imgClass !== "undefined") {
          svg.setAttribute("class", imgClass + " replaced-svg");
        }

        svg.removeAttribute("xmlns:a");
        if (el.parentNode) {
          el.parentNode.replaceChild(svg, el);
        }
      });
  });
};

export const activeSection = (value) => {
  const sections = document.querySelectorAll(".edrea_tm_section");
  sections.forEach((section) => {
    let id = section.getAttribute("id");
    if (id == value) {
      section.className = "edrea_tm_section active wow animated fadeInUp";
    } else {
      section.className = "edrea_tm_section hidden animated";
    }
  });
};

export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___"),
    triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top,
      boxElement = box.getElementsByClassName("bar"),
      label = box.getElementsByClassName("label"),
      number = box.getElementsByClassName("number"),
      boxItem = boxElement[0],
      pWidth = box.getAttribute("data-value"),
      pColor = box.getAttribute("data-color");
    console.log(boxElement);
    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      label[0].classList.add("opened");
      number[0].style.right = `${100 - pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor =
        pColor;
    } else {
      boxItem.classList.remove("open");
      label[0].classList.remove("opened");
      number[0].style.right = `${120}%`;
    }
  });
};

export const scrollSection = () => {
  const sections = document.querySelectorAll(".orido_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

  navLi.forEach((li) => {
    if (current !== null) {
      li.classList.remove("current");
    }
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });

  hashtag();
};
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".orido_tm_header");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const scrollTop = () => {
  var bar = document.querySelector(".progressbar");
  var line = document.querySelector(".progressbar .line");
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var winScroll = window.scrollY;
  var value = (winScroll / (documentHeight - windowHeight)) * 100;
  var position = value;
  if (winScroll > 100) {
    bar.classList.add("animate");
    line.style.height = position + "%";
  } else {
    bar.classList.remove("animate");
  }
};

// demo
export const filter_hashtag = () => {
  const ccc = document.querySelector(
    ".orido_tm_informations .right .filter .ccc"
  );
  const current = document.querySelector(
    ".orido_tm_informations .right .filter .current"
  );
  const a = document.querySelectorAll(
    ".orido_tm_informations .right .filter a"
  );
  const filter = document.querySelector(
    ".orido_tm_informations .right .filter"
  );
  a.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      currentLinkFilter(ccc, e);
    });
  });
  filter.addEventListener("mouseleave", () => {
    currentLinkFilter(ccc, current);
  });
  currentLinkFilter(ccc, current);
};

function currentLinkFilter(ccc, e) {
  if (!e) {
    return false;
  }
  var left = e.offsetLeft;
  var width = e.offsetWidth + 80;
  var menuleft = document.querySelector(
    ".orido_tm_informations .right .filter"
  ).offsetLeft;
  ccc.style.left = left - menuleft - 40 + "px";
  ccc.style.width = width + "px";
  // ccc.css({ left: left - menuleft - 40 + "px", width: width + "px" });
}
export const hashtag_ = () => hashtag();
const hashtag = () => {
  const ccc = document.querySelector(".orido_tm_header .menu .ccc");
  const current = document.querySelector(".orido_tm_header .menu .current a");
  currentLink(ccc, current);
};
function currentLink(ccc, e) {
  if (!e) {
    return false;
  }
  var left = e.offsetLeft;
  var width = e.offsetWidth;
  ccc.style.left = left + "px";
  ccc.style.width = width + "px";
}

export const Servicehashtag = () => {
  const ccc = document.querySelector(".orido_tm_service .ccc");
  const current = document.querySelector(".orido_tm_service .current");
  const a = document.querySelectorAll(".orido_tm_service .service_list ul li");
  const filter = document.querySelector(".orido_tm_service .service_list");

  a.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      currentLinkService(ccc, e);
    });
  });
  filter.addEventListener("mouseleave", () => {
    currentLinkService(ccc, current);
  });
  currentLinkService(ccc, current);
};
const getSiblings = (node) =>
  [...node.parentNode.children].filter((c) => c !== node);

function currentLinkService(ccc, e) {
  if (!e) {
    return false;
  }
  let siblings = getSiblings(e);
  siblings.forEach((element) => {
    element.classList.remove("current");
  });
  e.classList.add("current");
  var topOff = e.offsetTop;
  var height = e.offsetHeight;
  ccc.style.top = topOff + "px";
  ccc.style.height = height + "px";
}
