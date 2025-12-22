let subs: string | number = '1M';

let apiRequestStatus: 'loading' | 'success' | 'error' = 'loading';

let airplaneSeat: 'aisle' | 'middle' | 'window';

airplaneSeat = 'aisle';

const orders = ['12', '20', '28', '43'];

let currentOrder:string | undefined;

for(let order of orders){
    if(order === '20'){
        currentOrder = order;
        break;
    }

    currentOrder = '11';
}

console.log(currentOrder);