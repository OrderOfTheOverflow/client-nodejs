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
import DealNonStrictWithDetailsAllOfAge from './DealNonStrictWithDetailsAllOfAge';
import DealNonStrictWithDetailsAllOfAverageTimeToWon from './DealNonStrictWithDetailsAllOfAverageTimeToWon';
import DealNonStrictWithDetailsAllOfStayInPipelineStages from './DealNonStrictWithDetailsAllOfStayInPipelineStages';

/**
 * The DealNonStrictWithDetailsAllOf model module.
 * @module model/DealNonStrictWithDetailsAllOf
 * @version 1.0.0
 */
class DealNonStrictWithDetailsAllOf {
    /**
     * Constructs a new <code>DealNonStrictWithDetailsAllOf</code>.
     * @alias module:model/DealNonStrictWithDetailsAllOf
     */
    constructor() { 
        
        DealNonStrictWithDetailsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNonStrictWithDetailsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealNonStrictWithDetailsAllOf} obj Optional instance to populate.
     * @return {module:model/DealNonStrictWithDetailsAllOf} The populated <code>DealNonStrictWithDetailsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNonStrictWithDetailsAllOf();

            if (data.hasOwnProperty('average_time_to_won')) {
                obj['average_time_to_won'] = DealNonStrictWithDetailsAllOfAverageTimeToWon.constructFromObject(data['average_time_to_won']);

                delete data['average_time_to_won'];
            }
            if (data.hasOwnProperty('average_stage_progress')) {
                obj['average_stage_progress'] = ApiClient.convertToType(data['average_stage_progress'], 'Number');

                delete data['average_stage_progress'];
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = DealNonStrictWithDetailsAllOfAge.constructFromObject(data['age']);

                delete data['age'];
            }
            if (data.hasOwnProperty('stay_in_pipeline_stages')) {
                obj['stay_in_pipeline_stages'] = DealNonStrictWithDetailsAllOfStayInPipelineStages.constructFromObject(data['stay_in_pipeline_stages']);

                delete data['stay_in_pipeline_stages'];
            }
            if (data.hasOwnProperty('last_activity')) {
                obj['last_activity'] = ApiClient.convertToType(data['last_activity'], Object);

                delete data['last_activity'];
            }
            if (data.hasOwnProperty('next_activity')) {
                obj['next_activity'] = ApiClient.convertToType(data['next_activity'], Object);

                delete data['next_activity'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/DealNonStrictWithDetailsAllOfAverageTimeToWon} average_time_to_won
 */
DealNonStrictWithDetailsAllOf.prototype['average_time_to_won'] = undefined;

/**
 * The average of the Deal stage progression
 * @member {Number} average_stage_progress
 */
DealNonStrictWithDetailsAllOf.prototype['average_stage_progress'] = undefined;

/**
 * @member {module:model/DealNonStrictWithDetailsAllOfAge} age
 */
DealNonStrictWithDetailsAllOf.prototype['age'] = undefined;

/**
 * @member {module:model/DealNonStrictWithDetailsAllOfStayInPipelineStages} stay_in_pipeline_stages
 */
DealNonStrictWithDetailsAllOf.prototype['stay_in_pipeline_stages'] = undefined;

/**
 * The details of the last activity associated with the Deal
 * @member {Object} last_activity
 */
DealNonStrictWithDetailsAllOf.prototype['last_activity'] = undefined;

/**
 * The details of the next activity associated with the Deal
 * @member {Object} next_activity
 */
DealNonStrictWithDetailsAllOf.prototype['next_activity'] = undefined;






export default DealNonStrictWithDetailsAllOf;
