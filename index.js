import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList = "flex-ctr";
//Part 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList = "flex-around";
//Part 3

const aEl = document.createElement("ul");
//Listed without bullets
topMenuEl.appendChild(aEl);
// attaches to the navigation bar
menuLinks.forEach((links) => {
  const link = document.createElement("li");
  link.style.display = "inline";
  link.style.margin = "15px";

  const aLink = document.createElement("a");
  aLink.textContent = links.text.toUpperCase();
  aLink.setAttribute("src", links.href);
  aEl.appendChild(link);
  link.appendChild(aLink);
});

console.log("Part 3");
//creating new <nav> element
const newNav = document.createElement("nav");

//finding the header element
const header = document.querySelector("header");
// adding the element inside of the header parent node and appending or attaching as the last child element
header.appendChild(newNav);
newNav.setAttribute("id", "sub-menu");
//cache sub-menu
const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
// set height to 100%
subMenuEl.style.height = "100%";
//set background color to --sub-menu-bg
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//add classList = flex-around
subMenuEl.classList.add("flex-around");
// add style.position = absolute
subMenuEl.style.position = "absolute";
// add style top = 0
subMenuEl.style.top = "0%";

console.log("Part 4");
// first we can find all the "a" using the query selector all
const allLinks = document.querySelectorAll("a");

console.log(allLinks);
//compared to the ones we found you can see below we have assigned all "a" links to the topMenuLinks
// using forEach to cache all "a" links
const topMenuLinks = topMenuEl.getElementsByTagName("a");
console.log(topMenuLinks);
// add an event listner "click"
topMenuEl.addEventListener("click", (event) => {
  //preventDefault added below
  event.preventDefault();
  const target = event.target;
  if (target.tagName !== "a") {
    return;
  }
  document.querySelector(".example2 .active")?.classList.remove("active");
  navLink.classList.add("active");
  // } else {
  //   target.classList.remove("active");
  // }
});
