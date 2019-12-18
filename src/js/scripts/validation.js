//Created by Yury Volkovskiy
const symbols = ['!', '"', '#', '$', '%', '*', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>', '_'];
const common = ["123456", "password", "12345678", "1234", "pussy", "12345", "dragon", "qwerty", "696969", "mustang", "letmein", "baseball", "master", "michael", "football", "shadow", "monkey", "abc123", "pass", "6969", "jordan", "harley", "ranger", "iwantu", "jennifer", "hunter", "2000", "test", "batman", "trustno1", "thomas", "tigger", "robert", "access", "love", "buster", "1234567", "soccer", "hockey", "killer", "george", "sexy", "andrew", "charlie", "superman", "asshole", "dallas", "jessica", "panties", "pepper", "1111", "austin", "william", "daniel", "golfer", "summer", "heather", "hammer", "yankees", "joshua", "maggie", "biteme", "enter", "ashley", "thunder", "cowboy", "silver", "richard", "orange", "merlin", "michelle", "corvette", "bigdog", "cheese", "matthew", "121212", "patrick", "martin", "freedom", "ginger", "blowjob", "nicole", "sparky", "yellow", "camaro", "secret", "dick", "falcon", "taylor", "111111", "131313", "123123", "bitch", "hello", "scooter", "please", "", "porsche", "guitar", "chelsea", "black", "diamond", "nascar", "jackson", "cameron", "654321", "computer", "amanda", "wizard", "xxxxxxxx", "money", "phoenix", "mickey", "bailey", "knight", "iceman", "tigers", "purple", "andrea", "horny", "dakota", "aaaaaa", "player", "sunshine", "morgan", "starwars", "boomer", "cowboys", "edward", "charles", "girls", "booboo", "coffee", "xxxxxx", "bulldog", "ncc1701", "rabbit", "peanut", "john", "johnny", "gandalf", "spanky", "winter", "brandy", "compaq", "carlos", "tennis", "james", "mike", "brandon", "fender", "anthony", "blowme", "ferrari", "cookie", "chicken", "maverick", "chicago", "joseph", "diablo", "sexsex", "hardcore", "666666", "willie", "welcome", "chris", "panther", "yamaha", "justin", "banana", "driver", "marine", "angels", "fishing", "david", "maddog", "hooters", "wilson", "butthead", "dennis", "captain", "bigdick", "chester", "smokey", "xavier", "steven", "viking", "snoopy", "blue", "eagles", "winner", "samantha", "house", "miller", "flower", "jack", "firebird", "butter", "united", "turtle", "steelers", "tiffany", "zxcvbn", "tomcat", "golf", "bond007", "bear", "tiger", "doctor", "gateway", "gators", "angel", "junior", "thx1138", "porno", "badboy", "debbie", "spider", "melissa", "booger", "1212", "flyers", "fish", "porn", "matrix", "teens", "scooby", "jason", "walter", "cumshot", "boston", "braves", "yankee", "lover", "barney", "victor", "tucker", "princess", "mercedes", "5150", "doggie", "zzzzzz", "gunner", "horney", "bubba", "2112", "fred", "johnson", "xxxxx", "tits", "member", "boobs", "donald", "bigdaddy", "bronco", "penis", "voyager", "rangers", "birdie", "trouble", "white", "topgun", "bigtits", "bitches", "green", "super", "qazwsx", "magic", "lakers", "rachel", "slayer", "scott", "2222", "asdf", "video", "london", "7777", "marlboro", "srinivas", "internet", "action", "carter", "jasper", "monster", "teresa", "jeremy", "11111111", "bill", "crystal", "peter", "pussies", "cock", "beer", "rocket", "theman", "oliver", "prince", "beach", "amateur", "7777777", "muffin", "redsox", "star", "testing", "shannon", "murphy", "frank", "hannah", "dave", "eagle1", "11111", "mother", "nathan", "raiders", "steve", "forever", "angela", "viper", "ou812", "jake", "lovers", "suckit", "gregory", "buddy", "whatever", "young", "nicholas", "lucky", "helpme", "jackie", "monica", "midnight", "college", "baby", "brian", "mark", "startrek", "sierra", "leather", "232323", "4444", "beavis", "bigcock", "happy", "sophie", "ladies", "naughty", "giants", "booty", "blonde", "golden", "0", "fire", "sandra", "pookie", "packers", "einstein", "dolphins", "0", "chevy", "winston", "warrior", "sammy", "slut", "8675309", "zxcvbnm", "nipples", "power", "victoria", "asdfgh", "vagina", "toyota", "travis", "hotdog", "paris", "rock", "xxxx", "extreme", "redskins", "erotic", "dirty", "ford", "freddy", "arsenal", "access14", "wolf", "nipple", "iloveyou", "alex", "florida", "eric", "legend", "movie", "success", "rosebud", "jaguar", "great", "cool", "cooper", "1313", "scorpio", "mountain", "madison", "987654", "brazil", "lauren", "japan", "naked", "squirt", "stars", "apple", "alexis", "aaaa", "bonnie", "peaches", "jasmine", "kevin", "matt", "qwertyui", "danielle", "beaver", "4321", "4128", "runner", "swimming", "dolphin", "gordon", "casper", "stupid", "shit", "saturn", "gemini", "apples", "august", "3333", "canada", "blazer", "cumming", "hunting", "kitty", "rainbow", "112233", "arthur", "cream", "calvin", "shaved", "surfer", "samson", "kelly", "paul", "mine", "king", "racing", "5555", "eagle", "hentai", "newyork", "little", "redwings", "smith", "sticky", "cocacola", "animal", "broncos", "private", "skippy", "marvin", "blondes", "enjoy", "girl", "apollo", "parker", "qwert", "time", "sydney", "women", "voodoo", "magnum", "juice", "abgrtyu", "777777", "dreams", "maxwell", "music", "rush2112", "russia", "scorpion", "rebecca", "tester", "mistress", "phantom", "billy", "6666", "albert"];

const data = {
  PASSWORD_WRAP:  'password-validation',
  REPEAT_INPUT: 'password-check__input',
  SUBMIT: 'validation__submit-btn',
  TESTS: 'validation__test',
  INPUT: 'password__input',
  WRONG: 'validation__test--wrong',
  CORRECT: 'validation__test--correct'
}

const rootForm = document.querySelector(`.${data.PASSWORD_WRAP}`);
const password = document.querySelector(`.${data.INPUT}`);
const verify = document.querySelector(`.${data.REPEAT_INPUT}`);
const button = document.querySelector(`.${data.SUBMIT}`);
const tests = Array.prototype.slice.call(document.querySelectorAll(`.${data.TESTS}`));

let testsData = [];

var timeout = null;

function reset() {
  tests.forEach((element) => {
    element.classList.remove(data.WRONG);
    element.classList.remove(data.CORRECT);
  });
}

function checkPattern() {
  return symbols.some((el) => {
    return password.value.indexOf(el) > -1;
  });
}

function checkPassword() {
  let newPass = password.value;
  symbols.forEach((el) => {
    newPass = newPass.replace(el, '');
  });
  newPass = newPass.replace(/[0-9]/g, '');
  return common.some((el) => {
    return el === newPass;
  })
}


function countUpperCase() {
  let count = 0;
  const patternCase = new RegExp(/[A-Z]/);
  for (let i = 0; i < password.value.length; i++) {
    if (patternCase.test(password.value.charAt(i))) {
      count++
    };
  }
  return count;
}


function makeTests() {
  const patternLetter = new RegExp(/[*a-zA-Z]/);
  const patternNumber = new RegExp(/[*0-9]/);
  testsData[0] = password.value.length >= 6 ? data.CORRECT : data.WRONG;
  tests[0].classList.add(testsData[0]);
  testsData[1] = checkPattern() ? data.CORRECT : data.WRONG;
  tests[1].classList.add(testsData[1]);
  testsData[2] = (patternLetter.test(password.value)) && (patternNumber.test(password.value)) ? data.CORRECT : data.WRONG;
  tests[2].classList.add(testsData[2]);
  testsData[3] = checkPassword() ? data.WRONG : data.CORRECT;
  tests[3].classList.add(testsData[3]);
  testsData[4] = countUpperCase() >= 2 ? data.CORRECT : data.WRONG;
  tests[4].classList.add(testsData[4]);
  if (tests[5].children[1].value.length !== 0) {
    testsData[5] = tests[5].children[1].value === password.value ? data.CORRECT : data.WRONG;
    tests[5].classList.add(testsData[5]);
  }
  if (testsData.every((el) => el === data.CORRECT)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

tests.push(verify.parentNode);

tests.forEach((el) => {
  testsData.push(el.classList[1]);
});


reset();

rootForm.addEventListener('input', () => {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    reset();
    if (password.value.length !== 0) {
      makeTests();
    }
  }, 600);
});


rootForm.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
  }
});
