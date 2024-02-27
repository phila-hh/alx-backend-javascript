const output = process.stdout;
const input = process.stdin;

output.write('Welcome to Holberton School, what is your name?\n');

input.on('readable', () => {
  const name = input.read();

  if (name) {
    output.write(`Your name is: ${name}`);
  }
});

input.on('end', () => {
  output.write('This important software is now closing\n');
});
