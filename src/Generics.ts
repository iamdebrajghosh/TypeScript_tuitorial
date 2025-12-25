function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("Latte")
wrapInArray(140)
wrapInArray({size: "medium"})

function pair<X, Z>(x: X, z: Z): [X, Z]{
    return [x, z]
}

pair("Espresso", 80)
pair("Espresso", {size: "small"})

interface Box<T> {
    contents: T
}

const numberBox: Box<number> = {
    contents: 10
}
const numberBoxCup: Box<string> = {
    contents: "10"
}


interface APIpromise<X> {
    status: number,
    data: X
}

const ans: APIpromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "Capachino"}
}