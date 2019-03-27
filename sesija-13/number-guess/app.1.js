function priceReduction(minutesReduction){
    if(minutesReduction > 180 || minutesReduction < 0){
        return "Not valid reduction!";
    }
    return (180-minutesReduction)/180*999;
}