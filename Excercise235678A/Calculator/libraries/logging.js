class logging {
  constructor() {
    this.id = Math.floor(Math.random() * 1_000_000);
  }

  log = (value) => {
    console.log(`[logger: ${this.id}]: ${value}`);
  };
}

module.exports = logging