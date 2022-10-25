var luhn_validate = function(imei){
    return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){
        return n===(imei.length-1)? 0 : sum + parseInt((n%2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
    }, 0)) % 10 == 0;
};
