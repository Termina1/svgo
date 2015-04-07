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
exports.fn = function(item, params) {
    if (item.isElem(styleOrScript)) {
        hasStyleOrScript = true;
    }

    if (!hasStyleOrScript) {
        if (item.hasAttr('fill')) {
            item.attr('fill').value = 'none';
        }
        if (item.hasAttr('stroke')) {
            item.attr('stroke').value = 'none';
        }
    }

};
