'use strict';

exports.type = 'perItem';

exports.active = true;

exports.params = {
    stroke: true,
    fill: true
};

var styleOrScript = ['style', 'script'],
    hasStyleOrScript = false;

/**
 * Remove useless stroke and fill attrs.
 *
 * @param {Object} item current iteration item
 * @param {Object} params plugin params
 *
 * @author Termina1
 */
 
function replaceColor(attr) {
    if(attr.value === '#6D6E71') {
        attr.value = 'currentColor';
    }
} 

exports.fn = function(item, params) {
    if (item.isElem(styleOrScript)) {
        hasStyleOrScript = true;
    }

    if (!hasStyleOrScript) {
        if (item.hasAttr('fill')) {
            replaceColor(item.attr('fill'));
        }
        if (item.hasAttr('stroke')) {
            replaceColor(item.attr('stroke'));
        }
    }

};
