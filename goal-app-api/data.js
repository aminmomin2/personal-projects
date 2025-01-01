const quotes = [
    {
      "q": "An empty head is not really empty; it is stuffed with rubbish. Hence the difficulty of forcing anything into an empty head.",
      "a": "Eric Hoffer",
      "c": "123",
      "h": "\u003Cblockquote\u003E&ldquo;An empty head is not really empty; it is stuffed with rubbish. Hence the difficulty of forcing anything into an empty head.&rdquo; &mdash; \u003Cfooter\u003EEric Hoffer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The best way to understanding is a few good examples.",
      "a": "Isaac Newton",
      "c": "53",
      "h": "\u003Cblockquote\u003E&ldquo;The best way to understanding is a few good examples.&rdquo; &mdash; \u003Cfooter\u003EIsaac Newton\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it.",
      "a": "Alexandre Dumas",
      "c": "138",
      "h": "\u003Cblockquote\u003E&ldquo;Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it.&rdquo; &mdash; \u003Cfooter\u003EAlexandre Dumas\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Your success and happiness lie in you.",
      "a": "Helen Keller",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;Your success and happiness lie in you.&rdquo; &mdash; \u003Cfooter\u003EHelen Keller\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "We create the world and ourselves;",
      "a": "Ming-Dao Deng",
      "c": "34",
      "h": "\u003Cblockquote\u003E&ldquo;We create the world and ourselves;&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Things may come to those who wait, but only the things left by those who hustle.",
      "a": "Abraham Lincoln",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;Things may come to those who wait, but only the things left by those who hustle.&rdquo; &mdash; \u003Cfooter\u003EAbraham Lincoln\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Keep true. Never be ashamed of doing right. Decide what you think is right and stick to it.",
      "a": "George Eliot",
      "c": "91",
      "h": "\u003Cblockquote\u003E&ldquo;Keep true. Never be ashamed of doing right. Decide what you think is right and stick to it.&rdquo; &mdash; \u003Cfooter\u003EGeorge Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Truth is exact correspondence with reality. ",
      "a": "Paramahansa Yogananda",
      "c": "44",
      "h": "\u003Cblockquote\u003E&ldquo;Truth is exact correspondence with reality. &rdquo; &mdash; \u003Cfooter\u003EParamahansa Yogananda\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you don't have time to do it right, when will you have time to do it over?",
      "a": "John Wooden",
      "c": "77",
      "h": "\u003Cblockquote\u003E&ldquo;If you don't have time to do it right, when will you have time to do it over?&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Most people achieved their greatest success one step beyond what looked like their greatest failure.",
      "a": "Brian Tracy",
      "c": "100",
      "h": "\u003Cblockquote\u003E&ldquo;Most people achieved their greatest success one step beyond what looked like their greatest failure.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.",
      "a": "Harry S. Truman",
      "c": "84",
      "h": "\u003Cblockquote\u003E&ldquo;Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
      "a": "Norman Vincent Peale",
      "c": "147",
      "h": "\u003Cblockquote\u003E&ldquo;Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The road to success is always under construction..",
      "a": "Lily Tomlin",
      "c": "50",
      "h": "\u003Cblockquote\u003E&ldquo;The road to success is always under construction..&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To forgive means pardoning the unpardonable.",
      "a": "Gilbert Chesterton",
      "c": "44",
      "h": "\u003Cblockquote\u003E&ldquo;To forgive means pardoning the unpardonable.&rdquo; &mdash; \u003Cfooter\u003EGilbert Chesterton\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Heart is what separates the good from the great.",
      "a": "Michael Jordan",
      "c": "48",
      "h": "\u003Cblockquote\u003E&ldquo;Heart is what separates the good from the great.&rdquo; &mdash; \u003Cfooter\u003EMichael Jordan\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It is better to learn late than never.",
      "a": "Publilius Syrus",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;It is better to learn late than never.&rdquo; &mdash; \u003Cfooter\u003EPublilius Syrus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you see yourself as prosperous, you will be.",
      "a": "Robert Collier",
      "c": "47",
      "h": "\u003Cblockquote\u003E&ldquo;If you see yourself as prosperous, you will be.&rdquo; &mdash; \u003Cfooter\u003ERobert Collier\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Instead of thinking outside the box, get rid of the box.",
      "a": "Deepak Chopra",
      "c": "56",
      "h": "\u003Cblockquote\u003E&ldquo;Instead of thinking outside the box, get rid of the box.&rdquo; &mdash; \u003Cfooter\u003EDeepak Chopra\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Not how long, but how well you have lived is the main thing.",
      "a": "Seneca",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;Not how long, but how well you have lived is the main thing.&rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "No matter who you are, we're creatures of habit. The better your habits are, the better they will be in pressure situations.",
      "a": "Wayne Gretzky",
      "c": "124",
      "h": "\u003Cblockquote\u003E&ldquo;No matter who you are, we're creatures of habit. The better your habits are, the better they will be in pressure situations.&rdquo; &mdash; \u003Cfooter\u003EWayne Gretzky\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.",
      "a": "John Tukey",
      "c": "115",
      "h": "\u003Cblockquote\u003E&ldquo;An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.&rdquo; &mdash; \u003Cfooter\u003EJohn Tukey\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It's better to stand by someone's side than by yourself.",
      "a": "Jack London",
      "c": "56",
      "h": "\u003Cblockquote\u003E&ldquo;It's better to stand by someone's side than by yourself.&rdquo; &mdash; \u003Cfooter\u003EJack London\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It's not how much we give but how much love we put into giving.",
      "a": "Mother Teresa",
      "c": "63",
      "h": "\u003Cblockquote\u003E&ldquo;It's not how much we give but how much love we put into giving.&rdquo; &mdash; \u003Cfooter\u003EMother Teresa\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When it hurts - observe. Life is trying to teach you something.",
      "a": "Anita Krizzan",
      "c": "63",
      "h": "\u003Cblockquote\u003E&ldquo;When it hurts - observe. Life is trying to teach you something.&rdquo; &mdash; \u003Cfooter\u003EAnita Krizzan\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you are lucky enough to find love, remember it is there and don't throw it away.",
      "a": "Stephen Hawking",
      "c": "83",
      "h": "\u003Cblockquote\u003E&ldquo;If you are lucky enough to find love, remember it is there and don't throw it away.&rdquo; &mdash; \u003Cfooter\u003EStephen Hawking\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Never waste a minute of your precious life thinking about people you don't like.",
      "a": "Celestine Chua",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;Never waste a minute of your precious life thinking about people you don't like.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The very essence of instinct is that it's followed independently of reason.",
      "a": "Charles Darwin",
      "c": "75",
      "h": "\u003Cblockquote\u003E&ldquo;The very essence of instinct is that it's followed independently of reason.&rdquo; &mdash; \u003Cfooter\u003ECharles Darwin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "A wise man will be master of his mind, a fool will be its slave.",
      "a": "Publilius Syrus",
      "c": "64",
      "h": "\u003Cblockquote\u003E&ldquo;A wise man will be master of his mind, a fool will be its slave.&rdquo; &mdash; \u003Cfooter\u003EPublilius Syrus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.",
      "a": "Winston Churchill",
      "c": "101",
      "h": "\u003Cblockquote\u003E&ldquo;Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.&rdquo; &mdash; \u003Cfooter\u003EWinston Churchill\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you truly love Nature, you will find beauty everywhere. ",
      "a": "Vincent van Gogh",
      "c": "59",
      "h": "\u003Cblockquote\u003E&ldquo;If you truly love Nature, you will find beauty everywhere. &rdquo; &mdash; \u003Cfooter\u003EVincent van Gogh\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Do good, live in the most positive and joyful way possible every day.",
      "a": "Roy T. Bennett",
      "c": "69",
      "h": "\u003Cblockquote\u003E&ldquo;Do good, live in the most positive and joyful way possible every day.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
      "a": "Roy T. Bennett",
      "c": "95",
      "h": "\u003Cblockquote\u003E&ldquo;Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "One mistake does not have to rule a person's entire life.",
      "a": "Joyce Meyer",
      "c": "57",
      "h": "\u003Cblockquote\u003E&ldquo;One mistake does not have to rule a person's entire life.&rdquo; &mdash; \u003Cfooter\u003EJoyce Meyer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To be prepared is half the victory. ",
      "a": "Miguel de Cervantes",
      "c": "36",
      "h": "\u003Cblockquote\u003E&ldquo;To be prepared is half the victory. &rdquo; &mdash; \u003Cfooter\u003EMiguel de Cervantes\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When asked, how do you write? I invariably answer, one word at a time.",
      "a": "Stephen King",
      "c": "70",
      "h": "\u003Cblockquote\u003E&ldquo;When asked, how do you write? I invariably answer, one word at a time.&rdquo; &mdash; \u003Cfooter\u003EStephen King\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Anger begins with folly, and ends with repentance. ",
      "a": "Beverly Sills",
      "c": "51",
      "h": "\u003Cblockquote\u003E&ldquo;Anger begins with folly, and ends with repentance. &rdquo; &mdash; \u003Cfooter\u003EBeverly Sills\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Every moment you get is a gift. Spend it on things that matter. Don't spend it by dwelling on unhappy things.",
      "a": "Celestine Chua",
      "c": "109",
      "h": "\u003Cblockquote\u003E&ldquo;Every moment you get is a gift. Spend it on things that matter. Don't spend it by dwelling on unhappy things.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Where words fail, music speaks.",
      "a": "Hans Christian Andersen",
      "c": "31",
      "h": "\u003Cblockquote\u003E&ldquo;Where words fail, music speaks.&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Old age is like everything else. To make a success of it, you've got to start young.",
      "a": "Theodore Roosevelt",
      "c": "84",
      "h": "\u003Cblockquote\u003E&ldquo;Old age is like everything else. To make a success of it, you've got to start young.&rdquo; &mdash; \u003Cfooter\u003ETheodore Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you can't argue both sides, you can't argue.",
      "a": "Jack Butcher",
      "c": "47",
      "h": "\u003Cblockquote\u003E&ldquo;If you can't argue both sides, you can't argue.&rdquo; &mdash; \u003Cfooter\u003EJack Butcher\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "High thoughts must have high language.",
      "a": "Aristophanes",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;High thoughts must have high language.&rdquo; &mdash; \u003Cfooter\u003EAristophanes\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The heart wants what it wants. There's no logic. ",
      "a": "Woody Allen",
      "c": "49",
      "h": "\u003Cblockquote\u003E&ldquo;The heart wants what it wants. There's no logic. &rdquo; &mdash; \u003Cfooter\u003EWoody Allen\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Youth is happy because it has the ability to see beauty. Anyone who keeps the ability to see beauty never grows old. ",
      "a": "Franz Kafka",
      "c": "117",
      "h": "\u003Cblockquote\u003E&ldquo;Youth is happy because it has the ability to see beauty. Anyone who keeps the ability to see beauty never grows old. &rdquo; &mdash; \u003Cfooter\u003EFranz Kafka\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It is during our darkest moments that we must focus to see the light.",
      "a": "Aristotle",
      "c": "69",
      "h": "\u003Cblockquote\u003E&ldquo;It is during our darkest moments that we must focus to see the light.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Life is a balance of holding on and letting go.",
      "a": "Rumi",
      "c": "47",
      "h": "\u003Cblockquote\u003E&ldquo;Life is a balance of holding on and letting go.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "I've always lived in the moment.",
      "a": "Yanni",
      "c": "32",
      "h": "\u003Cblockquote\u003E&ldquo;I've always lived in the moment.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Stop acting so small. You are the universe in ecstatic motion.",
      "a": "Rumi",
      "c": "62",
      "h": "\u003Cblockquote\u003E&ldquo;Stop acting so small. You are the universe in ecstatic motion.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Change your thoughts and you change your world.",
      "a": "Norman Vincent Peale",
      "c": "47",
      "h": "\u003Cblockquote\u003E&ldquo;Change your thoughts and you change your world.&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.",
      "a": "Steve Maraboli",
      "c": "166",
      "h": "\u003Cblockquote\u003E&ldquo;Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "a": "Mahatma Gandhi",
      "c": "74",
      "h": "\u003Cblockquote\u003E&ldquo;Live as if you were to die tomorrow. Learn as if you were to live forever.&rdquo; &mdash; \u003Cfooter\u003EMahatma Gandhi\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. ",
      "a": "Jack London",
      "c": "92",
      "h": "\u003Cblockquote\u003E&ldquo;Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. &rdquo; &mdash; \u003Cfooter\u003EJack London\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "From the errors of others, a wise man corrects his own.",
      "a": "Publilius Syrus",
      "c": "55",
      "h": "\u003Cblockquote\u003E&ldquo;From the errors of others, a wise man corrects his own.&rdquo; &mdash; \u003Cfooter\u003EPublilius Syrus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Good judgment comes from experience, and experience comes from bad judgment.",
      "a": "Rita Mae Brown",
      "c": "76",
      "h": "\u003Cblockquote\u003E&ldquo;Good judgment comes from experience, and experience comes from bad judgment.&rdquo; &mdash; \u003Cfooter\u003ERita Mae Brown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To live is to be willing to die over and over again.",
      "a": "Pema Chodron",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;To live is to be willing to die over and over again.&rdquo; &mdash; \u003Cfooter\u003EPema Chodron\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Today you are you, that is truer than true. There is no one alive who is you-er than you.",
      "a": "Dr. Seuss",
      "c": "89",
      "h": "\u003Cblockquote\u003E&ldquo;Today you are you, that is truer than true. There is no one alive who is you-er than you.&rdquo; &mdash; \u003Cfooter\u003EDr. Seuss\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Sometimes you will never know the value of something, until it becomes a memory.",
      "a": "Dr. Seuss",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;Sometimes you will never know the value of something, until it becomes a memory.&rdquo; &mdash; \u003Cfooter\u003EDr. Seuss\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Little minds have little worries, big minds have no time for worries.",
      "a": "Ralph Waldo Emerson",
      "c": "69",
      "h": "\u003Cblockquote\u003E&ldquo;Little minds have little worries, big minds have no time for worries.&rdquo; &mdash; \u003Cfooter\u003ERalph Waldo Emerson\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "No one can hurt you without your consent.",
      "a": "Eleanor Roosevelt",
      "c": "41",
      "h": "\u003Cblockquote\u003E&ldquo;No one can hurt you without your consent.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Quality is more important than quantity. One home run is much better than two doubles.",
      "a": "Steve Jobs",
      "c": "86",
      "h": "\u003Cblockquote\u003E&ldquo;Quality is more important than quantity. One home run is much better than two doubles.&rdquo; &mdash; \u003Cfooter\u003ESteve Jobs\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Judgments prevent us from seeing the good that lies beyond appearances.  ",
      "a": "Wayne Dyer",
      "c": "73",
      "h": "\u003Cblockquote\u003E&ldquo;Judgments prevent us from seeing the good that lies beyond appearances.  &rdquo; &mdash; \u003Cfooter\u003EWayne Dyer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "A lie can travel half way around the world while the truth is putting on its shoes.",
      "a": "Mark Twain",
      "c": "83",
      "h": "\u003Cblockquote\u003E&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; &mdash; \u003Cfooter\u003EMark Twain\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You can calculate the worth of a man by the number of his enemies.",
      "a": "Gustave Flaubert",
      "c": "66",
      "h": "\u003Cblockquote\u003E&ldquo;You can calculate the worth of a man by the number of his enemies.&rdquo; &mdash; \u003Cfooter\u003EGustave Flaubert\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Words without actions are the assassins of idealism.",
      "a": "Herbert Hoover",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;Words without actions are the assassins of idealism.&rdquo; &mdash; \u003Cfooter\u003EHerbert Hoover\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.",
      "a": "Zig Ziglar",
      "c": "95",
      "h": "\u003Cblockquote\u003E&ldquo;Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.&rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Be a good animal, true to your instincts.",
      "a": "D. H. Lawrence",
      "c": "41",
      "h": "\u003Cblockquote\u003E&ldquo;Be a good animal, true to your instincts.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Keep your face to the sunshine and you cannot see the shadows.",
      "a": "Helen Keller",
      "c": "62",
      "h": "\u003Cblockquote\u003E&ldquo;Keep your face to the sunshine and you cannot see the shadows.&rdquo; &mdash; \u003Cfooter\u003EHelen Keller\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "There's a very deep connection among human beings. All we have to do is open our minds to it.",
      "a": "Yanni",
      "c": "93",
      "h": "\u003Cblockquote\u003E&ldquo;There's a very deep connection among human beings. All we have to do is open our minds to it.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "All you need is the plan, the road map, and the courage to press on to your destination.",
      "a": "Earl Nightingale",
      "c": "88",
      "h": "\u003Cblockquote\u003E&ldquo;All you need is the plan, the road map, and the courage to press on to your destination.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Distant water does not put out a nearby fire.",
      "a": "Chinese Proverb",
      "c": "45",
      "h": "\u003Cblockquote\u003E&ldquo;Distant water does not put out a nearby fire.&rdquo; &mdash; \u003Cfooter\u003EChinese Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.",
      "a": "Eckhart Tolle",
      "c": "110",
      "h": "\u003Cblockquote\u003E&ldquo;Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
      "a": "William Faulkner",
      "c": "83",
      "h": "\u003Cblockquote\u003E&ldquo;You cannot swim for new horizons until you have courage to lose sight of the shore.&rdquo; &mdash; \u003Cfooter\u003EWilliam Faulkner\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Great things are not accomplished by those who yield to trends and fads and popular opinion.",
      "a": "Jack Kerouac",
      "c": "92",
      "h": "\u003Cblockquote\u003E&ldquo;Great things are not accomplished by those who yield to trends and fads and popular opinion.&rdquo; &mdash; \u003Cfooter\u003EJack Kerouac\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When you view failure as feedback, you get more done. When you view failure as a finality, you get nothing done.",
      "a": "Jack Butcher",
      "c": "112",
      "h": "\u003Cblockquote\u003E&ldquo;When you view failure as feedback, you get more done. When you view failure as a finality, you get nothing done.&rdquo; &mdash; \u003Cfooter\u003EJack Butcher\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The power to make and break habits and learning how to do that is really important.",
      "a": "Naval Ravikant",
      "c": "83",
      "h": "\u003Cblockquote\u003E&ldquo;The power to make and break habits and learning how to do that is really important.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Trying to define yourself is like trying to bite your own teeth.",
      "a": "Zen Proverb",
      "c": "64",
      "h": "\u003Cblockquote\u003E&ldquo;Trying to define yourself is like trying to bite your own teeth.&rdquo; &mdash; \u003Cfooter\u003EZen Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.",
      "a": "Deepak Chopra",
      "c": "106",
      "h": "\u003Cblockquote\u003E&ldquo;If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.&rdquo; &mdash; \u003Cfooter\u003EDeepak Chopra\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You do not read a book for the book's sake, but for your own.",
      "a": "Earl Nightingale",
      "c": "61",
      "h": "\u003Cblockquote\u003E&ldquo;You do not read a book for the book's sake, but for your own.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Silence is a source of great strength.",
      "a": "Lao Tzu",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;Silence is a source of great strength.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Giving back involves a certain amount of giving up.",
      "a": "Colin Powell",
      "c": "51",
      "h": "\u003Cblockquote\u003E&ldquo;Giving back involves a certain amount of giving up.&rdquo; &mdash; \u003Cfooter\u003EColin Powell\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Manifest plainness, embrace simplicity, reduce selfishness, have few desires.",
      "a": "Lao Tzu",
      "c": "77",
      "h": "\u003Cblockquote\u003E&ldquo;Manifest plainness, embrace simplicity, reduce selfishness, have few desires.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It doesn't matter what you do, only how well you do it.",
      "a": "Dan Millman",
      "c": "55",
      "h": "\u003Cblockquote\u003E&ldquo;It doesn't matter what you do, only how well you do it.&rdquo; &mdash; \u003Cfooter\u003EDan Millman\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To be truly positive in the eyes of some, you have to risk appearing negative in the eyes of others.",
      "a": "Criss Jami",
      "c": "100",
      "h": "\u003Cblockquote\u003E&ldquo;To be truly positive in the eyes of some, you have to risk appearing negative in the eyes of others.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Love your enemies, for they tell you your faults.",
      "a": "Benjamin Franklin",
      "c": "49",
      "h": "\u003Cblockquote\u003E&ldquo;Love your enemies, for they tell you your faults.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Never be bored, and you will never be boring.",
      "a": "Eleanor Roosevelt",
      "c": "45",
      "h": "\u003Cblockquote\u003E&ldquo;Never be bored, and you will never be boring.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Cease striving. Then there will be transformation.",
      "a": "Zhuangzi",
      "c": "50",
      "h": "\u003Cblockquote\u003E&ldquo;Cease striving. Then there will be transformation.&rdquo; &mdash; \u003Cfooter\u003EZhuangzi\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If no one ever broke the rules, then we'd never advance.",
      "a": "Simon Sinek",
      "c": "56",
      "h": "\u003Cblockquote\u003E&ldquo;If no one ever broke the rules, then we'd never advance.&rdquo; &mdash; \u003Cfooter\u003ESimon Sinek\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To avoid criticism, do nothing, say nothing, and be nothing.",
      "a": "Elbert Hubbard",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;To avoid criticism, do nothing, say nothing, and be nothing.&rdquo; &mdash; \u003Cfooter\u003EElbert Hubbard\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Be regular and orderly in your life, so that you may be violent and original in your work.",
      "a": "Gustave Flaubert",
      "c": "90",
      "h": "\u003Cblockquote\u003E&ldquo;Be regular and orderly in your life, so that you may be violent and original in your work.&rdquo; &mdash; \u003Cfooter\u003EGustave Flaubert\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "No matter what happens, always be yourself.",
      "a": "Dale Carnegie",
      "c": "43",
      "h": "\u003Cblockquote\u003E&ldquo;No matter what happens, always be yourself.&rdquo; &mdash; \u003Cfooter\u003EDale Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Failure is a prerequisite for great success. If you want success faster, double your rate of failure.",
      "a": "Brian Tracy",
      "c": "101",
      "h": "\u003Cblockquote\u003E&ldquo;Failure is a prerequisite for great success. If you want success faster, double your rate of failure.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "New beginnings are disguised as painful endings.",
      "a": "Lao Tzu",
      "c": "48",
      "h": "\u003Cblockquote\u003E&ldquo;New beginnings are disguised as painful endings.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The thing about smart people is that they seem like crazy people to dumb people.",
      "a": "Stephen Hawking",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;The thing about smart people is that they seem like crazy people to dumb people.&rdquo; &mdash; \u003Cfooter\u003EStephen Hawking\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Never allow a person to tell you no who doesn't have the power to say yes.",
      "a": "Eleanor Roosevelt",
      "c": "74",
      "h": "\u003Cblockquote\u003E&ldquo;Never allow a person to tell you no who doesn't have the power to say yes.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To improve is to change, so to be perfect is to change often.",
      "a": "Winston Churchill",
      "c": "61",
      "h": "\u003Cblockquote\u003E&ldquo;To improve is to change, so to be perfect is to change often.&rdquo; &mdash; \u003Cfooter\u003EWinston Churchill\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.",
      "a": "Eckhart Tolle",
      "c": "111",
      "h": "\u003Cblockquote\u003E&ldquo;What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Don't look back - you're not going that way.",
      "a": "Mary Engelbreit",
      "c": "44",
      "h": "\u003Cblockquote\u003E&ldquo;Don't look back - you're not going that way.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "A moving door hinge never corrodes. Flowing water never grows stagnant.",
      "a": "Ming-Dao Deng",
      "c": "71",
      "h": "\u003Cblockquote\u003E&ldquo;A moving door hinge never corrodes. Flowing water never grows stagnant.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To live outside the law, you must be honest. ",
      "a": "Bob Dylan",
      "c": "45",
      "h": "\u003Cblockquote\u003E&ldquo;To live outside the law, you must be honest. &rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Even if our home burns down we can rebuild it. But the things that we got for nothing, we can never replace.",
      "a": "Earl Nightingale",
      "c": "108",
      "h": "\u003Cblockquote\u003E&ldquo;Even if our home burns down we can rebuild it. But the things that we got for nothing, we can never replace.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When you want something in life, you just gotta reach out and grab it.",
      "a": "Christopher McCandless",
      "c": "70",
      "h": "\u003Cblockquote\u003E&ldquo;When you want something in life, you just gotta reach out and grab it.&rdquo; &mdash; \u003Cfooter\u003EChristopher McCandless\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Your purpose will be clear only when you listen to your heart.",
      "a": "Lolly Daskal",
      "c": "62",
      "h": "\u003Cblockquote\u003E&ldquo;Your purpose will be clear only when you listen to your heart.&rdquo; &mdash; \u003Cfooter\u003ELolly Daskal\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Setting goals is the first step in turning the invisible into the visible.",
      "a": "Tony Robbins",
      "c": "74",
      "h": "\u003Cblockquote\u003E&ldquo;Setting goals is the first step in turning the invisible into the visible.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The finish line is just the beginning of a whole new race.",
      "a": "Unknown",
      "c": "58",
      "h": "\u003Cblockquote\u003E&ldquo;The finish line is just the beginning of a whole new race.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Aim for the moon. If you miss, you may hit a star.",
      "a": "W. Clement Stone",
      "c": "50",
      "h": "\u003Cblockquote\u003E&ldquo;Aim for the moon. If you miss, you may hit a star.&rdquo; &mdash; \u003Cfooter\u003EW. Clement Stone\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "All men are equal before fish.",
      "a": "Herbert Hoover",
      "c": "30",
      "h": "\u003Cblockquote\u003E&ldquo;All men are equal before fish.&rdquo; &mdash; \u003Cfooter\u003EHerbert Hoover\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When you are tough on yourself, life is going to be infinitely easier on you.  ",
      "a": "Zig Ziglar",
      "c": "79",
      "h": "\u003Cblockquote\u003E&ldquo;When you are tough on yourself, life is going to be infinitely easier on you.  &rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Change the changeable, accept the unchangeable, and remove yourself from the unacceptable. ",
      "a": "Denis Waitley",
      "c": "91",
      "h": "\u003Cblockquote\u003E&ldquo;Change the changeable, accept the unchangeable, and remove yourself from the unacceptable. &rdquo; &mdash; \u003Cfooter\u003EDenis Waitley\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The more you know, the more you know you don't know.",
      "a": "Aristotle",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;The more you know, the more you know you don't know.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Laziness may appear attractive, but work gives satisfaction.",
      "a": "Anne Frank",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;Laziness may appear attractive, but work gives satisfaction.&rdquo; &mdash; \u003Cfooter\u003EAnne Frank\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Sometimes out of your biggest misery, comes your greatest gain.",
      "a": "Steve Harvey",
      "c": "63",
      "h": "\u003Cblockquote\u003E&ldquo;Sometimes out of your biggest misery, comes your greatest gain.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Convinced myself, I seek not to convince.",
      "a": "Edgar Allan Poe",
      "c": "41",
      "h": "\u003Cblockquote\u003E&ldquo;Convinced myself, I seek not to convince.&rdquo; &mdash; \u003Cfooter\u003EEdgar Allan Poe\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Values are like fingerprints. Nobody's are the same, but you leave 'em all over everything you do.",
      "a": "Elvis Presley",
      "c": "98",
      "h": "\u003Cblockquote\u003E&ldquo;Values are like fingerprints. Nobody's are the same, but you leave 'em all over everything you do.&rdquo; &mdash; \u003Cfooter\u003EElvis Presley\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Nothing is too high for a man to reach, but he must climb with care and confidence",
      "a": "Hans Christian Andersen",
      "c": "82",
      "h": "\u003Cblockquote\u003E&ldquo;Nothing is too high for a man to reach, but he must climb with care and confidence&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you can change your mind, you can change your life.",
      "a": "William James",
      "c": "54",
      "h": "\u003Cblockquote\u003E&ldquo;If you can change your mind, you can change your life.&rdquo; &mdash; \u003Cfooter\u003EWilliam James\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "I'm not afraid of death, but I'm in no hurry to die.",
      "a": "Stephen Hawking",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;I'm not afraid of death, but I'm in no hurry to die.&rdquo; &mdash; \u003Cfooter\u003EStephen Hawking\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If the misery of the poor be caused not by the laws of nature, but by our institutions, great is our sin.",
      "a": "Charles Darwin",
      "c": "105",
      "h": "\u003Cblockquote\u003E&ldquo;If the misery of the poor be caused not by the laws of nature, but by our institutions, great is our sin.&rdquo; &mdash; \u003Cfooter\u003ECharles Darwin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You are never too old to become younger.",
      "a": "Mae West",
      "c": "40",
      "h": "\u003Cblockquote\u003E&ldquo;You are never too old to become younger.&rdquo; &mdash; \u003Cfooter\u003EMae West\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Happiness is an effect of doing what you love, not an end goal to be achieved.",
      "a": "Celestine Chua",
      "c": "78",
      "h": "\u003Cblockquote\u003E&ldquo;Happiness is an effect of doing what you love, not an end goal to be achieved.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The secret of happiness is not in doing what you like but in liking what you have to do.",
      "a": "Sathya Sai Baba",
      "c": "88",
      "h": "\u003Cblockquote\u003E&ldquo;The secret of happiness is not in doing what you like but in liking what you have to do.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Never let the fear of striking out keep you from playing the game.",
      "a": "Babe Ruth",
      "c": "66",
      "h": "\u003Cblockquote\u003E&ldquo;Never let the fear of striking out keep you from playing the game.&rdquo; &mdash; \u003Cfooter\u003EBabe Ruth\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.",
      "a": "Les Brown",
      "c": "108",
      "h": "\u003Cblockquote\u003E&ldquo;Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The smallest act of kindness is worth more than the greatest intention.  ",
      "a": "Kahlil Gibran",
      "c": "73",
      "h": "\u003Cblockquote\u003E&ldquo;The smallest act of kindness is worth more than the greatest intention.  &rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The successful warrior is the average man, with laser-like focus.",
      "a": "Bruce Lee",
      "c": "65",
      "h": "\u003Cblockquote\u003E&ldquo;The successful warrior is the average man, with laser-like focus.&rdquo; &mdash; \u003Cfooter\u003EBruce Lee\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When you know what you want, and want it bad enough, you will find a way to get it.",
      "a": "Jim Rohn",
      "c": "83",
      "h": "\u003Cblockquote\u003E&ldquo;When you know what you want, and want it bad enough, you will find a way to get it.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Success is never final, failure is never fatal. It's courage that counts.",
      "a": "John Wooden",
      "c": "73",
      "h": "\u003Cblockquote\u003E&ldquo;Success is never final, failure is never fatal. It's courage that counts.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "We are all self-made, but only the successful will admit it.",
      "a": "Earl Nightingale",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;We are all self-made, but only the successful will admit it.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Peace is letting it be. Letting life flow, letting emotions flow through you.",
      "a": "Kamal Ravikant",
      "c": "77",
      "h": "\u003Cblockquote\u003E&ldquo;Peace is letting it be. Letting life flow, letting emotions flow through you.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.",
      "a": "Charles Dickens",
      "c": "109",
      "h": "\u003Cblockquote\u003E&ldquo;Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Imagination is more important than knowledge.",
      "a": "Albert Einstein",
      "c": "45",
      "h": "\u003Cblockquote\u003E&ldquo;Imagination is more important than knowledge.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Make your mind your own business.",
      "a": "Jack Butcher",
      "c": "33",
      "h": "\u003Cblockquote\u003E&ldquo;Make your mind your own business.&rdquo; &mdash; \u003Cfooter\u003EJack Butcher\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Be strong. Be confident. Be the star of your own life.",
      "a": "Estee Lauder",
      "c": "54",
      "h": "\u003Cblockquote\u003E&ldquo;Be strong. Be confident. Be the star of your own life.&rdquo; &mdash; \u003Cfooter\u003EEstee Lauder\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "My guiding principle is this: Guilt is never to be doubted. ",
      "a": "Franz Kafka",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;My guiding principle is this: Guilt is never to be doubted. &rdquo; &mdash; \u003Cfooter\u003EFranz Kafka\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Mastering others is strength, mastering yourself is true power.",
      "a": "Lao Tzu",
      "c": "63",
      "h": "\u003Cblockquote\u003E&ldquo;Mastering others is strength, mastering yourself is true power.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Don't learn to do, but learn in doing.",
      "a": "Samuel Butler",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;Don't learn to do, but learn in doing.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Become the kind of leader that people would follow voluntarily, even if you had no title or position.",
      "a": "Brian Tracy",
      "c": "101",
      "h": "\u003Cblockquote\u003E&ldquo;Become the kind of leader that people would follow voluntarily, even if you had no title or position.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You may delay, but time will not.",
      "a": "Benjamin Franklin",
      "c": "33",
      "h": "\u003Cblockquote\u003E&ldquo;You may delay, but time will not.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Relax. Nothing is under control.",
      "a": "Adi Da Samraj",
      "c": "32",
      "h": "\u003Cblockquote\u003E&ldquo;Relax. Nothing is under control.&rdquo; &mdash; \u003Cfooter\u003EAdi Da Samraj\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Success comes to those who become success conscious.",
      "a": "Napoleon Hill",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;Success comes to those who become success conscious.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Any fool can paint a picture, but it takes a wise man to be able to sell it.",
      "a": "Samuel Butler",
      "c": "76",
      "h": "\u003Cblockquote\u003E&ldquo;Any fool can paint a picture, but it takes a wise man to be able to sell it.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. ",
      "a": "Jack London",
      "c": "92",
      "h": "\u003Cblockquote\u003E&ldquo;Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. &rdquo; &mdash; \u003Cfooter\u003EJack London\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Remember we're all in this alone.",
      "a": "Lily Tomlin",
      "c": "33",
      "h": "\u003Cblockquote\u003E&ldquo;Remember we're all in this alone.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Better to have, and not need, than to need, and not have.",
      "a": "Franz Kafka",
      "c": "57",
      "h": "\u003Cblockquote\u003E&ldquo;Better to have, and not need, than to need, and not have.&rdquo; &mdash; \u003Cfooter\u003EFranz Kafka\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Go as far as you can see and you will see further.  ",
      "a": "Zig Ziglar",
      "c": "52",
      "h": "\u003Cblockquote\u003E&ldquo;Go as far as you can see and you will see further.  &rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It's easy to be a critic, but being a doer requires effort, risk, and change.  ",
      "a": "Wayne Dyer",
      "c": "79",
      "h": "\u003Cblockquote\u003E&ldquo;It's easy to be a critic, but being a doer requires effort, risk, and change.  &rdquo; &mdash; \u003Cfooter\u003EWayne Dyer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Without the rain there would be no rainbow.",
      "a": "Gilbert Chesterton",
      "c": "43",
      "h": "\u003Cblockquote\u003E&ldquo;Without the rain there would be no rainbow.&rdquo; &mdash; \u003Cfooter\u003EGilbert Chesterton\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Success is getting what you want... Happiness is wanting what you get.",
      "a": "Dale Carnegie",
      "c": "70",
      "h": "\u003Cblockquote\u003E&ldquo;Success is getting what you want... Happiness is wanting what you get.&rdquo; &mdash; \u003Cfooter\u003EDale Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Words used to attract the dull of wit are not to be relied on.",
      "a": "Huang Po",
      "c": "62",
      "h": "\u003Cblockquote\u003E&ldquo;Words used to attract the dull of wit are not to be relied on.&rdquo; &mdash; \u003Cfooter\u003EHuang Po\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Every man is guilty of all the good he did not do. ",
      "a": "Voltaire",
      "c": "51",
      "h": "\u003Cblockquote\u003E&ldquo;Every man is guilty of all the good he did not do. &rdquo; &mdash; \u003Cfooter\u003EVoltaire\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
      "a": "Theodore Roosevelt",
      "c": "109",
      "h": "\u003Cblockquote\u003E&ldquo;If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.&rdquo; &mdash; \u003Cfooter\u003ETheodore Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Life does not get better by chance, it gets better by change.",
      "a": "Jim Rohn",
      "c": "61",
      "h": "\u003Cblockquote\u003E&ldquo;Life does not get better by chance, it gets better by change.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
    "q": "Until you change how you get things done, you'll never know what works best.",
    "a": "Roy T. Bennett",
    "c": "76",
    "h": "\u003Cblockquote\u003E&ldquo;Until you change how you get things done, you'll never know what works best.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The Only Thing That Is Constant Is Change",
    "a": "Heraclitus",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The Only Thing That Is Constant Is Change&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Stop wasting time defending your problems and work on addressing them instead.",
    "a": "Celestine Chua",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;Stop wasting time defending your problems and work on addressing them instead.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you can't make them see the light, make them feel the heat.",
    "a": "Ronald Reagan",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;When you can't make them see the light, make them feel the heat.&rdquo; &mdash; \u003Cfooter\u003ERonald Reagan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A comfort zone is a beautiful place, but nothing ever grows there.",
    "a": "Unknown",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;A comfort zone is a beautiful place, but nothing ever grows there.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life may be full of pain but that's not an excuse to give up.",
    "a": "Arnold Schwarzenegger",
    "c": "61",
    "h": "\u003Cblockquote\u003E&ldquo;Life may be full of pain but that's not an excuse to give up.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do not think you will necessarily be aware of your own enlightenment.",
    "a": "Dogen",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;Do not think you will necessarily be aware of your own enlightenment.&rdquo; &mdash; \u003Cfooter\u003EDogen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "While we may not be able to control all that happens to us, we can control what happens inside us.",
    "a": "Benjamin Franklin",
    "c": "98",
    "h": "\u003Cblockquote\u003E&ldquo;While we may not be able to control all that happens to us, we can control what happens inside us.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Ancient Rule of Twenty-one: if you do anything for twenty-one days in a row, it will be installed as a habit.",
    "a": "Robin Sharma",
    "c": "109",
    "h": "\u003Cblockquote\u003E&ldquo;Ancient Rule of Twenty-one: if you do anything for twenty-one days in a row, it will be installed as a habit.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All I can do is be me, whoever that is.",
    "a": "Bob Dylan",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;All I can do is be me, whoever that is.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If I can laugh, I can live.",
    "a": "Christopher Reeve",
    "c": "27",
    "h": "\u003Cblockquote\u003E&ldquo;If I can laugh, I can live.&rdquo; &mdash; \u003Cfooter\u003EChristopher Reeve\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    "a": "Epictetus",
    "c": "102",
    "h": "\u003Cblockquote\u003E&ldquo;Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.&rdquo; &mdash; \u003Cfooter\u003EEpictetus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Simplicity is a difficult thing to achieve.  ",
    "a": "Charlie Chaplin",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Simplicity is a difficult thing to achieve.  &rdquo; &mdash; \u003Cfooter\u003ECharlie Chaplin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are always your own best guru, your own best teacher, the answers are always inside you.",
    "a": "Sathya Sai Baba",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;You are always your own best guru, your own best teacher, the answers are always inside you.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The happiest people in the world are those who feel absolutely terrific about themselves.",
    "a": "Brian Tracy",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;The happiest people in the world are those who feel absolutely terrific about themselves.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Winners are not people who never fail, but people who never quit.",
    "a": "Arnold Schwarzenegger",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;Winners are not people who never fail, but people who never quit.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "20 percent of your activities will account for 80 percent of your results.",
    "a": "Brian Tracy",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;20 percent of your activities will account for 80 percent of your results.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is simply what our feelings do to us.",
    "a": "Honore de Balzac",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Life is simply what our feelings do to us.&rdquo; &mdash; \u003Cfooter\u003EHonore de Balzac\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.",
    "a": "John Tukey",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.&rdquo; &mdash; \u003Cfooter\u003EJohn Tukey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.",
    "a": "Sydney Smith",
    "c": "124",
    "h": "\u003Cblockquote\u003E&ldquo;Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.&rdquo; &mdash; \u003Cfooter\u003ESydney Smith\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To himself everyone is immortal; he may know that he is going to die, but he can never know he is dead.",
    "a": "Samuel Butler",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;To himself everyone is immortal; he may know that he is going to die, but he can never know he is dead.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    "a": "Thich Nhat Hanh",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To find yourself, think for yourself.",
    "a": "Socrates",
    "c": "37",
    "h": "\u003Cblockquote\u003E&ldquo;To find yourself, think for yourself.&rdquo; &mdash; \u003Cfooter\u003ESocrates\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.",
    "a": "Thomas Jefferson",
    "c": "119",
    "h": "\u003Cblockquote\u003E&ldquo;Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.&rdquo; &mdash; \u003Cfooter\u003EThomas Jefferson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you take responsibility for yourself you will develop a hunger to accomplish your dream.",
    "a": "Les Brown",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;If you take responsibility for yourself you will develop a hunger to accomplish your dream.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone. ",
    "a": "Orison Swett Marden",
    "c": "163",
    "h": "\u003Cblockquote\u003E&ldquo;The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone. &rdquo; &mdash; \u003Cfooter\u003EOrison Swett Marden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only thing we have to fear is fear itself.",
    "a": "Franklin D. Roosevelt",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;The only thing we have to fear is fear itself.&rdquo; &mdash; \u003Cfooter\u003EFranklin D. Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Confidence comes from crossing thresholds.",
    "a": "Kamal Ravikant",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Confidence comes from crossing thresholds.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A crisis is an opportunity riding the dangerous wind.",
    "a": "Chinese Proverb",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;A crisis is an opportunity riding the dangerous wind.&rdquo; &mdash; \u003Cfooter\u003EChinese Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You can tell more about a person by what he says about others than you can by what others say about him.",
    "a": "Audrey Hepburn",
    "c": "104",
    "h": "\u003Cblockquote\u003E&ldquo;You can tell more about a person by what he says about others than you can by what others say about him.&rdquo; &mdash; \u003Cfooter\u003EAudrey Hepburn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There are more people who wish to be loved than there are who are willing to love. ",
    "a": "Nicolas Chamfort",
    "c": "83",
    "h": "\u003Cblockquote\u003E&ldquo;There are more people who wish to be loved than there are who are willing to love. &rdquo; &mdash; \u003Cfooter\u003ENicolas Chamfort\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become.",
    "a": "Paramahansa Yogananda",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become.&rdquo; &mdash; \u003Cfooter\u003EParamahansa Yogananda\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
    "a": "Eckhart Tolle",
    "c": "116",
    "h": "\u003Cblockquote\u003E&ldquo;You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.",
    "a": "Robert Greene",
    "c": "97",
    "h": "\u003Cblockquote\u003E&ldquo;What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You know the more one does the more one can do.",
    "a": "Amelia Earhart",
    "c": "47",
    "h": "\u003Cblockquote\u003E&ldquo;You know the more one does the more one can do.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Knowledge isn't power until it is applied.",
    "a": "Dale Carnegie",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Knowledge isn't power until it is applied.&rdquo; &mdash; \u003Cfooter\u003EDale Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Wise men speak because they have something to say; Fools because they have to say something.",
    "a": "Plato",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Wise men speak because they have something to say; Fools because they have to say something.&rdquo; &mdash; \u003Cfooter\u003EPlato\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life itself is the most wonderful fairy tale.",
    "a": "Hans Christian Andersen",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Life itself is the most wonderful fairy tale.&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Those who cannot change their minds cannot change anything.",
    "a": "George Bernard Shaw",
    "c": "59",
    "h": "\u003Cblockquote\u003E&ldquo;Those who cannot change their minds cannot change anything.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more people you help become successful the more successful you become.",
    "a": "Steve Harvey",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The more people you help become successful the more successful you become.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The most tragic thing in the world is a man of genius who is not a man of honor.",
    "a": "George Bernard Shaw",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;The most tragic thing in the world is a man of genius who is not a man of honor.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What is planted in each person's soul will sprout.  ",
    "a": "Rumi",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;What is planted in each person's soul will sprout.  &rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is far easier to start something than it is to finish it.",
    "a": "Amelia Earhart",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;It is far easier to start something than it is to finish it.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is better to fail in originality than to succeed in imitation.",
    "a": "Herman Melville",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;It is better to fail in originality than to succeed in imitation.&rdquo; &mdash; \u003Cfooter\u003EHerman Melville\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You must find the place inside yourself where nothing is impossible.",
    "a": "Les Brown",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;You must find the place inside yourself where nothing is impossible.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It does not do to dwell on dreams and forget to live, remember that.",
    "a": "Albus Dumbledore",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;It does not do to dwell on dreams and forget to live, remember that.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is very obvious that we are not influenced by 'facts' but by our interpretation of the facts.",
    "a": "Alfred Adler",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;It is very obvious that we are not influenced by 'facts' but by our interpretation of the facts.&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is but one dream flowing into another.",
    "a": "Ming-Dao Deng",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Life is but one dream flowing into another.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A Hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.",
    "a": "Christopher Reeve",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;A Hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.&rdquo; &mdash; \u003Cfooter\u003EChristopher Reeve\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you're not making mistakes, then you're not doing anything.",
    "a": "John Wooden",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;If you're not making mistakes, then you're not doing anything.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Until you change how you get things done, you'll never know what works best.",
    "a": "Roy T. Bennett",
    "c": "76",
    "h": "\u003Cblockquote\u003E&ldquo;Until you change how you get things done, you'll never know what works best.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The Only Thing That Is Constant Is Change",
    "a": "Heraclitus",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The Only Thing That Is Constant Is Change&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Stop wasting time defending your problems and work on addressing them instead.",
    "a": "Celestine Chua",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;Stop wasting time defending your problems and work on addressing them instead.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you can't make them see the light, make them feel the heat.",
    "a": "Ronald Reagan",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;When you can't make them see the light, make them feel the heat.&rdquo; &mdash; \u003Cfooter\u003ERonald Reagan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A comfort zone is a beautiful place, but nothing ever grows there.",
    "a": "Unknown",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;A comfort zone is a beautiful place, but nothing ever grows there.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life may be full of pain but that's not an excuse to give up.",
    "a": "Arnold Schwarzenegger",
    "c": "61",
    "h": "\u003Cblockquote\u003E&ldquo;Life may be full of pain but that's not an excuse to give up.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do not think you will necessarily be aware of your own enlightenment.",
    "a": "Dogen",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;Do not think you will necessarily be aware of your own enlightenment.&rdquo; &mdash; \u003Cfooter\u003EDogen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "While we may not be able to control all that happens to us, we can control what happens inside us.",
    "a": "Benjamin Franklin",
    "c": "98",
    "h": "\u003Cblockquote\u003E&ldquo;While we may not be able to control all that happens to us, we can control what happens inside us.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Ancient Rule of Twenty-one: if you do anything for twenty-one days in a row, it will be installed as a habit.",
    "a": "Robin Sharma",
    "c": "109",
    "h": "\u003Cblockquote\u003E&ldquo;Ancient Rule of Twenty-one: if you do anything for twenty-one days in a row, it will be installed as a habit.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All I can do is be me, whoever that is.",
    "a": "Bob Dylan",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;All I can do is be me, whoever that is.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If I can laugh, I can live.",
    "a": "Christopher Reeve",
    "c": "27",
    "h": "\u003Cblockquote\u003E&ldquo;If I can laugh, I can live.&rdquo; &mdash; \u003Cfooter\u003EChristopher Reeve\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    "a": "Epictetus",
    "c": "102",
    "h": "\u003Cblockquote\u003E&ldquo;Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.&rdquo; &mdash; \u003Cfooter\u003EEpictetus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Simplicity is a difficult thing to achieve.  ",
    "a": "Charlie Chaplin",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Simplicity is a difficult thing to achieve.  &rdquo; &mdash; \u003Cfooter\u003ECharlie Chaplin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are always your own best guru, your own best teacher, the answers are always inside you.",
    "a": "Sathya Sai Baba",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;You are always your own best guru, your own best teacher, the answers are always inside you.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The happiest people in the world are those who feel absolutely terrific about themselves.",
    "a": "Brian Tracy",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;The happiest people in the world are those who feel absolutely terrific about themselves.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Winners are not people who never fail, but people who never quit.",
    "a": "Arnold Schwarzenegger",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;Winners are not people who never fail, but people who never quit.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "20 percent of your activities will account for 80 percent of your results.",
    "a": "Brian Tracy",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;20 percent of your activities will account for 80 percent of your results.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is simply what our feelings do to us.",
    "a": "Honore de Balzac",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Life is simply what our feelings do to us.&rdquo; &mdash; \u003Cfooter\u003EHonore de Balzac\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.",
    "a": "John Tukey",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.&rdquo; &mdash; \u003Cfooter\u003EJohn Tukey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.",
    "a": "Sydney Smith",
    "c": "124",
    "h": "\u003Cblockquote\u003E&ldquo;Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.&rdquo; &mdash; \u003Cfooter\u003ESydney Smith\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To himself everyone is immortal; he may know that he is going to die, but he can never know he is dead.",
    "a": "Samuel Butler",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;To himself everyone is immortal; he may know that he is going to die, but he can never know he is dead.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    "a": "Thich Nhat Hanh",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To find yourself, think for yourself.",
    "a": "Socrates",
    "c": "37",
    "h": "\u003Cblockquote\u003E&ldquo;To find yourself, think for yourself.&rdquo; &mdash; \u003Cfooter\u003ESocrates\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.",
    "a": "Thomas Jefferson",
    "c": "119",
    "h": "\u003Cblockquote\u003E&ldquo;Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.&rdquo; &mdash; \u003Cfooter\u003EThomas Jefferson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you take responsibility for yourself you will develop a hunger to accomplish your dream.",
    "a": "Les Brown",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;If you take responsibility for yourself you will develop a hunger to accomplish your dream.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone. ",
    "a": "Orison Swett Marden",
    "c": "163",
    "h": "\u003Cblockquote\u003E&ldquo;The golden opportunity you are seeking is in yourself. It is not in your environment; it is not in luck or chance, or the help of others; it is in yourself alone. &rdquo; &mdash; \u003Cfooter\u003EOrison Swett Marden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only thing we have to fear is fear itself.",
    "a": "Franklin D. Roosevelt",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;The only thing we have to fear is fear itself.&rdquo; &mdash; \u003Cfooter\u003EFranklin D. Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Confidence comes from crossing thresholds.",
    "a": "Kamal Ravikant",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Confidence comes from crossing thresholds.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A crisis is an opportunity riding the dangerous wind.",
    "a": "Chinese Proverb",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;A crisis is an opportunity riding the dangerous wind.&rdquo; &mdash; \u003Cfooter\u003EChinese Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You can tell more about a person by what he says about others than you can by what others say about him.",
    "a": "Audrey Hepburn",
    "c": "104",
    "h": "\u003Cblockquote\u003E&ldquo;You can tell more about a person by what he says about others than you can by what others say about him.&rdquo; &mdash; \u003Cfooter\u003EAudrey Hepburn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There are more people who wish to be loved than there are who are willing to love. ",
    "a": "Nicolas Chamfort",
    "c": "83",
    "h": "\u003Cblockquote\u003E&ldquo;There are more people who wish to be loved than there are who are willing to love. &rdquo; &mdash; \u003Cfooter\u003ENicolas Chamfort\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become.",
    "a": "Paramahansa Yogananda",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become.&rdquo; &mdash; \u003Cfooter\u003EParamahansa Yogananda\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
    "a": "Eckhart Tolle",
    "c": "116",
    "h": "\u003Cblockquote\u003E&ldquo;You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.",
    "a": "Robert Greene",
    "c": "97",
    "h": "\u003Cblockquote\u003E&ldquo;What kills the creative force is not age or lack of talent, but our own spirit, our own attitude.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You know the more one does the more one can do.",
    "a": "Amelia Earhart",
    "c": "47",
    "h": "\u003Cblockquote\u003E&ldquo;You know the more one does the more one can do.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Knowledge isn't power until it is applied.",
    "a": "Dale Carnegie",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Knowledge isn't power until it is applied.&rdquo; &mdash; \u003Cfooter\u003EDale Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Wise men speak because they have something to say; Fools because they have to say something.",
    "a": "Plato",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Wise men speak because they have something to say; Fools because they have to say something.&rdquo; &mdash; \u003Cfooter\u003EPlato\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life itself is the most wonderful fairy tale.",
    "a": "Hans Christian Andersen",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Life itself is the most wonderful fairy tale.&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Those who cannot change their minds cannot change anything.",
    "a": "George Bernard Shaw",
    "c": "59",
    "h": "\u003Cblockquote\u003E&ldquo;Those who cannot change their minds cannot change anything.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more people you help become successful the more successful you become.",
    "a": "Steve Harvey",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The more people you help become successful the more successful you become.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The most tragic thing in the world is a man of genius who is not a man of honor.",
    "a": "George Bernard Shaw",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;The most tragic thing in the world is a man of genius who is not a man of honor.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What is planted in each person's soul will sprout.  ",
    "a": "Rumi",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;What is planted in each person's soul will sprout.  &rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is far easier to start something than it is to finish it.",
    "a": "Amelia Earhart",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;It is far easier to start something than it is to finish it.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is better to fail in originality than to succeed in imitation.",
    "a": "Herman Melville",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;It is better to fail in originality than to succeed in imitation.&rdquo; &mdash; \u003Cfooter\u003EHerman Melville\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You must find the place inside yourself where nothing is impossible.",
    "a": "Les Brown",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;You must find the place inside yourself where nothing is impossible.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It does not do to dwell on dreams and forget to live, remember that.",
    "a": "Albus Dumbledore",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;It does not do to dwell on dreams and forget to live, remember that.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is very obvious that we are not influenced by 'facts' but by our interpretation of the facts.",
    "a": "Alfred Adler",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;It is very obvious that we are not influenced by 'facts' but by our interpretation of the facts.&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is but one dream flowing into another.",
    "a": "Ming-Dao Deng",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Life is but one dream flowing into another.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A Hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.",
    "a": "Christopher Reeve",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;A Hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.&rdquo; &mdash; \u003Cfooter\u003EChristopher Reeve\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you're not making mistakes, then you're not doing anything.",
    "a": "John Wooden",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;If you're not making mistakes, then you're not doing anything.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is only depth of character that determines the profundity with which we face life.",
    "a": "Ming-Dao Deng",
    "c": "85",
    "h": "\u003Cblockquote\u003E&ldquo;It is only depth of character that determines the profundity with which we face life.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The measure of wisdom is how calm you are when facing any given situation.",
    "a": "Naval Ravikant",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The measure of wisdom is how calm you are when facing any given situation.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only people without problems are those in cemeteries.",
    "a": "Tony Robbins",
    "c": "57",
    "h": "\u003Cblockquote\u003E&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Love is the absence of judgment.",
    "a": "Dalai Lama",
    "c": "32",
    "h": "\u003Cblockquote\u003E&ldquo;Love is the absence of judgment.&rdquo; &mdash; \u003Cfooter\u003EDalai Lama\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There are no second chances in life, except to feel remorse.",
    "a": "Carlos Ruiz Zafon",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;There are no second chances in life, except to feel remorse.&rdquo; &mdash; \u003Cfooter\u003ECarlos Ruiz Zafon\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There is a cosmic law which says that every satisfaction must be paid for with a dissatisfaction.",
    "a": "G.I. Gurdjieff",
    "c": "97",
    "h": "\u003Cblockquote\u003E&ldquo;There is a cosmic law which says that every satisfaction must be paid for with a dissatisfaction.&rdquo; &mdash; \u003Cfooter\u003EG.I. Gurdjieff\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The decisions of our past are the architects of our present.",
    "a": "Dan Brown",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;The decisions of our past are the architects of our present.&rdquo; &mdash; \u003Cfooter\u003EDan Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everything is in your own heart.",
    "a": "Thich Nhat Hanh",
    "c": "32",
    "h": "\u003Cblockquote\u003E&ldquo;Everything is in your own heart.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The best mind-altering drug is the truth.",
    "a": "Lily Tomlin",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The best mind-altering drug is the truth.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Take away love and our earth is a tomb.",
    "a": "Robert Browning",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;Take away love and our earth is a tomb.&rdquo; &mdash; \u003Cfooter\u003ERobert Browning\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We can know only that we know nothing. And that is the highest degree of human wisdom.",
    "a": "Leo Tolstoy",
    "c": "86",
    "h": "\u003Cblockquote\u003E&ldquo;We can know only that we know nothing. And that is the highest degree of human wisdom.&rdquo; &mdash; \u003Cfooter\u003ELeo Tolstoy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "True it is, we only hate those whom we do not know.",
    "a": "Andrew Carnegie",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;True it is, we only hate those whom we do not know.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you know what you want, and you want it bad enough, you will find a way to get it.",
    "a": "Jim Rohn",
    "c": "87",
    "h": "\u003Cblockquote\u003E&ldquo;When you know what you want, and you want it bad enough, you will find a way to get it.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We have to live life with a sense of urgency so not a minute is wasted.",
    "a": "Les Brown",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;We have to live life with a sense of urgency so not a minute is wasted.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    "a": "Alan Watts",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;The only way to make sense out of change is to plunge into it, move with it, and join the dance.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Many roads lead to the path, but basically there are only two: reason and practice. ",
    "a": "Bodhidharma",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Many roads lead to the path, but basically there are only two: reason and practice. &rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There can be no deep disappointment where there is not deep love.",
    "a": "Martin Luther King, Jr.",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;There can be no deep disappointment where there is not deep love.&rdquo; &mdash; \u003Cfooter\u003EMartin Luther King, Jr.\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To perceive is to suffer.",
    "a": "Aristotle",
    "c": "25",
    "h": "\u003Cblockquote\u003E&ldquo;To perceive is to suffer.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If life is a video game, the graphics are great, but the plot is confusing and the tutorial is way too long.",
    "a": "Elon Musk",
    "c": "108",
    "h": "\u003Cblockquote\u003E&ldquo;If life is a video game, the graphics are great, but the plot is confusing and the tutorial is way too long.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Without the confidence, nothing can be accomplished.",
    "a": "Sathya Sai Baba",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;Without the confidence, nothing can be accomplished.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Many people will walk in and out of your life, but only true friends will leave footprints in your heart.",
    "a": "Eleanor Roosevelt",
    "c": "105",
    "h": "\u003Cblockquote\u003E&ldquo;Many people will walk in and out of your life, but only true friends will leave footprints in your heart.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When angry count to ten before you speak. If very angry, count to one hundred.",
    "a": "Thomas Jefferson",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;When angry count to ten before you speak. If very angry, count to one hundred.&rdquo; &mdash; \u003Cfooter\u003EThomas Jefferson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To improve is to change, so to be perfect is to change often.",
    "a": "Winston Churchill",
    "c": "61",
    "h": "\u003Cblockquote\u003E&ldquo;To improve is to change, so to be perfect is to change often.&rdquo; &mdash; \u003Cfooter\u003EWinston Churchill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The goal is not to show how great you are to others, but how vulnerable you are to yourself.",
    "a": "Maxime Lagace",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;The goal is not to show how great you are to others, but how vulnerable you are to yourself.&rdquo; &mdash; \u003Cfooter\u003EMaxime Lagace\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The health of nations is more important than the wealth of nations.",
    "a": "Will Rogers",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;The health of nations is more important than the wealth of nations.&rdquo; &mdash; \u003Cfooter\u003EWill Rogers\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don´t hesitate or allow yourself to make excuses. Just get out and do it.",
    "a": "Christopher McCandless",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;Don´t hesitate or allow yourself to make excuses. Just get out and do it.&rdquo; &mdash; \u003Cfooter\u003EChristopher McCandless\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
    "a": "Elon Musk",
    "c": "146",
    "h": "\u003Cblockquote\u003E&ldquo;I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If what you're doing is not your passion, you have nothing to lose.",
    "a": "Celestine Chua",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;If what you're doing is not your passion, you have nothing to lose.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is just the same as learning to swim. Do not be afraid of making mistakes, for there is no other way of learning how to live!",
    "a": "Alfred Adler",
    "c": "130",
    "h": "\u003Cblockquote\u003E&ldquo;Life is just the same as learning to swim. Do not be afraid of making mistakes, for there is no other way of learning how to live!&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "No snowflake ever falls in the wrong place.",
    "a": "Zen Proverb",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;No snowflake ever falls in the wrong place.&rdquo; &mdash; \u003Cfooter\u003EZen Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Keep true. Never be ashamed of doing right. Decide what you think is right and stick to it.",
    "a": "George Eliot",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;Keep true. Never be ashamed of doing right. Decide what you think is right and stick to it.&rdquo; &mdash; \u003Cfooter\u003EGeorge Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never to suffer would never to have been blessed.",
    "a": "Edgar Allan Poe",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;Never to suffer would never to have been blessed.&rdquo; &mdash; \u003Cfooter\u003EEdgar Allan Poe\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Let not your mind run on what you lack as much as on what you have already.",
    "a": "Marcus Aurelius",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Let not your mind run on what you lack as much as on what you have already.&rdquo; &mdash; \u003Cfooter\u003EMarcus Aurelius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You don't have to move mountains. You'll change the world simply by being a warm, kind-hearted human being.",
    "a": "Anita Krizzan",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;You don't have to move mountains. You'll change the world simply by being a warm, kind-hearted human being.&rdquo; &mdash; \u003Cfooter\u003EAnita Krizzan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The wise speak only of what they know.",
    "a": "J.R.R. Tolkien",
    "c": "38",
    "h": "\u003Cblockquote\u003E&ldquo;The wise speak only of what they know.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you judge others, you do not define them, you define yourself.",
    "a": "Earl Nightingale",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;When you judge others, you do not define them, you define yourself.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you see someone without a smile give them one of yours.",
    "a": "Unknown",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;If you see someone without a smile give them one of yours.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If anything is worth doing, do it with all your heart.",
    "a": "Buddha",
    "c": "54",
    "h": "\u003Cblockquote\u003E&ldquo;If anything is worth doing, do it with all your heart.&rdquo; &mdash; \u003Cfooter\u003EBuddha\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Talk does not cook rice.",
    "a": "Chinese Proverb",
    "c": "24",
    "h": "\u003Cblockquote\u003E&ldquo;Talk does not cook rice.&rdquo; &mdash; \u003Cfooter\u003EChinese Proverb\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Great things are not accomplished by those who yield to trends and fads and popular opinion.",
    "a": "Jack Kerouac",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Great things are not accomplished by those who yield to trends and fads and popular opinion.&rdquo; &mdash; \u003Cfooter\u003EJack Kerouac\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Throw your heart over the bar and your body will follow.",
    "a": "Norman Vincent Peale",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Throw your heart over the bar and your body will follow.&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Reading should be a pleasure, not a chore.",
    "a": "Joan Rivers",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Reading should be a pleasure, not a chore.&rdquo; &mdash; \u003Cfooter\u003EJoan Rivers\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The secret of perfect health lies in keeping the mind always cheerful - never worried, never hurried, never borne down by any fear, thought or anxiety.",
    "a": "Sathya Sai Baba",
    "c": "151",
    "h": "\u003Cblockquote\u003E&ldquo;The secret of perfect health lies in keeping the mind always cheerful - never worried, never hurried, never borne down by any fear, thought or anxiety.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "How you think is as important as as what you think.",
    "a": "Unknown",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;How you think is as important as as what you think.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It's the possibility of having a dream come true that makes life interesting.",
    "a": "Paulo Coelho",
    "c": "77",
    "h": "\u003Cblockquote\u003E&ldquo;It's the possibility of having a dream come true that makes life interesting.&rdquo; &mdash; \u003Cfooter\u003EPaulo Coelho\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Passion is born deaf and dumb.",
    "a": "Honore de Balzac",
    "c": "30",
    "h": "\u003Cblockquote\u003E&ldquo;Passion is born deaf and dumb.&rdquo; &mdash; \u003Cfooter\u003EHonore de Balzac\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Some of us learn from other people's mistakes and the rest of us have to be other people.  ",
    "a": "Zig Ziglar",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;Some of us learn from other people's mistakes and the rest of us have to be other people.  &rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.",
    "a": "Ming-Dao Deng",
    "c": "111",
    "h": "\u003Cblockquote\u003E&ldquo;Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Definiteness of purpose is the starting point of all achievement. ",
    "a": "W. Clement Stone",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;Definiteness of purpose is the starting point of all achievement. &rdquo; &mdash; \u003Cfooter\u003EW. Clement Stone\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you've got nothing, you've got nothing to lose.",
    "a": "Bob Dylan",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;When you've got nothing, you've got nothing to lose.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  }
]

module.exports = {quotes}