// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MorefunctionsContext } from "./wlp3Parser";
import { MainmethodContext } from "./wlp3Parser";
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
	 * Visit a parse tree produced by the `morefunctions`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMorefunctions?: (ctx: MorefunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `mainmethod`
	 * labeled alternative in `wlp3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainmethod?: (ctx: MainmethodContext) => Result;

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

