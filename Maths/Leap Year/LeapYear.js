process.stdin.resume();
process.stdin.setEncoding('UTF-8');

let stdin_input = '';
let inputRows, line = 0;

process.stdin.on('data', function(data) {
  stdin_input += data;
});

process.stdin.on('end', function(data) {
  inputRows = stdin_input.split('\n');
  main();
});

function getNextLine() {
  return inputRows[line++];
}

function main() {
  let cases = +getNextLine();
  for(let i=1; i<=cases; i++) {
    let year = +getNextLine();
    if(year%400 === 0 || (year%4===0 && year%100!==0)) {
      process.stdout.write('February 29\n');
    }
    else {
      process.stdout.write('March 1\n');
    }
  }
}
