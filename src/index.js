import invert from 'lodash.invert';

/**
 * Full-width Kana: Half-width Kana MAP
 */
const halfKanaMap = {
    'ガ': 'ｶﾞ',
    'ギ': 'ｷﾞ',
    'グ': 'ｸﾞ',
    'ゲ': 'ｹﾞ',
    'ゴ': 'ｺﾞ',
    'ザ': 'ｻﾞ',
    'ジ': 'ｼﾞ',
    'ズ': 'ｽﾞ',
    'ゼ': 'ｾﾞ',
    'ゾ': 'ｿﾞ',
    'ダ': 'ﾀﾞ',
    'ヂ': 'ﾁﾞ',
    'ヅ': 'ﾂﾞ',
    'デ': 'ﾃﾞ',
    'ド': 'ﾄﾞ',
    'バ': 'ﾊﾞ',
    'ビ': 'ﾋﾞ',
    'ブ': 'ﾌﾞ',
    'ベ': 'ﾍﾞ',
    'ボ': 'ﾎﾞ',
    'パ': 'ﾊﾟ',
    'ピ': 'ﾋﾟ',
    'プ': 'ﾌﾟ',
    'ペ': 'ﾍﾟ',
    'ポ': 'ﾎﾟ',
    'ヴ': 'ｳﾞ',
    'ヷ': 'ﾜﾞ',
    'ヺ': 'ｦﾞ',
    'ア': 'ｱ',
    'イ': 'ｲ',
    'ウ': 'ｳ',
    'エ': 'ｴ',
    'オ': 'ｵ',
    'カ': 'ｶ',
    'キ': 'ｷ',
    'ク': 'ｸ',
    'ケ': 'ｹ',
    'コ': 'ｺ',
    'サ': 'ｻ',
    'シ': 'ｼ',
    'ス': 'ｽ',
    'セ': 'ｾ',
    'ソ': 'ｿ',
    'タ': 'ﾀ',
    'チ': 'ﾁ',
    'ツ': 'ﾂ',
    'テ': 'ﾃ',
    'ト': 'ﾄ',
    'ナ': 'ﾅ',
    'ニ': 'ﾆ',
    'ヌ': 'ﾇ',
    'ネ': 'ﾈ',
    'ノ': 'ﾉ',
    'ハ': 'ﾊ',
    'ヒ': 'ﾋ',
    'フ': 'ﾌ',
    'ヘ': 'ﾍ',
    'ホ': 'ﾎ',
    'マ': 'ﾏ',
    'ミ': 'ﾐ',
    'ム': 'ﾑ',
    'メ': 'ﾒ',
    'モ': 'ﾓ',
    'ヤ': 'ﾔ',
    'ユ': 'ﾕ',
    'ヨ': 'ﾖ',
    'ラ': 'ﾗ',
    'リ': 'ﾘ',
    'ル': 'ﾙ',
    'レ': 'ﾚ',
    'ロ': 'ﾛ',
    'ワ': 'ﾜ',
    'ヲ': 'ｦ',
    'ン': 'ﾝ',
    'ァ': 'ｧ',
    'ィ': 'ｨ',
    'ゥ': 'ｩ',
    'ェ': 'ｪ',
    'ォ': 'ｫ',
    'ッ': 'ｯ',
    'ャ': 'ｬ',
    'ュ': 'ｭ',
    'ョ': 'ｮ',
    '。': '｡',
    '、': '､',
    'ー': 'ｰ',
    '「': '｢',
    '」': '｣',
    '・': '･',
};

/**
 * Convert full-width character string to half-width character string
 * @param str
 * @return half-width character
 */
const toHalfSizeCharacters = (str) => {
    const reg = new RegExp('(' + Object.keys(halfKanaMap).join('|') + ')', 'g');

    return str
        .replace(reg, (match) => halfKanaMap[match])
        .replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
        .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
        .replace(/[”“″〝〟＂]/g, '\"')
        .replace(/[’‘´′＇]/g, '\'')
        .replace(/[‐－―]/g, '-')
        .replace(/[～〜]/g, '~')
        .replace(/゛/g, 'ﾞ')
        .replace(/゜/g, 'ﾟ')
        .replace(/　/g, ' ')
        .replace(/￥/g, '\\')
        .replace(
            /[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g,
            (s) => String.fromCharCode(s.charCodeAt(0) - 65248)
        );
}

/**
 * Convert half-width character string to full-width character string
 * @param str
 * @return full-width character string
 */
const toFullSizeCharacters = (str) => {
    const fullKanaMap = invert(halfKanaMap);
    const reg = new RegExp('(' + Object.keys(fullKanaMap).join('|') + ')', 'g');

    return str
        .replace(reg, (match) => fullKanaMap[match])
        .replace(/[A-Za-z]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 65248))
        .replace(/[0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 65248))
        .replace(/\"/g, '”')
        .replace(/\'/g, '’')
        .replace(/~/g, '～')
        .replace(/ﾞ/g, '゛')
        .replace(/ﾟ/g, '゜')
        .replace(/ /g, '　')
        .replace(/\\/g, '￥')
        .replace(
            /[! "# $ % & \' \( \) \* \+ , \- \. \/ : ; < = > \? @ \[ \\ \] \^ _ ` \{ \ \| \} ]/g,
            (s) => String.fromCharCode(s.charCodeAt(0) + 65248)
        );
}


export {toHalfSizeCharacters, toFullSizeCharacters}
