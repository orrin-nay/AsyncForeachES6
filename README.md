# AsyncForeachES6
Provides an asynchronous Foreach function, DUH

##Usage
```
import forEach from 'AsyncForeachES6';

const array = [1, 2, 3, 4];

const asyncFunction = async () => {
  console.log('start');
  await forEach(array, (arrayItem) => {
    console.log(arrayItem);
   });
   console.log('end');
}

asyncFuntion();
```
###
```Output
start
1
2
3
4
end
```
