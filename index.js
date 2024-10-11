list1 = [ true,  true,  true,  false, true,  true,  true,  true ,
    true,  false, true,  false, true,  false, false, true , true,
    true,  true,  true , false, false, true,  true ];

list2 = [ false, false, false ];

function countingSheeps(array) {
    let counter = 0;

    for (let index = 0; index < list1.length; index++) {
        if (array[index] == true) {
            counter += 1;
        }
    }
    if (counter > 0) {
        console.log('There are %s sheeps in total!', counter);
    } else {
        console.log("UPS!!! Wolfs eaten Sheeps");
    }
}

countingSheeps(list1)
countingSheeps(list2)