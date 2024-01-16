export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let v = haystack[mid];

        if (needle === v) {
            return true;
        } else if (v > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return false;
}
