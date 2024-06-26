/* eslint-disable react/prop-types */

export function ButtonBar({ reset, pickRandomPerson }) {
  return <section>
    <button className="btn btn-outline-danger" onClick={reset}>Reset</button>
    <button className="btn btn-outline-success m-2" onClick={pickRandomPerson}>Pick Random Person</button>
  </section>
}

