// function memoize(callback) {
//     const cache = {};

//     return function(...args){
//         const key = JSON.stringify(args);
//         console.log('show key', key);
//         console.log('cache before ', cache);

//         if(cache[`${key}`] !== undefined){
//             console.log('Get from cache')
//             return cache[`${key}`]
//         }

//         console.log('First calculation');
//         const result = callback(...args);
//         cache[`${key}`] = result;

//         console.log('cache after ', cache);

//         return result
//     }
// }

// function sum(...args){
//     return args.reduce((acc, item) => acc + item, 0)
// }

// const memoizeSum = memoize(sum);
// console.log(memoizeSum(2, -4, 5));
// console.log(memoizeSum(2, -4, 5));
// console.log(memoizeSum(-4, 2, 5));

// Расширьте функцию так, чтобы при одинаковом наборе аргументов, 
// но при различном порядке их следования результат все равно был одиноковым.

// Например: memoize(sum(2, -4, 5)) работало также, как и memoize(sum(-4, 2, 5)) 


function memoize(callback) {
    const cache = {}

    return function (...args) {

        const sortedArgs = [...args].sort(); //Создаём копию, сортируем массив

        const key = JSON.stringify(sortedArgs);
        console.log('show key', key)
        console.log('cache before ', cache)

        if (cache[key] !== undefined) {
            console.log('Get from cache')
            return cache[key]
        }

        console.log('First calculation')
        const result = callback(...args)
        cache[key] = result
        console.log('cache after ', cache)

        return result
    }
}

function sum(...args) {
    return args.reduce((acc, item) => acc + item, 0)
}

const memoizeSum = memoize(sum);
memoizeSum(2, -4, 5);
memoizeSum(-4, 2, 5);
memoizeSum(5, 2, -4);

// Написать каррированную функцию add(a)(b)(c)...(n), 
// которая может работать с произвольным числом аргументов в виде такой цепочки
function add(a) {
    let sum = a;

    function inner(b) {
        if (b === undefined) {
            return sum; 
        }
        sum += b;
        return inner; 
    }

    return inner;
}

console.log(add(1)(2)(3)());
console.log(add(10)(20)());
console.log(add(1)());

// Привязать контекст объекта к функции logger, чтобы при вызове this.item
//  выводило некоторое значение свойства item того объекта
// (Привязать через bind, call, apply)

function logger(from) {
    console.log(`I output only external context: ${this.item} from ${from}`);
 }

 const obj = {item: "some value" };
 logger()
 
 let loggerBind = logger.bind(obj);
 loggerBind('Ann');

 logger.call(obj, 'Alex');

 logger.apply(obj, ['Bob']);


//  Реализовать полифил
//  (собственную функцию реализующую встроенную в js) метода bind().

Function.prototype.myBind = function(context) {
    const func = this;
    return function(...args) {
      return func.apply(context, args);
    };
  };
  
  // пример:
  const obj2 = { name: "John" };
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }

  greet("Hello")
  
  const boundGreet = greet.myBind(obj2);
  boundGreet("Hello"); 




 
