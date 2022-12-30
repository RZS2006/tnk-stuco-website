const quoteCardContainer = document.querySelector("#quote-card-container");
const quoteCardTemplate = document.querySelector("#quote-card-template");

const minQuotesize = 280;
const gridGap = 16;
const containerWidth = quoteCardContainer.clientWidth;
const columnNumber = Math.floor(
  (containerWidth + gridGap) / (minQuotesize + gridGap)
);

fetch("/data/quotes.json")
  .then((res) => res.json())
  .then((quotes) => {
    quotes.forEach((quote, idx) => {
      const { content, cite } = quote;

      const delay = (idx % columnNumber) * 50;

      const quoteClone = quoteCardTemplate.content.cloneNode(true);
      quoteClone
        .querySelector("#quote-card")
        .setAttribute("data-aos-delay", delay);
      quoteClone.querySelector("#quote-content").innerText = content;
      quoteClone.querySelector(
        "#quote-cite"
      ).innerText = `${cite.name} (${cite.class})`;

      quoteCardContainer.appendChild(quoteClone);
    });
  });
