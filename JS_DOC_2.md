### **Module 1: Introduction to JavaScript**

1. **Overview of JavaScript**

   - No code example needed.

2. **Setting Up the Development Environment**

   - No code example needed.

3. **Syntax and Data Types**

   - **Variables**:

     ```javascript
     let name = 'Alice'
     const age = 25
     var city = 'New York'
     ```

   - **Type Conversion and Coercion**:

     ```javascript
     console.log(Number('5') + 5) // 10
     console.log('5' + 5) // "55"
     ```

   - **Operators**:
     ```javascript
     let x = 10
     let y = 5
     console.log(x + y) // 15
     ```

---

### **Module 2: Control Flow**

1. **Conditional Statements**:

   ```javascript
   let score = 85
   if (score > 90) {
     console.log('A')
   } else if (score > 80) {
     console.log('B')
   } else {
     console.log('C')
   }
   ```

2. **Loops and Iteration**:

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i)
   }

   let j = 0
   while (j < 5) {
     console.log(j)
     j++
   }
   ```

3. **Functions**:

   ```javascript
   function add(a, b) {
     return a + b
   }

   const subtract = (a, b) => a - b

   console.log(add(5, 3)) // 8
   console.log(subtract(5, 3)) // 2
   ```

---

### **Module 3: Core JavaScript Concepts**

1. **Scope and Closures**:

   ```javascript
   function outer() {
     let outerVar = 'I am outside!'
     function inner() {
       console.log(outerVar) // "I am outside!"
     }
     inner()
   }
   outer()
   ```

2. **Arrays and Objects**:

   ```javascript
   let fruits = ['apple', 'banana', 'cherry']
   fruits.push('orange')

   let person = { name: 'Alice', age: 25 }
   console.log(person.name) // "Alice"
   ```

3. **Error Handling**:
   ```javascript
   try {
     let result = riskyFunction()
   } catch (error) {
     console.error('Something went wrong:', error)
   }
   ```

---

### **Module 4: Intermediate JavaScript**

1. **Advanced Array and Object Methods**:

   ```javascript
   // Destructuring
   let [a, b] = [1, 2]

   // Spread and Rest Operators
   let arr = [1, 2, ...fruits]

   // Object Methods
   console.log(Object.keys(person))
   ```

2. **Asynchronous JavaScript**:

   ```javascript
   // Using Promises
   fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error))

   // Using async/await
   async function fetchData() {
     try {
       let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       let data = await response.json()
       console.log(data)
     } catch (error) {
       console.error('Error:', error)
     }
   }
   ```

3. **Modules and Imports**:

   ```javascript
   // File: math.js
   export function add(a, b) {
     return a + b
   }

   // File: main.js
   import { add } from './math.js'
   console.log(add(2, 3)) // 5
   ```

---

### **Module 5: The DOM (Document Object Model)**

1. **Introduction to the DOM**

   - No code example needed.

2. **Selecting and Manipulating DOM Elements**:

   ```javascript
   let title = document.getElementById('title')
   title.textContent = 'New Title'

   let button = document.querySelector('.my-button')
   button.style.color = 'red'
   button.setAttribute('disabled', 'true')
   ```

3. **Event Handling**:

   ```javascript
   document.querySelector('#myButton').addEventListener('click', function () {
     alert('Button clicked!')
   })

   // Event delegation
   document.querySelector('#parentElement').addEventListener('click', function (event) {
     if (event.target.matches('.childElement')) {
       console.log('Child element clicked')
     }
   })
   ```

---

### **Module 6: DOM Manipulation Project**

1. **Mini-Projects for Hands-On Learning**

   - **To-Do List App**:

     ```javascript
     document.querySelector('#addTask').addEventListener('click', function () {
       let task = document.querySelector('#taskInput').value
       let listItem = document.createElement('li')
       listItem.textContent = task
       document.querySelector('#taskList').appendChild(listItem)
     })
     ```

   - **Image Carousel**:

     ```javascript
     let images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
     let currentIndex = 0

     document.querySelector('#nextBtn').addEventListener('click', function () {
       currentIndex = (currentIndex + 1) % images.length
       document.querySelector('#carouselImage').src = images[currentIndex]
     })
     ```

   - **Dynamic Form Handling**:
     ```javascript
     document.querySelector('#submitForm').addEventListener('click', function (event) {
       event.preventDefault()
       let name = document.querySelector('#nameInput').value
       if (name === '') {
         alert('Name is required!')
       } else {
         console.log('Form submitted with name:', name)
       }
     })
     ```

2. **Project: Building an Interactive Web Page**
   - **Sample Code for Page Interactivity**:
     ```javascript
     document.querySelector('#toggleButton').addEventListener('click', function () {
       let section = document.querySelector('#dynamicSection')
       section.classList.toggle('hidden')
     })
     ```
