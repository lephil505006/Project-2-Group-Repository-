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

});
