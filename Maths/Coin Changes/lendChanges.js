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
  let n, count;
  n = +getNextLine(), count = 0;
  for(let i=1; i<=n; i++) {
    let coin = getNextLine();
    count++;
    if(coin.trim() === 'silver') {
      count -= 1;
    }
    else if(coin.trim() === 'gold') {
      count -= 3;
    }
    if(count<0) {
       process.stdout.write('NO');
       return;
    }
  }
  if(n>0)
    process.stdout.write('YES');
}
