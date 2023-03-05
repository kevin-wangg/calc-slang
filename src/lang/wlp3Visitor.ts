// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `wlp3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface wlp3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `funprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunprog?: (ctx: FunprogContext) => Result;

	/**
	 * Visit a parse tree produced by the `mainprog`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainprog?: (ctx: MainprogContext) => Result;

	/**
	 * Visit a parse tree produced by the `dcls`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcls?: (ctx: DclsContext) => Result;

	/**
	 * Visit a parse tree produced by the `paramsempty`
	 * labeled alternative in `wlp3Parser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamsempty?: (ctx: ParamsemptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `inttype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInttype?: (ctx: InttypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `booltype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooltype?: (ctx: BooltypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringtype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringtype?: (ctx: StringtypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `intstartype`
	 * labeled alternative in `wlp3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntstartype?: (ctx: IntstartypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `arglst`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglst?: (ctx: ArglstContext) => Result;

	/**
	 * Visit a parse tree produced by the `arglistempty`
	 * labeled alternative in `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglistempty?: (ctx: ArglistemptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstatement?: (ctx: IfstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `whilestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhilestatement?: (ctx: WhilestatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `printfstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintfstatement?: (ctx: PrintfstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `dclstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDclstatement?: (ctx: DclstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `dclassignment`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDclassignment?: (ctx: DclassignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnstatement?: (ctx: ReturnstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `freestatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreestatement?: (ctx: FreestatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprstatement`
	 * labeled alternative in `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprstatement?: (ctx: ExprstatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `bool`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by the `unopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnopexpr?: (ctx: UnopexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `binopexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinopexpr?: (ctx: BinopexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `binlogexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinlogexpr?: (ctx: BinlogexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `idexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdexpr?: (ctx: IdexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnexpr?: (ctx: FnexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `mallocexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMallocexpr?: (ctx: MallocexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `starexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStarexpr?: (ctx: StarexprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ampersandexpr`
	 * labeled alternative in `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmpersandexpr?: (ctx: AmpersandexprContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.dcl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcl?: (ctx: DclContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.binaryoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryoperator?: (ctx: BinaryoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.binarylogical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinarylogical?: (ctx: BinarylogicalContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.unaryoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryoperator?: (ctx: UnaryoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `wlp3Parser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;
}

