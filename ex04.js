const { Observable } = require('rxjs')

function from(list) {
  return Observable.create((subscriber) => {
    list.forEach(el => {
      subscriber.next(el);
    });
    subscriber.complete()
  })
}

from([1, 2, 3]).subscribe(num => console.log(num))