function partition(arr: number[], lo: number, hi: number): number {
    // 1. decide a pivot point
    // here last element is taken; here hi is inclusive
    const pivot = arr[hi];

    // 2. init an index pointer;
    // this will serve as last swapped element
    let idx = lo - 1;

    // only operate between the bounds, so i = [lo, hi)
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            // Increment idx to point to the next position where a swap might occur.
            idx++;

            // Example: Consider arr = [20, 03, 19, 05] and pivot = 05
            // Suppose i = 0, and idx = 0
            const tmp = arr[i];

            // Swap the elements at positions i and idx.
            // This positions the element smaller than the pivot (if any) to the beginning of the array.
            //
            // In the example, when i = 1 (element 03), idx = 0.
            // So, we swap 20 and 03.
            // Now, arr becomes [20, 20, 19, 05].
            // Note, the 20 hasn't been changed yet
            arr[i] = arr[idx];

            // Place the element initially at idx (which was smaller or equal to the pivot) at position i.
            //
            // Continuing the example, after the swap, arr is now [03, 20, 19, 05].
            // in this step we overwrite the to-be swapped place with the intended
            // place
            arr[idx] = tmp;
        }
    }

    // 3. Now we need to bring pivot the correct position
    // till now pivot is at the last position (this is preference)
    // now idx is pointing at the last place we (might) have swapped
    //
    // first we increment the idx (incase no swap was made)
    // according to above case idx: 1
    idx++;

    // same this as previous
    // after following op, arr: [03, 20, 19, 20]
    arr[hi] = arr[idx];
    // now we put the pivot where last swap happened. Because beyond the idx
    // should be greater than the pivot according to the previous for loop
    // after this, arr: [03, 05, 19, 20]
    arr[idx] = pivot;

    //  this is to indicate the parent function where it should split the
    // arr after this invocation. The tree is then branched off of this new pivotk
    return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    // recurse the left branch of tree, which are now less than the last pivotted
    qs(arr, lo, pivotIdx - 1);

    // recurse the right branch of tree, which are now less than the last pivotted
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
