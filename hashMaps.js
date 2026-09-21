class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(16);
    this.size;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < buckts.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] === value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
    this.size++;
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];
    if (!bucket) return undefined;

    for (i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === index) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];
    if (!bucket) return false;

    for (i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }
}
