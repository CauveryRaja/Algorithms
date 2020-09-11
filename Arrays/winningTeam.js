let a, b, n, wins, ties, losses;
a = [], b = [];
n = a.length;
wins = 0;
a.sort();
b.sort();
for(let i=0, j=0; i<n;) {
    if(a[i]>b[j]) {
        wins++;
        i++;
        j++;
    }
    if(a[i]==b[j]) {
        ties++;
        i++;
        j++;
    }
    else if(a[i]<b[j]) {
        losses++;
        i++;
    }
}

if(wins == losses) {
    console.log('Stalemate');
}
else if(wins > losses) {
    console.log('Victory');
}
else {
    console.log('Defeat');
}
