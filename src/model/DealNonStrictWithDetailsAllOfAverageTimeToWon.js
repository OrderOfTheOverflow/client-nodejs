/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DealNonStrictWithDetailsAllOfAverageTimeToWon model module.
 * @module model/DealNonStrictWithDetailsAllOfAverageTimeToWon
 * @version 1.0.0
 */
class DealNonStrictWithDetailsAllOfAverageTimeToWon {
    /**
     * Constructs a new <code>DealNonStrictWithDetailsAllOfAverageTimeToWon</code>.
     * The average time to win the Deal
     * @alias module:model/DealNonStrictWithDetailsAllOfAverageTimeToWon
     */
    constructor() { 
        
        DealNonStrictWithDetailsAllOfAverageTimeToWon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNonStrictWithDetailsAllOfAverageTimeToWon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealNonStrictWithDetailsAllOfAverageTimeToWon} obj Optional instance to populate.
     * @return {module:model/DealNonStrictWithDetailsAllOfAverageTimeToWon} The populated <code>DealNonStrictWithDetailsAllOfAverageTimeToWon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNonStrictWithDetailsAllOfAverageTimeToWon();

            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');

                delete data['y'];
            }
            if (data.hasOwnProperty('m')) {
                obj['m'] = ApiClient.convertToType(data['m'], 'Number');

                delete data['m'];
            }
            if (data.hasOwnProperty('d')) {
                obj['d'] = ApiClient.convertToType(data['d'], 'Number');

                delete data['d'];
            }
            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], 'Number');

                delete data['h'];
            }
            if (data.hasOwnProperty('i')) {
                obj['i'] = ApiClient.convertToType(data['i'], 'Number');

                delete data['i'];
            }
            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'Number');

                delete data['s'];
            }
            if (data.hasOwnProperty('total_seconds')) {
                obj['total_seconds'] = ApiClient.convertToType(data['total_seconds'], 'Number');

                delete data['total_seconds'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Years
 * @member {Number} y
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['y'] = undefined;

/**
 * Months
 * @member {Number} m
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['m'] = undefined;

/**
 * Days
 * @member {Number} d
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['d'] = undefined;

/**
 * Hours
 * @member {Number} h
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['h'] = undefined;

/**
 * Minutes
 * @member {Number} i
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['i'] = undefined;

/**
 * Seconds
 * @member {Number} s
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['s'] = undefined;

/**
 * The total time in seconds
 * @member {Number} total_seconds
 */
DealNonStrictWithDetailsAllOfAverageTimeToWon.prototype['total_seconds'] = undefined;






export default DealNonStrictWithDetailsAllOfAverageTimeToWon;

