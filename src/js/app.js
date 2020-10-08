
export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(num) {
    return this.errors.get(num) || 'Unknown error';
  }
}
