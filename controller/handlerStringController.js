/**
 * ==== EXERCISE 1 =====
 * LIVE Coding (query)
 *
 * `queryToObject` takes a string (similar to a query string)
 * and parses it, and returns the values in a hash object.
 * The hash keys have the format `article###`, the whole word `article` plus any number of digits (at least one).
 *
 * Example input:
 *         'a1.b2.article1=0&a2.article2=1&c3!article3=0&article16-abc=2';
 *
 * Example output:
 *         {
 *             article1: 'DRAFT',
 *             article2: 'REVISION',
 *             article3: 'DRAFT',
 *             article16: 'READY'
 *         }
*/
/**
 * @param {String} query - input
 * @returns {Object} result - mapped object
 */
this.result = {};

const map = new Map([['0', 'DRAFT'], ['1', 'REVISION'], ['2', 'READY']]);

const getMapValue = (key, value) => this.result[key] = map.get(value);

module.exports.getObject = (queryString) => {
    const queryToObject = (qryStr) => {
        const indexOf = qryStr.indexOf('&');
        const qstrKey = qryStr.match(/article[0-9]{1,3}/);
        const qstrValue = qryStr.match(/\=[0-2]{1}/)[0].substr(1);

        getMapValue(qstrKey, qstrValue);
        if (indexOf === -1) return;
        queryToObject(qryStr.substr(indexOf + 1, qryStr.length));
    };

    queryToObject(queryString);
    return this.result;
};

/**
 * ==== EXERCISE 2 =====
 * '397' -> 1
 * 3+9=12 ->
 * 1+2=3 ->
 * 3+7=10 ->
 * 1+0=1 ----->
 */
/**
 * @param {String} number - input
 * @returns {Object} result - 1
 */
this.total = 0;

const add_two_digits = (num) => num % 10 + Math.floor(num / 10);

module.exports.getSum = (stringToAdd) => {
    const add = (str) => {
        const idx = Number( str.match(/[0-9]{1}/) );
        this.total += idx;
        console.log(`:: Total ADDED :: >> ${this.total}`);

        if (this.total > 9) this.total = add_two_digits(this.total);
        if (str.length === 0) return;

        add(str.substr(1, str.length));
    };

    add(stringToAdd);
    return this.total;
};
