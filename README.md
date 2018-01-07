# Motyw forum.jarock.pl (v1.5.0)
Oficjalne repozytorium motywu na https://forum.jarock.pl

[![Build Status](https://travis-ci.org/forum-jarock/theme.svg?branch=master)](https://travis-ci.org/forum-jarock/theme)
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
* ``npm run build-watch`` - kompiluje pliki źródłowe po każdej modyfikacji
