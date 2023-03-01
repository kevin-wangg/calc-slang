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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.function();
				this.state = 31;
				this.program();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.main();
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
			this.block();
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
			this.type();
			this.state = 43;
			this.match(wlp3Parser.ID);
			this.state = 44;
			this.match(wlp3Parser.T__2);
			this.state = 45;
			this.params();
			this.state = 46;
			this.match(wlp3Parser.T__3);
			this.state = 47;
			this.block();
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
				this.statement();
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.dcl();
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wlp3Parser.T__6) {
					{
					{
					this.state = 59;
					this.match(wlp3Parser.T__6);
					this.state = 60;
					this.dcl();
					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case wlp3Parser.T__3:
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wlp3Parser.T__0) | (1 << wlp3Parser.T__7) | (1 << wlp3Parser.T__8) | (1 << wlp3Parser.T__9))) !== 0))) {
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
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 75;
				this.match(wlp3Parser.INT);
				}
				break;

			case 2:
				{
				this.state = 76;
				this.match(wlp3Parser.STRING);
				}
				break;

			case 3:
				{
				this.state = 77;
				this.match(wlp3Parser.BOOL);
				}
				break;

			case 4:
				{
				this.state = 78;
				this.unaryoperator();
				this.state = 79;
				this.expr(8);
				}
				break;

			case 5:
				{
				this.state = 81;
				this.match(wlp3Parser.ID);
				}
				break;

			case 6:
				{
				this.state = 82;
				this.match(wlp3Parser.ID);
				this.state = 83;
				this.match(wlp3Parser.T__2);
				this.state = 84;
				this.arglist();
				this.state = 85;
				this.match(wlp3Parser.T__3);
				}
				break;

			case 7:
				{
				this.state = 87;
				this.match(wlp3Parser.T__10);
				this.state = 88;
				this.match(wlp3Parser.T__2);
				this.state = 89;
				this.expr(0);
				this.state = 90;
				this.match(wlp3Parser.T__3);
				}
				break;

			case 8:
				{
				this.state = 92;
				this.match(wlp3Parser.T__11);
				this.state = 93;
				this.expr(2);
				}
				break;

			case 9:
				{
				this.state = 94;
				this.match(wlp3Parser.T__12);
				this.state = 95;
				this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 108;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 106;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 98;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 99;
						this.binaryoperator();
						this.state = 100;
						this.expr(8);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 102;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 103;
						this.binarylogical();
						this.state = 104;
						this.expr(7);
						}
						break;
					}
					}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.lvalue();
				this.state = 112;
				this.match(wlp3Parser.T__13);
				this.state = 113;
				this.expr(0);
				this.state = 114;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(wlp3Parser.T__15);
				this.state = 117;
				this.match(wlp3Parser.T__2);
				this.state = 118;
				this.predicate();
				this.state = 119;
				this.match(wlp3Parser.T__3);
				this.state = 120;
				this.block();
				this.state = 121;
				this.match(wlp3Parser.T__16);
				this.state = 122;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.match(wlp3Parser.T__17);
				this.state = 125;
				this.match(wlp3Parser.T__2);
				this.state = 126;
				this.predicate();
				this.state = 127;
				this.match(wlp3Parser.T__3);
				this.state = 128;
				this.block();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 130;
				this.match(wlp3Parser.T__18);
				this.state = 131;
				this.match(wlp3Parser.T__2);
				this.state = 132;
				this.expr(0);
				this.state = 133;
				this.match(wlp3Parser.T__3);
				this.state = 134;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 136;
				this.dcl();
				this.state = 137;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 139;
				this.dcl();
				this.state = 140;
				this.match(wlp3Parser.T__13);
				this.state = 141;
				this.expr(0);
				this.state = 142;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 144;
				this.match(wlp3Parser.T__19);
				this.state = 145;
				this.expr(0);
				this.state = 146;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 148;
				this.match(wlp3Parser.T__20);
				this.state = 149;
				this.match(wlp3Parser.T__2);
				this.state = 150;
				this.expr(0);
				this.state = 151;
				this.match(wlp3Parser.T__3);
				this.state = 152;
				this.match(wlp3Parser.T__14);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 154;
				this.expr(0);
				this.state = 155;
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
			this.state = 168;
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				this.expr(0);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wlp3Parser.T__6) {
					{
					{
					this.state = 160;
					this.match(wlp3Parser.T__6);
					this.state = 161;
					this.expr(0);
					}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case wlp3Parser.T__3:
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
			this.state = 170;
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
			this.state = 172;
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
			this.state = 174;
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
			this.state = 176;
			this.expr(0);
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
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.match(wlp3Parser.ID);
				}
				break;
			case wlp3Parser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.match(wlp3Parser.T__2);
				this.state = 180;
				this.lvalue();
				this.state = 181;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xBC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02%\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05" +
		"6\n\x05\f\x05\x0E\x059\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06@\n\x06\f\x06\x0E\x06C\v\x06\x03\x06\x05\x06F\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\tc\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\tm\n\t\f\t\x0E\tp\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\xA0\n\n\x03\v\x03\v\x03\v\x07\v\xA5\n\v\f\v\x0E\v" +
		"\xA8\v\v\x03\v\x05\v\xAB\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xBA\n\x10" +
		"\x03\x10\x02\x02\x03\x10\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		"\x02\x05\x04\x02\x03\x03\n\f\x04\x02\x0E\x0E\x18\x1E\x03\x02\x1F \x02" +
		"\xC5\x02$\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
		"3\x03\x02\x02\x02\nE\x03\x02\x02\x02\fG\x03\x02\x02\x02\x0EJ\x03\x02\x02" +
		"\x02\x10b\x03\x02\x02\x02\x12\x9F\x03\x02\x02\x02\x14\xAA\x03\x02\x02" +
		"\x02\x16\xAC\x03\x02\x02\x02\x18\xAE\x03\x02\x02\x02\x1A\xB0\x03\x02\x02" +
		"\x02\x1C\xB2\x03\x02\x02\x02\x1E\xB9\x03\x02\x02\x02 !\x05\x06\x04\x02" +
		"!\"\x05\x02\x02\x02\"%\x03\x02\x02\x02#%\x05\x04\x03\x02$ \x03\x02\x02" +
		"\x02$#\x03\x02\x02\x02%\x03\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(\x07" +
		"\x04\x02\x02()\x07\x05\x02\x02)*\x07\x06\x02\x02*+\x05\b\x05\x02+\x05" +
		"\x03\x02\x02\x02,-\x05\x0E\b\x02-.\x07%\x02\x02./\x07\x05\x02\x02/0\x05" +
		"\n\x06\x0201\x07\x06\x02\x0212\x05\b\x05\x022\x07\x03\x02\x02\x0237\x07" +
		"\x07\x02\x0246\x05\x12\n\x0254\x03\x02\x02\x0269\x03\x02\x02\x0275\x03" +
		"\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02:;\x07" +
		"\b\x02\x02;\t\x03\x02\x02\x02<A\x05\f\x07\x02=>\x07\t\x02\x02>@\x05\f" +
		"\x07\x02?=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02" +
		"\x02\x02BF\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x03\x02\x02\x02E<\x03\x02" +
		"\x02\x02ED\x03\x02\x02\x02F\v\x03\x02\x02\x02GH\x05\x0E\b\x02HI\x07%\x02" +
		"\x02I\r\x03\x02\x02\x02JK\t\x02\x02\x02K\x0F\x03\x02\x02\x02LM\b\t\x01" +
		"\x02Mc\x07#\x02\x02Nc\x07$\x02\x02Oc\x07&\x02\x02PQ\x05\x1A\x0E\x02QR" +
		"\x05\x10\t\nRc\x03\x02\x02\x02Sc\x07%\x02\x02TU\x07%\x02\x02UV\x07\x05" +
		"\x02\x02VW\x05\x14\v\x02WX\x07\x06\x02\x02Xc\x03\x02\x02\x02YZ\x07\r\x02" +
		"\x02Z[\x07\x05\x02\x02[\\\x05\x10\t\x02\\]\x07\x06\x02\x02]c\x03\x02\x02" +
		"\x02^_\x07\x0E\x02\x02_c\x05\x10\t\x04`a\x07\x0F\x02\x02ac\x05\x10\t\x03" +
		"bL\x03\x02\x02\x02bN\x03\x02\x02\x02bO\x03\x02\x02\x02bP\x03\x02\x02\x02" +
		"bS\x03\x02\x02\x02bT\x03\x02\x02\x02bY\x03\x02\x02\x02b^\x03\x02\x02\x02" +
		"b`\x03\x02\x02\x02cn\x03\x02\x02\x02de\f\t\x02\x02ef\x05\x16\f\x02fg\x05" +
		"\x10\t\ngm\x03\x02\x02\x02hi\f\b\x02\x02ij\x05\x18\r\x02jk\x05\x10\t\t" +
		"km\x03\x02\x02\x02ld\x03\x02\x02\x02lh\x03\x02\x02\x02mp\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x11\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02qr\x05\x1E\x10\x02rs\x07\x10\x02\x02st\x05\x10\t\x02tu\x07\x11\x02" +
		"\x02u\xA0\x03\x02\x02\x02vw\x07\x12\x02\x02wx\x07\x05\x02\x02xy\x05\x1C" +
		"\x0F\x02yz\x07\x06\x02\x02z{\x05\b\x05\x02{|\x07\x13\x02\x02|}\x05\b\x05" +
		"\x02}\xA0\x03\x02\x02\x02~\x7F\x07\x14\x02\x02\x7F\x80\x07\x05\x02\x02" +
		"\x80\x81\x05\x1C\x0F\x02\x81\x82\x07\x06\x02\x02\x82\x83\x05\b\x05\x02" +
		"\x83\xA0\x03\x02\x02\x02\x84\x85\x07\x15\x02\x02\x85\x86\x07\x05\x02\x02" +
		"\x86\x87\x05\x10\t\x02\x87\x88\x07\x06\x02\x02\x88\x89\x07\x11\x02\x02" +
		"\x89\xA0\x03\x02\x02\x02\x8A\x8B\x05\f\x07\x02\x8B\x8C\x07\x11\x02\x02" +
		"\x8C\xA0\x03\x02\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\x10\x02\x02" +
		"\x8F\x90\x05\x10\t\x02\x90\x91\x07\x11\x02\x02\x91\xA0\x03\x02\x02\x02" +
		"\x92\x93\x07\x16\x02\x02\x93\x94\x05\x10\t\x02\x94\x95\x07\x11\x02\x02" +
		"\x95\xA0\x03\x02\x02\x02\x96\x97\x07\x17\x02\x02\x97\x98\x07\x05\x02\x02" +
		"\x98\x99\x05\x10\t\x02\x99\x9A\x07\x06\x02\x02\x9A\x9B\x07\x11\x02\x02" +
		"\x9B\xA0\x03\x02\x02\x02\x9C\x9D\x05\x10\t\x02\x9D\x9E\x07\x11\x02\x02" +
		"\x9E\xA0\x03\x02\x02\x02\x9Fq\x03\x02\x02\x02\x9Fv\x03\x02\x02\x02\x9F" +
		"~\x03\x02\x02\x02\x9F\x84\x03\x02\x02\x02\x9F\x8A\x03\x02\x02\x02\x9F" +
		"\x8D\x03\x02\x02\x02\x9F\x92\x03\x02\x02\x02\x9F\x96\x03\x02\x02\x02\x9F" +
		"\x9C\x03\x02\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA6\x05\x10\t\x02\xA2" +
		"\xA3\x07\t\x02\x02\xA3\xA5\x05\x10\t\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8" +
		"\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xAB" +
		"\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA1" +
		"\x03\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\x15\x03\x02\x02\x02\xAC\xAD" +
		"\t\x03\x02\x02\xAD\x17\x03\x02\x02\x02\xAE\xAF\t\x04\x02\x02\xAF\x19\x03" +
		"\x02\x02\x02\xB0\xB1\x07!\x02\x02\xB1\x1B\x03\x02\x02\x02\xB2\xB3\x05" +
		"\x10\t\x02\xB3\x1D\x03\x02\x02\x02\xB4\xBA\x07%\x02\x02\xB5\xB6\x07\x05" +
		"\x02\x02\xB6\xB7\x05\x1E\x10\x02\xB7\xB8\x07\x06\x02\x02\xB8\xBA\x03\x02" +
		"\x02\x02\xB9\xB4\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xBA\x1F\x03\x02" +
		"\x02\x02\r$7AEbln\x9F\xA6\xAA\xB9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wlp3Parser.__ATN) {
			wlp3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(wlp3Parser._serializedATN));
		}

		return wlp3Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public program(): ProgramContext | undefined {
		return this.tryGetRuleContext(0, ProgramContext);
	}
	public main(): MainContext | undefined {
		return this.tryGetRuleContext(0, MainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_program; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainContext extends ParserRuleContext {
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
	public dcl(): DclContext[];
	public dcl(i: number): DclContext;
	public dcl(i?: number): DclContext | DclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DclContext);
		} else {
			return this.getRuleContext(i, DclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_params; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
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
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(wlp3Parser.INT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(wlp3Parser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(wlp3Parser.BOOL, 0); }
	public unaryoperator(): UnaryoperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperatorContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryoperator(): BinaryoperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryoperatorContext);
	}
	public binarylogical(): BinarylogicalContext | undefined {
		return this.tryGetRuleContext(0, BinarylogicalContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(wlp3Parser.ID, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_expr; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public lvalue(): LvalueContext | undefined {
		return this.tryGetRuleContext(0, LvalueContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
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
	public dcl(): DclContext | undefined {
		return this.tryGetRuleContext(0, DclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_statement; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_arglist; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArglist) {
			return visitor.visitArglist(this);
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


