/*  Hash table implementation

- the data will be like [[["grapes", 100]], [["apples", 9]]]
- here ["grapes", 100] is an entry where "grapes" is the key and 100 is the value
- this is like having an object {grapes: 100, apples: 9}
- in case of a collision, the data may look like [[["grapes", 100], ["apples", 9]], [["oranges", 20]]]
- here ["grapes", 100] and ["apples", 9] have the same memory address; they are in the same bucket

*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // the hash function will return a random integer (not more than the data size) that will be the index of a bucket
  //   hash functions are generally very fast, so we can consider them to have a time complexity of O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //   time complexity is O(1) on average, but it can be O(n) in the worst-case scenario (hash collisions)
  set(key, value) {
    const address = this._hash(key);
    // if there is no bucket at the address
    if (!this.data[address]) {
      // creating a bucket and adding the key-value pair data to the bucket
      this.data[address] = [[key, value]];
      return;
    }
    const bucket = this.data[address];
    // if an entry already exists for the provided key in the bucket, then we have overwrite the value of that entry
    // we have to loop over the bucket in case the bucket contains multiple entries (due to hash collisions)
    for (let i = 0; i < bucket.length; i++) {
      // if the provided key matches the key in the current entry in the bucket, then overwrite the value in that entry
      if (bucket[i][0] === key) bucket[i][1] = value;
    }
  }

  // the worst-case time complexity is O(n) (when there are multiple entries in the same bucket due to a collision), otherwise it's O(1)
  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    // if the bucket does not exist, then return undefined
    if (!bucket) return undefined;
    // if the bucket has multiple entries, then time complexity will be O(n), otherwise it'll be O(1)
    for (let i = 0; i < bucket.length; i++) {
      // if the provided key matches the key in the current entry in the bucket, then return the value from that entry
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 100);
myHashTable.set("apples", 9);
myHashTable.set("grapes", 120);
console.log(myHashTable);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("peaches"));
