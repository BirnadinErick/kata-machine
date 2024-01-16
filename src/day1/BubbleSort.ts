export default function bubble_sort(arr: number[]): void {
    for (let j = 0; j < arr.length; ++j) {
        // here arr.length - 1 is to make sure we don't go over the buffer limit
        // here - j is to bound the search excluding last elements
        for (let i = 0; i < arr.length - 1 - j; ++i) {
            if (arr[i] > arr[i + 1]) {
                /**
                  * could also swap 2 variables like this
                    x = x + y
                    y = x - y
                    x = x - y
                 * but here indexing into array that many times doesn't seem
                 * like a good idea (idk 4 sure tho)
                **/
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}
