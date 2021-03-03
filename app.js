$(document).ready(() => {
  let quotes = [
    {
      quote:
        "'If you don't produce, you won't thrive-no matter how skilled or talented you are'",
      author: "-- Cal Newport",
    },
    {
      quote: "'You can't steer a parked car'",
      author: "-- unknown",
    },
    {
      quote:
        "'You wasted $150,000 on an education you coulda got for $1.50 in late fees at the public library.'",
      author: "-- Will Hunting",
    },
    {
      quote: "'Do what you can, with what you have, where you are.'",
      author: "-- Theodore Roosevelt",
    },
    {
      quote:
        "'Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. ",
      author: "-- Richard P. Feynman",
    },
    {
      quote:
        "'Failure is unimportant. It takes courage to make a fool of yourself.'",
      author: "-- Charlie Chaplin",
    },
    {
      quote:
        "'Someone's sitting in the shade today because someone planted a tree a long time ago'",
      author: "-- Warren Buffet",
    },
    {
      quote: "'Once I made a decision, I never thought about it again.'",
      author: "-- Michael Jordan",
    },
    {
      quote: "'We first make our habits, and then our habits make us.'",
      author: "-- John Dryden",
    },
    {
      quote: "'If you fight for your limitations, you get to keep them'",
      author: "-- Jim Kwik",
    },
    {
      quote:
        "'It does not matter how slowly you go as long as you do not stop'",
      author: "-- Confucious",
    },
  ];
  let colors = [
    "#66ccff",
    "#cc6699",
    "#ff9966",
    "#ff33cc",
    "#9966ff",
    "#42d1f5",
    "#00fc8f",
    "#33cc33",
    "#3366ff",
    "#6666ff",
  ];

  const updateQuote = () => {
    let index = Math.floor(Math.random() * Math.floor(quotes.length));
    let quote = `${quotes[index].quote}`;
    let author = `${quotes[index].author}`;
    let string = `${quote} ${author}`;
    let urlString = encodeURIComponent(string.trim());
    $("#text").fadeOut(200, () => {
      $("#text").text(quote).fadeIn(400);
    });

    $("#author").fadeOut(200, () => {
      $("#author").text(author).fadeIn(400);
    });
    $("#tweet-quote").attr(
      "href",
      `https://twitter.com/intent/tweet?text=${urlString}`
    );
  };

  const updateColors = () => {
    let index = Math.floor(Math.random() * Math.floor(colors.length));
    let randomColor = colors[index];
    $("#text, #author").animate({
      color: randomColor,
    });

    $("body, button, svg").animate({
      "background-color": randomColor,
    });
  };

  const handleClick = () => {
    updateColors();
    updateQuote();
  };

  $("#new-quote").click(handleClick);
  handleClick();
});
