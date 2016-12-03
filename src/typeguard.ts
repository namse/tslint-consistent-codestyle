import * as ts from 'typescript';

export function isBlockLike(node: ts.Node): node is ts.BlockLike {
    return 'statements' in node;
}

export function isComputedPropertyName(node: ts.Node): node is ts.ComputedPropertyName {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}

export function isElementAccessExpression(node: ts.Node): node is ts.ElementAccessExpression {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}

export function isIdentifier(node: ts.Node): node is ts.Identifier {
    return node.kind === ts.SyntaxKind.Identifier;
}

export function isIfStatement(node: ts.Node): node is ts.IfStatement {
    return node.kind === ts.SyntaxKind.IfStatement;
}

export function isLiteralExpression(node: ts.Node): node is ts.LiteralExpression {
    return node.kind >= ts.SyntaxKind.FirstLiteralToken &&
           node.kind <= ts.SyntaxKind.LastLiteralToken;
}

export function isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}
