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
 * The ProductSearchItemItemOwner model module.
 * @module model/ProductSearchItemItemOwner
 * @version 1.0.0
 */
class ProductSearchItemItemOwner {
    /**
     * Constructs a new <code>ProductSearchItemItemOwner</code>.
     * @alias module:model/ProductSearchItemItemOwner
     */
    constructor() { 
        
        ProductSearchItemItemOwner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchItemItemOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchItemItemOwner} obj Optional instance to populate.
     * @return {module:model/ProductSearchItemItemOwner} The populated <code>ProductSearchItemItemOwner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchItemItemOwner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the owner of the product
 * @member {Number} id
 */
ProductSearchItemItemOwner.prototype['id'] = undefined;






export default ProductSearchItemItemOwner;

