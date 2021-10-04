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
 * The RelatedDealDataDEALID model module.
 * @module model/RelatedDealDataDEALID
 * @version 1.0.0
 */
class RelatedDealDataDEALID {
    /**
     * Constructs a new <code>RelatedDealDataDEALID</code>.
     * The ID of the Deal which is associated with the item
     * @alias module:model/RelatedDealDataDEALID
     */
    constructor() { 
        
        RelatedDealDataDEALID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedDealDataDEALID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedDealDataDEALID} obj Optional instance to populate.
     * @return {module:model/RelatedDealDataDEALID} The populated <code>RelatedDealDataDEALID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedDealDataDEALID();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Deal associated with the item
 * @member {Number} id
 */
RelatedDealDataDEALID.prototype['id'] = undefined;

/**
 * The title of the Deal associated with the item
 * @member {String} title
 */
RelatedDealDataDEALID.prototype['title'] = undefined;

/**
 * The status of the Deal associated with the item
 * @member {String} status
 */
RelatedDealDataDEALID.prototype['status'] = undefined;

/**
 * The value of the Deal that is associated with the item
 * @member {Number} value
 */
RelatedDealDataDEALID.prototype['value'] = undefined;

/**
 * The currency of the Deal value
 * @member {String} currency
 */
RelatedDealDataDEALID.prototype['currency'] = undefined;

/**
 * The ID of the stage the Deal is currently at
 * @member {Number} stage_id
 */
RelatedDealDataDEALID.prototype['stage_id'] = undefined;

/**
 * The ID of the pipeline the Deal is in
 * @member {Number} pipeline_id
 */
RelatedDealDataDEALID.prototype['pipeline_id'] = undefined;






export default RelatedDealDataDEALID;

