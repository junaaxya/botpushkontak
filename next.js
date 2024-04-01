const _0x1c8527 = _0x20f4;
(function(_0x50ae3, _0x3d1a48) {
    const _0x521950 = _0x20f4,
        _0x2088e6 = _0x50ae3();
    while (!![]) {
        try {
            const _0x12457a = parseInt(_0x521950(0x11a)) / 0x1 * (-parseInt(_0x521950(0x10f)) / 0x2) + -parseInt(_0x521950(0x13d)) / 0x3 + -parseInt(_0x521950(0x12e)) / 0x4 + -parseInt(_0x521950(0x185)) / 0x5 * (parseInt(_0x521950(0x15f)) / 0x6) + -parseInt(_0x521950(0x12d)) / 0x7 * (parseInt(_0x521950(0x186)) / 0x8) + parseInt(_0x521950(0x120)) / 0x9 + -parseInt(_0x521950(0x11f)) / 0xa * (-parseInt(_0x521950(0x167)) / 0xb);
            if (_0x12457a === _0x3d1a48) break;
            else _0x2088e6['push'](_0x2088e6['shift']());
        } catch (_0x1cdb5) {
            _0x2088e6['push'](_0x2088e6['shift']());
        }
    }
}(_0x48e8, 0x24f6c));
const {
    modul
} = require(_0x1c8527(0x14c)), {
    baileys,
    boom,
    chalk,
    fs,
    figlet,
    FileType,
    pino,
    process,
    PhoneNumber
} = modul, {
    Boom
} = boom, {
    default: mtsConnect,
    useSingleFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto
} = baileys, {
    color,
    bgcolor
} = require('./lib/color'), {
    uncache,
    nocache
} = require(_0x1c8527(0x174)), {
    state,
    saveState
} = useSingleFileAuthState('./session.json'), {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require(_0x1c8527(0x16d)), {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep
} = require('./lib/myfunc'), {
    groupResponse_Welcome,
    groupResponse_Remove,
    groupResponse_Promote,
    groupResponse_Demote
} = require(_0x1c8527(0x17e)), store = makeInMemoryStore({
    'logger': pino()[_0x1c8527(0x14b)]({
        'level': _0x1c8527(0x14a),
        'stream': _0x1c8527(0x159)
    })
});
require(_0x1c8527(0x118)), nocache(_0x1c8527(0x135), _0x389350 => console[_0x1c8527(0x13f)](color(_0x1c8527(0x15d), 'cyan'), color('\x27' + _0x389350 + '\x27', 'green'), _0x1c8527(0x119))), require('./next.js'), nocache(_0x1c8527(0x14d), _0x583d2b => console[_0x1c8527(0x13f)](color(_0x1c8527(0x15d), 'cyan'), color('\x27' + _0x583d2b + '\x27', _0x1c8527(0x155)), 'File\x20Is\x20Update!!!'));
async function mtsBot() {
    const _0x43c038 = _0x1c8527,
        {
            version: _0x4c1667,
            isLatest: _0x5d0f97
        } = await fetchLatestBaileysVersion(),
        _0x4582de = mtsConnect({
            'logger': pino({
                'level': _0x43c038(0x14a)
            }),
            'printQRInTerminal': !![],
            'browser': [_0x43c038(0x125), 'MTSstore', _0x43c038(0x112)],
            'auth': state,
            'version': _0x4c1667
        });
    return store['bind'](_0x4582de['ev']), console[_0x43c038(0x13f)](color(figlet['textSync'](_0x43c038(0x125), {
        'font': _0x43c038(0x180),
        'horizontalLayout': _0x43c038(0x140),
        'vertivalLayout': 'default',
        'whitespaceBreak': ![]
    }), _0x43c038(0x116))), console[_0x43c038(0x13f)](color(figlet[_0x43c038(0x13b)](_0x43c038(0x16e), {
        'font': _0x43c038(0x180),
        'horizontalLayout': 'default',
        'vertivalLayout': _0x43c038(0x140),
        'whitespaceBreak': ![]
    }), _0x43c038(0x181))), console[_0x43c038(0x13f)](color(_0x43c038(0x110), _0x43c038(0x187))), _0x4582de['ev']['on'](_0x43c038(0x16f), async _0x2f24bb => {
        const _0x1cea25 = _0x43c038;
        try {
            kay = _0x2f24bb[_0x1cea25(0x123)][0x0];
            if (!kay['message']) return;
            kay[_0x1cea25(0x10d)] = Object[_0x1cea25(0x17a)](kay[_0x1cea25(0x10d)])[0x0] === _0x1cea25(0x16c) ? kay[_0x1cea25(0x10d)][_0x1cea25(0x16c)]['message'] : kay['message'];
            if (kay[_0x1cea25(0x121)] && kay[_0x1cea25(0x121)][_0x1cea25(0x136)] === _0x1cea25(0x17d)) return;
            if (!_0x4582de[_0x1cea25(0x137)] && !kay[_0x1cea25(0x121)][_0x1cea25(0x113)] && _0x2f24bb[_0x1cea25(0x122)] === _0x1cea25(0x11b)) return;
            if (kay['key']['id']['startsWith'](_0x1cea25(0x131)) && kay[_0x1cea25(0x121)]['id'][_0x1cea25(0x146)] === 0x10) return;
            mts4you = smsg(_0x4582de, kay, store), require(_0x1cea25(0x13c))(_0x4582de, mts4you, _0x2f24bb, store);
        } catch (_0x43f2ad) {
            console[_0x1cea25(0x13f)](_0x43f2ad);
        }
    }), _0x4582de['decodeJid'] = _0x23a725 => {
        const _0x56b87a = _0x43c038;
        if (!_0x23a725) return _0x23a725;
        if (/:\d+@/gi [_0x56b87a(0x17f)](_0x23a725)) {
            let _0x2b25d6 = jidDecode(_0x23a725) || {};
            return _0x2b25d6[_0x56b87a(0x134)] && _0x2b25d6[_0x56b87a(0x170)] && _0x2b25d6['user'] + '@' + _0x2b25d6[_0x56b87a(0x170)] || _0x23a725;
        } else return _0x23a725;
    }, _0x4582de['ev']['on'](_0x43c038(0x141), _0x3adc12 => {
        const _0xab2e2f = _0x43c038;
        for (let _0x495461 of _0x3adc12) {
            let _0x4ebfff = _0x4582de['decodeJid'](_0x495461['id']);
            if (store && store[_0xab2e2f(0x177)]) store[_0xab2e2f(0x177)][_0x4ebfff] = {
                'id': _0x4ebfff,
                'name': _0x495461[_0xab2e2f(0x11b)]
            };
        }
    }), _0x4582de[_0x43c038(0x114)] = (_0x148843, _0x370c2a = ![]) => {
        const _0x173fad = _0x43c038;
        id = _0x4582de['decodeJid'](_0x148843), _0x370c2a = _0x4582de[_0x173fad(0x128)] || _0x370c2a;
        let _0x2a8a12;
        if (id[_0x173fad(0x151)](_0x173fad(0x14e))) return new Promise(async _0x5edff1 => {
            const _0x21706f = _0x173fad;
            _0x2a8a12 = store[_0x21706f(0x177)][id] || {};
            if (!(_0x2a8a12[_0x21706f(0x184)] || _0x2a8a12[_0x21706f(0x15c)])) _0x2a8a12 = _0x4582de[_0x21706f(0x14f)](id) || {};
            _0x5edff1(_0x2a8a12[_0x21706f(0x184)] || _0x2a8a12['subject'] || PhoneNumber('+' + id[_0x21706f(0x176)](_0x21706f(0x16a), ''))[_0x21706f(0x148)](_0x21706f(0x183)));
        });
        else _0x2a8a12 = id === '0@s.whatsapp.net' ? {
            'id': id,
            'name': _0x173fad(0x133)
        } : id === _0x4582de[_0x173fad(0x13e)](_0x4582de[_0x173fad(0x134)]['id']) ? _0x4582de['user'] : store['contacts'][id] || {};
        return (_0x370c2a ? '' : _0x2a8a12['name']) || _0x2a8a12[_0x173fad(0x15c)] || _0x2a8a12[_0x173fad(0x115)] || PhoneNumber('+' + _0x148843[_0x173fad(0x176)](_0x173fad(0x16a), ''))[_0x173fad(0x148)]('international');
    }, _0x4582de[_0x43c038(0x166)] = (_0x45a121 = '') => {
        const _0x250095 = _0x43c038;
        return [..._0x45a121[_0x250095(0x12f)](/@([0-9]{5,16}|0)/g)][_0x250095(0x154)](_0x45cd6e => _0x45cd6e[0x1] + _0x250095(0x16a));
    }, _0x4582de[_0x43c038(0x117)] = async (_0x57f4d3, _0x290a3a, _0x3ccc54 = '', _0x18aff5 = {}) => {
        const _0x4cc8e3 = _0x43c038;
        let _0x5c691d = [];
        for (let _0x120a2e of _0x290a3a) {
            _0x5c691d[_0x4cc8e3(0x171)]({
                'displayName': await _0x4582de['getName'](_0x120a2e + _0x4cc8e3(0x16a)),
                'vcard': 'BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:' + await _0x4582de[_0x4cc8e3(0x114)](_0x120a2e + _0x4cc8e3(0x16a)) + _0x4cc8e3(0x158) + await _0x4582de['getName'](_0x120a2e + _0x4cc8e3(0x16a)) + '\x0a\x0aitem1.TEL;waid=' + _0x120a2e + ':' + _0x120a2e + _0x4cc8e3(0x143)
            });
        }
        _0x4582de[_0x4cc8e3(0x15e)](_0x57f4d3, {
            'contacts': {
                'displayName': _0x5c691d[_0x4cc8e3(0x146)] + _0x4cc8e3(0x178),
                'contacts': _0x5c691d
            },
            ..._0x18aff5
        }, {
            'quoted': _0x3ccc54
        });
    }, _0x4582de[_0x43c038(0x142)] = async (_0x27c7cf, _0x3931cc, _0x29317a = '', _0xa6468d = '', _0x35ad95) => {
        const _0x29d571 = _0x43c038;
        let _0x2f5b50 = Buffer[_0x29d571(0x15b)](_0x3931cc) ? _0x3931cc : /^data:.*?\/.*?;base64,/i ['test'](_0x3931cc) ? Buffer[_0x29d571(0x188)](_0x3931cc[_0x29d571(0x13a)] `,` [0x1], _0x29d571(0x157)) : /^https?:\/\// [_0x29d571(0x17f)](_0x3931cc) ? await await getBuffer(_0x3931cc) : fs[_0x29d571(0x11c)](_0x3931cc) ? fs[_0x29d571(0x182)](_0x3931cc) : Buffer['alloc'](0x0);
        return await _0x4582de['sendMessage'](_0x27c7cf, {
            'image': _0x2f5b50,
            'caption': _0x29317a,
            ..._0x35ad95
        }, {
            'quoted': _0xa6468d
        });
    }, _0x4582de[_0x43c038(0x153)] = async (_0x44c69a, _0xfb98df, _0x2497df, _0x13eee8 = {}) => {
        const _0x4287d1 = _0x43c038;
        let _0x1235aa = Buffer[_0x4287d1(0x15b)](_0xfb98df) ? _0xfb98df : /^data:.*?\/.*?;base64,/i [_0x4287d1(0x17f)](_0xfb98df) ? Buffer[_0x4287d1(0x188)](_0xfb98df['split'] `,` [0x1], _0x4287d1(0x157)) : /^https?:\/\// [_0x4287d1(0x17f)](_0xfb98df) ? await await getBuffer(_0xfb98df) : fs[_0x4287d1(0x11c)](_0xfb98df) ? fs[_0x4287d1(0x182)](_0xfb98df) : Buffer[_0x4287d1(0x109)](0x0),
            _0x2eb685;
        return _0x13eee8 && (_0x13eee8['packname'] || _0x13eee8[_0x4287d1(0x161)]) ? _0x2eb685 = await writeExifImg(_0x1235aa, _0x13eee8) : _0x2eb685 = await imageToWebp(_0x1235aa), await _0x4582de['sendMessage'](_0x44c69a, {
            'sticker': {
                'url': _0x2eb685
            },
            ..._0x13eee8
        }, {
            'quoted': _0x2497df
        }), _0x2eb685;
    }, _0x4582de['sendVideoAsSticker'] = async (_0x300431, _0x465322, _0x117314, _0xea3f6e = {}) => {
        const _0x5c2ea2 = _0x43c038;
        let _0x33a3f8 = Buffer[_0x5c2ea2(0x15b)](_0x465322) ? _0x465322 : /^data:.*?\/.*?;base64,/i [_0x5c2ea2(0x17f)](_0x465322) ? Buffer[_0x5c2ea2(0x188)](_0x465322[_0x5c2ea2(0x13a)] `,` [0x1], _0x5c2ea2(0x157)) : /^https?:\/\// ['test'](_0x465322) ? await await getBuffer(_0x465322) : fs[_0x5c2ea2(0x11c)](_0x465322) ? fs['readFileSync'](_0x465322) : Buffer[_0x5c2ea2(0x109)](0x0),
            _0x364aaa;
        return _0xea3f6e && (_0xea3f6e[_0x5c2ea2(0x129)] || _0xea3f6e[_0x5c2ea2(0x161)]) ? _0x364aaa = await writeExifVid(_0x33a3f8, _0xea3f6e) : _0x364aaa = await videoToWebp(_0x33a3f8), await _0x4582de[_0x5c2ea2(0x15e)](_0x300431, {
            'sticker': {
                'url': _0x364aaa
            },
            ..._0xea3f6e
        }, {
            'quoted': _0x117314
        }), _0x364aaa;
    }, _0x4582de[_0x43c038(0x108)] = async (_0x500856, _0x482c74, _0xd43179 = ![], _0x15ef93 = {}) => {
        const _0x4e82c8 = _0x43c038;
        let _0x47dcf5;
        _0x15ef93[_0x4e82c8(0x145)] && (_0x482c74[_0x4e82c8(0x10d)] = _0x482c74[_0x4e82c8(0x10d)] && _0x482c74['message'][_0x4e82c8(0x16c)] && _0x482c74[_0x4e82c8(0x10d)][_0x4e82c8(0x16c)][_0x4e82c8(0x10d)] ? _0x482c74[_0x4e82c8(0x10d)][_0x4e82c8(0x16c)][_0x4e82c8(0x10d)] : _0x482c74[_0x4e82c8(0x10d)] || undefined, _0x47dcf5 = Object[_0x4e82c8(0x17a)](_0x482c74[_0x4e82c8(0x10d)][_0x4e82c8(0x162)][_0x4e82c8(0x10d)])[0x0], delete(_0x482c74[_0x4e82c8(0x10d)] && _0x482c74['message'][_0x4e82c8(0x111)] ? _0x482c74['message'][_0x4e82c8(0x111)] : _0x482c74[_0x4e82c8(0x10d)] || undefined), delete _0x482c74[_0x4e82c8(0x10d)][_0x4e82c8(0x162)][_0x4e82c8(0x10d)][_0x47dcf5]['viewOnce'], _0x482c74['message'] = {
            ..._0x482c74['message'][_0x4e82c8(0x162)][_0x4e82c8(0x10d)]
        });
        let _0x1871aa = Object[_0x4e82c8(0x17a)](_0x482c74[_0x4e82c8(0x10d)])[0x0],
            _0x42f483 = await generateForwardMessageContent(_0x482c74, _0xd43179),
            _0x641a44 = Object[_0x4e82c8(0x17a)](_0x42f483)[0x0],
            _0x1291fd = {};
        if (_0x1871aa != _0x4e82c8(0x169)) _0x1291fd = _0x482c74[_0x4e82c8(0x10d)][_0x1871aa][_0x4e82c8(0x12a)];
        _0x42f483[_0x641a44]['contextInfo'] = {
            ..._0x1291fd,
            ..._0x42f483[_0x641a44][_0x4e82c8(0x12a)]
        };
        const _0x488aec = await generateWAMessageFromContent(_0x500856, _0x42f483, _0x15ef93 ? {
            ..._0x42f483[_0x641a44],
            ..._0x15ef93,
            ..._0x15ef93[_0x4e82c8(0x12a)] ? {
                'contextInfo': {
                    ..._0x42f483[_0x641a44]['contextInfo'],
                    ..._0x15ef93[_0x4e82c8(0x12a)]
                }
            } : {}
        } : {});
        return await _0x4582de['relayMessage'](_0x500856, _0x488aec['message'], {
            'messageId': _0x488aec['key']['id']
        }), _0x488aec;
    }, _0x4582de[_0x43c038(0x10e)] = async (_0x52b7a3, _0x427bf9, _0xd3ffa6 = !![]) => {
        const _0xf3aa59 = _0x43c038;
        let _0x2bb0ed = _0x52b7a3['msg'] ? _0x52b7a3[_0xf3aa59(0x11d)] : _0x52b7a3,
            _0x399aeb = (_0x52b7a3[_0xf3aa59(0x11d)] || _0x52b7a3)[_0xf3aa59(0x10a)] || '',
            _0x1cff51 = _0x52b7a3[_0xf3aa59(0x12c)] ? _0x52b7a3[_0xf3aa59(0x12c)][_0xf3aa59(0x176)](/Message/gi, '') : _0x399aeb['split']('/')[0x0];
        const _0x5d29e9 = await downloadContentFromMessage(_0x2bb0ed, _0x1cff51);
        let _0x4de82e = Buffer['from']([]);
        for await (const _0xd10e8c of _0x5d29e9) {
            _0x4de82e = Buffer[_0xf3aa59(0x150)]([_0x4de82e, _0xd10e8c]);
        }
        let _0x1b1b5f = await FileType[_0xf3aa59(0x168)](_0x4de82e);
        return trueFileName = _0xd3ffa6 ? _0x427bf9 + '.' + _0x1b1b5f[_0xf3aa59(0x149)] : _0x427bf9, await fs[_0xf3aa59(0x126)](trueFileName, _0x4de82e), trueFileName;
    }, _0x4582de[_0x43c038(0x172)] = async _0x2ddc25 => {
        const _0x48f197 = _0x43c038;
        let _0x1227d1 = (_0x2ddc25[_0x48f197(0x11d)] || _0x2ddc25)[_0x48f197(0x10a)] || '',
            _0x3e9c70 = _0x2ddc25['mtype'] ? _0x2ddc25['mtype'][_0x48f197(0x176)](/Message/gi, '') : _0x1227d1[_0x48f197(0x13a)]('/')[0x0];
        const _0x1e0535 = await downloadContentFromMessage(_0x2ddc25, _0x3e9c70);
        let _0x4c19fb = Buffer[_0x48f197(0x188)]([]);
        for await (const _0x1b2ae2 of _0x1e0535) {
            _0x4c19fb = Buffer[_0x48f197(0x150)]([_0x4c19fb, _0x1b2ae2]);
        }
        return _0x4c19fb;
    }, _0x4582de[_0x43c038(0x139)] = (_0xd382f4, _0x157fcb, _0x37a386 = '', _0x457a72) => _0x4582de[_0x43c038(0x15e)](_0xd382f4, {
        'text': _0x157fcb,
        ..._0x457a72
    }, {
        'quoted': _0x37a386
    }), _0x4582de[_0x43c038(0x137)] = !![], _0x4582de[_0x43c038(0x179)] = _0x39b195 => smsg(_0x4582de, _0x39b195, store), _0x4582de['ev']['on']('connection.update', async _0xd4f045 => {
        const _0x5bb50a = _0x43c038,
            {
                connection: _0x5e831e,
                lastDisconnect: _0x5115ef
            } = _0xd4f045;
        if (_0x5e831e === _0x5bb50a(0x10c)) {
            let _0x1275fd = new Boom(_0x5115ef?.[_0x5bb50a(0x12b)])?.['output'][_0x5bb50a(0x156)];
            if (_0x1275fd === DisconnectReason[_0x5bb50a(0x165)]) console[_0x5bb50a(0x13f)](_0x5bb50a(0x147)), _0x4582de[_0x5bb50a(0x127)]();
            else {
                if (_0x1275fd === DisconnectReason['connectionClosed']) console[_0x5bb50a(0x13f)](_0x5bb50a(0x130)), mtsBot();
                else {
                    if (_0x1275fd === DisconnectReason[_0x5bb50a(0x175)]) console[_0x5bb50a(0x13f)](_0x5bb50a(0x16b)), mtsBot();
                    else {
                        if (_0x1275fd === DisconnectReason[_0x5bb50a(0x124)]) console[_0x5bb50a(0x13f)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'), _0x4582de['logout']();
                        else {
                            if (_0x1275fd === DisconnectReason[_0x5bb50a(0x10b)]) console[_0x5bb50a(0x13f)](_0x5bb50a(0x163)), _0x4582de[_0x5bb50a(0x127)]();
                            else {
                                if (_0x1275fd === DisconnectReason[_0x5bb50a(0x138)]) console[_0x5bb50a(0x13f)]('Restart\x20Required,\x20Restarting...'), mtsBot();
                                else {
                                    if (_0x1275fd === DisconnectReason[_0x5bb50a(0x17b)]) console[_0x5bb50a(0x13f)](_0x5bb50a(0x173)), mtsBot();
                                    else _0x4582de[_0x5bb50a(0x144)](_0x5bb50a(0x164) + _0x1275fd + '|' + _0x5e831e);
                                }
                            }
                        }
                    }
                }
            }
        }
        console[_0x5bb50a(0x13f)](_0x5bb50a(0x160), _0xd4f045);
    }), _0x4582de['sendButtonText'] = (_0x213a29, _0x36c2b8 = [], _0x26bd18, _0x10fb52, _0x49fdf4 = '', _0x59efa2 = {}) => {
        let _0x404a03 = {
            'text': _0x26bd18,
            'footer': _0x10fb52,
            'buttons': _0x36c2b8,
            'headerType': 0x2,
            ..._0x59efa2
        };
        _0x4582de['sendMessage'](_0x213a29, _0x404a03, {
            'quoted': _0x49fdf4,
            ..._0x59efa2
        });
    }, _0x4582de[_0x43c038(0x17c)] = async (_0x5df8b2, _0x1aac16 = '', _0x245b0b = '', _0x3f5f60, _0x1ed029 = [], _0x31ba52 = {}) => {
        const _0x1b528f = _0x43c038;
        var _0xc9c3dc = generateWAMessageFromContent(_0x5df8b2, proto[_0x1b528f(0x152)]['fromObject']({
            'templateMessage': {
                'hydratedTemplate': {
                    'hydratedContentText': _0x1aac16,
                    'locationMessage': {
                        'jpegThumbnail': _0x3f5f60
                    },
                    'hydratedFooterText': _0x245b0b,
                    'hydratedButtons': _0x1ed029
                }
            }
        }), _0x31ba52);
        _0x4582de[_0x1b528f(0x132)](_0x5df8b2, _0xc9c3dc[_0x1b528f(0x10d)], {
            'messageId': _0xc9c3dc[_0x1b528f(0x121)]['id']
        });
    }, _0x4582de['ev']['on'](_0x43c038(0x11e), async _0x22a238 => {
        const _0x4268fc = _0x43c038;
        groupResponse_Demote(_0x4582de, _0x22a238), groupResponse_Promote(_0x4582de, _0x22a238), groupResponse_Welcome(_0x4582de, _0x22a238), groupResponse_Remove(_0x4582de, _0x22a238), console[_0x4268fc(0x13f)](_0x22a238);
    }), _0x4582de['sendList'] = async (_0x4638c7, _0x28704c = '', _0x27a56e = '', _0x1ad0a6 = '', _0x563fcb = '', _0x1c4c86 = [], _0x19becd = {}) => {
        const _0x5c57f0 = _0x43c038;
        var _0xd1999b = generateWAMessageFromContent(_0x4638c7, proto[_0x5c57f0(0x152)][_0x5c57f0(0x15a)]({
            'listMessage': {
                'title': _0x28704c,
                'description': _0x27a56e,
                'buttonText': _0x1ad0a6,
                'footerText': _0x563fcb,
                'listType': '\x20\x20SELECT\x20\x20',
                'sections': _0x1c4c86,
                'listType': 0x1
            }
        }), _0x19becd);
        _0x4582de[_0x5c57f0(0x132)](_0x4638c7, _0xd1999b[_0x5c57f0(0x10d)], {
            'messageId': _0xd1999b[_0x5c57f0(0x121)]['id']
        });
    }, _0x4582de['ev']['on']('creds.update', saveState), _0x4582de;
}

function _0x48e8() {
    const _0x53e5b9 = ['sendContact', './mts.js', 'File\x20Is\x20Update!!!', '17XjNlyC', 'notify', 'existsSync', 'msg', 'group-participants.update', '20YJCVyv', '476577QXqPTD', 'key', 'type', 'messages', 'connectionReplaced', 'MTS4YOU', 'writeFileSync', 'logout', 'withoutContact', 'packname', 'contextInfo', 'error', 'mtype', '462gEvchc', '709464SBQPan', 'matchAll', 'Connection\x20closed,\x20reconnecting....', 'BAE5', 'relayMessage', 'WhatsApp', 'user', '../mts.js', 'remoteJid', 'public', 'restartRequired', 'sendText', 'split', 'textSync', './mts', '899316eoljFS', 'decodeJid', 'log', 'default', 'contacts.update', 'sendImage', '\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD', 'end', 'readViewOnce', 'length', 'Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again', 'getNumber', 'ext', 'silent', 'child', './module', '../next.js', '@g.us', 'groupMetadata', 'concat', 'endsWith', 'Message', 'sendImageAsSticker', 'map', 'green', 'statusCode', 'base64', '\x0a\x0aFN:', 'store', 'fromObject', 'isBuffer', 'subject', '[\x20UPDATE\x20]', 'sendMessage', '60906npnHvY', 'Connected...', 'author', 'viewOnceMessage', 'Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.', 'Unknown\x20DisconnectReason:\x20', 'badSession', 'parseMention', '4922225HJrCyp', 'fromBuffer', 'conversation', '@s.whatsapp.net', 'Connection\x20Lost\x20from\x20Server,\x20reconnecting...', 'ephemeralMessage', './lib/exif', 'CHANEL', 'messages.upsert', 'server', 'push', 'downloadMediaMessage', 'Connection\x20TimedOut,\x20Reconnecting...', './lib/loader', 'connectionLost', 'replace', 'contacts', '\x20Kontak', 'serializeM', 'keys', 'timedOut', 'send5ButLoc', 'status@broadcast', './lib/group.js', 'test', 'Standard', 'white', 'readFileSync', 'international', 'name', '15cDaQss', '5672SLueAe', 'yellow', 'from', 'copyNForward', 'alloc', 'mimetype', 'loggedOut', 'close', 'message', 'downloadAndSaveMediaMessage', '28484DZclUj', 'ㅤInfo\x20Script\x20Bot\x0aㅤ➺\x20Baileys\x20:\x20Multi\x20Device\x0aㅤ➺\x20Nama\x20Script\x20:\x20Push\x20Kontak\x20V7\x0a\x0aㅤInfo\x20Creator\x0aㅤ➺\x20My\x20YouTube\x20:\x20MTS4YOU\x20CHANEL\x0aㅤ➺\x20My\x20Instagram\x20:\x20@ig_mtsstore\x0aㅤ➺\x20My\x20WhatsApp\x20:\x20628989105685', 'ignore', '1.0.0', 'fromMe', 'getName', 'verifiedName', 'red'];
    _0x48e8 = function() {
        return _0x53e5b9;
    };
    return _0x48e8();
}

function _0x20f4(_0x5f4b02, _0x53ce5b) {
    const _0x48e833 = _0x48e8();
    return _0x20f4 = function(_0x20f47a, _0xbec309) {
        _0x20f47a = _0x20f47a - 0x108;
        let _0xa96e66 = _0x48e833[_0x20f47a];
        return _0xa96e66;
    }, _0x20f4(_0x5f4b02, _0x53ce5b);
}
mtsBot();