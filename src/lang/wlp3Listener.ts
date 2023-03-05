// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { MorefunctionsContext } from './wlp3Parser'
import { MainmethodContext } from './wlp3Parser'
import { ProgramContext } from './wlp3Parser'
import { MainContext } from './wlp3Parser'
import { FunctionContext } from './wlp3Parser'
import { BlockContext } from './wlp3Parser'
import { ParamsContext } from './wlp3Parser'
import { DclContext } from './wlp3Parser'
import { TypeContext } from './wlp3Parser'
import { ExprContext } from './wlp3Parser'
import { StatementContext } from './wlp3Parser'
import { ArglistContext } from './wlp3Parser'
import { BinaryoperatorContext } from './wlp3Parser'
import { BinarylogicalContext } from './wlp3Parser'
import { UnaryoperatorContext } from './wlp3Parser'
import { PredicateContext } from './wlp3Parser'
import { LvalueContext } from './wlp3Parser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `wlp3Parser`.
 */
export interface wlp3Listener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `morefunctions`
   * labeled alternative in `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  enterMorefunctions?: (ctx: MorefunctionsContext) => void
  /**
   * Exit a parse tree produced by the `morefunctions`
   * labeled alternative in `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  exitMorefunctions?: (ctx: MorefunctionsContext) => void

  /**
   * Enter a parse tree produced by the `mainmethod`
   * labeled alternative in `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  enterMainmethod?: (ctx: MainmethodContext) => void
  /**
   * Exit a parse tree produced by the `mainmethod`
   * labeled alternative in `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  exitMainmethod?: (ctx: MainmethodContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.main`.
   * @param ctx the parse tree
   */
  enterMain?: (ctx: MainContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.main`.
   * @param ctx the parse tree
   */
  exitMain?: (ctx: MainContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.function`.
   * @param ctx the parse tree
   */
  enterFunction?: (ctx: FunctionContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.function`.
   * @param ctx the parse tree
   */
  exitFunction?: (ctx: FunctionContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.block`.
   * @param ctx the parse tree
   */
  enterBlock?: (ctx: BlockContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.block`.
   * @param ctx the parse tree
   */
  exitBlock?: (ctx: BlockContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.params`.
   * @param ctx the parse tree
   */
  enterParams?: (ctx: ParamsContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.params`.
   * @param ctx the parse tree
   */
  exitParams?: (ctx: ParamsContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.dcl`.
   * @param ctx the parse tree
   */
  enterDcl?: (ctx: DclContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.dcl`.
   * @param ctx the parse tree
   */
  exitDcl?: (ctx: DclContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.expr`.
   * @param ctx the parse tree
   */
  enterExpr?: (ctx: ExprContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.expr`.
   * @param ctx the parse tree
   */
  exitExpr?: (ctx: ExprContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.arglist`.
   * @param ctx the parse tree
   */
  enterArglist?: (ctx: ArglistContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.arglist`.
   * @param ctx the parse tree
   */
  exitArglist?: (ctx: ArglistContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.binaryoperator`.
   * @param ctx the parse tree
   */
  enterBinaryoperator?: (ctx: BinaryoperatorContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.binaryoperator`.
   * @param ctx the parse tree
   */
  exitBinaryoperator?: (ctx: BinaryoperatorContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.binarylogical`.
   * @param ctx the parse tree
   */
  enterBinarylogical?: (ctx: BinarylogicalContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.binarylogical`.
   * @param ctx the parse tree
   */
  exitBinarylogical?: (ctx: BinarylogicalContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.unaryoperator`.
   * @param ctx the parse tree
   */
  enterUnaryoperator?: (ctx: UnaryoperatorContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.unaryoperator`.
   * @param ctx the parse tree
   */
  exitUnaryoperator?: (ctx: UnaryoperatorContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.predicate`.
   * @param ctx the parse tree
   */
  enterPredicate?: (ctx: PredicateContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.predicate`.
   * @param ctx the parse tree
   */
  exitPredicate?: (ctx: PredicateContext) => void

  /**
   * Enter a parse tree produced by `wlp3Parser.lvalue`.
   * @param ctx the parse tree
   */
  enterLvalue?: (ctx: LvalueContext) => void
  /**
   * Exit a parse tree produced by `wlp3Parser.lvalue`.
   * @param ctx the parse tree
   */
  exitLvalue?: (ctx: LvalueContext) => void
}
