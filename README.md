
<h1 align="center">
    <img src="logo.gif" alt="Logo" height="350">
    </br> </br>
    <b>GreenAssistant</b>
    </br>
</h1>
<h2>

## GreenAssistant

Der Chatbot "GreenAssistant" gibt praktische Tipps für einen nachhaltigeren Alltag und vermittelt dabei die spezifischen Nachhaltigkeitsziele Augsburgs. Mithilfe modernster KI-Technologien werden Nutzerfragen individuell und präzise beantwortet. Dieses innovative Open-Source-Projekt macht nachhaltiges Handeln für alle zugänglich.

## Referenzen

* [Projekt Website](https://showcase.informatik.tha.de/sose-2024/greenassistant)

## Open-Source Lizenz

- [LIZENZ DATEI](LICENSE)
- Wir freuen uns über die Nennung der Originalautoren beim Kopieren, Verwenden oder Umschreiben des Quellcodes.

## Feedback

- Kommentare, Fragen und allgemeines Feedback können gerne an folgende E-Mail-Adresse gesendet werden: anja.metzner@hs-augsburg.de

## Mitwirkende
- Bei dem Projekt handelte es sich initial um ein studiengangsübergreifendes Semesterprojekt an der Technischen Hochschule Augsburg.

### **Mitwirkende im Sommersemester 2024:**

- **Studenten/Studentinnen:** Marc Fischer, Manuel Hagen, Lukas Konietzka, Theresa Mayer, Dominik Wagner, Stephan Schorer, Kim Yen Pham, Markus Riffel, Lara Gerlach, Trang Nguyen

- **Beteiligte:** Büro f. Nachhaltigkeit der Stadt Augsburg<br>

- **Supervision:** Prof. Dr. Anja Metzner (Technische Hochschule Augsburg)<br>

Vielen Dank an alle Beteiligten!

## Ressourcenanforderungen fürs Hosting

Wir hatten am Projekttag den Chatbot in einer VM gehostet, die folgende Hardwarekonfiguration hatte:
 - CPU (8 Kerne)
 - GPU (16 GB VRAM)
 - RAM (32 GB)
 - Storage (256GB)

> **_Wichtig:_** Dies sind nur Richtwerte. Es gibt zahlreiche weitere Einflussfaktoren, welche die Performance
> beeinträchtigen könnten, was sich in einer langsameren Antwortzeit äußert.  

## Quickstart für Entwickler

#### 1. Tools installieren:
 - python → <https://www.python.org/downloads/>
 - node.js → <https://nodejs.org/en/download/>

#### 2. Repository klonen:

 ````
 git clone [http oder ssh]
 ````
 Wenn kein *git* installiert ist, dann hier einmal herunterladen und installieren: <https://git-scm.com/downloads>

#### 3. Backend initialisieren:
- Aufsetzen eines virtuellen Environments für Python (kein muss, aber macht Sinn): <https://pypi.org/project/virtualenv/>
- In den Ordner *backend* wechseln und alle packages installieren mit:
  ````
  cd backend
  pip install -r requirements.txt
  pip install TTS
  ````
  Mit diesem Befehl werden alle Packages installiert, die in dem File *requirements.txt* angegeben sind
  > **_Achtung:_** Das Paket TTS ist ganz bewusst nicht im requirements-File, da es ein sehr große Paket ist (10GB).
  Es muss deshalb separat mit dem *pip*-Befehl installiert werden. Für das Packet ist eine Installation von
  Visual Studio nötig. Hier einfach über den Installer das Tool für die Desktopentwicklung installieren und dann den
  *pip*-Befehl für das TSS-Paket ausführen.
  https://visualstudio.microsoft.com/de/downloads/
 
  Möchten sie alle Abhängigkeiten für ein Livegang installieren, so müssen Sie folgendes File installieren:
  ````
  cd backend
  pip install -r requirements_full_deployment.txt
  ````

- Die Datenbank migrieren mit:
  ````
  python manage.py migrate
  ````

#### 4. Frontend initialisieren:
- Dann in den Ordner *frontend* wechseln und alle Packages installieren mit:
  ````
  cd frontend
  npm install
  ````

## Deployment

- Frontend und Backend enthalten jeweils Konfiguration für die locale Entwicklung
- Möchten Sie die Webapplikation nur einsetzten, dann muss das eigene Umfeld und Hostingverfahren angepasst werden.
- passen Sie hierfür die folgenden beiden Dateien an.

 /frontend/src/types.ts
 ````
 const baseURL = 'https://greenassistant.ai.tha.de:7000'
 ````

 /backend/crud/settings.py
 ```` 
 DEBUG = False
 
 ALLOWED_HOSTS = [
    'greenassistant.ai.tha.de',
    '141.82.1.31',
 ]
 	
 SECURE_SSL_REDIRECT = True
 
 CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://greenassistant.ai.tha.de',
 ]
 	
 CSRF_TRUSTED_ORIGINS = [
    'https://greenassistant.ai.tha.de',
    'https://greenassistant.ai.tha.de:7000',
 ]
````


## Applikation starten:

**Auf der ersten wechseln wir in den *frontend* Ordner und starten den Frontend-Server:**
 ````
 cd frontend
 npm start
 ````
**Auf der anderen Konsole wechseln wir in den *backend* Ordner und starten den Backend-Server:**
 ````
 cd backend
 python manage.py runserver
 ````
 **Für den produktiv Betrieb sollte nicht der Entwicklungsserver von Django verwendet werden. Deshalb ist in der
 requirements.txt ebenfalls gunicorn enthalten, worüber der Server für den besagten Live-Betrieb gestartet werden kann.**
 ````
 cd backend
 gunicorn crud.wsgi --timeout 120
 ````
 Zudem ist es natürlich sinnvoll, dass für den produktiven Betrieb kein Terminal im klassischen Sinn verwendet wird,
 da dieses terminiert wird, sobald zum Beispiel die IDE geschlossen wird.  
 Wir haben uns deshalb für das Linux Tool ["screen"](https://wiki.ubuntuusers.de/Screen/) entschieden, womit Detached Terminal Session erstellt werden
 können und somit Frontend/Backend weiterläuft auch wenn die IDE geschlossen wird.  
 
**Laufen beide Server ohne Probleme, so kann die Anwendung verwendet und modifiziert werden**

## Requirements-File für das Backend aktualisieren:
- Wurden während der Entwicklung neue Packages installiert, muss die *requirements.txt* aktualisiert werden.
 Hierzu einfach folgenden befehle im Ordner *backend* ausführen:
  ````
  cd backend
  pip freeze > requirements.txt
  ````

## Softwarestruktur

Die nachfolgende Abbildung soll verdeutlichen, wie Frontend und Backend Daten austauschen und mit welchen Methoden
sie das tun.

<h1 align="center">
    <img src="Komponentendiagramm.png" alt="SW-Komponenten" height="550"> </br>
</h1>

