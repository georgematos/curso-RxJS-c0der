const { interval } = require("rxjs")

/** Creates an Observable that emits sequential numbers every specified interval of time
Emits incremental numbers periodically in time. */
const obs$ = interval(1000)

const sub1 = obs$.subscribe((num) => {
  console.log(num);
})

const sub2 = obs$.subscribe((num) => {
  console.log(num * 100);
})

setTimeout(() => {
  sub1.unsubscribe()
  sub2.unsubscribe()
}, 6000)