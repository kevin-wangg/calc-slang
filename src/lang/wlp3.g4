
grammar wlp3;		
program: fun=function prog=program # morefunctions
       | mainmethod=main # mainmethod
       ;
main:   'int' 'main' '(' ')' block ;
function : type ID '(' params ')' block ;
block: '{' statement* '}' ;
params: dcl (',' dcl)* 
      | <empty> 
      ;
dcl: type ID;
type: 'int'
    | 'bool'
    | 'string'
    | 'int*'
    ;
expr: INT | STRING | BOOL
	| unaryoperator expr
	| expr binaryoperator expr
	| expr binarylogical expr
	| ID
	| ID '(' arglist ')'
	| 'malloc' '(' expr ')'
	| '*' expr
	| '&' expr
    ;
statement: lvalue '=' expr ';'
       | 'if' '(' predicate ')' block 'else' block
	     | 'while' '(' predicate ')' block
	     | 'printf' '(' expr ')' ';'
	     | dcl ';'
	     | dcl '=' expr ';'
	     | 'return' expr ';'
	     | 'free' '(' expr ')' ';'
       | expr ';'
       ;
arglist: expr (',' expr)*
	   | <empty>
     ;
binaryoperator: '+'
               | '-'
               | '*'
               | '=='
               | '>'
               | '<'
               | '<='
               | '>='
               ;
binarylogical: '&&'
              | '||'
              ;
unaryoperator: '!';
predicate: expr;
lvalue: ID | '(' lvalue ')';

WS      : [ \t\r\n]+ -> skip ;
INT     : [0-9]+ ;
STRING  : '"'[a-zA-Z0-9]+'"' ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
BOOL    : 'true' | 'false';
