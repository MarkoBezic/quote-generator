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
      author: "-- Confucius",
    },
    {
      quote:
        "'It’s not how far you fall, but how high you bounce that counts.'",
      author: "-- Zig Ziglar",
    },
    {
      quote: "'Failure isn't fatal, but failure to change might be'",
      author: "-- John Wooden",
    },
    {
      quote:
        "'Do not think that what is hard for you to master is humanly impossible; and if it is humanly possible, consider it to be within your reach.'",
      author: "-- Marcus Aurelius",
    },
    {
      quote: "'You could be good today. But instead you choose tomorrow'",
      author: "-- Marcus Aurelius",
    },
    {
      quote:
        "'It's not that I'm so smart, it's just that I stay with a problem longer'",
      author: "-- Albert Einstein",
    },
    {
      quote: "'Energy and persistence conquer all things.'",
      author: "-- Benjamin Franklin",
    },
    {
      quote: "'Discipline equals freedom.'",
      author: "-- Jocko Willink",
    },
    {
      quote:
        "'You'll have far better luck toughening yourself up than ever will trying to take the teeth out of a world that is - at best - indifferent to your existence.'",
      author: "-- Ryan Holiday",
    },
    {
      quote: "'I find that the harder I work, the more luck I seem to have.'",
      author: "-- Thomas Jefferson",
    },
    {
      quote:
        "'A comedian does funny things. A good comedian does things funny.'",
      author: "-- Buster Keaton",
    },
    {
      quote:
        "'Sometimes its the panic about the work that's in your way, not the work itself.'",
      author: "-- Dan Charnas",
    },
    {
      quote: "'If one plan won't do, then another must.'",
      author: "-- John Roebling",
    },
    {
      quote:
        "'...Man is after all a very finit being in his capacities and pwers of doing actual work...but when it comes to planning, one mind can in a few hours think out enough work to keep a thousand men employed for years...'",
      author: "-- Washington Roebling",
    },
    {
      quote:
        "'Don't ever be too impressed with goal setting. Be impressed with goal getting.'",
      author: "-- John C. Maxwell",
    },
    {
      quote:
        "'Be fearful when others are greedy and greedy when others are fearful'",
      author: "-- Warren Buffett",
    },
    {
      quote:
        "'No matter how great the talent or efforts, some things just take time. You can't produce a baby in one month by getting nine women'",
      author: "-- Warren Buffett",
    },
    {
      quote:
        "'If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.'",
      author: "-- Martin Luther King Jr.",
    },
    {
      quote: "'Growth and comfort do not coexist'",
      author: "-- Ginni Rometty",
    },
    {
      quote:
        "'The secret of change is to focus all your energy not on fighting the old, but on building the new.'",
      author: "-- Elin Hilderbrand (The Hotel Nantucket)",
    },
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
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${red}, ${blue}, ${green})`;
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
