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
 * The NewDealProductAllOf model module.
 * @module model/NewDealProductAllOf
 * @version 1.0.0
 */
class NewDealProductAllOf {
    /**
     * Constructs a new <code>NewDealProductAllOf</code>.
     * @alias module:model/NewDealProductAllOf
     * @param productId {Number} The ID of the product that will be attached
     */
    constructor(productId) { 
        
        NewDealProductAllOf.initialize(this, productId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId) { 
        obj['product_id'] = productId;
    }

    /**
     * Constructs a <code>NewDealProductAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewDealProductAllOf} obj Optional instance to populate.
     * @return {module:model/NewDealProductAllOf} The populated <code>NewDealProductAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewDealProductAllOf();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product that will be attached
 * @member {Number} product_id
 */
NewDealProductAllOf.prototype['product_id'] = undefined;






export default NewDealProductAllOf;

