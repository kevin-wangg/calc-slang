// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { wlp3Listener } from "./wlp3Listener";
import { wlp3Visitor } from "./wlp3Visitor";


export class wlp3Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly WS = 32;
	public static readonly INT = 33;
	public static readonly STRING = 34;
	public static readonly ID = 35;
	public static readonly BOOL = 36;
	public static readonly RULE_program = 0;
	public static readonly RULE_main = 1;
	public static readonly RULE_function = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_params = 4;
	public static readonly RULE_dcl = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_expr = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_arglist = 9;
	public static readonly RULE_binaryoperator = 10;
	public static readonly RULE_binarylogical = 11;
	public static readonly RULE_unaryoperator = 12;
	public static readonly RULE_predicate = 13;
	public static readonly RULE_lvalue = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "main", "function", "block", "params", "dcl", "type", "expr", 
		"statement", "arglist", "binaryoperator", "binarylogical", "unaryoperator", 
		"predicate", "lvalue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'int'", "'main'", "'('", "')'", "'{'", "'}'", "','", "'bool'", 
		"'string'", "'int*'", "'malloc'", "'*'", "'&'", "'='", "';'", "'if'", 
		"'else'", "'while'", "'printf'", "'return'", "'free'", "'+'", "'-'", "'=='", 
		"'>'", "'<'", "'<='", "'>='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "WS", "INT", "STRING", "ID", 
		"BOOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(wlp3Parser._LITERAL_NAMES, wlp3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return wlp3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "wlp3.g4"; }

	// @Override
	public get ruleNames(): string[] { return wlp3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return wlp3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(wlp3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, wlp3Parser.RULE_program);
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				_localctx = new FunprogContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				(_localctx as FunprogContext)._fun = this.function();
				this.state = 31;
				(_localctx as FunprogContext)._prog = this.program();
				}
				break;

			case 2:
				_localctx = new MainprogContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				(_localctx as MainprogContext)._mn = this.main();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public main(): MainContext {
		let _localctx: MainContext = new MainContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, wlp3Parser.RULE_main);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(wlp3Parser.T__0);
			this.state = 37;
			this.match(wlp3Parser.T__1);
			this.state = 38;
			this.match(wlp3Parser.T__2);
			this.state = 39;
			this.match(wlp3Parser.T__3);
			this.state = 40;
			_localctx._blk = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, wlp3Parser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_localctx._t = this.type();
			this.state = 43;
			_localctx._id = this.match(wlp3Parser.ID);
			this.state = 44;
			this.match(wlp3Parser.T__2);
			this.state = 45;
			_localctx._prms = this.params();
			this.state = 46;
			this.match(wlp3Parser.T__3);
			this.state = 47;
			_localctx._blk = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, wlp3Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(wlp3Parser.T__4);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wlp3Parser.T__0) | (1 << wlp3Parser.T__2) | (1 << wlp3Parser.T__7) | (1 << wlp3Parser.T__8) | (1 << wlp3Parser.T__9) | (1 << wlp3Parser.T__10) | (1 << wlp3Parser.T__11) | (1 << wlp3Parser.T__12) | (1 << wlp3Parser.T__15) | (1 << wlp3Parser.T__17) | (1 << wlp3Parser.T__18) | (1 << wlp3Parser.T__19) | (1 << wlp3Parser.T__20) | (1 << wlp3Parser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (wlp3Parser.INT - 33)) | (1 << (wlp3Parser.STRING - 33)) | (1 << (wlp3Parser.ID - 33)) | (1 << (wlp3Parser.BOOL - 33)))) !== 0)) {
				{
				{
				this.state = 50;
				_localctx._stmnts = this.statement();
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 56;
			this.match(wlp3Parser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, wlp3Parser.RULE_params);
		let _la: number;
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__0:
			case wlp3Parser.T__7:
			case wlp3Parser.T__8:
			case wlp3Parser.T__9:
				_localctx = new DclsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				(_localctx as DclsContext)._d = this.dcl();
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wlp3Parser.T__6) {
					{
					{
					this.state = 59;
					this.match(wlp3Parser.T__6);
					this.state = 60;
					(_localctx as DclsContext)._ds = this.dcl();
					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case wlp3Parser.T__3:
				_localctx = new ParamsemptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dcl(): DclContext {
		let _localctx: DclContext = new DclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, wlp3Parser.RULE_dcl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.type();
			this.state = 70;
			this.match(wlp3Parser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, wlp3Parser.RULE_type);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__0:
				_localctx = new InttypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.match(wlp3Parser.T__0);
				}
				break;
			case wlp3Parser.T__7:
				_localctx = new BooltypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.match(wlp3Parser.T__7);
				}
				break;
			case wlp3Parser.T__8:
				_localctx = new StringtypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.match(wlp3Parser.T__8);
				}
				break;
			case wlp3Parser.T__9:
				_localctx = new IntstartypeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 75;
				this.match(wlp3Parser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, wlp3Parser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 79;
				this.match(wlp3Parser.INT);
				}
				break;

			case 2:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(wlp3Parser.STRING);
				}
				break;

			case 3:
				{
				_localctx = new BoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.match(wlp3Parser.BOOL);
				}
				break;

			case 4:
				{
				_localctx = new UnopexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				(_localctx as UnopexprContext)._unop = this.unaryoperator();
				this.state = 83;
				(_localctx as UnopexprContext)._first = this.expr(8);
				}
				break;

			case 5:
				{
				_localctx = new IdexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 85;
				(_localctx as IdexprContext)._id = this.match(wlp3Parser.ID);
				}
				break;

			case 6:
				{
				_localctx = new FnexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				(_localctx as FnexprContext)._id = this.match(wlp3Parser.ID);
				this.state = 87;
				this.match(wlp3Parser.T__2);
				this.state = 88;
				(_localctx as FnexprContext)._arglst = this.arglist();
				this.state = 89;
				this.match(wlp3Parser.T__3);
				}
				break;

			case 7:
				{
				_localctx = new MallocexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 91;
				this.match(wlp3Parser.T__10);
				this.state = 92;
				this.match(wlp3Parser.T__2);
				this.state = 93;
				(_localctx as MallocexprContext)._first = this.expr(0);
				this.state = 94;
				this.match(wlp3Parser.T__3);
				}
				break;

			case 8:
				{
				_localctx = new StarexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.match(wlp3Parser.T__11);
				this.state = 97;
				(_localctx as StarexprContext)._first = this.expr(2);
				}
				break;

			case 9:
				{
				_localctx = new AmpersandexprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(wlp3Parser.T__12);
				this.state = 99;
				(_localctx as AmpersandexprContext)._first = this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 110;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new BinopexprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BinopexprContext)._first = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 102;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 103;
						(_localctx as BinopexprContext)._binop = this.binaryoperator();
						this.state = 104;
						(_localctx as BinopexprContext)._second = this.expr(8);
						}
						break;

					case 2:
						{
						_localctx = new BinlogexprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BinlogexprContext)._first = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 106;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 107;
						(_localctx as BinlogexprContext)._binlog = this.binarylogical();
						this.state = 108;
						(_localctx as BinlogexprContext)._second = this.expr(7);
						}
						break;
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, wlp3Parser.RULE_statement);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new AssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				(_localctx as AssignmentContext)._lv = this.lvalue();
				this.state = 116;
				this.match(wlp3Parser.T__13);
				this.state = 117;
				(_localctx as AssignmentContext)._val = this.expr(0);
				this.state = 118;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 2:
				_localctx = new IfstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(wlp3Parser.T__15);
				this.state = 121;
				this.match(wlp3Parser.T__2);
				this.state = 122;
				(_localctx as IfstatementContext)._pred = this.predicate();
				this.state = 123;
				this.match(wlp3Parser.T__3);
				this.state = 124;
				(_localctx as IfstatementContext)._cons = this.block();
				this.state = 125;
				this.match(wlp3Parser.T__16);
				this.state = 126;
				(_localctx as IfstatementContext)._alt = this.block();
				}
				break;

			case 3:
				_localctx = new WhilestatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.match(wlp3Parser.T__17);
				this.state = 129;
				this.match(wlp3Parser.T__2);
				this.state = 130;
				(_localctx as WhilestatementContext)._pred = this.predicate();
				this.state = 131;
				this.match(wlp3Parser.T__3);
				this.state = 132;
				(_localctx as WhilestatementContext)._body = this.block();
				}
				break;

			case 4:
				_localctx = new PrintfstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 134;
				this.match(wlp3Parser.T__18);
				this.state = 135;
				this.match(wlp3Parser.T__2);
				this.state = 136;
				(_localctx as PrintfstatementContext)._body = this.expr(0);
				this.state = 137;
				this.match(wlp3Parser.T__3);
				this.state = 138;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 5:
				_localctx = new DclstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 140;
				(_localctx as DclstatementContext)._d = this.dcl();
				this.state = 141;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 6:
				_localctx = new DclassignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 143;
				(_localctx as DclassignmentContext)._d = this.dcl();
				this.state = 144;
				this.match(wlp3Parser.T__13);
				this.state = 145;
				(_localctx as DclassignmentContext)._val = this.expr(0);
				this.state = 146;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 7:
				_localctx = new ReturnstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 148;
				this.match(wlp3Parser.T__19);
				this.state = 149;
				(_localctx as ReturnstatementContext)._val = this.expr(0);
				this.state = 150;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 8:
				_localctx = new FreestatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 152;
				this.match(wlp3Parser.T__20);
				this.state = 153;
				this.match(wlp3Parser.T__2);
				this.state = 154;
				(_localctx as FreestatementContext)._val = this.expr(0);
				this.state = 155;
				this.match(wlp3Parser.T__3);
				this.state = 156;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 9:
				_localctx = new ExprstatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 158;
				(_localctx as ExprstatementContext)._val = this.expr(0);
				this.state = 159;
				this.match(wlp3Parser.T__14);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, wlp3Parser.RULE_arglist);
		let _la: number;
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__10:
			case wlp3Parser.T__11:
			case wlp3Parser.T__12:
			case wlp3Parser.T__30:
			case wlp3Parser.INT:
			case wlp3Parser.STRING:
			case wlp3Parser.ID:
			case wlp3Parser.BOOL:
				_localctx = new ArglstContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 163;
				(_localctx as ArglstContext)._arg = this.expr(0);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wlp3Parser.T__6) {
					{
					{
					this.state = 164;
					this.match(wlp3Parser.T__6);
					this.state = 165;
					(_localctx as ArglstContext)._args = this.expr(0);
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case wlp3Parser.T__3:
				_localctx = new ArglistemptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryoperator(): BinaryoperatorContext {
		let _localctx: BinaryoperatorContext = new BinaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, wlp3Parser.RULE_binaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wlp3Parser.T__11) | (1 << wlp3Parser.T__21) | (1 << wlp3Parser.T__22) | (1 << wlp3Parser.T__23) | (1 << wlp3Parser.T__24) | (1 << wlp3Parser.T__25) | (1 << wlp3Parser.T__26) | (1 << wlp3Parser.T__27))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binarylogical(): BinarylogicalContext {
		let _localctx: BinarylogicalContext = new BinarylogicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, wlp3Parser.RULE_binarylogical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if (!(_la === wlp3Parser.T__28 || _la === wlp3Parser.T__29)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryoperator(): UnaryoperatorContext {
		let _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, wlp3Parser.RULE_unaryoperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(wlp3Parser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, wlp3Parser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			_localctx._pred = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, wlp3Parser.RULE_lvalue);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				_localctx._id = this.match(wlp3Parser.ID);
				}
				break;
			case wlp3Parser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.match(wlp3Parser.T__2);
				this.state = 184;
				_localctx._lv = this.lvalue();
				this.state = 185;
				this.match(wlp3Parser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xC0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02%\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05" +
		"6\n\x05\f\x05\x0E\x059\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06@\n\x06\f\x06\x0E\x06C\v\x06\x03\x06\x05\x06F\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\bO\n\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tg\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x07\tq\n\t\f\t\x0E\tt\v\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA4\n\n\x03\v\x03\v\x03\v" +
		"\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v\x03\v\x05\v\xAF\n\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\xBE\n\x10\x03\x10\x02\x02\x03\x10\x11\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02\x02\x04\x04\x02\x0E\x0E\x18\x1E\x03\x02\x1F" +
		" \x02\xCC\x02$\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06,\x03\x02\x02\x02" +
		"\b3\x03\x02\x02\x02\nE\x03\x02\x02\x02\fG\x03\x02\x02\x02\x0EN\x03\x02" +
		"\x02\x02\x10f\x03\x02\x02\x02\x12\xA3\x03\x02\x02\x02\x14\xAE\x03\x02" +
		"\x02\x02\x16\xB0\x03\x02\x02\x02\x18\xB2\x03\x02\x02\x02\x1A\xB4\x03\x02" +
		"\x02\x02\x1C\xB6\x03\x02\x02\x02\x1E\xBD\x03\x02\x02\x02 !\x05\x06\x04" +
		"\x02!\"\x05\x02\x02\x02\"%\x03\x02\x02\x02#%\x05\x04\x03\x02$ \x03\x02" +
		"\x02\x02$#\x03\x02\x02\x02%\x03\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(" +
		"\x07\x04\x02\x02()\x07\x05\x02\x02)*\x07\x06\x02\x02*+\x05\b\x05\x02+" +
		"\x05\x03\x02\x02\x02,-\x05\x0E\b\x02-.\x07%\x02\x02./\x07\x05\x02\x02" +
		"/0\x05\n\x06\x0201\x07\x06\x02\x0212\x05\b\x05\x022\x07\x03\x02\x02\x02" +
		"37\x07\x07\x02\x0246\x05\x12\n\x0254\x03\x02\x02\x0269\x03\x02\x02\x02" +
		"75\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02" +
		":;\x07\b\x02\x02;\t\x03\x02\x02\x02<A\x05\f\x07\x02=>\x07\t\x02\x02>@" +
		"\x05\f\x07\x02?=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02A" +
		"B\x03\x02\x02\x02BF\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x03\x02\x02\x02" +
		"E<\x03\x02\x02\x02ED\x03\x02\x02\x02F\v\x03\x02\x02\x02GH\x05\x0E\b\x02" +
		"HI\x07%\x02\x02I\r\x03\x02\x02\x02JO\x07\x03\x02\x02KO\x07\n\x02\x02L" +
		"O\x07\v\x02\x02MO\x07\f\x02\x02NJ\x03\x02\x02\x02NK\x03\x02\x02\x02NL" +
		"\x03\x02\x02\x02NM\x03\x02\x02\x02O\x0F\x03\x02\x02\x02PQ\b\t\x01\x02" +
		"Qg\x07#\x02\x02Rg\x07$\x02\x02Sg\x07&\x02\x02TU\x05\x1A\x0E\x02UV\x05" +
		"\x10\t\nVg\x03\x02\x02\x02Wg\x07%\x02\x02XY\x07%\x02\x02YZ\x07\x05\x02" +
		"\x02Z[\x05\x14\v\x02[\\\x07\x06\x02\x02\\g\x03\x02\x02\x02]^\x07\r\x02" +
		"\x02^_\x07\x05\x02\x02_`\x05\x10\t\x02`a\x07\x06\x02\x02ag\x03\x02\x02" +
		"\x02bc\x07\x0E\x02\x02cg\x05\x10\t\x04de\x07\x0F\x02\x02eg\x05\x10\t\x03" +
		"fP\x03\x02\x02\x02fR\x03\x02\x02\x02fS\x03\x02\x02\x02fT\x03\x02\x02\x02" +
		"fW\x03\x02\x02\x02fX\x03\x02\x02\x02f]\x03\x02\x02\x02fb\x03\x02\x02\x02" +
		"fd\x03\x02\x02\x02gr\x03\x02\x02\x02hi\f\t\x02\x02ij\x05\x16\f\x02jk\x05" +
		"\x10\t\nkq\x03\x02\x02\x02lm\f\b\x02\x02mn\x05\x18\r\x02no\x05\x10\t\t" +
		"oq\x03\x02\x02\x02ph\x03\x02\x02\x02pl\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x11\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02uv\x05\x1E\x10\x02vw\x07\x10\x02\x02wx\x05\x10\t\x02xy\x07\x11\x02" +
		"\x02y\xA4\x03\x02\x02\x02z{\x07\x12\x02\x02{|\x07\x05\x02\x02|}\x05\x1C" +
		"\x0F\x02}~\x07\x06\x02\x02~\x7F\x05\b\x05\x02\x7F\x80\x07\x13\x02\x02" +
		"\x80\x81\x05\b\x05\x02\x81\xA4\x03\x02\x02\x02\x82\x83\x07\x14\x02\x02" +
		"\x83\x84\x07\x05\x02\x02\x84\x85\x05\x1C\x0F\x02\x85\x86\x07\x06\x02\x02" +
		"\x86\x87\x05\b\x05\x02\x87\xA4\x03\x02\x02\x02\x88\x89\x07\x15\x02\x02" +
		"\x89\x8A\x07\x05\x02\x02\x8A\x8B\x05\x10\t\x02\x8B\x8C\x07\x06\x02\x02" +
		"\x8C\x8D\x07\x11\x02\x02\x8D\xA4\x03\x02\x02\x02\x8E\x8F\x05\f\x07\x02" +
		"\x8F\x90\x07\x11\x02\x02\x90\xA4\x03\x02\x02\x02\x91\x92\x05\f\x07\x02" +
		"\x92\x93\x07\x10\x02\x02\x93\x94\x05\x10\t\x02\x94\x95\x07\x11\x02\x02" +
		"\x95\xA4\x03\x02\x02\x02\x96\x97\x07\x16\x02\x02\x97\x98\x05\x10\t\x02" +
		"\x98\x99\x07\x11\x02\x02\x99\xA4\x03\x02\x02\x02\x9A\x9B\x07\x17\x02\x02" +
		"\x9B\x9C\x07\x05\x02\x02\x9C\x9D\x05\x10\t\x02\x9D\x9E\x07\x06\x02\x02" +
		"\x9E\x9F\x07\x11\x02\x02\x9F\xA4\x03\x02\x02\x02\xA0\xA1\x05\x10\t\x02" +
		"\xA1\xA2\x07\x11\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3u\x03\x02\x02\x02" +
		"\xA3z\x03\x02\x02\x02\xA3\x82\x03\x02\x02\x02\xA3\x88\x03\x02\x02\x02" +
		"\xA3\x8E\x03\x02\x02\x02\xA3\x91\x03\x02\x02\x02\xA3\x96\x03\x02\x02\x02" +
		"\xA3\x9A\x03\x02\x02\x02\xA3\xA0\x03\x02\x02\x02\xA4\x13\x03\x02\x02\x02" +
		"\xA5\xAA\x05\x10\t\x02\xA6\xA7\x07\t\x02\x02\xA7\xA9\x05\x10\t\x02\xA8" +
		"\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\xAF\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD" +
		"\xAF\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF" +
		"\x15\x03\x02\x02\x02\xB0\xB1\t\x02\x02\x02\xB1\x17\x03\x02\x02\x02\xB2" +
		"\xB3\t\x03\x02\x02\xB3\x19\x03\x02\x02\x02\xB4\xB5\x07!\x02\x02\xB5\x1B" +
		"\x03\x02\x02\x02\xB6\xB7\x05\x10\t\x02\xB7\x1D\x03\x02\x02\x02\xB8\xBE" +
		"\x07%\x02\x02\xB9\xBA\x07\x05\x02\x02\xBA\xBB\x05\x1E\x10\x02\xBB\xBC" +
		"\x07\x06\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBD\xB9" +
		"\x03\x02\x02\x02\xBE\x1F\x03\x02\x02\x02\x0E$7AENfpr\xA3\xAA\xAE\xBD";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wlp3Parser.__ATN) {
			wlp3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(wlp3Parser._serializedATN));
		}

		return wlp3Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_program; }
	public copyFrom(ctx: ProgramContext): void {
		super.copyFrom(ctx);
	}
}
export class FunprogContext extends ProgramContext {
	public _fun!: FunctionContext;
	public _prog!: ProgramContext;
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFunprog) {
			listener.enterFunprog(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFunprog) {
			listener.exitFunprog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFunprog) {
			return visitor.visitFunprog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MainprogContext extends ProgramContext {
	public _mn!: MainContext;
	public main(): MainContext {
		return this.getRuleContext(0, MainContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMainprog) {
			listener.enterMainprog(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMainprog) {
			listener.exitMainprog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMainprog) {
			return visitor.visitMainprog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainContext extends ParserRuleContext {
	public _blk!: BlockContext;
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_main; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMain) {
			listener.enterMain(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMain) {
			listener.exitMain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMain) {
			return visitor.visitMain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _t!: TypeContext;
	public _id!: Token;
	public _prms!: ParamsContext;
	public _blk!: BlockContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public params(): ParamsContext {
		return this.getRuleContext(0, ParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_function; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _stmnts!: StatementContext;
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_block; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_params; }
	public copyFrom(ctx: ParamsContext): void {
		super.copyFrom(ctx);
	}
}
export class DclsContext extends ParamsContext {
	public _d!: DclContext;
	public _ds!: DclContext;
	public dcl(): DclContext[];
	public dcl(i: number): DclContext;
	public dcl(i?: number): DclContext | DclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DclContext);
		} else {
			return this.getRuleContext(i, DclContext);
		}
	}
	constructor(ctx: ParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDcls) {
			listener.enterDcls(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDcls) {
			listener.exitDcls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDcls) {
			return visitor.visitDcls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParamsemptyContext extends ParamsContext {
	constructor(ctx: ParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterParamsempty) {
			listener.enterParamsempty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitParamsempty) {
			listener.exitParamsempty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitParamsempty) {
			return visitor.visitParamsempty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DclContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_dcl; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDcl) {
			listener.enterDcl(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDcl) {
			listener.exitDcl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDcl) {
			return visitor.visitDcl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class InttypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterInttype) {
			listener.enterInttype(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitInttype) {
			listener.exitInttype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitInttype) {
			return visitor.visitInttype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooltypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBooltype) {
			listener.enterBooltype(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBooltype) {
			listener.exitBooltype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBooltype) {
			return visitor.visitBooltype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringtypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStringtype) {
			listener.enterStringtype(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStringtype) {
			listener.exitStringtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStringtype) {
			return visitor.visitStringtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntstartypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIntstartype) {
			listener.enterIntstartype(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIntstartype) {
			listener.exitIntstartype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIntstartype) {
			return visitor.visitIntstartype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IntContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(wlp3Parser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExprContext {
	public STRING(): TerminalNode { return this.getToken(wlp3Parser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolContext extends ExprContext {
	public BOOL(): TerminalNode { return this.getToken(wlp3Parser.BOOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnopexprContext extends ExprContext {
	public _unop!: UnaryoperatorContext;
	public _first!: ExprContext;
	public unaryoperator(): UnaryoperatorContext {
		return this.getRuleContext(0, UnaryoperatorContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterUnopexpr) {
			listener.enterUnopexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitUnopexpr) {
			listener.exitUnopexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitUnopexpr) {
			return visitor.visitUnopexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinopexprContext extends ExprContext {
	public _first!: ExprContext;
	public _binop!: BinaryoperatorContext;
	public _second!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryoperator(): BinaryoperatorContext {
		return this.getRuleContext(0, BinaryoperatorContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinopexpr) {
			listener.enterBinopexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinopexpr) {
			listener.exitBinopexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinopexpr) {
			return visitor.visitBinopexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinlogexprContext extends ExprContext {
	public _first!: ExprContext;
	public _binlog!: BinarylogicalContext;
	public _second!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binarylogical(): BinarylogicalContext {
		return this.getRuleContext(0, BinarylogicalContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinlogexpr) {
			listener.enterBinlogexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinlogexpr) {
			listener.exitBinlogexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinlogexpr) {
			return visitor.visitBinlogexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdexprContext extends ExprContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIdexpr) {
			listener.enterIdexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIdexpr) {
			listener.exitIdexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIdexpr) {
			return visitor.visitIdexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnexprContext extends ExprContext {
	public _id!: Token;
	public _arglst!: ArglistContext;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public arglist(): ArglistContext {
		return this.getRuleContext(0, ArglistContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFnexpr) {
			listener.enterFnexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFnexpr) {
			listener.exitFnexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFnexpr) {
			return visitor.visitFnexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MallocexprContext extends ExprContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMallocexpr) {
			listener.enterMallocexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMallocexpr) {
			listener.exitMallocexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMallocexpr) {
			return visitor.visitMallocexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarexprContext extends ExprContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStarexpr) {
			listener.enterStarexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStarexpr) {
			listener.exitStarexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStarexpr) {
			return visitor.visitStarexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AmpersandexprContext extends ExprContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterAmpersandexpr) {
			listener.enterAmpersandexpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitAmpersandexpr) {
			listener.exitAmpersandexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitAmpersandexpr) {
			return visitor.visitAmpersandexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends StatementContext {
	public _lv!: LvalueContext;
	public _val!: ExprContext;
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfstatementContext extends StatementContext {
	public _pred!: PredicateContext;
	public _cons!: BlockContext;
	public _alt!: BlockContext;
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIfstatement) {
			listener.enterIfstatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIfstatement) {
			listener.exitIfstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIfstatement) {
			return visitor.visitIfstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhilestatementContext extends StatementContext {
	public _pred!: PredicateContext;
	public _body!: BlockContext;
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterWhilestatement) {
			listener.enterWhilestatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitWhilestatement) {
			listener.exitWhilestatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitWhilestatement) {
			return visitor.visitWhilestatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintfstatementContext extends StatementContext {
	public _body!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterPrintfstatement) {
			listener.enterPrintfstatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitPrintfstatement) {
			listener.exitPrintfstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitPrintfstatement) {
			return visitor.visitPrintfstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DclstatementContext extends StatementContext {
	public _d!: DclContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDclstatement) {
			listener.enterDclstatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDclstatement) {
			listener.exitDclstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDclstatement) {
			return visitor.visitDclstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DclassignmentContext extends StatementContext {
	public _d!: DclContext;
	public _val!: ExprContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDclassignment) {
			listener.enterDclassignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDclassignment) {
			listener.exitDclassignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDclassignment) {
			return visitor.visitDclassignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnstatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterReturnstatement) {
			listener.enterReturnstatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitReturnstatement) {
			listener.exitReturnstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitReturnstatement) {
			return visitor.visitReturnstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FreestatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFreestatement) {
			listener.enterFreestatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFreestatement) {
			listener.exitFreestatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFreestatement) {
			return visitor.visitFreestatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprstatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterExprstatement) {
			listener.enterExprstatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitExprstatement) {
			listener.exitExprstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitExprstatement) {
			return visitor.visitExprstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_arglist; }
	public copyFrom(ctx: ArglistContext): void {
		super.copyFrom(ctx);
	}
}
export class ArglstContext extends ArglistContext {
	public _arg!: ExprContext;
	public _args!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ArglistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArglst) {
			listener.enterArglst(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArglst) {
			listener.exitArglst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArglst) {
			return visitor.visitArglst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArglistemptyContext extends ArglistContext {
	constructor(ctx: ArglistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArglistempty) {
			listener.enterArglistempty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArglistempty) {
			listener.exitArglistempty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArglistempty) {
			return visitor.visitArglistempty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryoperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_binaryoperator; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinaryoperator) {
			listener.enterBinaryoperator(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinaryoperator) {
			listener.exitBinaryoperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinaryoperator) {
			return visitor.visitBinaryoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarylogicalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_binarylogical; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinarylogical) {
			listener.enterBinarylogical(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinarylogical) {
			listener.exitBinarylogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinarylogical) {
			return visitor.visitBinarylogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryoperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_unaryoperator; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterUnaryoperator) {
			listener.enterUnaryoperator(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitUnaryoperator) {
			listener.exitUnaryoperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitUnaryoperator) {
			return visitor.visitUnaryoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _pred!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_predicate; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	public _id!: Token;
	public _lv!: LvalueContext;
	public ID(): TerminalNode | undefined { return this.tryGetToken(wlp3Parser.ID, 0); }
	public lvalue(): LvalueContext | undefined {
		return this.tryGetRuleContext(0, LvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_lvalue; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitLvalue) {
			listener.exitLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitLvalue) {
			return visitor.visitLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


