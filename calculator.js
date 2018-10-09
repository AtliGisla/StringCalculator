function add(numbers) {
    if(numbers == ""){
        return 0;
    }
    else if(numbers.includes(",") || numbers.includes("\n")){
        var list_of_numbers = numbers.split("\n").join(",").split(",");
        console.log(list_of_numbers);
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