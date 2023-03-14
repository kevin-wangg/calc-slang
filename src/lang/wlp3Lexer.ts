// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class wlp3Lexer extends Lexer {
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

    // tslint:disable:no-trailing-whitespace
    public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

    // tslint:disable:no-trailing-whitespace
    public static readonly modeNames: string[] = ['DEFAULT_MODE']

    public static readonly ruleNames: string[] = [
        'T__0',
        'T__1',
        'T__2',
        'T__3',
        'T__4',
        'T__5',
        'T__6',
        'T__7',
        'T__8',
        'T__9',
        'T__10',
        'T__11',
        'T__12',
        'T__13',
        'T__14',
        'T__15',
        'T__16',
        'T__17',
        'T__18',
        'T__19',
        'T__20',
        'T__21',
        'T__22',
        'T__23',
        'T__24',
        'T__25',
        'T__26',
        'T__27',
        'T__28',
        'T__29',
        'T__30',
        'T__31',
        'T__32',
        'T__33',
        'WS',
        'INT',
        'STRING',
        'BOOL',
        'ID'
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
        wlp3Lexer._LITERAL_NAMES,
        wlp3Lexer._SYMBOLIC_NAMES,
        []
    )

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return wlp3Lexer.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace

    constructor(input: CharStream) {
        super(input)
        this._interp = new LexerATNSimulator(wlp3Lexer._ATN, this)
    }

    // @Override
    public get grammarFileName(): string {
        return 'wlp3.g4'
    }

    // @Override
    public get ruleNames(): string[] {
        return wlp3Lexer.ruleNames
    }

    // @Override
    public get serializedATN(): string {
        return wlp3Lexer._serializedATN
    }

    // @Override
    public get channelNames(): string[] {
        return wlp3Lexer.channelNames
    }

    // @Override
    public get modeNames(): string[] {
        return wlp3Lexer.modeNames
    }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02)\xEB\b\x01\x04' +
        '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
        '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
        '\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12' +
        '\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17' +
        '\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C' +
        '\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04' +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x03\x02\x03\x02\x03\x02" +
        '\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05' +
        '\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t' +
        '\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03' +
        '\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03' +
        '\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03' +
        '\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
        '\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
        '\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03' +
        '\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03' +
        '\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03' +
        '\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!' +
        '\x03!\x03"\x03"\x03"\x03#\x03#\x03$\x06$\xC7\n$\r$\x0E$\xC8\x03$\x03' +
        '$\x03%\x06%\xCE\n%\r%\x0E%\xCF\x03&\x03&\x06&\xD4\n&\r&\x0E&\xD5\x03&' +
        "\x03&\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x05'\xE3" +
        "\n'\x03(\x03(\x07(\xE7\n(\f(\x0E(\xEA\v(\x02\x02\x02)\x03\x02\x03\x05" +
        '\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13' +
        '\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02' +
        "\x11!\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
        '\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?' +
        '\x02!A\x02"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)\x03\x02\x07\x05' +
        '\x02\v\f\x0F\x0F""\x03\x022;\x05\x022;C\\c|\x05\x02C\\aac|\x06\x022' +
        ';C\\aac|\x02\xEF\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07' +
        '\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03' +
        '\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03' +
        '\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03' +
        '\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03' +
        '\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02' +
        "\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02" +
        '-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02' +
        '\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02' +
        '\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03' +
        '\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02' +
        '\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02' +
        'O\x03\x02\x02\x02\x03Q\x03\x02\x02\x02\x05U\x03\x02\x02\x02\x07Z\x03\x02' +
        '\x02\x02\t\\\x03\x02\x02\x02\v^\x03\x02\x02\x02\r`\x03\x02\x02\x02\x0F' +
        'b\x03\x02\x02\x02\x11d\x03\x02\x02\x02\x13i\x03\x02\x02\x02\x15p\x03\x02' +
        '\x02\x02\x17u\x03\x02\x02\x02\x19|\x03\x02\x02\x02\x1B~\x03\x02\x02\x02' +
        '\x1D\x80\x03\x02\x02\x02\x1F\x82\x03\x02\x02\x02!\x84\x03\x02\x02\x02' +
        "#\x87\x03\x02\x02\x02%\x8C\x03\x02\x02\x02'\x92\x03\x02\x02\x02)\x99" +
        '\x03\x02\x02\x02+\xA0\x03\x02\x02\x02-\xA5\x03\x02\x02\x02/\xA7\x03\x02' +
        '\x02\x021\xA9\x03\x02\x02\x023\xAB\x03\x02\x02\x025\xAD\x03\x02\x02\x02' +
        '7\xB0\x03\x02\x02\x029\xB2\x03\x02\x02\x02;\xB4\x03\x02\x02\x02=\xB7\x03' +
        '\x02\x02\x02?\xBA\x03\x02\x02\x02A\xBD\x03\x02\x02\x02C\xC0\x03\x02\x02' +
        '\x02E\xC3\x03\x02\x02\x02G\xC6\x03\x02\x02\x02I\xCD\x03\x02\x02\x02K\xD1' +
        '\x03\x02\x02\x02M\xE2\x03\x02\x02\x02O\xE4\x03\x02\x02\x02QR\x07k\x02' +
        '\x02RS\x07p\x02\x02ST\x07v\x02\x02T\x04\x03\x02\x02\x02UV\x07o\x02\x02' +
        'VW\x07c\x02\x02WX\x07k\x02\x02XY\x07p\x02\x02Y\x06\x03\x02\x02\x02Z[\x07' +
        '*\x02\x02[\b\x03\x02\x02\x02\\]\x07+\x02\x02]\n\x03\x02\x02\x02^_\x07' +
        '}\x02\x02_\f\x03\x02\x02\x02`a\x07\x7F\x02\x02a\x0E\x03\x02\x02\x02bc' +
        '\x07.\x02\x02c\x10\x03\x02\x02\x02de\x07d\x02\x02ef\x07q\x02\x02fg\x07' +
        'q\x02\x02gh\x07n\x02\x02h\x12\x03\x02\x02\x02ij\x07u\x02\x02jk\x07v\x02' +
        '\x02kl\x07t\x02\x02lm\x07k\x02\x02mn\x07p\x02\x02no\x07i\x02\x02o\x14' +
        '\x03\x02\x02\x02pq\x07k\x02\x02qr\x07p\x02\x02rs\x07v\x02\x02st\x07,\x02' +
        '\x02t\x16\x03\x02\x02\x02uv\x07o\x02\x02vw\x07c\x02\x02wx\x07n\x02\x02' +
        'xy\x07n\x02\x02yz\x07q\x02\x02z{\x07e\x02\x02{\x18\x03\x02\x02\x02|}\x07' +
        ',\x02\x02}\x1A\x03\x02\x02\x02~\x7F\x07(\x02\x02\x7F\x1C\x03\x02\x02\x02' +
        '\x80\x81\x07?\x02\x02\x81\x1E\x03\x02\x02\x02\x82\x83\x07=\x02\x02\x83' +
        ' \x03\x02\x02\x02\x84\x85\x07k\x02\x02\x85\x86\x07h\x02\x02\x86"\x03' +
        '\x02\x02\x02\x87\x88\x07g\x02\x02\x88\x89\x07n\x02\x02\x89\x8A\x07u\x02' +
        '\x02\x8A\x8B\x07g\x02\x02\x8B$\x03\x02\x02\x02\x8C\x8D\x07y\x02\x02\x8D' +
        '\x8E\x07j\x02\x02\x8E\x8F\x07k\x02\x02\x8F\x90\x07n\x02\x02\x90\x91\x07' +
        'g\x02\x02\x91&\x03\x02\x02\x02\x92\x93\x07r\x02\x02\x93\x94\x07t\x02\x02' +
        '\x94\x95\x07k\x02\x02\x95\x96\x07p\x02\x02\x96\x97\x07v\x02\x02\x97\x98' +
        '\x07h\x02\x02\x98(\x03\x02\x02\x02\x99\x9A\x07t\x02\x02\x9A\x9B\x07g\x02' +
        '\x02\x9B\x9C\x07v\x02\x02\x9C\x9D\x07w\x02\x02\x9D\x9E\x07t\x02\x02\x9E' +
        '\x9F\x07p\x02\x02\x9F*\x03\x02\x02\x02\xA0\xA1\x07h\x02\x02\xA1\xA2\x07' +
        't\x02\x02\xA2\xA3\x07g\x02\x02\xA3\xA4\x07g\x02\x02\xA4,\x03\x02\x02\x02' +
        '\xA5\xA6\x07-\x02\x02\xA6.\x03\x02\x02\x02\xA7\xA8\x07/\x02\x02\xA80\x03' +
        "\x02\x02\x02\xA9\xAA\x071\x02\x02\xAA2\x03\x02\x02\x02\xAB\xAC\x07'\x02" +
        '\x02\xAC4\x03\x02\x02\x02\xAD\xAE\x07?\x02\x02\xAE\xAF\x07?\x02\x02\xAF' +
        '6\x03\x02\x02\x02\xB0\xB1\x07@\x02\x02\xB18\x03\x02\x02\x02\xB2\xB3\x07' +
        '>\x02\x02\xB3:\x03\x02\x02\x02\xB4\xB5\x07>\x02\x02\xB5\xB6\x07?\x02\x02' +
        '\xB6<\x03\x02\x02\x02\xB7\xB8\x07@\x02\x02\xB8\xB9\x07?\x02\x02\xB9>\x03' +
        '\x02\x02\x02\xBA\xBB\x07#\x02\x02\xBB\xBC\x07?\x02\x02\xBC@\x03\x02\x02' +
        '\x02\xBD\xBE\x07(\x02\x02\xBE\xBF\x07(\x02\x02\xBFB\x03\x02\x02\x02\xC0' +
        '\xC1\x07~\x02\x02\xC1\xC2\x07~\x02\x02\xC2D\x03\x02\x02\x02\xC3\xC4\x07' +
        '#\x02\x02\xC4F\x03\x02\x02\x02\xC5\xC7\t\x02\x02\x02\xC6\xC5\x03\x02\x02' +
        '\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02' +
        '\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\b$\x02\x02\xCBH\x03\x02\x02\x02\xCC' +
        '\xCE\t\x03\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF' +
        '\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0J\x03\x02\x02\x02\xD1' +
        '\xD3\x07$\x02\x02\xD2\xD4\t\x04\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5' +
        '\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7' +
        '\x03\x02\x02\x02\xD7\xD8\x07$\x02\x02\xD8L\x03\x02\x02\x02\xD9\xDA\x07' +
        'v\x02\x02\xDA\xDB\x07t\x02\x02\xDB\xDC\x07w\x02\x02\xDC\xE3\x07g\x02\x02' +
        '\xDD\xDE\x07h\x02\x02\xDE\xDF\x07c\x02\x02\xDF\xE0\x07n\x02\x02\xE0\xE1' +
        '\x07u\x02\x02\xE1\xE3\x07g\x02\x02\xE2\xD9\x03\x02\x02\x02\xE2\xDD\x03' +
        '\x02\x02\x02\xE3N\x03\x02\x02\x02\xE4\xE8\t\x05\x02\x02\xE5\xE7\t\x06' +
        '\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02' +
        '\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9P\x03\x02\x02\x02\xEA\xE8\x03\x02' +
        '\x02\x02\b\x02\xC8\xCF\xD5\xE2\xE8\x03\b\x02\x02'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!wlp3Lexer.__ATN) {
            wlp3Lexer.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(wlp3Lexer._serializedATN)
            )
        }

        return wlp3Lexer.__ATN
    }
}
