const { Observable } = require("rxjs")

const obs$ = Observable.create(sub => {
  sub.next('RxJS')
  sub.next('é')
  sub.next('muito')
  sub.next('legal')

  if (Math.random() > 0.5) {
    sub.complete()
  } else {
    throw "Eita, deu ruim!"
  }

})

obs$.subscribe(
  text => console.log(text),
  err => console.log(err),
  () => console.log("Exito, fim")
);