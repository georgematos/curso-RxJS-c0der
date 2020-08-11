const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7]

// ex1: criando o proprio observable
// const obs$ = Observable.create((obs) => {
//   notas.forEach(nota => obs.next(nota))
//   obs.complete();
// })

// ex2: usando o operador from
from(notas)
  .pipe(
    map(nota => nota >= 7 ? 'Aprovado' : 'Reprovado'),
    map(status => status[0])
  )
  .subscribe((status) => {
    console.log(status)
})
