var postcss = require('postcss')
var specificity = require('css-specificity')

module.exports.postcss = function (css) {
    css.each(function (rule) {
        var calc = specificity.calc(rule.selector)
        calc.forEach(function (c) {
            if (isOnlyClassSelector(c.selector)) return
            throw new Error('YACP strict mode: using not only class selector')
        })
    })
    css.eachDecl(function (decl) {
        if (decl.important) throw new Error('YACP strict mode: using !important')
    })
    return css
}

function isOnlyClassSelector (selector) {
    if (selector.match(/^\./)
        && !selector.match(/\+|>|\*|~/)
        && !selector.match(/\s/)
    ) {
        return true;
    }
    return false;
}
