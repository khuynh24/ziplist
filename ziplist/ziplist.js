const arrayofletters = ['a', 'b', 'c'];
const arrayofnumbers = [1, 2 , 3];

function zipList(list1, list2) {
    const resultlist = [];
    for(let i = 0; i < list1.length; i++) {
        resultlist.push(list1[i], list2[i]);
    }
    return resultlist;
}
console.log(zipList(arrayofletters, arrayofnumbers));


console.log(_.identity(1));

