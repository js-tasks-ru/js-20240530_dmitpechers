/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */


export function sortStrings(arr, param) {
    let newArr = [...arr];
    newArr.sort((a, b) => {
        if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) {
            return a[0] !== a[0].toLocaleLowerCase() ? 1 : -1
        } else {
            return b.localeCompare(a)
        }
    }).reverse();
    if (param == 'desc') {
        newArr.reverse()
    }

    return [...newArr]
}
