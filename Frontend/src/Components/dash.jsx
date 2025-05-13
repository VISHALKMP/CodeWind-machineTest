import React, { useState } from 'react';

function Dash() {
  const [cart, setCart] = useState([]);

  const books = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      description: "A psychological thriller...",
      previewText: "In this riveting psychological thriller...",
      cover: "https://celadonbooks.com/wp-content/uploads/2019/07/the-silent-patient-us-500x800.jpg"
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Fiction",
      description: "A coming-of-age story...",
      previewText: "Kya Clark had been abandoned...",
      cover: "https://c7.alamy.com/comp/2JBF9BT/where-the-crawdads-sing-2022-directed-by-olivia-newman-credit-3000-pictures-hello-sunshine-album-2JBF9BT.jpg"
    }, {
      author: "Henrik Ibsen",
      country: "Norway",
      cover: "images/a-Dolls-house.jpg",
      language: "Norwegian",
      previewText: "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      pages: 68,
      title: "A Doll's House",
      year: 1879
    },
    {
      author: "James Joyce",
      country: "Irish Free State",
      cover: "images/ulysses.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      pages: 228,
      title: "Ulysses",
      year: 1922
    },
    {
      author: "Franz Kafka",
      country: "Czechoslovakia",
      cover: "images/stories-of-franz-kafka.jpg",
      language: "German",
      previewText: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      pages: 488,
      title: "Stories",
      year: 1924
    }, {
      "author": "Ovid",
      "country": "Roman Empire",
      "cover": "images/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "previewText": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100
    },
    {
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "cover": "images/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "previewText": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928
    },
    {
      "author": "Edgar Allan Poe",
      "country": "United States",
      "cover": "images/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "year": 1950
    },
    {
      "author": "Marcel Proust",
      "country": "France",
      "cover": "images/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "previewText": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920
    },
    {
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "cover": "images/gargantua-and-pantagruel.jpg",
      "language": "French",
      "previewText": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533
    },
    {
      "author": "Juan Rulfo",
      "country": "Mexico",
      "cover": "images/pedro-paramo.jpg",
      "language": "Spanish",
      "previewText": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro P\u00e1ramo",
      "year": 1955
    },
    {
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "cover": "images/the-masnavi.jpg",
      "language": "Persian",
      "previewText": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236
    },
    {
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "cover": "images/midnights-children.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981
    },
    {
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "cover": "images/bostan.jpg",
      "language": "Persian",
      "previewText": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "year": 1257
    },
    {
      "author": "Tayeb Salih",
      "country": "Sudan",
      "cover": "images/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "previewText": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966
    },
    {
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "cover": "images/blindness.jpg",
      "language": "Portuguese",
      "previewText": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "year": 1995
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "cover": "images/hamlet.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "cover": "images/king-lear.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "year": 1608
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "cover": "images/othello.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "year": 1609
    },
    {
      "author": "Sophocles",
      "country": "Greece",
      "cover": "images/oedipus-the-king.jpg",
      "language": "Greek",
      "previewText": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430
    },
    {
      "author": "Stendhal",
      "country": "France",
      "cover": "images/le-rouge-et-le-noir.jpg",
      "language": "French",
      "previewText": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830
    },
    {
      "author": "Laurence Sterne",
      "country": "England",
      "cover": "images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    },
    {
      "author": "Italo Svevo",
      "country": "Italy",
      "cover": "images/confessions-of-zeno.jpg",
      "language": "Italian",
      "previewText": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923
    },
    {
      "author": "Jonathan Swift",
      "country": "Ireland",
      "cover": "images/gullivers-travels.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "cover": "images/war-and-peace.jpg",
      "language": "Russian",
      "previewText": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "cover": "images/anna-karenina.jpg",
      "language": "Russian",
      "previewText": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "cover": "images/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "previewText": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886
    },
    {
      "author": "Mark Twain",
      "country": "United States",
      "cover": "images/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884
    },
    {
      "author": "Valmiki",
      "country": "India",
      "cover": "images/ramayana.jpg",
      "language": "Sanskrit",
      "previewText": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "year": -450
    },
    {
      "author": "Virgil",
      "country": "Roman Empire",
      "cover": "images/the-aeneid.jpg",
      "language": "Classical Latin",
      "previewText": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23
    },
    {
      "author": "Vyasa",
      "country": "India",
      "cover": "images/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "previewText": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700
    },
    {
      "author": "Walt Whitman",
      "country": "United States",
      "cover": "images/leaves-of-grass.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "pages": 152,
      "title": "Leaves of Grass",
      "year": 1855
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "cover": "images/mrs-dalloway.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "pages": 216,
      "title": "Mrs Dalloway",
      "year": 1925
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "cover": "images/to-the-lighthouse.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "pages": 209,
      "title": "To the Lighthouse",
      "year": 1927
    },
    {
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "cover": "images/memoirs-of-hadrian.jpg",
      "language": "French",
      "previewText": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951
    }, {
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      cover: "images/the-epic-of-gilgamesh.jpg",
      language: "Akkadian",
      previewText: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "cover": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "previewText": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "cover": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "previewText": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "cover": "images/njals-saga.jpg",
      "language": "Old Norse",
      "previewText": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "cover": "images/pride-and-prejudice.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "cover": "images/le-pere-goriot.jpg",
      "language": "French",
      "previewText": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "cover": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "previewText": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "cover": "images/the-decameron.jpg",
      "language": "Italian",
      "previewText": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "cover": "images/ficciones.jpg",
      "language": "Spanish",
      "previewText": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "cover": "images/wuthering-heights.jpg",
      "language": "English",
      "previewText": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      author: "Albert Camus",
      country: "Algeria, French Empire",
      cover: "images/l-etranger.jpg",
      language: "French",
      previewText: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      pages: 185,
      title: "The Stranger",
      year: 1942
    },
    {
      author: "Paul Celan",
      country: "Romania, France",
      cover: "images/poems-paul-celan.jpg",
      language: "German",
      previewText: "\n",
      pages: 320,
      title: "Poems",
      year: 1952
    },
    {
      author: "Louis-Ferdinand C\u00e9line",
      country: "France",
      cover: "images/voyage-au-bout-de-la-nuit.jpg",
      language: "French",
      previewText: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      pages: 505,
      title: "Journey to the End of the Night",
      year: 1932
    },
    {
      author: "Miguel de Cervantes",
      country: "Spain",
      cover: "images/don-quijote-de-la-mancha.jpg",
      language: "Spanish",
      previewText: "https://en.wikipedia.org/wiki/Don_Quixote\n",
      pages: 1056,
      title: "Don Quijote De La Mancha",
      year: 1610
    },
    {
      author: "Geoffrey Chaucer",
      country: "England",
      cover: "images/the-canterbury-tales.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      pages: 544,
      title: "The Canterbury Tales",
      year: 1450
    },
    {
      author: "Anton Chekhov",
      country: "Russia",
      cover: "images/stories-of-anton-chekhov.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      pages: 194,
      title: "Stories",
      year: 1886
    },
    {
      author: "Joseph Conrad",
      country: "United Kingdom",
      cover: "images/nostromo.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Nostromo\n",
      pages: 320,
      title: "Nostromo",
      year: 1904
    },
    {
      author: "Charles Dickens",
      country: "United Kingdom",
      cover: "images/great-expectations.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Great_Expectations\n",
      pages: 194,
      title: "Great Expectations",
      year: 1861
    },
    {
      author: "Denis Diderot",
      country: "France",
      cover: "images/jacques-the-fatalist.jpg",
      language: "French",
      previewText: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      pages: 596,
      title: "Jacques the Fatalist",
      year: 1796
    },
    {
      author: "Alfred D\u00f6blin",
      country: "Germany",
      cover: "images/berlin-alexanderplatz.jpg",
      language: "German",
      previewText: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      pages: 600,
      title: "Berlin Alexanderplatz",
      year: 1929
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      cover: "images/crime-and-punishment.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      pages: 551,
      title: "Crime and Punishment",
      year: 1866
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      cover: "images/the-idiot.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/The_Idiot\n",
      pages: 656,
      title: "The Idiot",
      year: 1869
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      cover: "images/the-possessed.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      pages: 768,
      title: "The Possessed",
      year: 1872
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      cover: "images/the-brothers-karamazov.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      pages: 824,
      title: "The Brothers Karamazov",
      year: 1880
    },
    {
      author: "George Eliot",
      country: "United Kingdom",
      cover: "images/middlemarch.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Middlemarch\n",
      pages: 800,
      title: "Middlemarch",
      year: 1871
    },
    {
      author: "Ralph Ellison",
      country: "United States",
      cover: "images/invisible-man.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Invisible_Man\n",
      pages: 581,
      title: "Invisible Man",
      year: 1952
    },
    {
      author: "Euripides",
      country: "Greece",
      cover: "images/medea.jpg",
      language: "Greek",
      previewText: "https://en.wikipedia.org/wiki/Medea_(play)\n",
      pages: 104,
      title: "Medea",
      year: -431
    },
    {
      author: "William Faulkner",
      country: "United States",
      cover: "images/absalom-absalom.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
      pages: 313,
      title: "Absalom, Absalom!",
      year: 1936
    },
    {
      author: "William Faulkner",
      country: "United States",
      cover: "images/the-sound-and-the-fury.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
      pages: 326,
      title: "The Sound and the Fury",
      year: 1929
    },
    {
      author: "Gustave Flaubert",
      country: "France",
      cover: "images/madame-bovary.jpg",
      language: "French",
      previewText: "https://en.wikipedia.org/wiki/Madame_Bovary\n",
      pages: 528,
      title: "Madame Bovary",
      year: 1857
    },
    {
      author: "Gustave Flaubert",
      country: "France",
      cover: "images/l-education-sentimentale.jpg",
      language: "French",
      previewText: "https://en.wikipedia.org/wiki/Sentimental_Education\n",
      pages: 606,
      title: "Sentimental Education",
      year: 1869
    },
    {
      author: "Federico Garc\u00eda Lorca",
      country: "Spain",
      cover: "images/gypsy-ballads.jpg",
      language: "Spanish",
      previewText: "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
      pages: 218,
      title: "Gypsy Ballads",
      year: 1928
    },
    {
      author: "Gabriel Garc\u00eda M\u00e1rquez",
      country: "Colombia",
      cover: "images/one-hundred-years-of-solitude.jpg",
      language: "Spanish",
      previewText: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
      pages: 417,
      title: "One Hundred Years of Solitude",
      year: 1967
    },
    {
      author: "Gabriel Garc\u00eda M\u00e1rquez",
      country: "Colombia",
      cover: "images/love-in-the-time-of-cholera.jpg",
      language: "Spanish",
      previewText: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
      pages: 368,
      title: "Love in the Time of Cholera",
      year: 1985
    },
    {
      author: "Johann Wolfgang von Goethe",
      country: "Saxe-Weimar",
      cover: "images/faust.jpg",
      language: "German",
      previewText: "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
      pages: 158,
      title: "Faust",
      year: 1832
    },
    {
      author: "Nikolai Gogol",
      country: "Russia",
      cover: "images/dead-souls.jpg",
      language: "Russian",
      previewText: "https://en.wikipedia.org/wiki/Dead_Souls\n",
      pages: 432,
      title: "Dead Souls",
      year: 1842
    },
    {
      author: "G\u00fcnter Grass",
      country: "Germany",
      cover: "images/the-tin-drum.jpg",
      language: "German",
      previewText: "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
      pages: 600,
      title: "The Tin Drum",
      year: 1959
    },
    {
      author: "Jo\u00e3o Guimar\u00e3es Rosa",
      country: "Brazil",
      cover: "images/the-devil-to-pay-in-the-backlands.jpg",
      language: "Portuguese",
      previewText: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      pages: 494,
      title: "The Devil to Pay in the Backlands",
      year: 1956
    },
    {
      author: "Knut Hamsun",
      country: "Norway",
      cover: "images/hunger.jpg",
      language: "Norwegian",
      previewText: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      pages: 176,
      title: "Hunger",
      year: 1890
    },
    {
      author: "Ernest Hemingway",
      country: "United States",
      cover: "images/the-old-man-and-the-sea.jpg",
      language: "English",
      previewText: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      pages: 128,
      title: "The Old Man and the Sea",
      year: 1952
    },
    {
      author: "Homer",
      country: "Greece",
      cover: "images/the-iliad-of-homer.jpg",
      language: "Greek",
      previewText: "https://en.wikipedia.org/wiki/Iliad\n",
      pages: 608,
      title: "Iliad",
      year: -735
    },
    {
      author: "Homer",
      country: "Greece",
      cover: "images/the-odyssey-of-homer.jpg",
      language: "Greek",
      previewText: "https://en.wikipedia.org/wiki/Odyssey\n",
      pages: 374,
      title: "Odyssey",
      year: -800
    }
    // ... other books
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
    alert(`Added "${book.title}" to cart.`);
  };

  return (
    <div>    <nav style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",height:"50px"}}>
         <h2>BOOK-Store</h2>
      <ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",listStyle:"none"}}>

        <li style={{margin:"0 20px",fontSize:"26px"}}>Home</li>
        <li style={{margin:"0 20px",fontSize:"26px"}}>About</li>
        <li style={{margin:"0 20px",fontSize:"26px"}}>More-Books</li>
        <li style={{margin:"0 20px",fontSize:"26px"}}>Help</li>
      </ul>

    </nav>
      <div style={{ padding: '20px' }}>
        {/* <h1>Book Store</h1> */}
        <hr style={{ margin: '40px 0' }} />
        <h2>🛒 Cart ({cart.length} items)</h2>
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.title} by {item.author}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {books.map((book, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '250px'
            }}>
              <img src={book.cover} alt={book.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.previewText.slice(0, 100)}...</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          ))}

        </div>


      </div>
    </div>
  );
}

export default Dash;
