// 1 chi masala
const click1 = document.getElementById("click1");
const p1 = document.getElementById("count");
let count = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0;
p1.textContent = count;
click1.addEventListener("click", () => {
    count++;
    p1.textContent = count;
    localStorage.setItem("count", count);
});

// 2 chi masala

const nameInput = document.getElementById("name1");
const saveName = document.getElementById("save1");
const savedName = document.getElementById("saved1");

if (localStorage.getItem("name")) {
    savedName.textContent = "Saqlangan ism: " + localStorage.getItem("name");
    nameInput.value = localStorage.getItem("name");
}

saveName.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    savedName.textContent = "Saqlangan ism: " + nameInput.value;
});

// 3 chi masala

const form1 = document.getElementById("Form1");
const name2 = document.getElementById("name2");
const email = document.getElementById("email");
const p2 = document.getElementById("p2");

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!name2.value || !email.value) {
        p2.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
        p2.style.color = "red";
    } else if (!email.value.includes("@")) {
        p2.textContent = "Email noto'g'ri!";
        p2.style.color = "orange";
    } else {
        p2.textContent = "Muvaffaqiyatli yuborildi!";
        p2.style.color = "green";
        name2.value = "";
        email.value = "";
    }
});

// 4 chi masala

const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    coords.textContent = `X: ${x}, Y: ${y}`;
});

box.addEventListener("mouseleave", () => {
    coords.textContent = "Tashqaridaman";
});

// 5 chi masala

const uzBtn = document.getElementById("uzBtn");
const enBtn = document.getElementById("enBtn");
const text = document.getElementById("text");

const savedLang = localStorage.getItem("lang");
if (savedLang === "uz") {
    text.textContent = "Salom, xush kelibsiz!";
} else if (savedLang === "en") {
    text.textContent = "Hello, welcome!";
}

uzBtn.addEventListener("click", () => {
    text.textContent = "Salom, xush kelibsiz!";
    localStorage.setItem("lang", "uz");
});
enBtn.addEventListener("click", () => {
    text.textContent = "Hello, welcome!";
    localStorage.setItem("lang", "en");
});
