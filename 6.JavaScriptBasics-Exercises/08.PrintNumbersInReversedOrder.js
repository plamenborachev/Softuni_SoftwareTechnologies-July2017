function PrintNumbersInReversedOrder(args) {
    for(let i = args.length - 1; i >= 0; i--){
        console.log(args[i]);
    }
}

PrintNumbersInReversedOrder(['10', '15', '20'])