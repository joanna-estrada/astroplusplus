export class Program {
    constructor(statements) {
        this.statements = statements
    }
}

export class Assignment {
    constructor(target, source){
        Object.assign(this, {target, source})
        // this.target = target
        // this.source = source
    }
}

export class PrintStatement {
    constructor(argument) {
        this.argument = argument
    }
}

export class IfStmt {
    constructor
}

export class BreakStmt {
    constructor() {}
}

export class Variable {
    constructor(name){
        Object.assign(this, { name })
    }
}

export class InstrinsicFunction {
    constructor(name, parameterCount){
        Object.assign(this, { name, parameterCount })
    }
}

export class BinaryExpression {
    constructor(op, argument) {
        
    }
}