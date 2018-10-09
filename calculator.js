function add(numbers) {
    if(numbers == ""){
        return 0;
    }
    else if(numbers.includes(",")){
        list_of_numbers = numbers.split(",");
        var sum = 0;
        list_of_numbers.forEach(number => {
            sum += parseInt(number);
        });
        return sum;
    }
    else{
        return parseInt(numbers);
    }
};

module.exports = add;