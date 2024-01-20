export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    console.log(list);

    expect(list.get(2)).toEqual(9);

    console.log(list);
    expect(list.removeAt(1)).toEqual(7);
    console.log(list);

    expect(list.length).toEqual(2);
    console.log(list);

    list.append(11);

    console.log(list);
    expect(list.removeAt(1)).toEqual(9);
    console.log(list);

    expect(list.remove(9)).toEqual(undefined);
    console.log(list);
    expect(list.removeAt(0)).toEqual(5);
    console.log(list);
    expect(list.removeAt(0)).toEqual(11);
    console.log(list);
    expect(list.length).toEqual(0);

    list.prepend(5);
    console.log(list);
    console.log(list);
    list.prepend(7);
    console.log(list);
    list.prepend(9);
    console.log(list);

    expect(list.get(2)).toEqual(5);
    console.log(list);
    expect(list.get(0)).toEqual(9);
    console.log(list);
    expect(list.remove(9)).toEqual(9);
    console.log(list);
    expect(list.length).toEqual(2);
    console.log(list);
    expect(list.get(0)).toEqual(7);
    console.log(list);
}
