// LalF © 2020 MIT License
function textscan(e) {
    let temiz = e.replace(/<link/g, '😊').replace(/</g, '').replace(/>/g, '');
    for (var i = '0'; temiz.toLowerCase().includes('script'); i++) {
        temiz = temiz.replace(/script/g, '')
    }
    return whitelist(temiz)
};

function whitelist(e) {
    var str = e.toString();
    var Cevap = e.toString();
    var Uygun = true;
    const liste = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'ı', 'o', 'p', 'ğ', 'ü', 'i', 'ş', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'ö', 'ç', '.', ',', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-', '_', '!', "'", '^', '+', '%', '&', '/', '(', ')', '=', '?', '}', ']', '[', '{', '½', '#', '£', '>', '<', '$', '❤️'];
    var teyit = false;
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < liste.length; x++) {
            if (str[i].toLowerCase() == liste[x].toString() || str[i] == 'İ') {
                teyit = true;
                break
            }
        }
        if (teyit == false) {
            Cevap = Cevap.replace(str[i], '')
        }
        teyit = false
    }
    return Cevap
};

function trkarakter(e) {
    return e.replace(/Ö/g, 'O').replace(/Ü/g, 'U').replace(/Ğ/g, 'G').replace(/İ/g, 'I').replace(/ı/g, 'i')
};
console.log('[MiyaHelper] MiyaHelper aktif')

function linkaç(e) {
    window.open(e)
};

function kopyala(e) {
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = e;
    dummy.select();
    var success = document.execCommand('copy');
    document.body.removeChild(dummy);
    return success;
}

function value(n, a) {
    if (a == undefined || a == null || a.toLowerCase() == "value") {
        return document.getElementById(n).value
    } else {
        if (a.toLowerCase() == "text") {
            return document.getElementById(n).innerHTML || document.getElementById(n).innerText
        } else {
            return console.log("Kategori -Value,Text- Seçiniz!")
        }
    }
};

function ayarla(n, t, a) {
    if (a == undefined || a == null || a.toLowerCase() == "text") {
        document.getElementById(n).innerHTML = t
    } else {
        if (a.toLowerCase() == "value") {
            document.getElementById(n).value = t
        } else {
            console.log('Kategori -Value,Text- Seçiniz!')
        }
    }
};

function ayristir(t) {
    var d = t.split('miyatudeayristirici');
    let d1 = d[0];
    d.splice(d.indexOf(d1), 1);
    let d2 = d.join('');
    return {
        miya: d1,
        tude: d2
    };
};

function tekraret(txt, ab) {
    var a;
    let ttt = '';
    for (a = 0; a < ab; a++) {
        ttt += txt;
        if (a == ab - 1) {
            return ttt
        }
    }
};

function alertque(t) {
    if (t == undefined || t == null) {
        console.log("Soru Girilmedi")
    } else {
        var person = prompt(t);
        if (person != null || person != undefined) {
            return person
        } else {
            return ''
        }
    }
};

function attr(a, d, b) {
    if (d == "src") {
        document.getElementById(a).src = b
    } else {
        document.getElementById(a).setAttribute(d, b)
    }
}

function gizle(gizlenecek, girishiz, bekleme) {
    if (gizlenecek != undefined || gizlenecek != null) {
        var a = document.getElementById(gizlenecek).style;
        let girlan;
        let girisyap;
        let sp;
        if (girishiz != undefined || girishiz != null) {
            sp = girishiz.toString();
            if (sp[sp.length - 2] + sp[sp.length - 1] == 'ms') {
                girisyap = sp;
                girlan = girishiz.split('').reverse('').splice(2).reverse('').join('')
            } else {
                girisyap = sp + 'ms';
                girlan = sp
            }
        } else {
            girisyap = '450ms';
            girlan = 450
        }
        a.transition = girisyap;
        a.opacity = '1';
        setTimeout(function() {
            a.opacity = '0';
            setTimeout(function() {
                a.display = 'none'
            }, girlan)
        }, bekleme || 1);
        sp;
        girisyap;
        a
    }
}

function göster(gizlenecek, girishiz, bekleme) {
    if (gizlenecek != undefined || gizlenecek != null) {
        var a = document.getElementById(gizlenecek).style;
        let sp;
        let girisyap;
        if (girishiz != undefined || girishiz != null) {
            sp = girishiz.toString();
            if (sp[sp.length - 2] + sp[sp.length - 1] == 'ms') {
                girisyap = sp
            } else {
                girisyap = sp + 'ms'
            }
        } else {
            girisyap = '450ms'
        }
        a.transition = girisyap;
        a.opacity = '0';
        setTimeout(function() {
            a.display = 'block';
            setTimeout(function() {
                a.opacity = '1'
            }, 70)
        }, bekleme || 1);
        sp;
        girisyap;
        a
    }
}

function linkdata(d) {
    let p = new URLSearchParams(location.search);
    if (p.get(d) == "" || p.get(d) == undefined || p.get(d) == null) {
        return ''
    } else {
        return p.get(d)
    }
}


function appender(n, i) {
    if (i != undefined || i != null) {
        document.getElementById(i).appendChild(n)
    } else {
        if (document.head) {
            document.head.appendChild(n)
        } else {
            if (document.body) {
                document.body.appendChild(n)
            } else {
                alert("Please create head or body element.")
            }
        }
    }
}
if (document.getElementById('number')) {
    document.getElementById('number').onkeypress = function(e) {
        return e.keyCode >= 48 && e.keyCode <= 57
    };
    document.getElementById("number").autocomplete = 'off';
}

/*["orange","red","cyan","purple","yellow","darkyellow","green","blue","pink"].forEach(ua=>{let ren=ua=="orange"?'#ec7e13':ua=="red"?"red":ua=="blue"?'#5353ff':ua=="green"?'#2ab40f':ua=="purple"?'blueviolet':ua=="yellow"?'#e1a419':ua=="cyan"?'#2ab4b4':ua=="pink"?'mediumvioletred':ua=="darkyellow"?'#8f7a03':'#fff';for(var i=0,len=document.getElementsByClassName(ua).length|0;i<len;i=i+1|0){document.getElementsByClassName(ua)[i].style.color=ren;}});*/

var s = document.createElement('style');
s.type = 'text/css';
s.innerText = '.altçizgi,.altcizgi{text-decoration: underline}.bold{font-weight:bold}.koseli1,.koseli{border-radius:5px}.koseli2{border-radius:7px}.koseli3{border-radius:10px}.koseli4{border-radius:13px}.koseli5{border-radius:17px}.white{color:#fff}.black{color:#000}.bgblack{background-color:#000}.orange{color:#ec7e13}.blue{color:#5353ff}.cyan{color:#2ab4b4}.purple{color:#8a2be2}.yellow{color:#e1a419}.darkyellow{color:#8f7a03}.green{color:#2ab40f}.red{color:red}.pink{color:#c71585}.bgorange{background-color:#ec7e13}.bgblue{background-color:#5353ff}.bgcyan{background-color:#2ab4b4}.bgpurple{background-color:#8a2be2}.bgyellow{background-color:#e1a419}.bgdarkyellow{background-color:#8f7a03}.bggreen{background-color:#2ab40f}.bgred{background-color:red}.bgpink{background-color:#c71585}.cizgi,.çizgi{animation:colums 11s infinite linear;height:2px}.input{vertical-align:middle;outline:0!important;box-shadow:none!important;height:20px;padding:6px 10px;font-size:12px;line-height:1.5;border-radius:3px;background-color:#fff;border:1px solid #c2cad8;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;color:#555;background-image:none;border-radius:4px}body{font-family:Arial;background-size:cover}.bulanik{filter:blur(4px);-webkit-filter:blur(4px)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.btnonly{background-color:#034b8f;border:none;color:#fff;padding:16px 32px;text-align:center;font-size:16px;opacity:1;border-radius:3px;cursor:pointer;overflow:hidden;outline:none;letter-spacing:.2em;box-shadow:1px 2px 13px #048f7c;transition:450ms}.btnonly:hover{background-color:#0668c4}#rengarenk{animation:colors 11s infinite linear;font-size:30px}@keyframes colors{0%{color:hsl(0,100%,40%)}16.667%{color:hsl(60,100%,40%)}33.333%{color:hsl(120,100%,40%)}50%{color:hsl(180,100%,40%)}66.667%{color:hsl(240,100%,40%)}83.333%{color:hsl(300,100%,40%)}100%{color:hsl(360,100%,40%)}}@keyframes colums{0%{background-color:hsl(0,80%,15%)}16.667%{background-color:hsl(60,80%,15%)}33.333%{background-color:hsl(120,80%,15%)}50%{background-color:hsl(180,80%,15%)}66.667%{background-color:hsl(240,80%,15%)}83.333%{background-color:hsl(300,80%,15%)}100%{background-color:hsl(360,80%,15%)}}#loader{margin-top:70px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #fff;border-right:16px solid #3577da;border-bottom:16px solid #fff;border-left:16px solid #3577da;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
appender(s);

function bulaniklikac() {
    if (document.getElementById('bulaniklik')) {
        document.getElementById('bulaniklik').className = 'bulanik'
    } else {
        document.head.className = "bulanik";
        document.body.className = "bulanik"
    }
}

function bulaniklikkapat() {
    if (document.getElementById('bulaniklik')) {
        document.getElementById('bulaniklik').className = 'nobulanik'
    } else {
        document.head.className = "nobulanik";
        document.body.className = "nobulanik"
    }
}
