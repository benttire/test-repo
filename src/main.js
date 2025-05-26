
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="text-center mt-10">
    <h1 class="text-2xl font-bold mb-4">Technologie Webowe</h1>
    <button id="counter" class="bg-blue-300 p-4 rounded">count</button>
  </div>
`

let count = 0
document.querySelector('#counter').addEventListener('click', () => {
  count++
  document.querySelector('#counter').textContent = `count: ${count}`
})
