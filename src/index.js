class Sorter {
  constructor() {
    this.storage = [];
    this.comparator = 0;
  }

  compareNumbers(a, b) {
    return a - b;
  }

  add(element) {
    this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    indices.sort();
    var newStorage=[];
    for (var i=0; i<indices.length; i++) {
      var item = this.storage[indices[i]];
        if ((typeof item == 'number') && (this.comparator == 0)) {
          var numb = parseInt(item);
          newStorage.push(numb);
        }
        else {
          newStorage.push(this.storage[indices[i]]);
        }  
    }
    if (this.comparator !== 0) {
      newStorage.sort(this.comparator);
    }
    else {
      newStorage.sort(this.compareNumbers);
    }
    for (var i=0; i<indices.length; i++) {
      this.storage[indices[i]] = newStorage[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }

}

module.exports = Sorter;

