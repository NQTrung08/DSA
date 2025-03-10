
function ogItems(a: number, b: number): void {
  for (let i = 0; i < a; i++) {
    console.log(i)
  } // => O(a) 

  for (let i = 0; i < b; i++) {
    console.log(i)
  } // => O(b)
}
//  => O(a)  + O(b) = O(a + b)
ogItems(10, 12)


function logItems2(a: number, b: number): void {
  for (let i = 0; i < a; i++) {
    console.log(i)
    for (let j = 0; j < b; i++) {
      console.log(i)
    } // => O(b)
  } // => O(a) 

}
//  => O(a)  * O(b) = O(a * b)
logItems2(10, 12)