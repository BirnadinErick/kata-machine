export default function two_crystal_balls(breaks: boolean[]): number {
    // N is the offset jumping around. This way the algorithm is O(sqrt(N))
    const jumpOffset = Math.floor(Math.sqrt(breaks.length));

    let n = jumpOffset;
    for (; n < breaks.length; n += jumpOffset) {
        if (breaks[n] === true) {
            break;
        }
    }

    // walk again and get the first value the ball breaks
    for (let i = n - jumpOffset; i <= n && n < breaks.length; ++i) {
        if (breaks[i] === true) {
            return i;
        }
    }

    // fallback in case we don't have any height the ball breaks
    return -1;
}
