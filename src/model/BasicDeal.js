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
import VisibleTo from './VisibleTo';

/**
 * The BasicDeal model module.
 * @module model/BasicDeal
 * @version 1.0.0
 */
class BasicDeal {
    /**
     * Constructs a new <code>BasicDeal</code>.
     * @alias module:model/BasicDeal
     */
    constructor() { 
        
        BasicDeal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicDeal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicDeal} obj Optional instance to populate.
     * @return {module:model/BasicDeal} The populated <code>BasicDeal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicDeal();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');

                delete data['probability'];
            }
            if (data.hasOwnProperty('lost_reason')) {
                obj['lost_reason'] = ApiClient.convertToType(data['lost_reason'], 'String');

                delete data['lost_reason'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The value of the deal. If omitted, value will be set to 0.
 * @member {String} value
 */
BasicDeal.prototype['value'] = undefined;

/**
 * The currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
 * @member {String} currency
 */
BasicDeal.prototype['currency'] = undefined;

/**
 * The ID of the user which will be the owner of the created deal. If not provided, the user making the request will be used.
 * @member {Number} user_id
 */
BasicDeal.prototype['user_id'] = undefined;

/**
 * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `org_id` is specified.
 * @member {Number} person_id
 */
BasicDeal.prototype['person_id'] = undefined;

/**
 * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
 * @member {Number} org_id
 */
BasicDeal.prototype['org_id'] = undefined;

/**
 * The ID of a stage this deal will be placed in a pipeline (note that you can't supply the ID of the pipeline as this will be assigned automatically based on `stage_id`). If omitted, the deal will be placed in the first stage of the default pipeline.
 * @member {Number} stage_id
 */
BasicDeal.prototype['stage_id'] = undefined;

/**
 * open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
 * @member {module:model/BasicDeal.StatusEnum} status
 */
BasicDeal.prototype['status'] = undefined;

/**
 * The expected close date of the deal. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
BasicDeal.prototype['expected_close_date'] = undefined;

/**
 * The success probability percentage of the deal. Used/shown only when `deal_probability` for the pipeline of the deal is enabled.
 * @member {Number} probability
 */
BasicDeal.prototype['probability'] = undefined;

/**
 * The optional message about why the deal was lost (to be used when status = lost)
 * @member {String} lost_reason
 */
BasicDeal.prototype['lost_reason'] = undefined;

/**
 * The visibility of the deal. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
BasicDeal.prototype['visible_to'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BasicDeal['StatusEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "won"
     * @const
     */
    "won": "won",

    /**
     * value: "lost"
     * @const
     */
    "lost": "lost",

    /**
     * value: "lost"
     * @const
     */
    "lost": "lost",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"
};



export default BasicDeal;

