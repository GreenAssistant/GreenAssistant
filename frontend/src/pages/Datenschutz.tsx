import { Box, Grid, ListItem } from "@mui/material";
import React from "react";

export const Datenschutz = () => {
  return (
    <div className="pages-content">
      <Box sx={{ whiteSpace: "normal" }}>
        <h1>Datenschutz und Quellen</h1>
        <br />
        <section id="Datenschutzerklärung">
          <h2>Datenschutzerklärung</h2>
          <p>Datenschutzerklärung hier</p>
          <br />
        </section>
        <section id="Quellen verwendeter Daten">
          <h2>Quellen verwendeter Daten</h2>
          <br />
          <p>
            Der Chatbot "GreenAssistant" basiert auf einem frei zugänglichen
            sogenannten <a href="https://llama.meta.com/llama3/">Llamafile</a>.
            Dieses wurde durch eigens ausgewählte Texte und Daten erweitert.
            <br />
            Im Folgenden werden zusätzliche externe Quellen und Autoren der
            verwendeten Texte aufgelistet, die unser Chatbot verwendet, um
            Antworten zu generieren. Weiterhin dankt das "GreenAssistant" Team
            dem Büro für Nachhaltigkeit der Stadt Augsburg für die
            Bereitstellung ihrer Daten.
            <br />
          </p>
        </section>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 5, sm: 7, md: 9 }}>
          <Grid item xs={false} lg={8}>
            <h3>Zukunftsleitlinien der Stadt Augsburg</h3>
            <ListItem>
              <p>
                Zukunftsleitlinien für Augsburg (25.11.2021), in: Nachhaltigkeit
                Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltigkeit.augsburg.de/fileadmin/nachhaltigkeit/data/Zukunftsleitlinien_2021/Zukunftsleitlinien_f%C3%BCr_Augsburg_2021_%C3%9Cbersicht.pdf">
                    www.nachhaltigkeit.augsburg.de
                  </a>
                </div>
                (Stand: 20.05.2024)
              </p>
            </ListItem>
            <ListItem>
              <p>
                Die 17 globalen Nachhaltigkeitszeile verständlich erklärt, in:
                Bundesregierung, <br />
                URL:
                <div>
                  <a href="https://www.bundesregierung.de/breg-de/themen/nachhaltigkeitspolitik/nachhaltigkeitsziele-erklaert-232174">
                    https://www.bundesregierung.de/breg-de/themen/nachhaltigkeitspolitik/nachhaltigkeitsziele-erklaert-232174
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
          </Grid>
          <Grid item xs={false} lg={8}>
            <h3>Themengebiet Ökologie</h3>
            <ListItem>
              <p>
                Warum Klima schützen?, in: WWF, <br />
                URL:
                <div>
                  <a href="https://www.wwf.at/artikel/warum-klima-schuetzen/">
                    https://www.wwf.at/artikel/warum-klima-schuetzen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                10 Tipps für mehr Klimaschutz im Alltag, in: Greenpeace, <br />
                URL:
                <div>
                  <a href="https://www.greenpeace.de/klimaschutz/klimakrise/10-tipps-klimaschutz-alltag">
                    https://www.greenpeace.de/klimaschutz/klimakrise/10-tipps-klimaschutz-alltag/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Thorsten Koska: Nachhaltige Mobilität (17.03.2023), in: bpb -
                Bundeszentrale für politische Bildung, <br />
                URL:
                <div>
                  <a href="https://www.bpb.de/themen/klimawandel/dossier-klimawandel/516500/nachhaltige-mobilitaet/">
                    https://www.bpb.de/themen/klimawandel/dossier-klimawandel/516500/nachhaltige-mobilitaet/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Energieeffizienz erhöhen: Geld und CO2 sparen, in:
                Effizienzhaus-online, <br />
                URL:
                <div>
                  <a href="https://www.effizienzhaus-online.de/energieeffizienz-steigern/">
                    https://www.effizienzhaus-online.de/energieeffizienz-steigern/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Energieeffzienzklssen A+ bis H für Gebäude, in:
                Effizienzhaus-online, <br />
                URL:
                <div>
                  <a href="https://www.effizienzhaus-online.de/energieeffizienzklasse/">
                    https://www.effizienzhaus-online.de/energieeffizienzklasse/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Begriffserläuterung Biologische Vielfalt, in: bfn - Bundesamt
                für Naturschutz, <br />
                URL:
                <div>
                  <a href="https://www.bfn.de/begriffserlaeuterungen">
                    https://www.bfn.de/begriffserlaeuterungen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Martin Gorke: Warum sollen wir die biologische Vielfalt
                schützen? (04.11.2021), in: bpb - Bundeszentrale für politische
                Bildung, <br />
                URL:
                <div>
                  <a href="https://www.bpb.de/themen/umwelt/bioethik/335777/warum-sollen-wir-die-biologische-vielfalt-schuetzen/">
                    https://www.bpb.de/themen/umwelt/bioethik/335777/warum-sollen-wir-die-biologische-vielfalt-schuetzen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Faire Lebensmittel, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/faire-lebensmittel/">
                    https://www.nachhaltiger-warenkorb.de/themen/faire-lebensmittel/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Saisonal und Regional, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/saisonal-und-regional/">
                    https://www.nachhaltiger-warenkorb.de/themen/saisonal-und-regional/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Monstera, Efeutute & Co. - wie nachhaltig sind Zimmerpflanzen?,
                in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/monstera-efeutute-co-wie-nachhaltig-sind-zimmerpflanzen/">
                    https://www.nachhaltiger-warenkorb.de/monstera-efeutute-co-wie-nachhaltig-sind-zimmerpflanzen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Nachhaltiger Konsum vor Ort, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/nachhaltiger-konsum/nachhaltiger-konsum-vor-ort/">
                    https://www.nachhaltiger-warenkorb.de/nachhaltiger-konsum/nachhaltiger-konsum-vor-ort/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Bio-Lebensmittel kaufen, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/bio-lebensmittel-kaufen/">
                    https://www.nachhaltiger-warenkorb.de/themen/bio-lebensmittel-kaufen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Weniger Fleisch, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/weniger-fleisch/">
                    https://www.nachhaltiger-warenkorb.de/themen/weniger-fleisch/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Verschwendung von Lebensmitteln vermeiden, in: Nachhaltiger
                Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/reste-vermeiden/">
                    https://www.nachhaltiger-warenkorb.de/themen/reste-vermeiden/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Das richtige Waschmittel, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/das-richtige-waschmittel/">
                    https://www.nachhaltiger-warenkorb.de/themen/das-richtige-waschmittel/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Geschirr spülen, in: Nachhaltiger Warenkorb, <br />
                URL:
                <div>
                  <a href="https://www.nachhaltiger-warenkorb.de/themen/geschirr-spuelen/">
                    https://www.nachhaltiger-warenkorb.de/themen/geschirr-spuelen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
          </Grid>
          <Grid item xs={false} lg={8}>
            <h3>Themengebiet Soziales</h3>
            <ListItem>
              <p>
                Soziale Nachhaltigkeit im Unternehmen: Bedeutung & Umsetzung
                (22.02.2023), in: ESGVolution, <br />
                URL:
                <div>
                  <a href="https://www.esgvolution.com/de/wissen/soziales/soziale-nachhaltigkeit/">
                    https://www.esgvolution.com/de/wissen/soziales/soziale-nachhaltigkeit/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Soziale Nachhaltigkeit - so können Sie Ihren Teil beitragen, in:
                die Bayerische, <br />
                URL:
                <div>
                  <a href="https://www.diebayerische.de/ratgeber/soziale-nachhaltigkeit-leben/">
                    https://www.diebayerische.de/ratgeber/soziale-nachhaltigkeit-leben/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Soziale Nachhaltigkeit, in: Wir leben nachhaltig, <br />
                URL:
                <div>
                  <a href="https://www.wir-leben-nachhaltig.at/soziale-nachhaltigkeit/">
                    https://www.wir-leben-nachhaltig.at/soziale-nachhaltigkeit/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Soziale Aspekte - die Relevanz der ESG-Kriterien, in:
                Arbeitssicherheit sofort, <br />
                URL:
                <div>
                  <a href="https://www.arbeitssicherheit-sofort.de/magazin/esg-kriterien-soziale-aspekte/">
                    https://www.arbeitssicherheit-sofort.de/magazin/esg-kriterien-soziale-aspekte/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Benjamin Focke: Erfolg durch Soziale Nachhaltigkeit
                (05.12.2019), in: MVV, <br />
                URL:
                <div>
                  <a href="https://partner.mvv.de/blog/klares-bekenntnis-zur-sozialen-nachhaltigkeit">
                    https://partner.mvv.de/blog/klares-bekenntnis-zur-sozialen-nachhaltigkeit
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Neele Hofmann: 10 Tipps für mehr Nachhaltigkeit im Alltag
                (16.01.2023), in: badenova - Energievoll, <br />
                URL:
                <div>
                  <a href="https://www.badenova.de/blog/10-tipps-nachhaltigkeit-im-alltag/">
                    https://www.badenova.de/blog/10-tipps-nachhaltigkeit-im-alltag/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Soziale Arbeitsbedingungen, in: Acomera, <br />
                URL:
                <div>
                  <a href="https://acomera.com/basa-verfahren/basa-inhalte/soziale-arbeitsbedingungen/">
                    https://acomera.com/basa-verfahren/basa-inhalte/soziale-arbeitsbedingungen/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Was ist Soziale Kompetenz?, in: Studierendenberatung, <br />
                URL:
                <div>
                  <a href="https://www.studierendenberatung.at/persoenlichkeitsentwicklung/soziale-kompetenz-verbessern/was-ist-soziale-kompetenz">
                    https://www.studierendenberatung.at/persoenlichkeitsentwicklung/soziale-kompetenz-verbessern/was-ist-soziale-kompetenz
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Brand- und Katastrophenschutz, in: Landkreis Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.landkreis-augsburg.de/service-amt/landratsamt/sicherheit-und-ordnung-kommunales-und-verbraucherschutz/oeffentliche-sicherheit/brand-und-katastrophenschutz/">
                    https://www.landkreis-augsburg.de/service-amt/landratsamt/sicherheit-und-ordnung-kommunales-und-verbraucherschutz/oeffentliche-sicherheit/brand-und-katastrophenschutz/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Wohnformen für Menschen mit Behinderung - überprüft vom
                Gesundheitsamt, in: Stadt Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.augsburg.de/umwelt-soziales/gesundheit/einrichtungen/heime-und-wohnformen-fuer-menschen-mit-behinderung">
                    https://www.augsburg.de/umwelt-soziales/gesundheit/einrichtungen/heime-und-wohnformen-fuer-menschen-mit-behinderung
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Schule im Landkreis Augsburg, in: Landkreis Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.landkreis-augsburg.de/bildung-familie/bildung/schule/">
                    https://www.landkreis-augsburg.de/bildung-familie/bildung/schule/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
          </Grid>
          <Grid item xs={false} lg={8}>
            <h3>Themengebiet Kultur</h3>
            <ListItem>
              <p>
                Kulinarisches Erbe, in: Augsburger Land, <br />
                URL:
                <div>
                  <a href="https://www.augsburger-land.de/augsburger-land/kultur-tradition/kulinarisches-erbe">
                    https://www.augsburger-land.de/augsburger-land/kultur-tradition/kulinarisches-erbe
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Geschichte | Friedensstadt, in: Friedensstadt Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.friedensstadt-augsburg.de/de/geschichte#">
                    https://www.friedensstadt-augsburg.de/de/geschichte#
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Augsburger Hohes Friedensfest, in: Friedensstadt Augsburg,{" "}
                <br />
                URL:
                <div>
                  <a href="https://www.friedensstadt-augsburg.de/de/immaterielles-kulturerbe">
                    https://www.friedensstadt-augsburg.de/de/immaterielles-kulturerbe
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Johannes Kapfer: Stadtteile und Bezirke Augsburgs (07.10.2022),
                in: Augsburger Allgemeine, <br />
                URL:
                <div>
                  <a href="https://www.augsburger-allgemeine.de/augsburg/uebersicht-ueber-die-stadtteile-und-bezirke-von-augsburg-id64102396.html">
                    https://www.augsburger-allgemeine.de/augsburg/uebersicht-ueber-die-stadtteile-und-bezirke-von-augsburg-id64102396.html
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Martin Foszczynski: 5 Dinge, die du für die Erde tun kannst
                (22.04.2022), in: Friedensstadt Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.bergwelten.com/a/5-dinge-die-du-fuer-die-erde-tun-kannst">
                    https://www.bergwelten.com/a/5-dinge-die-du-fuer-die-erde-tun-kannst
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Runder Tisch der Religionen - Religionsatlas, in: Friedensstadt
                Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.friedensstadt-augsburg.de/de/religionsatlas">
                    https://www.friedensstadt-augsburg.de/de/religionsatlas
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
          </Grid>
          <Grid item xs={false} lg={8}>
            <h3>Themengebiet Wirtschaft</h3>
            <ListItem>
              <p>
                Nachhaltig Einkaufen: Tipps für den Alltag (13.11.2023), in:
                guud-benefits, <br />
                URL:
                <div>
                  <a href="https://guud-benefits.com/blog/details/nachhaltig-einkaufen-9-tipps-fuer-den-alltag">
                    https://guud-benefits.com/blog/details/nachhaltig-einkaufen-9-tipps-fuer-den-alltag
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Nachhaltigkeit im Supermarkt, in: NABU, <br />
                URL:
                <div>
                  <a href="https://www.nabu.de/umwelt-und-ressourcen/ressourcenschonung/einzelhandel-und-umwelt/nachhaltigkeit/21716.html">
                    https://www.nabu.de/umwelt-und-ressourcen/ressourcenschonung/einzelhandel-und-umwelt/nachhaltigkeit/21716.html
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Grüne Geldanlagen dienen dem Umwelt -und Klimaschutz
                (01.08.2023), in: Umweltbundesamt, <br />
                URL:
                <div>
                  <a href="https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/haushalt-wohnen/nachhaltige-geldanlage-gruen-sparen-investieren#einfuhrung-zur-grunen-geldanlage">
                    https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/haushalt-wohnen/nachhaltige-geldanlage-gruen-sparen-investieren#einfuhrung-zur-grunen-geldanlage
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Rentabel und grün anlegen im Jahr 2024 (11.04.2024), in:
                KlimaVest, <br />
                URL:
                <div>
                  <a href="https://klimavest.de/de/wissen/ratgeber/nachhaltige-geldanlage/">
                    https://klimavest.de/de/wissen/ratgeber/nachhaltige-geldanlage/
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Labelratgeber: TOP-Umweltsiegel für den nachhaltigen Konsum
                (18.04.2023), in: Umweltbundesamt, <br />
                URL:
                <div>
                  <a href="https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/uebergreifende-tipps/siegel-label#diese-siegel-und-label-helfen-beim-umweltbewussten-einkauf">
                    https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/uebergreifende-tipps/siegel-label#diese-siegel-und-label-helfen-beim-umweltbewussten-einkauf
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Peter Pospischil: Erneuerbare Energien: Alternativen zu Öl und
                Gas im privaten Haushalt (11.04.2024), in: Vis Bayern, <br />
                URL:
                <div>
                  <a href="https://www.vis.bayern.de/produkte_energie/heizen/regenerativeenergien.htm">
                    https://www.vis.bayern.de/produkte_energie/heizen/regenerativeenergien.htm
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Parks in Augsburg - Ruheoasen im Stadtgebiet, in: Stadt
                Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.augsburg.de/freizeit/ausflugsziele/parkanlagen">
                    https://www.augsburg.de/freizeit/ausflugsziele/parkanlagen
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Lena Dirr: Carsharing in Augsburg (13.06.2023), in: Hallo
                Augsburg, <br />
                URL:
                <div>
                  <a href="https://www.hallo-augsburg.de/carsharing-in-augsburg-carsharing-welcher-anbieter-ist-am-guenstigsten_Vxp">
                    https://www.hallo-augsburg.de/carsharing-in-augsburg-carsharing-welcher-anbieter-ist-am-guenstigsten_Vxp
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
            <ListItem>
              <p>
                Vereinbarkeit von Familie & Beruf, in: Familienportal, <br />
                URL:
                <div>
                  <a href="https://familienportal.de/familienportal/lebenslagen/ausbildung-beruf/vereinbarkeit-familie-und-beruf">
                    https://familienportal.de/familienportal/lebenslagen/ausbildung-beruf/vereinbarkeit-familie-und-beruf
                  </a>
                </div>
                (Stand: 20.05.2024).
              </p>
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
