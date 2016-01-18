import xtag from 'x-tag';
import Handlebars from './../../../bower_components/handlebars/handlebars.min';
import <%= camelizedName %>Template from './<%= filename %>.html';
import './<%= filename %>.less';

(function () {
    xtag.register('<%= filename %>', {
        lifecycle: {
            // Fires when an instance of the element is created
            created: function () {
                //To handle Handlebar template in the markup
                var template = Handlebars.compile(<%= camelizedName %>Template);
                this.innerHTML = template(this);
            },

            // Fires when an instance was inserted into the document
            inserted: function () {
            },

            // Fires when an instance was removed from the document
            removed: function () {
            },

            // Fires when an attribute was added, removed, or updated
            attributeChanged: function (attr, oldVal, newVal) {
            }
        },
        events: {},
        accessors: {
			// Returns an array containing the name of the accessors that are intended to be exposed in debug mode
			"debugProps": {
                get: function () {
                    return [];
                }
            }},
        methods: {}
    });
}());