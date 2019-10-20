function hiddenShow(id) {
    sectionHidden();
    const div = document.getElementById(id);
    let display = div.style.display;

    display === 'none' ? div.style.display = 'block' : div.style.display = 'none';

}

function sectionHidden() {
    const sections = document.querySelectorAll('section');
    sections.forEach(x => x.style.display = 'none');
}

function filter_list(l) {
    return l.filter(v => typeof v == "number");
    // return l.filter( element => Number.isSafeInteger(element) ); Esta fue mi solución
}

function findShort(s) {
    /* Mi solución
    const x = s.split(' ').map(el => el.length).sort().filter(word => word < 10);
    return x[0];
    */
    return Math.min(...s.split(" ").map(s => s.length));
}

function duplicateEncode(word) {
    //My Solution
    //return word.toLowerCase().split('').map( (x, i, a) => a.indexOf(x) !== i ? (')') : (a.indexOf(x, i+1) !== -1 ? ')' : '(' ) ).join(''); 
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
        })
        .join('');
}

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
    //.reduce( (accumulator, currentValue) => accumulator + currentValue );
}

function oddOrEven(array) {
    /*
    if (array.length == 0) return 'even'
    return array.reduce( (accumulator, currentValue) => accumulator + currentValue ) % 2 == 0 ? 'even' : 'odd';
    */
    return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

function domainName(url) {
    /* My Solution
    let initial = 0;
    if( url.search( /(\/\/)/i ) !== -1 ) initial = url.search( /(\/\/)/i ) + 2;
    if ( url.search( /(www\.)/i ) !== -1 ) initial = url.search( /(www\.)/i ) + 4;
       
    const url2 = url.slice(initial);
    let final = url2.search( /(\.)/i );

    return url2.slice( 0, final );
    */
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

function countSmileys(arr) {
    // My solution
    // return arr.filter ( x=> x.search( /^(:|;)(-|~)?(\)|D)$/ ) !== -1 ).length;
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// //////////////////// app /////////////////////////////////////////////////////

const solution = document.getElementById("solution");
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded Ready');
    sectionHidden();
});

document.getElementById('btnlistFiltering').addEventListener('click', function () {
    hiddenShow('listFiltering');
    solution.innerHTML = `
        <li><code>${filter_list([1, 2, 'a', 'b'])}</code></li>
        <li><code>${filter_list([1, 'a', 'b', 0, 15])}</code></li>
        <li><code>${filter_list([1, 2, 'aasf', '1', '123', 123])}</code></li>  
    `;
});

document.getElementById("btnShortestWord").addEventListener("click", function () {
    hiddenShow("ShortestWord");
    solution.innerHTML = `
  <li>${findShort("bitcoin take over the world maybe who knows perhaps")}</li>
  <li>${findShort(
        "turns out random test cases are easier than writing out basic ones")}</li>
  <li>${findShort("Testing for MadeSafeCoin BTC Classic Classic Ripple BTC Waves      Mine Lisk ProofOfWork")}</li>
  `;
});

document.getElementById('btnDuplicateEncoder').addEventListener('click', function () {
    hiddenShow('DuplicateEncoder');
    solution.innerHTML = `
  <li>${duplicateEncode("din")}</li>
  <li>${duplicateEncode("recede")}</li>
  <li>${duplicateEncode("Success")}</li>
  <li>${duplicateEncode("(( @")}</li>
  `;
});

document.getElementById('btnSumOddNumbers').addEventListener('click', function () {
    hiddenShow('SumOddNumbers');
    solution.innerHTML = `
  <li>${rowSumOddNumbers(1)}</li>
  <li>${rowSumOddNumbers(2)}</li>
  <li>${rowSumOddNumbers(3)}</li>
  <li>${rowSumOddNumbers(42)}</li>

  `;
});

document.getElementById('btnOddEven').addEventListener('click', function () {
    hiddenShow('OddEven');
    solution.innerHTML = `
  <li>${oddOrEven([0])}</li>
  <li>${oddOrEven([2, 5, 34, 6])}</li>
  `;
});

document.getElementById('btnExtractURL').addEventListener('click', function () {
    hiddenShow('ExtractURL');
    solution.innerHTML = `
  <li>${domainName("http://github.com/carbonfive/raygun")}</li>
  <li>${domainName("http://www.zombie-bites.com")}</li>
  <li>${domainName("https://www.cnet.com")}</li>
  <li>${domainName("https://ao4lyx814ipk4tod4ph8qsd-w.edu/default.html")}</li>
  `;
});

document.getElementById('btnCountSmileyFaces').addEventListener('click', function () {
    hiddenShow('CountSmileyFaces');
    solution.innerHTML = `
  <li>${ countSmileys([':)', ';(', ';}', ':-D']) }</li>
  <li>${ countSmileys([';D', ':-(', ':-)', ';~)']) }</li>
  <li>${ countSmileys([';]', ':[', ';*', ':$', ';-D']) }</li>
  <li>${ countSmileys([]) }</li>
  `;
});