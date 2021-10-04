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
import GetDealsSummaryDataValuesTotal from './GetDealsSummaryDataValuesTotal';
import GetDealsSummaryDataWeightedValuesTotal from './GetDealsSummaryDataWeightedValuesTotal';

/**
 * The GetDealsSummaryData model module.
 * @module model/GetDealsSummaryData
 * @version 1.0.0
 */
class GetDealsSummaryData {
    /**
     * Constructs a new <code>GetDealsSummaryData</code>.
     * The summary of Deals
     * @alias module:model/GetDealsSummaryData
     */
    constructor() { 
        
        GetDealsSummaryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDealsSummaryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDealsSummaryData} obj Optional instance to populate.
     * @return {module:model/GetDealsSummaryData} The populated <code>GetDealsSummaryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDealsSummaryData();

            if (data.hasOwnProperty('values_total')) {
                obj['values_total'] = GetDealsSummaryDataValuesTotal.constructFromObject(data['values_total']);

                delete data['values_total'];
            }
            if (data.hasOwnProperty('weighted_values_total')) {
                obj['weighted_values_total'] = GetDealsSummaryDataWeightedValuesTotal.constructFromObject(data['weighted_values_total']);

                delete data['weighted_values_total'];
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');

                delete data['total_count'];
            }
            if (data.hasOwnProperty('total_currency_converted_value')) {
                obj['total_currency_converted_value'] = ApiClient.convertToType(data['total_currency_converted_value'], 'Number');

                delete data['total_currency_converted_value'];
            }
            if (data.hasOwnProperty('total_weighted_currency_converted_value')) {
                obj['total_weighted_currency_converted_value'] = ApiClient.convertToType(data['total_weighted_currency_converted_value'], 'Number');

                delete data['total_weighted_currency_converted_value'];
            }
            if (data.hasOwnProperty('total_currency_converted_value_formatted')) {
                obj['total_currency_converted_value_formatted'] = ApiClient.convertToType(data['total_currency_converted_value_formatted'], 'String');

                delete data['total_currency_converted_value_formatted'];
            }
            if (data.hasOwnProperty('total_weighted_currency_converted_value_formatted')) {
                obj['total_weighted_currency_converted_value_formatted'] = ApiClient.convertToType(data['total_weighted_currency_converted_value_formatted'], 'String');

                delete data['total_weighted_currency_converted_value_formatted'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/GetDealsSummaryDataValuesTotal} values_total
 */
GetDealsSummaryData.prototype['values_total'] = undefined;

/**
 * @member {module:model/GetDealsSummaryDataWeightedValuesTotal} weighted_values_total
 */
GetDealsSummaryData.prototype['weighted_values_total'] = undefined;

/**
 * The total number of Deals
 * @member {Number} total_count
 */
GetDealsSummaryData.prototype['total_count'] = undefined;

/**
 * The total value of Deals converted into the company default currency
 * @member {Number} total_currency_converted_value
 */
GetDealsSummaryData.prototype['total_currency_converted_value'] = undefined;

/**
 * The total weighted value of Deals converted into the company default currency
 * @member {Number} total_weighted_currency_converted_value
 */
GetDealsSummaryData.prototype['total_weighted_currency_converted_value'] = undefined;

/**
 * The total converted value of Deals formatted with the company default currency. E.g. US$5,100.96
 * @member {String} total_currency_converted_value_formatted
 */
GetDealsSummaryData.prototype['total_currency_converted_value_formatted'] = undefined;

/**
 * The total weighted value of Deals formatted with the company default currency. E.g. US$5,100.96
 * @member {String} total_weighted_currency_converted_value_formatted
 */
GetDealsSummaryData.prototype['total_weighted_currency_converted_value_formatted'] = undefined;






export default GetDealsSummaryData;

