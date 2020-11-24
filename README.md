# MiyaTude
MiyaTude Kısayol Fonksiyonlar

```js
<script src="https://raw.githubusercontent.com/StarTrekXD/miyatudehelper/main/miyahelper.js"></script>
```

```js
Link açar => linkaç('Link')
Kopyalar  => kopyala('Metin')
Değer bulur => value('id','value/text') // Default:Value \\ Text, innerHTML çeker. Value, değer çeker
Ayarlama yapar => ayarla('id','metin','value/text') // Default:Text \\ Text, innerHTML değiştirir. Value, değer değiştir.
Cift verileri ayırır => ayristir('ayristirilacak') // { miya: değer1, tude: değer2 }
Metni tekrarlar => tekraret('metin','tekrarmiktarı')
Soru Sorar => alertque('soru') // Çıktı olarak verdiğimiz cevabı verir
Inputlarda sadece harf girisine izin verir => .number // Kopyala / Yapıştır engellemez
```

# Bulanıklık İşlemleri

```js
Bulanıklık açar  => bulaniklikac()
Bulanıklık kapar => bulaniklikkapat()
```

# Metin İşlemleri 

```js
Açıkları ve işaretleri kaldırır => textscan('Metin')
Sadece işaretleri kaldırır      => whitelist('metin')
Türkçe karakterleri ingilizce karakterlere çevirir => trkarakter('metin')
```

# Renk İşlemleri 

```css
Turuncu yazi rengi   => .orange
Kirmizi yazi rengi   => .red
Mavi yazi rengi      => .blue
Mor yazi rengi       => .purple
Sari yazi rengi      => .yellow
Koyu sari yazi rengi => .darkyellow
Yesil yazi rengi     => .green
Pembe yazi rengi     => .pink
```

# Style İşlemleri

```css
Altcizgi atar           => .altcizgi
Bulaniklik efekti yapar => .bulanik
Standart kodlu buton    => .btnonly
Rengarenk yazi yapar    => #rengarenk
```

# Meraklısı için notlar 

```css
Rengarenk arkaplan keyframe => colums
Rengarenk yazı keyframe     => colors

Body icin otomatik eklenen stil kodlari => font-family:Arial ve background-size:cover
```
