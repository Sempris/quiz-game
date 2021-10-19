const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('#answer-buttons');
const winningPool = document.getElementById('winning');
const checkBoxOutput = document.getElementById('checkbox');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.setAttribute('data-correct', answer.correct);
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.insertAdjacentElement('beforeend', button);
    })
    winningPool.innerText = `🏆 ${counter} 🪙`;
}

function resetState() {
    clearStatusClass(document.body);
    checkBoxOutput.innerText = '';
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
let counter = 0;
function counting() {
    return function () {
        counter += 100;
        return counter;
    }
}
let callCounter = counting();

var img = document.createElement("img");

function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedData = selectedButton.dataset.correct;
    if (selectedData === 'true') {
        winningPool.innerText = `🏆 ${callCounter()} 🪙`;
        img.src = "yes.gif";
        checkBoxOutput.appendChild(img);
    }
    else {
        img.src = "no.gif";
        checkBoxOutput.appendChild(img);
    }
    [...answerButtonsElement.children].forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        else {
            button.classList.add('wrong');
        }
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.add('re');
        counter = 0;
        startButton.classList.remove('hide');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'A person with well-developed abdominal muscles is said to have a what?',
        answers: [
            { text: 'A: One-pack', correct: false },
            { text: 'B: Six-Pack', correct: true },
            { text: 'C: 12-pack', correct: false },
            { text: 'D: Family-pack', correct: false }
        ]
    },
    {
        question: 'Which two words traditionally appear onscreen at the termination of a feature film?',
        answers: [
            { text: 'A: The End', correct: true },
            { text: 'B: The Conclusion', correct: false },
            { text: 'C: The Finish', correct: false },
            { text: 'D: The Pizza Rolls Are Done', correct: false }
        ]
    },
    {
        question: 'A magnet would most likely attract which of the following?',
        answers: [
            { text: 'A: Metal', correct: true },
            { text: 'B: Plastic', correct: false },
            { text: 'C: Wood', correct: false },
            { text: 'D: The wrong man', correct: false }
        ]
    },
    {
        question: 'Which of these names is not in the title of a Shakespeare play?',
        answers: [
            { text: 'A: Hamlet', correct: false },
            { text: 'B: Romeo', correct: false },
            { text: 'C: Macbeth', correct: false },
            { text: 'D: Darren', correct: true }
        ]
    },
    {
        question: 'Where did Scotch whisky originate?',
        answers: [
            { text: 'A: Ireland', correct: false },
            { text: 'B: Wales', correct: false },
            { text: 'C: The United States', correct: false },
            { text: 'D: Scotland', correct: true }
        ]
    },
    {
        question: 'What name is traditionally given to the party held for a woman who is expecting a baby?',
        answers: [
            { text: 'A: Baby drizzle', correct: false },
            { text: 'B: Baby shower', correct: true },
            { text: 'C: Baby downpour', correct: false },
            { text: 'D: Baby deluge', correct: false }
        ]
    },
    {
        question: 'In fancy hotels, it is traditional for what tantalizing treat to be left on your pillow?',
        answers: [
            { text: 'A: A pretzel', correct: false },
            { text: 'B: An apple', correct: false },
            { text: 'C: A mint', correct: true },
            { text: 'D: A photo of Wolf Blitzer', correct: false }
        ]
    },
    {
        question: 'In the United States, what is traditionally the proper way to address a judge?',
        answers: [
            { text: 'A: Your holiness', correct: false },
            { text: 'B: Your honor', correct: true },
            { text: 'C: Your eminence', correct: false },
            { text: 'D: You da man!', correct: false }
        ]
    },
    {
        question: 'Which of these pairs of apps offers roughly the same type of service?',
        answers: [
            { text: 'A: Snapchat and Grubhub', correct: false },
            { text: 'B: Whatsapp and SHAREit', correct: false },
            { text: 'C: TikTok and Spotify', correct: false },
            { text: 'D: Lyft and Uber', correct: true }
        ]
    },
    {
        question: 'The popular children\'s song "It\'s Raining, It\'s Pouring" mentions an "old man" doing what?',
        answers: [
            { text: 'A: Snoring', correct: true },
            { text: 'B: Cooking', correct: false },
            { text: 'C: Laughing', correct: false },
            { text: 'D: Yelling at squirrels', correct: false }
        ]
    },
    {
        question: 'At a restaurant, someone who "foots the bill" does what?',
        answers: [
            { text: 'A: Kisses it', correct: false },
            { text: 'B: Rips it up', correct: false },
            { text: 'C: Hopes to get lucky', correct: false },
            { text: 'D: Pays it', correct: true }
        ]
    },
    {
        question: 'In which of these films does Whoopi Goldberg dress up as a nun?',
        answers: [
            { text: 'A: Sister Act', correct: true },
            { text: 'B: Ghost', correct: false },
            { text: 'C: The Color Purple', correct: false },
            { text: 'D: How Judas Got His Groove Back', correct: false }
        ]
    },
    {
        question: 'If someone asked to see your ID, what might you show them?',
        answers: [
            { text: 'A: Your tongue', correct: false },
            { text: 'B: Your teeth', correct: false },
            { text: 'C: Your passport', correct: true },
            { text: 'D: The door', correct: false }
        ]
    },
    {
        question: 'According to a common phrase, a person who takes chances is "going out on a" what?',
        answers: [
            { text: 'A: Limb', correct: true },
            { text: 'B: Horse', correct: false },
            { text: 'C: Skateboard', correct: false },
            { text: 'D: Nude beach', correct: false }
        ]
    },
    {
        question: 'Due to the geographical areas they represented, the opposing sides of the US Civil War were known by what names?',
        answers: [
            { text: 'A: The Hills and the Valleys', correct: false },
            { text: 'B: The Cities and the Farms', correct: false },
            { text: 'C: The North and the South', correct: true },
            { text: 'D: The Kool and the Gang', correct: false }
        ]
    },
    {
        question: 'According to the old saying, "love of" what "is the root of all evil"?',
        answers: [
            { text: 'A: Food', correct: false },
            { text: 'B: Money', correct: true },
            { text: 'C: Clothing', correct: false },
            { text: 'D: Reality television', correct: false }
        ]
    },
    {
        question: 'A geologist would likely be LEAST helpful for answering questions about which of the following?',
        answers: [
            { text: 'A: Granite boulders', correct: false },
            { text: 'B: Precious stones', correct: false },
            { text: 'C: Igneous rocks', correct: false },
            { text: 'D: Fruity Pebbles', correct: true }
        ]
    },
    {
        question: 'A feisty train is the hero of a classic children\'s book titled The Little Engine That what?',
        answers: [
            { text: 'A: Ran', correct: false },
            { text: 'B: Cried', correct: false },
            { text: 'C: Could', correct: true },
            { text: 'D: Opened a can of whupass', correct: false }
        ]
    },
    {
        question: 'A person who is not a banker and lends money at an extremely high interest rate is known as what?',
        answers: [
            { text: 'A: Loan shark', correct: true },
            { text: 'B: Green snake', correct: false },
            { text: 'C: Paper tiger', correct: false },
            { text: 'D: Brother-in-law', correct: false }
        ]
    },
    {
        question: 'A well-known lyric in the holiday song "Silver Bells" promises that "soon it will be" what?',
        answers: [
            { text: 'A: July 4th weekend', correct: false },
            { text: 'B: Halloween night', correct: false },
            { text: 'C: Christmas Day', correct: true },
            { text: 'D: National Burrito Month', correct: false }
        ]
    },
    {
        question: 'When a person is rudely ignored, he is said to be getting what?',
        answers: [
            { text: 'A: Hot knee', correct: false },
            { text: 'B: Warm toe', correct: false },
            { text: 'C: Cold shoulder', correct: true },
            { text: 'D: His car fixed', correct: false }
        ]
    },
    {
        question: 'A common piece of advice goes, "Be there or be" what?',
        answers: [
            { text: 'A: Bare', correct: false },
            { text: 'B: Square', correct: true },
            { text: 'C: Aware', correct: false },
            { text: 'D: All alone as usual', correct: false }
        ]
    },
    {
        question: '"And many more" is a line commonly sung at the end of what traditional ditty?',
        answers: [
            { text: 'A: Old McDonald', correct: false },
            { text: 'B: Jolly Good Fellow', correct: false },
            { text: 'C: Happy Birthday', correct: true },
            { text: 'D: Home on the Range', correct: false }
        ]
    },
    {
        question: 'If you\'re trying to find other players in a game of hide-and-seek, what are you most likely called?',
        answers: [
            { text: 'A: Butterbean', correct: false },
            { text: 'B: Stinky', correct: false },
            { text: 'C: Dunce', correct: false },
            { text: 'D: It', correct: true }
        ]
    },
    {
        question: 'Which of these phrases is slang for "someone who has a strong and unyielding attitude"?',
        answers: [
            { text: 'A: Boiled ham', correct: false },
            { text: 'B: Tough cookie', correct: true },
            { text: 'C: Ruffled chip', correct: false },
            { text: 'D: Soggy cereal', correct: false }
        ]
    },
    {
        question: 'If you\'re skeptical about something, you should "take it with a grain of" what?',
        answers: [
            { text: 'A: Sand', correct: false },
            { text: 'B: Sugar', correct: false },
            { text: 'C: Salt', correct: true },
            { text: 'D: MSG', correct: false }
        ]
    },
    {
        question: 'Something in an obvious location is said to be "right under your" what?',
        answers: [
            { text: 'A: Mattress', correct: false },
            { text: 'B: Nose', correct: true },
            { text: 'C: Azaleas', correct: false },
            { text: 'D: Boxer shorts', correct: false }
        ]
    },
    {
        question: 'When a tree is cut down, the part that remains in the ground is called what?',
        answers: [
            { text: 'A: Rump', correct: false },
            { text: 'B: Hump', correct: false },
            { text: 'C: Stump', correct: true },
            { text: 'D: Leftovers', correct: false }
        ]
    },
    {
        question: 'To convince you he is truthful, a person is most likely to say he will "swear on a stack of" what?',
        answers: [
            { text: 'A: Gold', correct: false },
            { text: 'B: Bibles', correct: true },
            { text: 'C: Flags', correct: false },
            { text: 'D: Pancakes', correct: false }
        ]
    },
    {
        question: 'By definition, a 10-speed bike has 10 what?',
        answers: [
            { text: 'A: Wheels', correct: false },
            { text: 'B: Spokes', correct: false },
            { text: 'C: Gears', correct: true },
            { text: 'D: Lives', correct: false }
        ]
    },
    {
        question: 'A lullaby is a song sung to babies to help them do what',
        answers: [
            { text: 'A: Wake up', correct: false },
            { text: 'B: Fall asleep', correct: true },
            { text: 'C: Eat', correct: false },
            { text: 'D: Invest wisely', correct: false }
        ]
    },
    {
        question: 'In history books, leaders named Alexander and Catherine both share what flattering title?',
        answers: [
            { text: 'A: The Ferocious', correct: false },
            { text: 'B: The Great', correct: true },
            { text: 'C: The Unruly', correct: false },
            { text: 'D: The Eco-Conscious', correct: false }
        ]
    },
    {
        question: 'You\'re most likely to hear the announcement "Please remain seated until the captain has turned off the \'Fasten Seat Belt\' sign" while doing what?',
        answers: [
            { text: 'A: Shopping for groceries', correct: false },
            { text: 'B: Flying in an airplane', correct: true },
            { text: 'C: Getting a haircut', correct: false },
            { text: 'D: Being abducted by aliens', correct: false }
        ]
    },
    {
        question: 'What notable part of our nation\'s topography accounts for roughly 20 percent of the fresh water on Earth?',
        answers: [
            { text: 'A: Death Valley', correct: false },
            { text: 'B: Grand Canyon', correct: false },
            { text: 'C: The Great Lakes', correct: true },
            { text: 'D: Mark Zuckerberg\'s hot tub', correct: false }
        ]
    },
    {
        question: 'A person who is preparing to work hard is said to be "rolling up his" what?',
        answers: [
            { text: 'A: Sleeves', correct: true },
            { text: 'B: Curtains', correct: false },
            { text: 'C: Towels', correct: false },
            { text: 'D: Mötley Crüe posters', correct: false }
        ]
    },
    {
        question: 'In a popular style of joke, what traditionally comes before "Who\'s there?"',
        answers: [
            { text: 'A: Rat-a-tat-tat', correct: false },
            { text: 'B: Cooee', correct: false },
            { text: 'C: Knock-knock', correct: true },
            { text: 'D: Ding dong', correct: false }
        ]
    },
    {
        question: 'According to the proverb, "Early to bed and early to rise" makes you "healthy, wealthy and" what?',
        answers: [
            { text: 'A: Wise', correct: true },
            { text: 'B: Boring', correct: false },
            { text: 'C: Brave', correct: false },
            { text: 'D: Stealthy', correct: false }
        ]
    },
    {
        question: 'Which plant is a national symbol of Ireland?',
        answers: [
            { text: 'A: Rose', correct: false },
            { text: 'B: Thistle', correct: false },
            { text: 'C: Leek', correct: false },
            { text: 'D: Shamrock', correct: true }
        ]
    },
]