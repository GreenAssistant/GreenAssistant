# Quickview Django

### Dieser kurze Artikel soll über die wichtigsten Kommandos in Django berichten.

1. **Die Datei *manage.py***
    - Diese Datei ist der Einstiegspunkt unseres Backends und wird von Django automatisch generiert, wenn man ein neues
    projekt anlegt. Die Datei liegt direkt im *backend* Verzeichnis. Fast alle Kommandos gehen über dieses File.

2. **Die Datenbank:**
    - Django bringt eine relationale Datenbank mit, die es uns erlaubt Zustände abzuspeichern. Hierzu verwenden wir die
    Datei *models.py*. Hier wird eine Klasse definiert, deren Felder die Spalten in der Datenbank abbilden.
    - Migrieren der Datenbank:
        - Wurde eine Datenbank neu erstellt, so muss sie zu Beginn migriert werden. Dies geschieht über den Befehl
        ````
        python manage.py migrate
        ````
        In der entsprechenden App wird dann ein Verzeichnis *migrations* angelegt, welches als fallback dienen soll.
        - Wurden nur Änderungen vorgenommen, kann die Datenbank einfach aktualisiert werden mit:
        ````
        python manage.py makemigrations
        ````

3. **Einen Super-User erstellen:**
    - Damit wir die Datenbank auch verwalten können, müssen wir uns einen Super-user erstellen. Damit gelangen wir dann
    auch auf die Admin-Seite:
    ````
    python manage.py createsuperuser
   ````
   Anschließend einen Namen und ein Passwort vergeben

4. **Starten des Servers:**
    ````
    python manage.py runserver
    ````

# Quickview LLM

### Dieser kurze Artikel dient für die Installation von ollama.

1. **Voraussetzungen:**  
    Um ein Llama Modell lokal auf dem Computer auszuführen sind einige Voraussetzungen notwendig.  
    Hier aufgeteilt in Windows und Linux/UNIX OS:
    - Windows:
        - 'Windows-Features aktivieren oder deaktivieren' in der Windows Suche suchen und öffnen
        - Bei folgenden Features den Haken setzten:
            - Windows-Subsystem für Linux
            - VM-Plattform (Virtuelle Maschinen Plattform)
        - Mit 'OK' bestätigen, den Computer neustarten und die Updates installieren lassen
        - Windows Store öffnen und nach der 'Ubuntu'-App suchen (ohne Versionsnr.) und installieren
        - 'Ubuntu'-App öffnen und die Benutzererstellung im Terminal abschließen
        - Nun ist das Subsystem für Linux fertig installiert
    - Linux/UNIX:
        - Hier kann man sich die ganze WSL2/'Ubuntu'-App Thematik sparen und das Modell kann nativ auf dem Linux Kernel ausgeführt werden
        - Eventuell sind noch einzelne Packete notwendig, darauf weißt euch aber dann das System hin.

2. **Installation von ollama:**  
    Hierfür muss im Terminal, entweder im nativen Linux/UNIX oder im 'Ubuntu'-App Terminal, folgender Befehl ausgeführt werden
    ```
    curl -fsSL https://ollama.com/install.sh | sh
    ```
    Damit wird ollama heruntergeladen und direkt installiert.  
    Im Anschluss kann mit 'ollama list' geprüft werden, ob die Installation erfolgreich war.  
    (Sobald keine Fehlermeldung erscheint, dass ollama nicht gefunden wurde, passt es.)

    Nun kann unser aktuelles Modell über ollama heruntergeladen werden:  
    (dieser Befahl lädt aktuell das Kleinste der drei verfügbaren herunter und hat eine Größe von ca 5GB)
    ```
    ollama pull llama3
    ```
    Nun kann erneut mit 'ollama list' jedes lokalen Modelle aufgelistet werden.

    Hiermit ist die Installation von ollama auch abgeschlossen.  
    Bei Interesse kann mit 'ollama run llama3' das Modell im Terminal ausgeführt werden, natürlich ohne jeglichen Nachhaltigkeitskontext.

### Verwendung von ollama im Python Code
Unser Framework LlamaIndex hat eine native Integration mit ollama, das bedeutet, dass Modelle die über ollama installiert wurden direkt in LlamaIndex verwendet werden können.  
Mit der Voraussetzung natürlich, dass ollama erreichbar ist.  
(Sprich die 'Ubuntu'-App muss ausgeführt sein! Das Modell muss allerdings **nicht separat gestartet** werden, wie im Beispiel oben: 'ollama run llama3')

Ab diesem Zeitpunkt kann LlamaIndex im Python Code auf ollama zugreifen:
```
Settings.llm = Ollama(model="llama3", request_timeout=30.0)
```

# Quickview XTTS – RVC Pipeline

### Dieser Abschnitt beschreibt die Einrichtung und Verwendung von XTTS zu Real-Time Voice Cloning (RVC) Pipeline.

1. **Installation der notwendigen Bibliotheken:** 
    Pytorch, TTS- und RVC-Bibliotheken installieren:
```
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
pip install TTS
pip install -e git+https://github.com/JarodMica/rvc-tts-pipeline.git#egg=rvc_tts_pipe
 ```
Für RVC werden noch 2 weitere Dateien benötigt: `hubert_base.pt` und `rmvpe.pt` diese können vom [Huggingface Space von RVC](https://huggingface.co/lj1995/VoiceConversionWebUI/tree/main) heruntergeladen werden und müssen an demselben Ort sein an dem die Skripts ausführt werden.

Zuletzt sollte ffmpeg installiert sein, ffmpeg ist ein Werkzeug zum Abspielen, Streamen und Umcodieren von Multimediadateien
- Für Linux-Distributionen: Installiere `ffmpeg` über den Package Manager, beispielsweise:
```
sudo apt install ffmpeg
```
- Bei Windows downloade die [ffmpeg-git-full.7z](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z), entpacke die ZIP und lege sie in das C-Root-Verzeichnis. Anschließend öffne die Systemumgebungsvariablen und füge einen neuen Eintrag unter `Path` hinzu: `C:\ffmpeg\bin`

2. **Voraussetzungen:** 
- Eine aufgenommene Stimme (am besten als .wav Datei) die für XTTS benötigt wird
- Ein Sprach-Modell, was RVC nutzt, um eine die Input-Stimme an die Zielstimme anzupassen.
	- Dieses Sprach-Modell kann man selbst trainieren (z. B. über das [Web-UI von RVC](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/blob/main/docs/en/README.en.md)) oder über Webseiten wie [huggingface](https://huggingface.co) oder voice-models.com downloaden

3. **XTTS:**  
Generierung einer Audiodatei mit XTTS aus einer input_voice.wav und einem Text
    ```python
    from TTS.api import TTS
    tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2", gpu=True)
    # generate speech by cloning a voice
    tts.tts_to_file(text="test text",
                    file_path="output.wav",
                    speaker_wav=["input_voice.wav"],
                    language="de",
                    split_sentences=True
                    )
    ```
4. **RVC:** 
Erzeugte Audiodatei an die Zielstimme anpassen
    ```python
	from rvc_infer import rvc_convert
	
	rvc_convert(model_path="rvc_speaker_model.pth",
                f0_up_key=0,
                input_path=audio_file_name)
    ```