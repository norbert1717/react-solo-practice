# react-solo-practice

új repó, tetszőleges névvel
react telepítése az általad választott módszerrel (create-react-app / vite)
felesleges fájlok törlése a starter kódból
lefetchelni a https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1 URL-t, a megkapott értéket  (array) kimenteni egy state-be
amíg nem jön meg az adat, addig a weboldal tartalma legyen loading...
az adatot továbbítani egy <Page /> komponensnek
a <Page /> komponens tartalma egy <div className="page">, és az array-ből készített <Paragraph /> komponensek, átadva az array 1-1 elemét (string)
a <Paragraph /> komponens tartalma egy <div className="paragraph">, melyben van egy <h2> melynek tartalma az arrayből származó index + 1, és egy  <p> elem, amely tartalmazza a megkapott stringet
az elkészült oldalt formázzátok meg css-sel, legyenek egymás alatt, jól elkölönítve a paragrafusok, mindegyik paragrafus legyen egy dobozban, melynek bal felső sarkában ott lesz a sorszáma
általatok válaszott betűtípusokkal különítsétek el a szöveget és a sorszámot, legyetek kreatívak