// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { wlp3Listener } from './wlp3Listener'
import { wlp3Visitor } from './wlp3Visitor'

export class wlp3Parser extends Parser {
    public static readonly T__0 = 1
    public static readonly T__1 = 2
    public static readonly T__2 = 3
    public static readonly T__3 = 4
    public static readonly T__4 = 5
    public static readonly T__5 = 6
    public static readonly T__6 = 7
    public static readonly T__7 = 8
    public static readonly T__8 = 9
    public static readonly T__9 = 10
    public static readonly T__10 = 11
    public static readonly T__11 = 12
    public static readonly T__12 = 13
    public static readonly T__13 = 14
    public static readonly T__14 = 15
    public static readonly T__15 = 16
    public static readonly T__16 = 17
    public static readonly T__17 = 18
    public static readonly T__18 = 19
    public static readonly T__19 = 20
    public static readonly T__20 = 21
    public static readonly T__21 = 22
    public static readonly T__22 = 23
    public static readonly T__23 = 24
    public static readonly T__24 = 25
    public static readonly T__25 = 26
    public static readonly T__26 = 27
    public static readonly T__27 = 28
    public static readonly T__28 = 29
    public static readonly T__29 = 30
    public static readonly T__30 = 31
    public static readonly T__31 = 32
    public static readonly T__32 = 33
    public static readonly T__33 = 34
    public static readonly WS = 35
    public static readonly INT = 36
    public static readonly STRING = 37
    public static readonly BOOL = 38
    public static readonly ID = 39
    public static readonly RULE_program = 0
    public static readonly RULE_main = 1
    public static readonly RULE_function = 2
    public static readonly RULE_block = 3
    public static readonly RULE_statementlist = 4
    public static readonly RULE_params = 5
    public static readonly RULE_paramlist = 6
    public static readonly RULE_dcl = 7
    public static readonly RULE_type = 8
    public static readonly RULE_expr = 9
    public static readonly RULE_statement = 10
    public static readonly RULE_args = 11
    public static readonly RULE_arglist = 12
    public static readonly RULE_binaryoperator = 13
    public static readonly RULE_binarylogical = 14
    public static readonly RULE_unaryoperator = 15
    public static readonly RULE_predicate = 16
    public static readonly RULE_lvalue = 17
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program',
        'main',
        'function',
        'block',
        'statementlist',
        'params',
        'paramlist',
        'dcl',
        'type',
        'expr',
        'statement',
        'args',
        'arglist',
        'binaryoperator',
        'binarylogical',
        'unaryoperator',
        'predicate',
        'lvalue'
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined,
        "'int'",
        "'main'",
        "'('",
        "')'",
        "'{'",
        "'}'",
        "','",
        "'bool'",
        "'string'",
        "'int*'",
        "'malloc'",
        "'*'",
        "'&'",
        "'='",
        "';'",
        "'if'",
        "'else'",
        "'while'",
        "'printf'",
        "'return'",
        "'free'",
        "'+'",
        "'-'",
        "'/'",
        "'%'",
        "'=='",
        "'>'",
        "'<'",
        "'<='",
        "'>='",
        "'!='",
        "'&&'",
        "'||'",
        "'!'"
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'WS',
        'INT',
        'STRING',
        'BOOL',
        'ID'
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
        wlp3Parser._LITERAL_NAMES,
        wlp3Parser._SYMBOLIC_NAMES,
        []
    )

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return wlp3Parser.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace

    // @Override
    public get grammarFileName(): string {
        return 'wlp3.g4'
    }

    // @Override
    public get ruleNames(): string[] {
        return wlp3Parser.ruleNames
    }

    // @Override
    public get serializedATN(): string {
        return wlp3Parser._serializedATN
    }

    protected createFailedPredicateException(
        predicate?: string,
        message?: string
    ): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message)
    }

    constructor(input: TokenStream) {
        super(input)
        this._interp = new ParserATNSimulator(wlp3Parser._ATN, this)
    }
    // @RuleVersion(0)
    public program(): ProgramContext {
        let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
        this.enterRule(_localctx, 0, wlp3Parser.RULE_program)
        try {
            this.state = 40
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    _localctx = new FunProgContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 36
                        ;(_localctx as FunProgContext)._fun = this.function()
                        this.state = 37
                        ;(_localctx as FunProgContext)._prog = this.program()
                    }
                    break

                case 2:
                    _localctx = new MainProgContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 39
                        ;(_localctx as MainProgContext)._mn = this.main()
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public main(): MainContext {
        const _localctx: MainContext = new MainContext(this._ctx, this.state)
        this.enterRule(_localctx, 2, wlp3Parser.RULE_main)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 42
                this.match(wlp3Parser.T__0)
                this.state = 43
                this.match(wlp3Parser.T__1)
                this.state = 44
                this.match(wlp3Parser.T__2)
                this.state = 45
                this.match(wlp3Parser.T__3)
                this.state = 46
                _localctx._blk = this.block()
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public function(): FunctionContext {
        const _localctx: FunctionContext = new FunctionContext(this._ctx, this.state)
        this.enterRule(_localctx, 4, wlp3Parser.RULE_function)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 48
                _localctx._t = this.type()
                this.state = 49
                _localctx._id = this.match(wlp3Parser.ID)
                this.state = 50
                this.match(wlp3Parser.T__2)
                this.state = 51
                _localctx._prms = this.params()
                this.state = 52
                this.match(wlp3Parser.T__3)
                this.state = 53
                _localctx._blk = this.block()
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public block(): BlockContext {
        const _localctx: BlockContext = new BlockContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, wlp3Parser.RULE_block)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 55
                this.match(wlp3Parser.T__4)
                this.state = 56
                _localctx._stmnts = this.statementlist()
                this.state = 57
                this.match(wlp3Parser.T__5)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public statementlist(): StatementlistContext {
        let _localctx: StatementlistContext = new StatementlistContext(this._ctx, this.state)
        this.enterRule(_localctx, 8, wlp3Parser.RULE_statementlist)
        try {
            this.state = 63
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case wlp3Parser.T__0:
                case wlp3Parser.T__2:
                case wlp3Parser.T__7:
                case wlp3Parser.T__8:
                case wlp3Parser.T__9:
                case wlp3Parser.T__10:
                case wlp3Parser.T__11:
                case wlp3Parser.T__12:
                case wlp3Parser.T__15:
                case wlp3Parser.T__17:
                case wlp3Parser.T__18:
                case wlp3Parser.T__19:
                case wlp3Parser.T__20:
                case wlp3Parser.T__33:
                case wlp3Parser.INT:
                case wlp3Parser.STRING:
                case wlp3Parser.BOOL:
                case wlp3Parser.ID:
                    _localctx = new StatementListContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 59
                        ;(_localctx as StatementListContext)._first = this.statement()
                        this.state = 60
                        ;(_localctx as StatementListContext)._rest = this.statementlist()
                    }
                    break
                case wlp3Parser.T__5:
                    _localctx = new StatementEmptyContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public params(): ParamsContext {
        let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state)
        this.enterRule(_localctx, 10, wlp3Parser.RULE_params)
        try {
            this.state = 67
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case wlp3Parser.T__0:
                case wlp3Parser.T__7:
                case wlp3Parser.T__8:
                case wlp3Parser.T__9:
                    _localctx = new ParamsListContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 65
                        ;(_localctx as ParamsListContext)._list = this.paramlist()
                    }
                    break
                case wlp3Parser.T__3:
                    _localctx = new ParamsEmptyContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public paramlist(): ParamlistContext {
        let _localctx: ParamlistContext = new ParamlistContext(this._ctx, this.state)
        this.enterRule(_localctx, 12, wlp3Parser.RULE_paramlist)
        try {
            this.state = 74
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    _localctx = new SingleParamContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 69
                        ;(_localctx as SingleParamContext)._first = this.dcl()
                    }
                    break

                case 2:
                    _localctx = new MultiParamContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 70
                        ;(_localctx as MultiParamContext)._first = this.dcl()
                        this.state = 71
                        this.match(wlp3Parser.T__6)
                        this.state = 72
                        ;(_localctx as MultiParamContext)._rest = this.paramlist()
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public dcl(): DclContext {
        const _localctx: DclContext = new DclContext(this._ctx, this.state)
        this.enterRule(_localctx, 14, wlp3Parser.RULE_dcl)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 76
                _localctx._t = this.type()
                this.state = 77
                _localctx._id = this.match(wlp3Parser.ID)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public type(): TypeContext {
        let _localctx: TypeContext = new TypeContext(this._ctx, this.state)
        this.enterRule(_localctx, 16, wlp3Parser.RULE_type)
        try {
            this.state = 83
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case wlp3Parser.T__0:
                    _localctx = new IntTypeContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 79
                        this.match(wlp3Parser.T__0)
                    }
                    break
                case wlp3Parser.T__7:
                    _localctx = new BoolTypeContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 80
                        this.match(wlp3Parser.T__7)
                    }
                    break
                case wlp3Parser.T__8:
                    _localctx = new StringTypeContext(_localctx)
                    this.enterOuterAlt(_localctx, 3)
                    {
                        this.state = 81
                        this.match(wlp3Parser.T__8)
                    }
                    break
                case wlp3Parser.T__9:
                    _localctx = new IntStarTypeContext(_localctx)
                    this.enterOuterAlt(_localctx, 4)
                    {
                        this.state = 82
                        this.match(wlp3Parser.T__9)
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }

    public expr(): ExprContext
    public expr(_p: number): ExprContext
    // @RuleVersion(0)
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0
        }

        const _parentctx: ParserRuleContext = this._ctx
        const _parentState: number = this.state
        let _localctx: ExprContext = new ExprContext(this._ctx, _parentState)
        let _prevctx: ExprContext = _localctx
        const _startState: number = 18
        this.enterRecursionRule(_localctx, 18, wlp3Parser.RULE_expr, _p)
        try {
            let _alt: number
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 111
                this._errHandler.sync(this)
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            _localctx = new IntContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx

                            this.state = 86
                            this.match(wlp3Parser.INT)
                        }
                        break

                    case 2:
                        {
                            _localctx = new StringContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 87
                            this.match(wlp3Parser.STRING)
                        }
                        break

                    case 3:
                        {
                            _localctx = new BoolContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 88
                            this.match(wlp3Parser.BOOL)
                        }
                        break

                    case 4:
                        {
                            _localctx = new ParenthesesContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 89
                            this.match(wlp3Parser.T__2)
                            this.state = 90
                            ;(_localctx as ParenthesesContext)._inner = this.expr(0)
                            this.state = 91
                            this.match(wlp3Parser.T__3)
                        }
                        break

                    case 5:
                        {
                            _localctx = new UnopExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 93
                            ;(_localctx as UnopExprContext)._unop = this.unaryoperator()
                            this.state = 94
                            ;(_localctx as UnopExprContext)._first = this.expr(8)
                        }
                        break

                    case 6:
                        {
                            _localctx = new IdExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 96
                            ;(_localctx as IdExprContext)._id = this.match(wlp3Parser.ID)
                        }
                        break

                    case 7:
                        {
                            _localctx = new FnExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 97
                            ;(_localctx as FnExprContext)._id = this.match(wlp3Parser.ID)
                            this.state = 98
                            this.match(wlp3Parser.T__2)
                            this.state = 99
                            ;(_localctx as FnExprContext)._arglst = this.args()
                            this.state = 100
                            this.match(wlp3Parser.T__3)
                        }
                        break

                    case 8:
                        {
                            _localctx = new MallocExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 102
                            this.match(wlp3Parser.T__10)
                            this.state = 103
                            this.match(wlp3Parser.T__2)
                            this.state = 104
                            ;(_localctx as MallocExprContext)._first = this.expr(0)
                            this.state = 105
                            this.match(wlp3Parser.T__3)
                        }
                        break

                    case 9:
                        {
                            _localctx = new StarExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 107
                            this.match(wlp3Parser.T__11)
                            this.state = 108
                            ;(_localctx as StarExprContext)._first = this.expr(2)
                        }
                        break

                    case 10:
                        {
                            _localctx = new AmpersandExprContext(_localctx)
                            this._ctx = _localctx
                            _prevctx = _localctx
                            this.state = 109
                            this.match(wlp3Parser.T__12)
                            this.state = 110
                            ;(_localctx as AmpersandExprContext)._first = this.expr(1)
                        }
                        break
                }
                this._ctx._stop = this._input.tryLT(-1)
                this.state = 123
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx)
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent()
                        }
                        _prevctx = _localctx
                        {
                            this.state = 121
                            this._errHandler.sync(this)
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new BinopExprContext(
                                            new ExprContext(_parentctx, _parentState)
                                        )
                                        ;(_localctx as BinopExprContext)._first = _prevctx
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            wlp3Parser.RULE_expr
                                        )
                                        this.state = 113
                                        if (!this.precpred(this._ctx, 7)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this._ctx, 7)'
                                            )
                                        }
                                        this.state = 114
                                        ;(_localctx as BinopExprContext)._binop =
                                            this.binaryoperator()
                                        this.state = 115
                                        ;(_localctx as BinopExprContext)._second = this.expr(8)
                                    }
                                    break

                                case 2:
                                    {
                                        _localctx = new BinlogExprContext(
                                            new ExprContext(_parentctx, _parentState)
                                        )
                                        ;(_localctx as BinlogExprContext)._first = _prevctx
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            wlp3Parser.RULE_expr
                                        )
                                        this.state = 117
                                        if (!this.precpred(this._ctx, 6)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this._ctx, 6)'
                                            )
                                        }
                                        this.state = 118
                                        ;(_localctx as BinlogExprContext)._binlog =
                                            this.binarylogical()
                                        this.state = 119
                                        ;(_localctx as BinlogExprContext)._second = this.expr(7)
                                    }
                                    break
                            }
                        }
                    }
                    this.state = 125
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx)
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.unrollRecursionContexts(_parentctx)
        }
        return _localctx
    }
    // @RuleVersion(0)
    public statement(): StatementContext {
        let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 20, wlp3Parser.RULE_statement)
        try {
            this.state = 172
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    _localctx = new AssignmentContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 126
                        ;(_localctx as AssignmentContext)._lv = this.lvalue()
                        this.state = 127
                        this.match(wlp3Parser.T__13)
                        this.state = 128
                        ;(_localctx as AssignmentContext)._val = this.expr(0)
                        this.state = 129
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 2:
                    _localctx = new IfStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 131
                        this.match(wlp3Parser.T__15)
                        this.state = 132
                        this.match(wlp3Parser.T__2)
                        this.state = 133
                        ;(_localctx as IfStatementContext)._pred = this.predicate()
                        this.state = 134
                        this.match(wlp3Parser.T__3)
                        this.state = 135
                        ;(_localctx as IfStatementContext)._cons = this.block()
                        this.state = 136
                        this.match(wlp3Parser.T__16)
                        this.state = 137
                        ;(_localctx as IfStatementContext)._alt = this.block()
                    }
                    break

                case 3:
                    _localctx = new WhileStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 3)
                    {
                        this.state = 139
                        this.match(wlp3Parser.T__17)
                        this.state = 140
                        this.match(wlp3Parser.T__2)
                        this.state = 141
                        ;(_localctx as WhileStatementContext)._pred = this.predicate()
                        this.state = 142
                        this.match(wlp3Parser.T__3)
                        this.state = 143
                        ;(_localctx as WhileStatementContext)._body = this.block()
                    }
                    break

                case 4:
                    _localctx = new PrintfStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 4)
                    {
                        this.state = 145
                        this.match(wlp3Parser.T__18)
                        this.state = 146
                        this.match(wlp3Parser.T__2)
                        this.state = 147
                        ;(_localctx as PrintfStatementContext)._body = this.expr(0)
                        this.state = 148
                        this.match(wlp3Parser.T__3)
                        this.state = 149
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 5:
                    _localctx = new DclStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 5)
                    {
                        this.state = 151
                        ;(_localctx as DclStatementContext)._d = this.dcl()
                        this.state = 152
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 6:
                    _localctx = new DclAssignmentContext(_localctx)
                    this.enterOuterAlt(_localctx, 6)
                    {
                        this.state = 154
                        ;(_localctx as DclAssignmentContext)._d = this.dcl()
                        this.state = 155
                        this.match(wlp3Parser.T__13)
                        this.state = 156
                        ;(_localctx as DclAssignmentContext)._val = this.expr(0)
                        this.state = 157
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 7:
                    _localctx = new ReturnStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 7)
                    {
                        this.state = 159
                        this.match(wlp3Parser.T__19)
                        this.state = 160
                        ;(_localctx as ReturnStatementContext)._val = this.expr(0)
                        this.state = 161
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 8:
                    _localctx = new FreeStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 8)
                    {
                        this.state = 163
                        this.match(wlp3Parser.T__20)
                        this.state = 164
                        this.match(wlp3Parser.T__2)
                        this.state = 165
                        ;(_localctx as FreeStatementContext)._val = this.expr(0)
                        this.state = 166
                        this.match(wlp3Parser.T__3)
                        this.state = 167
                        this.match(wlp3Parser.T__14)
                    }
                    break

                case 9:
                    _localctx = new ExprStatementContext(_localctx)
                    this.enterOuterAlt(_localctx, 9)
                    {
                        this.state = 169
                        ;(_localctx as ExprStatementContext)._val = this.expr(0)
                        this.state = 170
                        this.match(wlp3Parser.T__14)
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public args(): ArgsContext {
        let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state)
        this.enterRule(_localctx, 22, wlp3Parser.RULE_args)
        try {
            this.state = 176
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case wlp3Parser.T__2:
                case wlp3Parser.T__10:
                case wlp3Parser.T__11:
                case wlp3Parser.T__12:
                case wlp3Parser.T__33:
                case wlp3Parser.INT:
                case wlp3Parser.STRING:
                case wlp3Parser.BOOL:
                case wlp3Parser.ID:
                    _localctx = new ArgsListContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 174
                        ;(_localctx as ArgsListContext)._list = this.arglist()
                    }
                    break
                case wlp3Parser.T__3:
                    _localctx = new ArgsEmptyContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public arglist(): ArglistContext {
        let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state)
        this.enterRule(_localctx, 24, wlp3Parser.RULE_arglist)
        try {
            this.state = 183
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    _localctx = new SingleArgContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 178
                        ;(_localctx as SingleArgContext)._first = this.expr(0)
                    }
                    break

                case 2:
                    _localctx = new MultiArgsContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 179
                        ;(_localctx as MultiArgsContext)._first = this.expr(0)
                        this.state = 180
                        this.match(wlp3Parser.T__6)
                        this.state = 181
                        ;(_localctx as MultiArgsContext)._rest = this.arglist()
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public binaryoperator(): BinaryoperatorContext {
        const _localctx: BinaryoperatorContext = new BinaryoperatorContext(this._ctx, this.state)
        this.enterRule(_localctx, 26, wlp3Parser.RULE_binaryoperator)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 185
                _la = this._input.LA(1)
                if (
                    !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << wlp3Parser.T__11) |
                                (1 << wlp3Parser.T__21) |
                                (1 << wlp3Parser.T__22) |
                                (1 << wlp3Parser.T__23) |
                                (1 << wlp3Parser.T__24) |
                                (1 << wlp3Parser.T__25) |
                                (1 << wlp3Parser.T__26) |
                                (1 << wlp3Parser.T__27) |
                                (1 << wlp3Parser.T__28) |
                                (1 << wlp3Parser.T__29) |
                                (1 << wlp3Parser.T__30))) !==
                            0
                    )
                ) {
                    this._errHandler.recoverInline(this)
                } else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                    }

                    this._errHandler.reportMatch(this)
                    this.consume()
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public binarylogical(): BinarylogicalContext {
        const _localctx: BinarylogicalContext = new BinarylogicalContext(this._ctx, this.state)
        this.enterRule(_localctx, 28, wlp3Parser.RULE_binarylogical)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 187
                _la = this._input.LA(1)
                if (!(_la === wlp3Parser.T__31 || _la === wlp3Parser.T__32)) {
                    this._errHandler.recoverInline(this)
                } else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                    }

                    this._errHandler.reportMatch(this)
                    this.consume()
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public unaryoperator(): UnaryoperatorContext {
        const _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state)
        this.enterRule(_localctx, 30, wlp3Parser.RULE_unaryoperator)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 189
                this.match(wlp3Parser.T__33)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public predicate(): PredicateContext {
        const _localctx: PredicateContext = new PredicateContext(this._ctx, this.state)
        this.enterRule(_localctx, 32, wlp3Parser.RULE_predicate)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 191
                _localctx._pred = this.expr(0)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public lvalue(): LvalueContext {
        let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state)
        this.enterRule(_localctx, 34, wlp3Parser.RULE_lvalue)
        try {
            this.state = 198
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case wlp3Parser.ID:
                    _localctx = new IdLvalueContext(_localctx)
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 193
                        ;(_localctx as IdLvalueContext)._id = this.match(wlp3Parser.ID)
                    }
                    break
                case wlp3Parser.T__2:
                    _localctx = new BracketLvalueContext(_localctx)
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 194
                        this.match(wlp3Parser.T__2)
                        this.state = 195
                        ;(_localctx as BracketLvalueContext)._lv = this.lvalue()
                        this.state = 196
                        this.match(wlp3Parser.T__3)
                    }
                    break
                default:
                    throw new NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }

    public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 9:
                return this.expr_sempred(_localctx as ExprContext, predIndex)
        }
        return true
    }
    private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 7)

            case 1:
                return this.precpred(this._ctx, 6)
        }
        return true
    }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xCB\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
        '\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02+\n\x02\x03\x03\x03' +
        '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03' +
        '\x06\x03\x06\x05\x06B\n\x06\x03\x07\x03\x07\x05\x07F\n\x07\x03\b\x03\b' +
        '\x03\b\x03\b\x03\b\x05\bM\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03' +
        '\n\x05\nV\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
        '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
        '\v\x03\v\x03\v\x03\v\x03\v\x05\vr\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
        '\v\x03\v\x03\v\x07\v|\n\v\f\v\x0E\v\x7F\v\v\x03\f\x03\f\x03\f\x03\f\x03' +
        '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03' +
        '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03' +
        '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03' +
        '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAF\n\f\x03\r\x03\r\x05\r\xB3\n' +
        '\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xBA\n\x0E\x03\x0F\x03' +
        '\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03' +
        '\x13\x03\x13\x03\x13\x05\x13\xC9\n\x13\x03\x13\x02\x02\x03\x14\x14\x02' +
        '\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02' +
        '\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02\x02\x04\x04\x02' +
        '\x0E\x0E\x18!\x03\x02"#\x02\xD5\x02*\x03\x02\x02\x02\x04,\x03\x02\x02' +
        '\x02\x062\x03\x02\x02\x02\b9\x03\x02\x02\x02\nA\x03\x02\x02\x02\fE\x03' +
        '\x02\x02\x02\x0EL\x03\x02\x02\x02\x10N\x03\x02\x02\x02\x12U\x03\x02\x02' +
        '\x02\x14q\x03\x02\x02\x02\x16\xAE\x03\x02\x02\x02\x18\xB2\x03\x02\x02' +
        '\x02\x1A\xB9\x03\x02\x02\x02\x1C\xBB\x03\x02\x02\x02\x1E\xBD\x03\x02\x02' +
        '\x02 \xBF\x03\x02\x02\x02"\xC1\x03\x02\x02\x02$\xC8\x03\x02\x02\x02&' +
        "'\x05\x06\x04\x02'(\x05\x02\x02\x02(+\x03\x02\x02\x02)+\x05\x04\x03" +
        '\x02*&\x03\x02\x02\x02*)\x03\x02\x02\x02+\x03\x03\x02\x02\x02,-\x07\x03' +
        '\x02\x02-.\x07\x04\x02\x02./\x07\x05\x02\x02/0\x07\x06\x02\x0201\x05\b' +
        '\x05\x021\x05\x03\x02\x02\x0223\x05\x12\n\x0234\x07)\x02\x0245\x07\x05' +
        '\x02\x0256\x05\f\x07\x0267\x07\x06\x02\x0278\x05\b\x05\x028\x07\x03\x02' +
        '\x02\x029:\x07\x07\x02\x02:;\x05\n\x06\x02;<\x07\b\x02\x02<\t\x03\x02' +
        '\x02\x02=>\x05\x16\f\x02>?\x05\n\x06\x02?B\x03\x02\x02\x02@B\x03\x02\x02' +
        '\x02A=\x03\x02\x02\x02A@\x03\x02\x02\x02B\v\x03\x02\x02\x02CF\x05\x0E' +
        '\b\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\r\x03\x02' +
        '\x02\x02GM\x05\x10\t\x02HI\x05\x10\t\x02IJ\x07\t\x02\x02JK\x05\x0E\b\x02' +
        'KM\x03\x02\x02\x02LG\x03\x02\x02\x02LH\x03\x02\x02\x02M\x0F\x03\x02\x02' +
        '\x02NO\x05\x12\n\x02OP\x07)\x02\x02P\x11\x03\x02\x02\x02QV\x07\x03\x02' +
        '\x02RV\x07\n\x02\x02SV\x07\v\x02\x02TV\x07\f\x02\x02UQ\x03\x02\x02\x02' +
        'UR\x03\x02\x02\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02V\x13\x03\x02\x02' +
        "\x02WX\b\v\x01\x02Xr\x07&\x02\x02Yr\x07'\x02\x02Zr\x07(\x02\x02[\\\x07" +
        '\x05\x02\x02\\]\x05\x14\v\x02]^\x07\x06\x02\x02^r\x03\x02\x02\x02_`\x05' +
        ' \x11\x02`a\x05\x14\v\nar\x03\x02\x02\x02br\x07)\x02\x02cd\x07)\x02\x02' +
        'de\x07\x05\x02\x02ef\x05\x18\r\x02fg\x07\x06\x02\x02gr\x03\x02\x02\x02' +
        'hi\x07\r\x02\x02ij\x07\x05\x02\x02jk\x05\x14\v\x02kl\x07\x06\x02\x02l' +
        'r\x03\x02\x02\x02mn\x07\x0E\x02\x02nr\x05\x14\v\x04op\x07\x0F\x02\x02' +
        'pr\x05\x14\v\x03qW\x03\x02\x02\x02qY\x03\x02\x02\x02qZ\x03\x02\x02\x02' +
        'q[\x03\x02\x02\x02q_\x03\x02\x02\x02qb\x03\x02\x02\x02qc\x03\x02\x02\x02' +
        'qh\x03\x02\x02\x02qm\x03\x02\x02\x02qo\x03\x02\x02\x02r}\x03\x02\x02\x02' +
        'st\f\t\x02\x02tu\x05\x1C\x0F\x02uv\x05\x14\v\nv|\x03\x02\x02\x02wx\f\b' +
        '\x02\x02xy\x05\x1E\x10\x02yz\x05\x14\v\tz|\x03\x02\x02\x02{s\x03\x02\x02' +
        '\x02{w\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02' +
        '\x02\x02~\x15\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x05$\x13\x02' +
        '\x81\x82\x07\x10\x02\x02\x82\x83\x05\x14\v\x02\x83\x84\x07\x11\x02\x02' +
        '\x84\xAF\x03\x02\x02\x02\x85\x86\x07\x12\x02\x02\x86\x87\x07\x05\x02\x02' +
        '\x87\x88\x05"\x12\x02\x88\x89\x07\x06\x02\x02\x89\x8A\x05\b\x05\x02\x8A' +
        '\x8B\x07\x13\x02\x02\x8B\x8C\x05\b\x05\x02\x8C\xAF\x03\x02\x02\x02\x8D' +
        '\x8E\x07\x14\x02\x02\x8E\x8F\x07\x05\x02\x02\x8F\x90\x05"\x12\x02\x90' +
        '\x91\x07\x06\x02\x02\x91\x92\x05\b\x05\x02\x92\xAF\x03\x02\x02\x02\x93' +
        '\x94\x07\x15\x02\x02\x94\x95\x07\x05\x02\x02\x95\x96\x05\x14\v\x02\x96' +
        '\x97\x07\x06\x02\x02\x97\x98\x07\x11\x02\x02\x98\xAF\x03\x02\x02\x02\x99' +
        '\x9A\x05\x10\t\x02\x9A\x9B\x07\x11\x02\x02\x9B\xAF\x03\x02\x02\x02\x9C' +
        '\x9D\x05\x10\t\x02\x9D\x9E\x07\x10\x02\x02\x9E\x9F\x05\x14\v\x02\x9F\xA0' +
        '\x07\x11\x02\x02\xA0\xAF\x03\x02\x02\x02\xA1\xA2\x07\x16\x02\x02\xA2\xA3' +
        '\x05\x14\v\x02\xA3\xA4\x07\x11\x02\x02\xA4\xAF\x03\x02\x02\x02\xA5\xA6' +
        '\x07\x17\x02\x02\xA6\xA7\x07\x05\x02\x02\xA7\xA8\x05\x14\v\x02\xA8\xA9' +
        '\x07\x06\x02\x02\xA9\xAA\x07\x11\x02\x02\xAA\xAF\x03\x02\x02\x02\xAB\xAC' +
        '\x05\x14\v\x02\xAC\xAD\x07\x11\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\x80' +
        '\x03\x02\x02\x02\xAE\x85\x03\x02\x02\x02\xAE\x8D\x03\x02\x02\x02\xAE\x93' +
        '\x03\x02\x02\x02\xAE\x99\x03\x02\x02\x02\xAE\x9C\x03\x02\x02\x02\xAE\xA1' +
        '\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xAB\x03\x02\x02\x02\xAF\x17' +
        '\x03\x02\x02\x02\xB0\xB3\x05\x1A\x0E\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0' +
        '\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x19\x03\x02\x02\x02\xB4\xBA' +
        '\x05\x14\v\x02\xB5\xB6\x05\x14\v\x02\xB6\xB7\x07\t\x02\x02\xB7\xB8\x05' +
        '\x1A\x0E\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB4\x03\x02\x02\x02\xB9\xB5\x03' +
        '\x02\x02\x02\xBA\x1B\x03\x02\x02\x02\xBB\xBC\t\x02\x02\x02\xBC\x1D\x03' +
        '\x02\x02\x02\xBD\xBE\t\x03\x02\x02\xBE\x1F\x03\x02\x02\x02\xBF\xC0\x07' +
        '$\x02\x02\xC0!\x03\x02\x02\x02\xC1\xC2\x05\x14\v\x02\xC2#\x03\x02\x02' +
        '\x02\xC3\xC9\x07)\x02\x02\xC4\xC5\x07\x05\x02\x02\xC5\xC6\x05$\x13\x02' +
        '\xC6\xC7\x07\x06\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC3\x03\x02\x02\x02' +
        '\xC8\xC4\x03\x02\x02\x02\xC9%\x03\x02\x02\x02\x0E*AELUq{}\xAE\xB2\xB9' +
        '\xC8'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!wlp3Parser.__ATN) {
            wlp3Parser.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(wlp3Parser._serializedATN)
            )
        }

        return wlp3Parser.__ATN
    }
}

export class ProgramContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_program
    }
    public copyFrom(ctx: ProgramContext): void {
        super.copyFrom(ctx)
    }
}
export class FunProgContext extends ProgramContext {
    public _fun!: FunctionContext
    public _prog!: ProgramContext
    public function(): FunctionContext {
        return this.getRuleContext(0, FunctionContext)
    }
    public program(): ProgramContext {
        return this.getRuleContext(0, ProgramContext)
    }
    constructor(ctx: ProgramContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterFunProg) {
            listener.enterFunProg(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitFunProg) {
            listener.exitFunProg(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitFunProg) {
            return visitor.visitFunProg(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class MainProgContext extends ProgramContext {
    public _mn!: MainContext
    public main(): MainContext {
        return this.getRuleContext(0, MainContext)
    }
    constructor(ctx: ProgramContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterMainProg) {
            listener.enterMainProg(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitMainProg) {
            listener.exitMainProg(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitMainProg) {
            return visitor.visitMainProg(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class MainContext extends ParserRuleContext {
    public _blk!: BlockContext
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_main
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterMain) {
            listener.enterMain(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitMain) {
            listener.exitMain(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitMain) {
            return visitor.visitMain(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class FunctionContext extends ParserRuleContext {
    public _t!: TypeContext
    public _id!: Token
    public _prms!: ParamsContext
    public _blk!: BlockContext
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)
    }
    public ID(): TerminalNode {
        return this.getToken(wlp3Parser.ID, 0)
    }
    public params(): ParamsContext {
        return this.getRuleContext(0, ParamsContext)
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_function
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterFunction) {
            listener.enterFunction(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitFunction) {
            listener.exitFunction(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class BlockContext extends ParserRuleContext {
    public _stmnts!: StatementlistContext
    public statementlist(): StatementlistContext {
        return this.getRuleContext(0, StatementlistContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_block
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBlock) {
            listener.enterBlock(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBlock) {
            listener.exitBlock(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class StatementlistContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_statementlist
    }
    public copyFrom(ctx: StatementlistContext): void {
        super.copyFrom(ctx)
    }
}
export class StatementListContext extends StatementlistContext {
    public _first!: StatementContext
    public _rest!: StatementlistContext
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)
    }
    public statementlist(): StatementlistContext {
        return this.getRuleContext(0, StatementlistContext)
    }
    constructor(ctx: StatementlistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterStatementList) {
            listener.enterStatementList(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitStatementList) {
            listener.exitStatementList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StatementEmptyContext extends StatementlistContext {
    constructor(ctx: StatementlistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterStatementEmpty) {
            listener.enterStatementEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitStatementEmpty) {
            listener.exitStatementEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitStatementEmpty) {
            return visitor.visitStatementEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class ParamsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_params
    }
    public copyFrom(ctx: ParamsContext): void {
        super.copyFrom(ctx)
    }
}
export class ParamsListContext extends ParamsContext {
    public _list!: ParamlistContext
    public paramlist(): ParamlistContext {
        return this.getRuleContext(0, ParamlistContext)
    }
    constructor(ctx: ParamsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterParamsList) {
            listener.enterParamsList(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitParamsList) {
            listener.exitParamsList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitParamsList) {
            return visitor.visitParamsList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ParamsEmptyContext extends ParamsContext {
    constructor(ctx: ParamsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterParamsEmpty) {
            listener.enterParamsEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitParamsEmpty) {
            listener.exitParamsEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitParamsEmpty) {
            return visitor.visitParamsEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class ParamlistContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_paramlist
    }
    public copyFrom(ctx: ParamlistContext): void {
        super.copyFrom(ctx)
    }
}
export class SingleParamContext extends ParamlistContext {
    public _first!: DclContext
    public dcl(): DclContext {
        return this.getRuleContext(0, DclContext)
    }
    constructor(ctx: ParamlistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterSingleParam) {
            listener.enterSingleParam(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitSingleParam) {
            listener.exitSingleParam(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitSingleParam) {
            return visitor.visitSingleParam(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class MultiParamContext extends ParamlistContext {
    public _first!: DclContext
    public _rest!: ParamlistContext
    public dcl(): DclContext {
        return this.getRuleContext(0, DclContext)
    }
    public paramlist(): ParamlistContext {
        return this.getRuleContext(0, ParamlistContext)
    }
    constructor(ctx: ParamlistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterMultiParam) {
            listener.enterMultiParam(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitMultiParam) {
            listener.exitMultiParam(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitMultiParam) {
            return visitor.visitMultiParam(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class DclContext extends ParserRuleContext {
    public _t!: TypeContext
    public _id!: Token
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)
    }
    public ID(): TerminalNode {
        return this.getToken(wlp3Parser.ID, 0)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_dcl
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterDcl) {
            listener.enterDcl(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitDcl) {
            listener.exitDcl(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitDcl) {
            return visitor.visitDcl(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class TypeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_type
    }
    public copyFrom(ctx: TypeContext): void {
        super.copyFrom(ctx)
    }
}
export class IntTypeContext extends TypeContext {
    constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterIntType) {
            listener.enterIntType(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitIntType) {
            listener.exitIntType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitIntType) {
            return visitor.visitIntType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class BoolTypeContext extends TypeContext {
    constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBoolType) {
            listener.enterBoolType(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBoolType) {
            listener.exitBoolType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBoolType) {
            return visitor.visitBoolType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringTypeContext extends TypeContext {
    constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterStringType) {
            listener.enterStringType(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitStringType) {
            listener.exitStringType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitStringType) {
            return visitor.visitStringType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class IntStarTypeContext extends TypeContext {
    constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterIntStarType) {
            listener.enterIntStarType(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitIntStarType) {
            listener.exitIntStarType(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitIntStarType) {
            return visitor.visitIntStarType(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_expr
    }
    public copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx)
    }
}
export class IntContext extends ExprContext {
    public INT(): TerminalNode {
        return this.getToken(wlp3Parser.INT, 0)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterInt) {
            listener.enterInt(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitInt) {
            listener.exitInt(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitInt) {
            return visitor.visitInt(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringContext extends ExprContext {
    public STRING(): TerminalNode {
        return this.getToken(wlp3Parser.STRING, 0)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterString) {
            listener.enterString(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitString) {
            listener.exitString(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitString) {
            return visitor.visitString(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class BoolContext extends ExprContext {
    public BOOL(): TerminalNode {
        return this.getToken(wlp3Parser.BOOL, 0)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBool) {
            listener.enterBool(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBool) {
            listener.exitBool(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBool) {
            return visitor.visitBool(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ParenthesesContext extends ExprContext {
    public _inner!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterParentheses) {
            listener.enterParentheses(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitParentheses) {
            listener.exitParentheses(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class UnopExprContext extends ExprContext {
    public _unop!: UnaryoperatorContext
    public _first!: ExprContext
    public unaryoperator(): UnaryoperatorContext {
        return this.getRuleContext(0, UnaryoperatorContext)
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterUnopExpr) {
            listener.enterUnopExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitUnopExpr) {
            listener.exitUnopExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitUnopExpr) {
            return visitor.visitUnopExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class BinopExprContext extends ExprContext {
    public _first!: ExprContext
    public _binop!: BinaryoperatorContext
    public _second!: ExprContext
    public expr(): ExprContext[]
    public expr(i: number): ExprContext
    public expr(i?: number): ExprContext | ExprContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext)
        } else {
            return this.getRuleContext(i, ExprContext)
        }
    }
    public binaryoperator(): BinaryoperatorContext {
        return this.getRuleContext(0, BinaryoperatorContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBinopExpr) {
            listener.enterBinopExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBinopExpr) {
            listener.exitBinopExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBinopExpr) {
            return visitor.visitBinopExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class BinlogExprContext extends ExprContext {
    public _first!: ExprContext
    public _binlog!: BinarylogicalContext
    public _second!: ExprContext
    public expr(): ExprContext[]
    public expr(i: number): ExprContext
    public expr(i?: number): ExprContext | ExprContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext)
        } else {
            return this.getRuleContext(i, ExprContext)
        }
    }
    public binarylogical(): BinarylogicalContext {
        return this.getRuleContext(0, BinarylogicalContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBinlogExpr) {
            listener.enterBinlogExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBinlogExpr) {
            listener.exitBinlogExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBinlogExpr) {
            return visitor.visitBinlogExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class IdExprContext extends ExprContext {
    public _id!: Token
    public ID(): TerminalNode {
        return this.getToken(wlp3Parser.ID, 0)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterIdExpr) {
            listener.enterIdExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitIdExpr) {
            listener.exitIdExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitIdExpr) {
            return visitor.visitIdExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class FnExprContext extends ExprContext {
    public _id!: Token
    public _arglst!: ArgsContext
    public ID(): TerminalNode {
        return this.getToken(wlp3Parser.ID, 0)
    }
    public args(): ArgsContext {
        return this.getRuleContext(0, ArgsContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterFnExpr) {
            listener.enterFnExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitFnExpr) {
            listener.exitFnExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitFnExpr) {
            return visitor.visitFnExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class MallocExprContext extends ExprContext {
    public _first!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterMallocExpr) {
            listener.enterMallocExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitMallocExpr) {
            listener.exitMallocExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitMallocExpr) {
            return visitor.visitMallocExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StarExprContext extends ExprContext {
    public _first!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterStarExpr) {
            listener.enterStarExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitStarExpr) {
            listener.exitStarExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitStarExpr) {
            return visitor.visitStarExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class AmpersandExprContext extends ExprContext {
    public _first!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterAmpersandExpr) {
            listener.enterAmpersandExpr(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitAmpersandExpr) {
            listener.exitAmpersandExpr(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitAmpersandExpr) {
            return visitor.visitAmpersandExpr(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class StatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_statement
    }
    public copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx)
    }
}
export class AssignmentContext extends StatementContext {
    public _lv!: LvalueContext
    public _val!: ExprContext
    public lvalue(): LvalueContext {
        return this.getRuleContext(0, LvalueContext)
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterAssignment) {
            listener.enterAssignment(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitAssignment) {
            listener.exitAssignment(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class IfStatementContext extends StatementContext {
    public _pred!: PredicateContext
    public _cons!: BlockContext
    public _alt!: BlockContext
    public predicate(): PredicateContext {
        return this.getRuleContext(0, PredicateContext)
    }
    public block(): BlockContext[]
    public block(i: number): BlockContext
    public block(i?: number): BlockContext | BlockContext[] {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext)
        } else {
            return this.getRuleContext(i, BlockContext)
        }
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class WhileStatementContext extends StatementContext {
    public _pred!: PredicateContext
    public _body!: BlockContext
    public predicate(): PredicateContext {
        return this.getRuleContext(0, PredicateContext)
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class PrintfStatementContext extends StatementContext {
    public _body!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterPrintfStatement) {
            listener.enterPrintfStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitPrintfStatement) {
            listener.exitPrintfStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitPrintfStatement) {
            return visitor.visitPrintfStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DclStatementContext extends StatementContext {
    public _d!: DclContext
    public dcl(): DclContext {
        return this.getRuleContext(0, DclContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterDclStatement) {
            listener.enterDclStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitDclStatement) {
            listener.exitDclStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitDclStatement) {
            return visitor.visitDclStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DclAssignmentContext extends StatementContext {
    public _d!: DclContext
    public _val!: ExprContext
    public dcl(): DclContext {
        return this.getRuleContext(0, DclContext)
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterDclAssignment) {
            listener.enterDclAssignment(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitDclAssignment) {
            listener.exitDclAssignment(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitDclAssignment) {
            return visitor.visitDclAssignment(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ReturnStatementContext extends StatementContext {
    public _val!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class FreeStatementContext extends StatementContext {
    public _val!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterFreeStatement) {
            listener.enterFreeStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitFreeStatement) {
            listener.exitFreeStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitFreeStatement) {
            return visitor.visitFreeStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ExprStatementContext extends StatementContext {
    public _val!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterExprStatement) {
            listener.enterExprStatement(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitExprStatement) {
            listener.exitExprStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitExprStatement) {
            return visitor.visitExprStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class ArgsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_args
    }
    public copyFrom(ctx: ArgsContext): void {
        super.copyFrom(ctx)
    }
}
export class ArgsListContext extends ArgsContext {
    public _list!: ArglistContext
    public arglist(): ArglistContext {
        return this.getRuleContext(0, ArglistContext)
    }
    constructor(ctx: ArgsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterArgsList) {
            listener.enterArgsList(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitArgsList) {
            listener.exitArgsList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitArgsList) {
            return visitor.visitArgsList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ArgsEmptyContext extends ArgsContext {
    constructor(ctx: ArgsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterArgsEmpty) {
            listener.enterArgsEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitArgsEmpty) {
            listener.exitArgsEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitArgsEmpty) {
            return visitor.visitArgsEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class ArglistContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_arglist
    }
    public copyFrom(ctx: ArglistContext): void {
        super.copyFrom(ctx)
    }
}
export class SingleArgContext extends ArglistContext {
    public _first!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(ctx: ArglistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterSingleArg) {
            listener.enterSingleArg(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitSingleArg) {
            listener.exitSingleArg(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitSingleArg) {
            return visitor.visitSingleArg(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class MultiArgsContext extends ArglistContext {
    public _first!: ExprContext
    public _rest!: ArglistContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    public arglist(): ArglistContext {
        return this.getRuleContext(0, ArglistContext)
    }
    constructor(ctx: ArglistContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterMultiArgs) {
            listener.enterMultiArgs(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitMultiArgs) {
            listener.exitMultiArgs(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitMultiArgs) {
            return visitor.visitMultiArgs(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class BinaryoperatorContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_binaryoperator
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBinaryoperator) {
            listener.enterBinaryoperator(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBinaryoperator) {
            listener.exitBinaryoperator(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBinaryoperator) {
            return visitor.visitBinaryoperator(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class BinarylogicalContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_binarylogical
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBinarylogical) {
            listener.enterBinarylogical(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBinarylogical) {
            listener.exitBinarylogical(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBinarylogical) {
            return visitor.visitBinarylogical(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class UnaryoperatorContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_unaryoperator
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterUnaryoperator) {
            listener.enterUnaryoperator(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitUnaryoperator) {
            listener.exitUnaryoperator(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitUnaryoperator) {
            return visitor.visitUnaryoperator(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class PredicateContext extends ParserRuleContext {
    public _pred!: ExprContext
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_predicate
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterPredicate) {
            listener.enterPredicate(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitPredicate) {
            listener.exitPredicate(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}

export class LvalueContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number {
        return wlp3Parser.RULE_lvalue
    }
    public copyFrom(ctx: LvalueContext): void {
        super.copyFrom(ctx)
    }
}
export class IdLvalueContext extends LvalueContext {
    public _id!: Token
    public ID(): TerminalNode {
        return this.getToken(wlp3Parser.ID, 0)
    }
    constructor(ctx: LvalueContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterIdLvalue) {
            listener.enterIdLvalue(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitIdLvalue) {
            listener.exitIdLvalue(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitIdLvalue) {
            return visitor.visitIdLvalue(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class BracketLvalueContext extends LvalueContext {
    public _lv!: LvalueContext
    public lvalue(): LvalueContext {
        return this.getRuleContext(0, LvalueContext)
    }
    constructor(ctx: LvalueContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: wlp3Listener): void {
        if (listener.enterBracketLvalue) {
            listener.enterBracketLvalue(this)
        }
    }
    // @Override
    public exitRule(listener: wlp3Listener): void {
        if (listener.exitBracketLvalue) {
            listener.exitBracketLvalue(this)
        }
    }
    // @Override
    public accept<Result>(visitor: wlp3Visitor<Result>): Result {
        if (visitor.visitBracketLvalue) {
            return visitor.visitBracketLvalue(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
