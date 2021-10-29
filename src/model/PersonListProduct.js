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
import NumberBooleanDefault1 from './NumberBooleanDefault1';
import VisibleTo from './VisibleTo';

/**
 * The PersonListProduct model module.
 * @module model/PersonListProduct
 * @version 1.0.0
 */
class PersonListProduct {
    /**
     * Constructs a new <code>PersonListProduct</code>.
     * @alias module:model/PersonListProduct
     */
    constructor() { 
        
        PersonListProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonListProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonListProduct} obj Optional instance to populate.
     * @return {module:model/PersonListProduct} The populated <code>PersonListProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonListProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');

                delete data['category'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = NumberBooleanDefault1.constructFromObject(data['active_flag']);

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = NumberBooleanDefault1.constructFromObject(data['selectable']);

                delete data['selectable'];
            }
            if (data.hasOwnProperty('first_char')) {
                obj['first_char'] = ApiClient.convertToType(data['first_char'], 'String');

                delete data['first_char'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Product
 * @member {Number} id
 */
PersonListProduct.prototype['id'] = undefined;

/**
 * The ID of the company
 * @member {Number} company_id
 */
PersonListProduct.prototype['company_id'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
PersonListProduct.prototype['name'] = undefined;

/**
 * Product code
 * @member {String} code
 */
PersonListProduct.prototype['code'] = undefined;

/**
 * The Description of the Product
 * @member {String} description
 */
PersonListProduct.prototype['description'] = undefined;

/**
 * Unit in which this product is sold
 * @member {String} unit
 */
PersonListProduct.prototype['unit'] = undefined;

/**
 * Tax percentage
 * @member {Number} tax
 * @default 0
 */
PersonListProduct.prototype['tax'] = 0;

/**
 * Category of the Product
 * @member {String} category
 */
PersonListProduct.prototype['category'] = undefined;

/**
 * @member {module:model/NumberBooleanDefault1} active_flag
 */
PersonListProduct.prototype['active_flag'] = undefined;

/**
 * @member {module:model/NumberBooleanDefault1} selectable
 */
PersonListProduct.prototype['selectable'] = undefined;

/**
 * The First letter of the Product name
 * @member {String} first_char
 */
PersonListProduct.prototype['first_char'] = undefined;

/**
 * Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
PersonListProduct.prototype['visible_to'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used.
 * @member {Number} owner_id
 */
PersonListProduct.prototype['owner_id'] = undefined;

/**
 * Files count
 * @member {Number} files_count
 */
PersonListProduct.prototype['files_count'] = undefined;

/**
 * Followers count
 * @member {Number} followers_count
 */
PersonListProduct.prototype['followers_count'] = undefined;

/**
 * The date and time when the Product was added to the Deal
 * @member {String} add_time
 */
PersonListProduct.prototype['add_time'] = undefined;

/**
 * The date and time when the Product was updated to the Deal
 * @member {String} update_time
 */
PersonListProduct.prototype['update_time'] = undefined;

/**
 * The ID of the Deal
 * @member {Number} deal_id
 */
PersonListProduct.prototype['deal_id'] = undefined;






export default PersonListProduct;
