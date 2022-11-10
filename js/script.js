document.querySelectorAll(".slideshow").forEach(slideshow => {
    const items = slideshow.querySelectorAll(".slideshow_item");
    const buttonsHtml = Array.from(items, () =>  {
        return `<span class="slideshow_button"></span>`;
});

slideshow.insertAdjacentHTML("beforeend", `
    <div class="slideshow_nav">
    ${buttonsHTML.join("") }
    </div>
`);
    const bnuttons = slideshow.querySelectorAll(".slideshow_button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //unslect the buttons and item selected 
            items.forEach(item => item.classList.remove("slideshow_item--selected"));
            buttons.forEach(button => button.classList.remove("slideshow_button--slected"))
            
            items[i].classList.add("slideshow_item--selectd");
            button.classList.add("slideshow_button--selected"); 
        });
    });
});
