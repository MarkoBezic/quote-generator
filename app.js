var quotes = [
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
      "'Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best. Don't think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn't stop you from doing anything at all.'",
    author: "-- Richard P. Feynman",
  },
  {
    quote:
      "'Failure is unimportant. It takes courage to make a fool of yourself.'",
    author: "-- Charlie Chaplin",
  },
]

const updateQuote = () => {
  let index = Math.floor(Math.random() * Math.floor(quotes.length))
  document.getElementById("text").innerHTML = `${quotes[index].quote}`
  document.getElementById("author").innerHTML = `${quotes[index].author}`
}

const updateColors = () => {}

const handleClick = () => {
  updateQuote()
}

$("#new-quote").click(handleClick)
