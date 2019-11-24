# Követelmény specifikáció

## 1.Vezetői összefoglaló

A Stacionárius Pont nevű csapat feladata, egy olyan alkalmazás fejlesztése, ami egy autókölcsönző forgalmát hivatott pozitív irányba terelni. Az alkalmazás feladati közé tartozik, az autókölcsönzőn belül elérhető autók, ki listázása, valamint ezek módosítása, új autók esetén a megjelenítendő választékhoz a hozzáadása, amennyiben egy autó a továbbiakban alkalmatlan arra, hogy kölcsönözhető legyen, ebben az esetben az autót el is lehessen távolítani a kínálatból. Az ügyfél jelenleg nem rendelkezik, semmilyen alkalmazással, ami esetleges módon megkönnyíthetné a munkáját. Füzetekbe, lapokon tartják számon az aktuális forgalmat, mivel emberi munkáról van szó az adminisztrálásban is így a hibák gyakoriak, a papír alapú rendszer lassú, nem megbízható. A megrendelő nem szeretne lemaradni a versenytársaihoz képest, ezért is szeretne egy alkalmazást, ahol a potenciális ügyfelek válogathatnak az autók közül, anélkül, hogy be kellene fáradniuk személyesen a cég telephelyére. Az implementációt React,NodeJS valamint MongoDB segítségével valósítjuk meg.

## 2.Jelenlegi helyzet leírása

Jelenleg az autókölcsönzőben azt, hogy ki, milyen autót, mikor, mennyi időre bérelt ki, csak papír alapon tekinthető meg. A papír alapú módszer, működik, de eléggé lassú, emberi hibából adódóan a félre értések esélye jelentős. A megírt lapok elveszhetnek, szennyeződhetnek, az emberi írás mások számára olvashatatlan lehet. Az emberek jelenleg csak úgy tudnak tájékozódni az elérhető autókról, azok típusáról, tulajdonságairók, ha személyesen bemennek a céghez. Ezt a plusz utat szeretné a megrendelő kikerülni, azzal, hogy online elérhetővé teszi azon autókat melyeket a cég kínál. A megrendelő szereti a modern dolgokat, többek között is ezért is gondolta úgy, hogy itt az ideje elkészíteni az alkalmazást.

## 3.Vágyálomrendszer

A megrendelő egy olyan alkalmazást szeretne ami, segítené az ő ügyfeleit abban, hogy elérjék az általuk kínált autókat anélkül, hogy az ügyfél befáradna a kölcsönzőbe, ezzel biztosítani a rugalmasságot, gyorsaságot. A szoftver rendelője a későbbiekben valószínűleg továb szeretné fejlesztettni a meglévő applikációt, jelenleg kísérleteznek vele, milyen mértékű pozitív visszajelzéseket kapnak, később ennek megfelelően a szoftvert valószínűleg bővíteni kell egyéb funkciókkal. Az elérhető autók listázása mellett e megrendelő szeretné, ha gyorsan, egyszerűen lehetne autókat hozzáadni a kínálathoz, abban az esetben, ha bővíteni szeretné a flottát, valamint a meglévő autókat tudja módosítani, szükség esetén eltávolítani a megjelenítendő autók közül, erre egy külön oldalt szeretne, amihez csak ő fér hozzá. Fontos számára, hogy egyértelműek legyenek a gombok, a mezők, mit, hova kell beírni, vagy éppen hova, melyik gombra kell kattintani, az egyszerű kezelhetőséget támogatja. Nem szeretne több munkanapot eltölteni azzal, hogy megtanulja használni a szoftvert. A szoftvernek készen kell állnia arra, hogy bővíthető legyen, egyéb funkciókkal, a későbbiekben elképzelhető, hogy a megrendelő szeretne regisztrálási lehetőséget, a rendszeresen tőle bérlőknek kedvezményeket nyújtani, ezeket nyilvántartani.

## 4.Kapcsolódó pályázatok, törvények, rendeletek, szabályok és szabványok

AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1169/2011/EU RENDELETE (2011. október 25.)  A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.)
	-2011.évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról (a továbbiakban: Infotv.)
	-2001.évi CVIII. törvény – az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről (főképp a 13/A. §-a)
	-2008.évi XLVII. törvény – a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról;
	-2008.évi XLVIII. törvény – a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól (különösen a 6.§-a)
	-2005.évi XC. törvény az elektronikus információszabadságról
	-2003.évi C. törvény az elektronikus hírközlésről (kifejezetten a 155.§-a)
	16/2011. sz. vélemény a viselkedésalapú online reklám bevált gyakorlatára vonatkozó EASA/IAB-ajánlásról


## 5.Jelenlegi üzleti folyamatok modellje
 
A jelenlegi rendszerben az megrendelő ügyfeleinek, elkell menniük az autókölcsönző telephelyére, ahol láthatja milyen autó kínálattal rendelkeznek, ezek közül tud választani egyet. Ezután egy ott dolgozóval pontosan fixálják az adatokat, hogy mikortól kell, mennyi időre, a bérlési folyamat első szakasza ezzel végbe is zajlott. A második szakasza a bérlésnek akkor kezdődik amikor érte megy az előre egyeztetett autóért, ilyenkor keresnie kell egy ott dolgozót, aki segít neki átadja a szükséges dolgokat, ezután használhatja az autót, majd végül a bérlés lejáratának napján visszahozza az autót.

## 6.Igényelt üzleti folyamatok modellje
 

A megrendelő ügyfele otthon, vagy akár a buszon ülve is képes információt szeretni arról, hogy milyen autók lelhetők fel az autó kölcsönzőben, ezeket telefonon vagy akár e-mail-en is letudja foglalni egy előre meghatározott időpontra. Az előre fixált időponton az ügyfél elfárad az autókölcsönzőbe, ahol az ott dolgozók már várni fogják. Elkísérik az általa kiválasztott autóhoz, majd átadják a szükséges dolgokat. Ezután az ügyfél használhatja az autót. A bérlési idő lejáratának napján visszahozza.

## 7.Követelmény lista
 


## 8.Fogalom szótár

React: Egy JavaScript könyvtár felhasználói felületek tervezéséhez, a Facebook készítette. Létre lehet hozni egy teljesen működőképes, dinamikus alkalmazást vele. Használatának előnyei közé tartozik, hogy rendkívül hatékony, és erőssége a SEO (search engine optimalization).A Reactet komponens alapú nézetek készítésére tervezték.

NodeJS: A Node.js (vagy másnéven Node) egy rendszer, melyben JavaScriptben írhatunk szerver oldali alkalmazásokat. Maga a rendszer C/C++-ban íródott, és egy esemény alapú I/O rendszert takar a Google V8 JavaScript motorja felett.

MongoDB: Egy nyílt forráskódú dokumentumorientált adatbázis szoftver, amelyet a 10gen fejleszt. A NoSQL adatbázisszerverek közé tartozik. A dokumentumokat JSON-szerű formátumban tárolja (BSON). A legnépszerűbb NoSQL adatbázis szoftver.

JSON: A JSON (JavaScript Object Notation) egy kis méretű, szöveg alapú szabvány, ember által olvasható adatcserére. A JavaScript szkript nyelvből alakult ki egyszerű adatstruktúrák és asszociatív tömbök reprezentálására (a JSON-ban objektum a nevük). A JavaScripttel való kapcsolata ellenére nyelvfüggetlen, több nyelvhez is van értelmezője. A JSON-t legtöbbször egy szerver és egy kliens számítógép közti adatátvitelre használják, az XML egyik alternatívájaként. Általánosságban strukturált adatok tárolására, továbbítására szolgál.

JavaScript: A JavaScript programozási nyelv egy objektumorientált, prototípus alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak. A JavaScript kód vagy a html fájlban vagy külön (jellemzően .js kiterjesztésű) szövegfájlban van. Ezek a fájlok tetszőleges szövegszerkesztő (nem dokumentumszerkesztő) programmal szerkeszthetőek.
