// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FunprogContext } from "./wlp3Parser";
import { MainprogContext } from "./wlp3Parser";
import { DclsContext } from "./wlp3Parser";
import { ParamsemptyContext } from "./wlp3Parser";
import { InttypeContext } from "./wlp3Parser";
import { BooltypeContext } from "./wlp3Parser";
import { StringtypeContext } from "./wlp3Parser";
import { IntstartypeContext } from "./wlp3Parser";
import { ArglstContext } from "./wlp3Parser";
import { ArglistemptyContext } from "./wlp3Parser";
import { AssignmentContext } from "./wlp3Parser";
import { IfstatementContext } from "./wlp3Parser";
import { WhilestatementContext } from "./wlp3Parser";
import { PrintfstatementContext } from "./wlp3Parser";
import { DclstatementContext } from "./wlp3Parser";
import { DclassignmentContext } from "./wlp3Parser";
import { ReturnstatementContext } from "./wlp3Parser";
import { FreestatementContext } from "./wlp3Parser";
import { ExprstatementContext } from "./wlp3Parser";
import { IntContext } from "./wlp3Parser";
import { StringContext } from "./wlp3Parser";
import { BoolContext } from "./wlp3Parser";
import { UnopexprContext } from "./wlp3Parser";
import { BinopexprContext } from "./wlp3Parser";
import { BinlogexprContext } from "./wlp3Parser";
import { IdexprContext } from "./wlp3Parser";
import { FnexprContext } from "./wlp3Parser";
import { MallocexprContext } from "./wlp3Parser";
import { StarexprContext } from "./wlp3Parser";
import { AmpersandexprContext } from "./wlp3Parser";
import { ProgramContext } from "./wlp3Parser";
import { MainContext } from "./wlp3Parser";
import { FunctionContext } from "./wlp3Parser";
import { BlockContext } from "./wlp3Parser";
import { ParamsContext } from "./wlp3Parser";
import { DclContext } from "./wlp3Parser";
import { TypeContext } from "./wlp3Parser";
import { ExprContext } from "./wlp3Parser";
import { StatementContext } from "./wlp3Parser";
import { ArglistContext } from "./wlp3Parser";
import { BinaryoperatorContext } from "./wlp3Parser";
import { BinarylogicalContext } from "./wlp3Parser";
import { UnaryoperatorContext } from "./wlp3Parser";
import { PredicateContext } from "./wlp3Parser";
import { LvalueContext } from "./wlp3Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `wlp3Parser`.
 */
export interface wlp3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `funprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	enterFunprog?: (ctx: FunprogContext) => void;
	/**
	 * Exit a parse tree produced by the `funprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	exitFunprog?: (ctx: FunprogContext) => void;

	/**
	 * Enter a parse tree produced by the `mainprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	enterMainprog?: (ctx: MainprogContext) => void;
	/**
	 * Exit a parse tree produced by the `mainprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	exitMainprog?: (ctx: MainprogContext) => void;

	/**
	 * Enter a parse tree produced by the `dcls`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	enterDcls?: (ctx: DclsContext) => void;
	/**
	 * Exit a parse tree produced by the `dcls`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	exitDcls?: (ctx: DclsContext) => void;

	/**
	 * Enter a parse tree produced by the `paramsempty`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	enterParamsempty?: (ctx: ParamsemptyContext) => void;
	/**
	 * Exit a parse tree produced by the `paramsempty`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	exitParamsempty?: (ctx: ParamsemptyContext) => void;

	/**
	 * Enter a parse tree produced by the `inttype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterInttype?: (ctx: InttypeContext) => void;
	/**
	 * Exit a parse tree produced by the `inttype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitInttype?: (ctx: InttypeContext) => void;

	/**
	 * Enter a parse tree produced by the `booltype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterBooltype?: (ctx: BooltypeContext) => void;
	/**
	 * Exit a parse tree produced by the `booltype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitBooltype?: (ctx: BooltypeContext) => void;

	/**
	 * Enter a parse tree produced by the `stringtype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterStringtype?: (ctx: StringtypeContext) => void;
	/**
	 * Exit a parse tree produced by the `stringtype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitStringtype?: (ctx: StringtypeContext) => void;

	/**
	 * Enter a parse tree produced by the `intstartype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterIntstartype?: (ctx: IntstartypeContext) => void;
	/**
	 * Exit a parse tree produced by the `intstartype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitIntstartype?: (ctx: IntstartypeContext) => void;

	/**
	 * Enter a parse tree produced by the `arglst`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglst?: (ctx: ArglstContext) => void;
	/**
	 * Exit a parse tree produced by the `arglst`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglst?: (ctx: ArglstContext) => void;

	/**
	 * Enter a parse tree produced by the `arglistempty`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglistempty?: (ctx: ArglistemptyContext) => void;
	/**
	 * Exit a parse tree produced by the `arglistempty`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglistempty?: (ctx: ArglistemptyContext) => void;

	/**
	 * Enter a parse tree produced by the `assignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `assignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `ifstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterIfstatement?: (ctx: IfstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ifstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitIfstatement?: (ctx: IfstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `whilestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterWhilestatement?: (ctx: WhilestatementContext) => void;
	/**
	 * Exit a parse tree produced by the `whilestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitWhilestatement?: (ctx: WhilestatementContext) => void;

	/**
	 * Enter a parse tree produced by the `printfstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrintfstatement?: (ctx: PrintfstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `printfstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrintfstatement?: (ctx: PrintfstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `dclstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDclstatement?: (ctx: DclstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `dclstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDclstatement?: (ctx: DclstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `dclassignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDclassignment?: (ctx: DclassignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `dclassignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDclassignment?: (ctx: DclassignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `returnstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturnstatement?: (ctx: ReturnstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturnstatement?: (ctx: ReturnstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `freestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterFreestatement?: (ctx: FreestatementContext) => void;
	/**
	 * Exit a parse tree produced by the `freestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitFreestatement?: (ctx: FreestatementContext) => void;

	/**
	 * Enter a parse tree produced by the `exprstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterExprstatement?: (ctx: ExprstatementContext) => void;
	/**
	 * Exit a parse tree produced by the `exprstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitExprstatement?: (ctx: ExprstatementContext) => void;

	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `bool`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by the `bool`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by the `unopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnopexpr?: (ctx: UnopexprContext) => void;
	/**
	 * Exit a parse tree produced by the `unopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnopexpr?: (ctx: UnopexprContext) => void;

	/**
	 * Enter a parse tree produced by the `binopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinopexpr?: (ctx: BinopexprContext) => void;
	/**
	 * Exit a parse tree produced by the `binopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinopexpr?: (ctx: BinopexprContext) => void;

	/**
	 * Enter a parse tree produced by the `binlogexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinlogexpr?: (ctx: BinlogexprContext) => void;
	/**
	 * Exit a parse tree produced by the `binlogexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinlogexpr?: (ctx: BinlogexprContext) => void;

	/**
	 * Enter a parse tree produced by the `idexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdexpr?: (ctx: IdexprContext) => void;
	/**
	 * Exit a parse tree produced by the `idexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdexpr?: (ctx: IdexprContext) => void;

	/**
	 * Enter a parse tree produced by the `fnexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterFnexpr?: (ctx: FnexprContext) => void;
	/**
	 * Exit a parse tree produced by the `fnexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitFnexpr?: (ctx: FnexprContext) => void;

	/**
	 * Enter a parse tree produced by the `mallocexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterMallocexpr?: (ctx: MallocexprContext) => void;
	/**
	 * Exit a parse tree produced by the `mallocexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitMallocexpr?: (ctx: MallocexprContext) => void;

	/**
	 * Enter a parse tree produced by the `starexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterStarexpr?: (ctx: StarexprContext) => void;
	/**
	 * Exit a parse tree produced by the `starexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitStarexpr?: (ctx: StarexprContext) => void;

	/**
	 * Enter a parse tree produced by the `ampersandexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterAmpersandexpr?: (ctx: AmpersandexprContext) => void;
	/**
	 * Exit a parse tree produced by the `ampersandexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitAmpersandexpr?: (ctx: AmpersandexprContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.dcl`.
	 * @param ctx the parse tree
	 */
	enterDcl?: (ctx: DclContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.dcl`.
	 * @param ctx the parse tree
	 */
	exitDcl?: (ctx: DclContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.binaryoperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryoperator?: (ctx: BinaryoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.binaryoperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryoperator?: (ctx: BinaryoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.binarylogical`.
	 * @param ctx the parse tree
	 */
	enterBinarylogical?: (ctx: BinarylogicalContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.binarylogical`.
	 * @param ctx the parse tree
	 */
	exitBinarylogical?: (ctx: BinarylogicalContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.unaryoperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryoperator?: (ctx: UnaryoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.unaryoperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryoperator?: (ctx: UnaryoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `wlp3Parser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `wlp3Parser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;
}

