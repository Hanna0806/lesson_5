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

    return function(...args) {
   
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
