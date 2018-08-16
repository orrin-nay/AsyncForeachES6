# AsyncForeachES6
Provides an asynchronous Foreach function, DUH

##Usage
```
import asyncForEach from 'asyncforeaches6';

const array = [1, 2, 3, 4];

const asyncFunction = async () => {
  console.log('start');
  await asyncForEach(array, (arrayItem) => {
    console.log(arrayItem);
  });
  console.log('end');
};

asyncFunction();
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
