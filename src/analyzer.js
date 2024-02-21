import * as core from "./core.js"

export default function analyze(match) {
    const analyzer = match.matcher.grammar
    .createSemantics()
    .addOperation("rep", {
        Program(statements){},
        Assignment(id, _eq, expression, _semi) {},
        Print (_print, exp, _semi) {},
        IfStmt(_if, exp, block, elsePart) {},
        ElsePart_nested_if(_else, stmt) {},
        WhileStmt(_while, exp, block) {},
        Block(_open, stmts, _close){},
        BreakStmt(_break, _semi) {},
        // ...
        numeral(_main, _dot, _frac, _e, _sign, _exp){}

    }) 
    return analyzer(match).rep()
}