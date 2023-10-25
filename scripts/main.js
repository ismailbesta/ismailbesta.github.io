const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/berserk1.webp") {
    myImage.setAttribute("src", "images/berserk3.jpeg");
  } else {
    myImage.setAttribute("src", "images/berserk1.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Berserk Deneyimim, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Berserk Deneyimim, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
