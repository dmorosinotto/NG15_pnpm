# GUIDA PER CONFIGURARE PNPM SULLA MACCHINA

-   Installare PNPM su Windows [vedi guida](https://pnpm.io/installation#on-windows) da Powershell eseguire:

    > iwr https://get.pnpm.io/install.ps1 -useb | iex`

-   Settare PATH per includere PNPM e NODE installati sia per **Utente** che di **Sistema** (da _Impostazioni -> Modifica variabili d'ambiente_)

    1. Aggiungere _Nuova_ variabile ambiente **PNPM_HOME** --> `C:\Users\<nomeutente>\AppData\Local\pnpm`
    2. Modificare PATH per includere `%PNPM_HOME%` come **PRIMO PERCORSO IN ELENCO!!!**
    3. Verificare che da Terminale (CMD - Prompt Comandi) il comando `where pnpm` venga risolto nella path corretta.
        > where pnpm
        > C:\Users\<nomeutente>\AppData\Local\pnpm

-   Installare NODE tramite PNPM [vedi guida](https://pnpm.io/cli/env) consigliata LTS oppure sostituire lts con la `<versionenode>` voluta

    > pnpm env use --global lts

-   Per impostare la versione corrente di NODE `pnpm env use lts`
-   **SE NON FUNZIONA** Aggiungere LINK SIMBOLICO a `node.exe` nella cartella %PNPM_HOME% che punti all'exe nella sottocartella `nodejs\<vesionenode>` voluta

    > cd %PNPM_HOME%

    > mklink node.exe nodejs\<versionenode>\node.exe

-   Installare la _CLI di Angular_ (15+) globalmente tramite pnpm

    > pnpm add -g @angluar/cli

-   Impostare PNPM come _packageManager_ di default per Angular

    > pnpm exec ng config cli.packageManager pnpm

-   Assicurarsi che da **VSCode** funzioni tutto: aprire _Nuovo Terminale integrato_
    > pnpm exec ng version

stampi qualcosa tipo:

```
Angular CLI: 15.0.0
Node: 18.12.1
Package Manager: pnpm 7.16.1
OS: win32 x64

Angular:...
```

-   **SE NON FUNZIONA** Dal terminale di VSCode provare i comandi

    > SETX PNPM_HOME C:\Users\<nomeutente>\AppData\Local\pnpm

    > echo %PATH%
    > echo %PNPM_HOME%
    > per controllar che la PATH contenga la variabile PNPM_HOME come prima stringa e che la variabile sia risolta correttamente

    > where pnpm
    > where node
    > pnpm --version
    > node -v
    > controllare che i comandi eseguano correttamente (potrebbe esser necessario riavviare VSCode)

-   Settare i config di PNPM per eseguire script pre/post come su npm:
    > pnpm config set enable-pre-post-scripts=true
    > pnpm config set shell-emulator=true

## CREARE NUOVO PROGETTO Angular

-   Creare nuova applicazione Angular con il comando:
    > pnpm exec ng new --minimal --package-manager pnpm --skip-install --strict --prefix app

rispondere alle domande:

```
? What name would you like to use for the new workspace and initial project?    NOME_PROGETTO
? Would you like to add Angular routing?    YES
? Which stylesheet format would you like to use?    CSS
```

-   Linkare i pacchetti **naitec-XXX** dalla `00_Libs\Angular`
    configurare la cartella principale in cui sono state compilate le librerie condivise `naitec-XXX`

    > cd <LA_VOSTRA_CARTELLA_TFS>\00_Libs\NG_DIST

    > pnpm link --global

    E poi per poter usare la specifica libreria nel vs _NOME_PROGETTO_ fare [vedi guida](https://pnpm.io/cli/link):

    > cd <CARTELLA_NOME_PROGETTO>

    > pnpm link --global naitec-XXX

-   **SE SI HA CODICE** sorgente `NAITEC_NGLIB` modificare il `tsconfig.json` nella root del progetto inserendo questo nel nodo `"compilerOptions"`:

```json
"paths": {
            "@nglib/naitec-formly": ["../../NAITEC_NGLIB/projects/naitec-formly/src/public-api.ts"],
            "naitec-formly": ["../../00_Libs/NG_DIST/naitec-formly"],
            "@nglib/naitec-plugin": ["../../NAITEC_NGLIB/projects/naitec-plugin/src/public-api.ts"],
            "naitec-plugin": ["../../00_Libs/NG_DIST/naitec-plugin"],
            "@nglib/naitec-shared": ["../../NAITEC_NGLIB/projects/naitec-shared/src/public-api.ts"],
            "naitec-shared": ["../../00_Libs/NG_DIST/naitec-shared"]
        },
```

-   Creare file locale `.npmrc` nella root del NOME_PROGETTO con il seguente contenuto [vedi guida](https://pnpm.io/npmrc):

```
use-node-version=18.12.1
auto-install-peers=true
@naitec:registry=https://INTERNAL_VERDACCHIO_naitec.it/packages/npm/
```

-   Alla fine dopo aver configurato correttamente PNPM e i LINK installare i pacchetti nel NOME_PROGETTO
    > cd NOME_PROGETTO
    > pnpm install
