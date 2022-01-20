var films = [
   {
      id: "287947",
      title: "Shazam!",
      poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
      overview:
         "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
      release_date: 1553299200,
      genres: ["Action", "Comedy", "Fantasy"],
   },
   {
      id: "299537",
      title: "Captain Marvel",
      poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
      overview:
         "The story follows Carol Danvers as she becomes one of the universe’s most middle of a galactreviousl.",
      release_date: 1551830400,
      genres: ["Action", "Adventure", "Science Fiction"],
   },
   {
      id: "522681",
      title: "Escape Room",
      poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
      overview:
         "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
      release_date: 1546473600,
      genres: ["Thriller", "Action", "Horror", "Science Fiction"],
   },
   {
      id: "166428",
      title: "How to Train Your Dragon: The Hidden World",
      poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
      overview:
         "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’s reign as village chief is tested. both dragon and rider must make impossible.",
      release_date: 1546473600,
      genres: ["Animation", "Family", "Adventure"],
   },
   {
      id: "450465",
      title: "Glass",
      poster: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
      overview:
         "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendel.",
      release_date: 1547596800,
      genres: ["Documentary"],
   },
   {
      id: "495925",
      title: "Doraemon the Movie: Nobita's Treasure Island",
      poster: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
      overview:
         "The story is based on Robert Louis Stevenson's Treasure Island novel.",
      release_date: 1520035200,
      genres: ["Animation"],
   },
   {
      id: "329996",
      title: "Dumbo",
      poster: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
      overview:
         "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus .",
      release_date: 1553644800,
      genres: ["Adventure", "Family", "Fantasy"],
   },
   {
      id: "299536",
      title: "Avengers: Infinity War",
      poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      overview:
         "As the Avengers and their allies have continued to protect the world from threats too large for any one herohadows: Thanos. A despot of o itself has never been more uncertain.",
      release_date: 1524618000,
      genres: ["Adventure", "Action", "Science Fiction"],
   },
   {
      id: "458723",
      title: "Us",
      poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
      overview:
         "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity .",
      release_date: 1552521600,
      genres: ["Documentary", "Family"],
   },
   {
      id: "424783",
      title: "Bumblebee",
      poster: "https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
      overview:
         "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.",
      release_date: 1544832000,
      genres: ["Action", "Adventure", "Science Fiction"],
   },
   {
      id: "920",
      title: "Cars",
      poster: "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
      overview:
         "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country.",
      release_date: 1149728400,
      genres: ["Animation", "Adventure", "Comedy", "Family"],
   },
   {
      id: "299534",
      title: "Avengers: Endgame",
      poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      overview:
         "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order.",
      release_date: 1556067600,
      genres: ["Adventure", "Science Fiction", "Action"],
   },
   {
      id: "324857",
      title: "Spider-Man: Into the Spider-Verse",
      poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      overview:
         "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are .",
      release_date: 1544140800,
      genres: ["Action", "Adventure", "Animation", "Science Fiction", "Comedy"],
   },
   {
      id: "157433",
      title: "Pet Sematary",
      poster: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
      overview:
         "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are wel.",
      release_date: 1554339600,
      genres: ["Thriller", "Horror"],
   },
   {
      id: "456740",
      title: "Hellboy",
      poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      overview:
         "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
      release_date: 1554944400,
      genres: ["Fantasy", "Action"],
   },
   {
      id: "537915",
      title: "After",
      poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      overview:
         "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
      release_date: 1554944400,
      genres: ["Mystery", "Drama"],
   },
   {
      id: "485811",
      title: "Redcon-1",
      poster: "https://image.tmdb.org/t/p/w500/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
      overview:
         "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South  .",
      release_date: 1538096400,
      genres: ["Action", "Horror"],
   },
   {
      id: "471507",
      title: "Destroyer",
      poster: "https://image.tmdb.org/t/p/w500/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
      overview:
         "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the Cal.",
      release_date: 1545696000,
      genres: ["Horror", "Thriller"],
   },
   {
      id: "400650",
      title: "Mary Poppins Returns",
      poster: "https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
      overview:
         "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder .",
      release_date: 1544659200,
      genres: ["Documentary"],
   },
   {
      id: "297802",
      title: "Aquaman",
      poster: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
      overview:
         "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's .",
      release_date: 1544140800,
      genres: ["Action", "Adventure", "TV Movie"],
   },
   {
      id: "512196",
      title: "Happy Death Day 2U",
      poster: "https://image.tmdb.org/t/p/w500/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
      overview:
         "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves..",
      release_date: 1550016000,
      genres: ["Comedy", "Horror", "Science Fiction"],
   },
   {
      id: "390634",
      title: "Fate/stay night: Heaven’s Feel II. lost butterfly",
      poster: "https://image.tmdb.org/t/p/w500/nInpnGCjhzVhsASIUAmgM1QIhYM.jpg",
      overview:
         "Theatrical-release adaptation of the visual novel 'Fate/stay night', following the third and final route. (Part 2 of a trilogy.)",
      release_date: 1547251200,
      genres: ["Animation", "Action", "Fantasy", "Drama"],
   },
   {
      id: "500682",
      title: "The Highwaymen",
      poster: "https://image.tmdb.org/t/p/w500/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
      overview:
         "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Cly nevertheless are worshiped by the public.",
      release_date: 1552608000,
      genres: ["Music"],
   },
   {
      id: "454294",
      title: "The Kid Who Would Be King",
      poster: "https://image.tmdb.org/t/p/w500/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
      overview:
         "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He sooogether, they must save mankind frmy of supernatural warriors.",
      release_date: 1547596800,
      genres: ["Action", "Adventure", "Fantasy", "Family"],
   },
   {
      id: "543103",
      title: "Kamen Rider Heisei Generations FOREVER",
      poster: "https://image.tmdb.org/t/p/w500/kHMuyjlvNIwhCaDFiRwnl45wF7z.jpg",
      overview:
         "In the world of Sougo Tokiwa and Sento Kiryu, their 'companions' are losing their memories one after the other as they're replaced by other people. The Super Time deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
      release_date: 1545436800,
      genres: ["Action", "Adventure", "Science Fiction"],
   },
   {
      id: "404368",
      title: "Ralph Breaks the Internet",
      poster: "https://image.tmdb.org/t/p/w500/qEnH5meR381iMpmCumAIMswcQw2.jpg",
      overview:
         "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game.",
      release_date: 1542672000,
      genres: ["Family", "Animation", "Comedy", "Adventure"],
   },
   {
      id: "338952",
      title: "Fantastic Beasts: The Crimes of Grindelwald",
      poster: "https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
      overview:
         "Gellert Grindelwald has escaped imprisonment and has begun gathering follower a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, .",
      release_date: 1542153600,
      genres: ["Adventure", "Fantasy", "Family"],
   },
   {
      id: "399579",
      title: "Alita: Battle Angel",
      poster: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg",
      overview:
         "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionart and soul of a young woman with an extraordinary past.",
      release_date: 1548892800,
      genres: ["Action", "Science Fiction"],
   },
   {
      id: "450001",
      title: "Master Z: Ip Man Legacy",
      poster: "https://image.tmdb.org/t/p/w500/6VxEvOF7QDovsG6ro9OVyjH07LF.jpg",
      overview:
         "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going s behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
      release_date: 1545264000,
      genres: ["Action"],
   },
   {
      id: "504172",
      title: "The Mule",
      poster: "https://image.tmdb.org/t/p/w500/klazQbxk3yfuZ8JcfO9jdKOZQJ7.jpg",
      overview:
         "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business  at his cargo increases exponentiradar of hard-charging DEA agent Colin Bates.",
      release_date: 1544745600,
      genres: ["Crime", "Comedy"],
   },
   {
      id: "527729",
      title: "Asterix: The Secret of the Magic Potion",
      poster: "https://image.tmdb.org/t/p/w500/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg",
      overview:
         "Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the futureanied bnted young druid to transmit the Secret of the Magic Potion.",
      release_date: 1543968000,
      genres: ["Animation", "Family", "Comedy", "Adventure"],
   },
   {
      id: "118340",
      title: "Guardians of the Galaxy",
      poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      overview:
         "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an oser.",
      release_date: 1406682000,
      genres: [],
   },
   {
      id: "411728",
      title: "The Professor and the Madman",
      poster: "https://image.tmdb.org/t/p/w500/gtGCDLhfjW96qVarwctnuTpGOtD.jpg",
      overview:
         "Professor James Murray begins work compiling words for the first edition of the Oxfordes from a patient at Binal Lunatic Asylum , Dr William Minor.",
      release_date: 1551916800,
      genres: ["Drama", "History", "Mystery", "Thriller"],
   },
   {
      id: "527641",
      title: "Five Feet Apart",
      poster: "https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
      overview:
         "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient, an impossibly charming teen who has the same illness.",
      release_date: 1552608000,
      genres: ["Romance", "Drama"],
   },
   {
      id: "576071",
      title: "Unplanned",
      poster: "https://image.tmdb.org/t/p/w500/tvCtAz8z5tF49a7q9RRHvxiTjzv.jpg",
      overview:
         "As one of the youngest Planned Parenthood clinicassion surrounding a we caus day she saw something that changed everything.",
      release_date: 1553126400,
      genres: ["Drama"],
   },
   {
      id: "283995",
      title: "Guardians of the Galaxy Vol. 2",
      poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      overview:
         "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      release_date: 1492563600,
      genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
   },
   {
      id: "464504",
      title: "A Madea Family Funeral",
      poster: "https://image.tmdb.org/t/p/w500/sFvOTUlZrIxCLdmz1fC16wK0lme.jpg",
      overview:
         "A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where the.",
      release_date: 1551398400,
      genres: ["Comedy"],
   },
   {
      id: "428078",
      title: "Mortal Engines",
      poster: "https://image.tmdb.org/t/p/w500/gLhYg9NIvIPKVRTtvzCWnp1qJWG.jpg",
      overview:
         "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources..",
      release_date: 1543276800,
      genres: ["Adventure", "Fantasy"],
   },
   {
      id: "460539",
      title: "Kuppathu Raja",
      poster: "https://image.tmdb.org/t/p/w500/wzLde7keWQqWA0CJYVz0X5RVKjd.jpg",
      overview:
         "Kuppathu Raja is an upcoming Tamil comedy drama film directed by Baba Bhaskar. The film features G. V. .",
      release_date: 1554426000,
      genres: ["Drama"],
   },
   {
      id: "24428",
      title: "The Avengers",
      poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      overview:
         "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international !",
      release_date: 1335315600,
      genres: ["Documentary"],
   },
   {
      id: "120",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      overview:
         "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order. ",
      release_date: 1008633600,
      genres: ["Adventure", "Fantasy", "Action"],
   },
   {
      id: "671",
      title: "Harry Potter and the Philosopher's Stone",
      poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      overview:
         "Harry Potter has lived under the stairs at his aunt and 's a powerful wizard -- with a place waiting for him at the Hogwarts School.",
      release_date: 1005868800,
      genres: ["Adventure", "Fantasy", "Family"],
   },
   {
      id: "500904",
      title: "A Vigilante",
      poster: "https://image.tmdb.org/t/p/w500/x5MSMGVagNINIWyZaxdjLarTDM3.jpg",
      overview: "A vigilante helps victims escape their domestic abusers.",
      release_date: 1553817600,
      genres: ["Thriller", "Drama"],
   },
   {
      id: "284053",
      title: "Thor: Ragnarok",
      poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      overview:
         "Thor is imprisoned on the other side of the universe  of his home-e hands of an all-powerful new threat, the ruthless Hela.",
      release_date: 1508893200,
      genres: ["Action", "Adventure", "Comedy", "Fantasy"],
   },
   {
      id: "424694",
      title: "Bohemian Rhapsody",
      poster: "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
      overview:
         "Singeiral out of control, Queen soon faces its greatest challenge yet –nd together amid the success and excess.",
      release_date: 1540342800,
      genres: ["Music", "Documentary"],
   },
];
