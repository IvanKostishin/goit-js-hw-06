const textInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${textInput.addEventListener.currentTarget.value}px`;
textInput.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
);