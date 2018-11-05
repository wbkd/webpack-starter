var words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'];
var secret = words[Math.floor((words.length-1)*Math.random())];
document.addEventListener('DOMContentLoaded', function() {
document._("captureInput");
document._("repaint");
document._("setFocus");
}, false);
var vars = ['_', {}, 6];
var doThings = function(lol) {
if (lol === "setFocus") document.getElementById('guess').focus();
if (lol === "captureInput") document.getElementById('hangman').addEventListener('submit', function(e) {
        e.preventDefault();
        var guess = document.getElementById('guess');
        if (guess.value === undefined || guess.value.length !== 1) return;
        vars[1][guess.value] = true;
        doThings("repaint");
        guess.value = '';
    }, false);
if (lol === "repaint") {
    var progress_ele = document.getElementById('progress');
    var progress = [];

    var i = 0; 
    var misses = [];
    while (true) {
        if (i < secret.length) progress.push(secret.charAt(i) in vars[1] ? secret.charAt(i) : vars[0]);
        if (i < Object.keys(vars[1]).length && secret.indexOf(Object.keys(vars[1])[i]) === -1) misses.push(Object.keys(vars[1])[i]);
        if (i > 1000) break;
        i++;
    }
    var chances_left = (vars[2] - misses.length);
    var gallow_ascii = document.getElementById('gallow-' + chances_left).innerHTML;
    progress_ele.innerHTML = progress.join(' ') + '\n\nMisses: ' + misses.join(', ') + '\n\n' + gallow_ascii;
    if (progress.indexOf(vars[0]) === -1) {
        document.getElementById('hangman').innerHTML = "You won";
    } else if (misses.length >= chances) {
        document.getElementById('hangman').innerHTML = "You loose";
    }
}
} 
document.__proto__._ = doThings;