# Big O Notation
### What is it?
- Big O notation is used to describe the efficiency of code
### Why do we need big O notation?
- Helps compare code and determine which implementation is the best/most efficient.  

### How are we determining **efficiency**?
- While we could use time, that varies by machine and a number of other factors. 
- Instead, we use the **number of operations** that exist in code.

#### Example:

```javascript
function loopAddUp(n){
    let total = 0;
    for (let i = 1; i <= n.length; i++){
        total += i;
    }
    return total
}

```
  - While this code is no doubt something you've seen before and works great for small integers, let's count the number of operations going on here.
  - First we have `let total = 0; `, which we can an **assignment**, and it only happens **once** at the beginning
  - Next we have `let i = 1`, another **assignment** (so far we have 2 assignments)
  - Then we have a **comparison**, `i <= n.length`, which happens as many times as `n`. 
  - Then we have `i++` which is both an **addition** and an **assignment** that happens `n` times.
  - Finally, we have `total += i`, which is adding to `i` and also `reassigning` it `n` times.

  - ...so, that was a lot of things. **What does that actually mean?** 
  - Let's count the number of `n`'s:
    - `n` comparisons (`i <= n.length`)
    - `n` additions and `n` assignments (`i++`)
    - `n` additions and `n` assignments (`total += i`)
    - SO, that's 5 `n`'s + 2 operations or `5n+2`

## So... that's cool and all but the BIG PICTURE is that number of operations depends on the size of `n`

### Let's look at another example:
``` javascript
    function addUpTo(n){
        return n * (n + 1) / 2 ;
    }
```
  - In this example, there are **3 operations**:   
    1. 1 multiplication (`n * `)
    2. 1 addition (`n + 1`)
    3. 1 division (` / 2`)

  - So, **regardless of the size of `n`**, the number of operations is 3. This means that this function will always be faster than our first block of code (loop add up function)