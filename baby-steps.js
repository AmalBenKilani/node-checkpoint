var sum = 0;
var i = 2;
for (i >= 2; i < process.argv.length; i++) {
    sum = sum + (+process.argv[i])
}
console.log(sum)