//判断某个数字是否为奇数
/**
 * 返回一个数字是否为奇数
 * @param {number} num 
 * @returns {boolean} 
 */
function isOdd(num){
    return num % 2 !==0;
}

//判断一个数是否为素数
/**
 * 判断一个数是否为素数
 * @param {number} num 
 * @returns {boolean}
 */
function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i < num -1; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}

//数组求和
/**
 * 计算数组之和
 * @param {array} arr 
 * @returns {number}
 */
function sumOfArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

//返回数组中的最大值
/**
 * 返回数组中的最大值
 * @param {array} arr 
 * @returns {number}
 */
function maxOfArr(arr){
    if(arr.length === 0){
        return;
    }
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

//返回数组中的最小值
/**
 * 
 * @param {array} arr 
 * @returns {number}
 */
function minOfArr(arr){
    if(arr.length === 0){
        return;
    }
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

//判断数组是否为稀松数组
/**
 * 判断数组是否为稀松数组
 * @param {array} arr 
 */
function hasEmptyInArr(arr){
    //稀松数组 下标连续
    for(let i = 0; i < arr.length; i++){
        if(!(i in arr)){
            return true;
        }
    }
    return false;
}

//判断某年是否为闰年
/**
 * 判断某年是否为闰年
 * @param {number} year 
 */
function leapYear(year){
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

//写一个函数返回某年某月的天数
function getDays(year,month){
    if(month === 2){
        return leapYear(year) ? 29 : 28;
    }
    else if(month < 8 && isOdd(month) || month >= 8 && !isOdd(month)){
        return 31;
    }
    else{
        return 30;
    }
}

//写一个函数 得到一个数组中出现频率最多的数字和频率
/**
 * 得到一个数组中出现频率最多的数字和频率
 * @param {array} arr 
 * @returns {Object}
 */
function getFreqInArr(arr){
    let records = {};
    for(let i = 0; i < arr.length; i++){
        let n = arr[i];
        if(records[n]){
            records[n]++
        }else{
            records[n] = 1
        }
    }
    let frequen;
    for(let prop in records){
        if(!frequen || records[prop] > frequen.frequency){
            frequen = {
                number: +prop,
                frequency: records[prop]
            }
        }
    }
    return frequen;
}

//普通数组排序
function srrSort(arr){
    for(let i = 1; i <= arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp
            }
        }
    }
    return arr
}


//数组排序
function sort(arr, callbackFun){
    if(!callbackFun){
        callbackFun = function(a,b){
            if(a > b){
                return 1;
            }else if(a === b){
                return 0;
            }else{
                return -1;
            }
        }
    }
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(callbackFun(arr[j], arr[j+1]) > 0){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp
            }
        }
    }   
}


//筛选
function filter(arr, callbackFun){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callbackFun(arr[i], i)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

//找到第一个符合条件的数据
function find(arr, callbackFun){
    for(let i = 0; i < arr.length; i++){
        if(callbackFun(arr[i], i)){
            return arr[i];
        }
    }
}

//找到符合条件的数据的数量
function count(arr, callbackFun){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(callbackFun(arr[i], i)){
            sum++;
        }
    }
    return sum;
}
















