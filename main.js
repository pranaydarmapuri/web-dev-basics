
const passwordField = document.getElementById('password')

const pwdHint = document.querySelector('#pwd-hint')

// passwordField.onkeyup = event => {
//   const pwd = event.target.value

// if (pwd.length < 6) {
//   pwdHint.textContent = 'week password'
//   passwordField.classList.add('error')
// } else if (
//   /^((?=.*[A-Z])(?=.*[a-z])(?=.*\d)|(?=.*[a-z])(?=.*\d)(?=.*[\$\%\&])|(?=.*[A-Z])(?=.*\d)(?=.*[\$\%\&])|(?=.*[A-Z])(?=.*[a-z])(?=.*[\$\%\&])).{8,16}$/.test(
//     pwd
//   )
// ) {
//   pwdHint.textContent = 'strong password'

//   passwordField.classList.add('success')
//   passwordField.classList.remove('error')
// } else {
//   pwdHint.textContent = 'password must contain 1 char ....'
//   passwordField.classList.add('error')
// }
// }

const dataList = document.querySelector('[data-list]')
const template = document.querySelector('#temp')

passwordField.onblur = event => {
  const todo = event.target.value

  const clone = template.content.cloneNode(true)

  clone.querySelector('[data-id]').textContent = new Date().getSeconds()
  clone.querySelector('[data-title]').textContent = todo

  dataList.insertBefore(clone, dataList.firstChild)

  event.target.value = ""
}

const fetchData = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json())

    for (const todo of data) {
      // const p = document.createElement('p')

      // const s = document.createElement('span')
      // const id = document.createElement('span')

      // s.textContent = todo.title
      // id.textContent = todo.id + ' - '

      // p.appendChild(id)
      // p.appendChild(s)

      const clone = template.content.cloneNode(true)

      clone.querySelector('[data-id]').textContent = todo.id
      clone.querySelector('[data-title]').textContent = todo.title

      if (todo.completed) {
        clone.querySelector('.card').classList.add('done')
      }

      dataList.appendChild(clone)
    }
  } catch (error) {
    console.error(error)
  }
}

fetchData()
