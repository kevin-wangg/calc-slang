grammar wlp3;		
program: fun=function prog=program # funprog
       | mn=main # mainprog
       ;
main:   'int' 'main' '(' ')' blk=block ;
function : t=type id=ID '(' prms=params ')' blk=block ;
block: '{' stmnts=statement* '}' ;
params: d=dcl (',' ds=dcl)* # dcls
      | <empty> # paramsempty
      ;
dcl: type ID;
type: 'int' # inttype
    | 'bool' # booltype
    | 'string' # stringtype
    | 'int*' #intstartype
    ;
expr: INT # int
    | STRING # string
    | BOOL # bool
	| unop=unaryoperator first=expr # unopexpr
	| first=expr binop=binaryoperator second=expr #binopexpr
	| first=expr binlog=binarylogical second=expr #binlogexpr
	| id=ID # idexpr
	| id=ID '(' arglst=arglist ')' # fnexpr
	| 'malloc' '(' first=expr ')' # mallocexpr
	| '*' first=expr # starexpr
	| '&' first=expr # ampersandexpr
    ;
statement: lv=lvalue '=' val=expr ';' # assignment
       | 'if' '(' pred=predicate ')' cons=block 'else' alt=block # ifstatement
	     | 'while' '(' pred=predicate ')' body=block # whilestatement
	     | 'printf' '(' body=expr ')' ';' # printfstatement
	     | d=dcl ';' # dclstatement
	     | d=dcl '=' val=expr ';' # dclassignment
	     | 'return' val=expr ';' # returnstatement
	     | 'free' '(' val=expr ')' ';' # freestatement
       | val=expr ';'# exprstatement
       ;
arglist: arg=expr (',' args=expr)* # arglst
	   | <empty> # arglistempty
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
predicate: pred=expr;
lvalue: id=ID | '(' lv=lvalue ')';

WS      : [ \t\r\n]+ -> skip ;
INT     : [0-9]+ ;
STRING  : '"'[a-zA-Z0-9]+'"' ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;

BOOL    : 'true' | 'false';
