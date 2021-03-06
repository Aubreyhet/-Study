//命名空间函数
let myPrivateFun = {
    //判断某个数字是否为奇数
    /**
     * 返回一个数字是否为奇数
     * @param {number} num 
     * @returns {boolean} 
     */
    isOdd: function (num) {
        return num % 2 !== 0;
    }
    ,
    //判断一个数是否为素数
    /**
     * 判断一个数是否为素数
     * @param {number} num 
     * @returns {boolean}
     */
    isPrime: function (num) {
        if (num < 2) {
            return false
        }
        for (let i = 2; i < num - 1; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true
    }
    ,
    //数组求和
    /**
     * 计算数组之和
     * @param {array} arr 
     * @returns {number}
     */
    sumOfArr: function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    ,
    //返回数组中的最大值
    /**
     * 返回数组中的最大值
     * @param {array} arr 
     * @returns {number}
     */
    maxOfArr: function (arr) {
        if (arr.length === 0) {
            return;
        }
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    }
    ,
    //返回数组中的最小值
    /**
     * 
     * @param {array} arr 
     * @returns {number}
     */
    minOfArr: function (arr) {
        if (arr.length === 0) {
            return;
        }
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    }
    ,
    //判断数组是否为稀松数组
    /**
     * 判断数组是否为稀松数组
     * @param {array} arr 
     */
    hasEmptyInArr: function (arr) {
        //稀松数组 下标连续
        for (let i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                return true;
            }
        }
        return false;
    }
    ,
    //判断某年是否为闰年
    /**
     * 判断某年是否为闰年
     * @param {number} year 
     */
    leapYear: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    ,
    //写一个函数返回某年某月的天数
    getDays: function (year, month) {
        if (month === 2) {
            return this.leapYear(year) ? 29 : 28;
        }
        else if (month < 8 && this.isOdd(month) || month >= 8 && !this.isOdd(month)) {
            return 31;
        }
        else {
            return 30;
        }
    }
    ,
    //写一个函数 得到一个数组中出现频率最多的数字和频率
    /**
     * 得到一个数组中出现频率最多的数字和频率
     * @param {array} arr 
     * @returns {Object}
     */
    getFreqInArr: function (arr) {
        let records = {};
        for (let i = 0; i < arr.length; i++) {
            let n = arr[i];
            if (records[n]) {
                records[n]++
            } else {
                records[n] = 1
            }
        }
        let frequen;
        for (let prop in records) {
            if (!frequen || records[prop] > frequen.frequency) {
                frequen = {
                    number: +prop,
                    frequency: records[prop]
                }
            }
        }
        return frequen;
    }
    ,
    //普通数组排序
    srrSort: function (arr) {
        for (let i = 1; i <= arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp
                }
            }
        }
        return arr
    }
    ,
    myArrsort: function (arr, callbackFun) {
        if (!callbackFun) {
            callbackFun = function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a === b) {
                    return 0;
                } else {
                    return -1;
                }
            }
        }
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                if (callbackFun(arr[j], arr[j + 1]) > 0) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp
                }
            }
        }
    }
    ,
    filter: function (arr, callbackFun) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callbackFun(arr[i], i)) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    ,
    find: function (arr, callbackFun) {
        for (let i = 0; i < arr.length; i++) {
            if (callbackFun(arr[i], i)) {
                return arr[i];
            }
        }
    }
    ,
    count: function (arr, callbackFun) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (callbackFun(arr[i], i)) {
                sum++;
            }
        }
        return sum;
    },
    /**
     * 得到随机整数
     * @param {*} max 随机最小
     * @param {*} min 随机最大(取不到最大值)
     */
    myRandom: function (max, min) {
        return parseInt(Math.random() * (max - min) + min)
    },
    /**
     * 根据生日计算年龄
     * @param {*} year 
     * @param {*} month 
     * @param {*} day 
     * @returns {number} 年龄
     */
    getAge: function (year,month,day){
        let nowtime = new Date();
        let dec = nowtime.getFullYear() - year;
        let thisYear = new Date(nowtime.getFullYear(),month-1,day)
        if(thisYear > nowtime){
            dec--;
        }
        return dec
    },
    /**
     * 计算还有多少天过生日
     * @param {*} month 
     * @param {*} day 
     */
    getDaysToBirthday: function(month,day){
        let now = new Date();
        let thisYear = now.getFullYear();
        let birthday = new Date(thisYear,month-1,day);
        if(birthday < now){
          birthday.setFullYear(thisYear+1)
        }
        let decTime = birthday - now;
        let days = decTime / (24*60*60*1000);
        return Math.ceil(days);
      }
}


