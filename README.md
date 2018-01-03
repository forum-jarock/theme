# Motyw forum.jarock.pl (v1.3.8)
Oficjalne repozytorium motywu na https://forum.jarock.pl

![Travis Status](https://api.travis-ci.org/forum-jarock/theme.svg?branch=master)
# Po co?
Repozytorium powstało po to, aby chętni użytkownicy mogli dodać bezpośrednio coś od siebie
# Jak korzystać?
1. Zainstaluj [Node.js](https://nodejs.org/) w wersji 8.x.x LTS wraz z NPM w wersji 5.x.x
2. Sforkuj i sklonuj to repozytorium na swój komputer ([poradnik](https://help.github.com/articles/fork-a-repo/))
3. Przejdź do katalogu, gdzie zapisałeś tego git'a
4. Otwórz wiersz poleceń i wpisz ``npm install``, aby zainstalować zależności
5. Pisz, ``git push``
6. ???
7. Profit

Pliki źródłowe znajdują się w folderze ``sass``, a głównym plikiem jest
``sass/index.sass``, który importuje pozostałe pliki

Wszelkie modyfikacje należy umieścić w odpowiednim pliku, a jeśli takowy nie istnieje,
to należy utworzyć nowy.

Polecenia:
* ``npm run build`` - kompiluje pliki źródłowe do ``dist/custom.css``
* ``npm run build-watch`` <sup>[1]</sup> - kompiluje pliki źródłowe po każdej modyfikacji

[1] - z racji tego, że do kompilacji używany jest ``webpack``, to konieczne jest skompilowanie
także pliku ``index.js``. Różnica pomiędzy poleceniami ``build`` a ``build-watch``
polega na tym, że to pierwsze usuwa plik ``index.js`` z folderu wynikowego, a to drugie nie.
Plik ``dist/index.js`` jest zupełnie niepotrzebny i można go usunąć.
