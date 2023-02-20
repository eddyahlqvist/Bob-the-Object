// _x = x position
// _y = y position
// _d = diameter
// _s = speed
// gs = GrayScale variable
// bg = background color for canvas

class Bob {
  constructor(_x, _y, _d, _s) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.s = _s;
  }

  // Object visuals.
  display() {
    fill(gs);
    circle(this.x, this.y, this.d);
  }

  // Object animation.
  motion() {
    this.d = this.d + this.s;

    if (this.d >= width || this.d <= 0) {
      this.s = this.s * -1;
    }
  }

  // Changes canvas background color when grayscale number reaches 255 or 0.
  flickBG() {
    if (gs == 255) {
      bg = 255;
    } else if (gs == 0) {
      bg = 0;
    }
  }
}
