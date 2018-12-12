const input = 325489;
// Part 1
function part1() {
  let dir = 'right';
  let steps = 1;
  let x = 0;
  let y = 0;
  let counter = 1;

  while (counter < input) {
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < steps; i++) {
        if (counter === input) {
          break;
        }
        switch (dir) {
          case 'right':
            x++;
            break;
          case 'up':
            y++;
            break;
          case 'left':
            x--;
            break;
          case 'down':
            y--;
            break;
          default:
            console.log('woops');
        }
        //Increase counter
        counter++;
      }
      // Change Direction
      switch (dir) {
        case 'right':
          dir = 'up';
          break;
        case 'up':
          dir = 'left';
          break;
        case 'left':
          dir = 'down';
          break;
        case 'down':
          dir = 'right';
          break;
        default:
          console.log('woops, dir not changed');
      }
    }
    steps++;
  }

  let diff = Math.abs(x) + Math.abs(y);
  console.log(diff);
}
