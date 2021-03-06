var species_family = {};
var iNaturalistLink = {};
var secundaryName = {};

function sliderChange(value) {
    var string = value + "%"
    document.getElementById("slider_value").innerHTML = string
}

function readJSONAndLoadDictionaries() {

  speciesInfo.species.forEach(function(species, i) {

    let name = species["name"]
    console.log(name);

    for(var key in species) {
      if(key === "family") {
        species_family[name] = species["family"];
      }
      else if(key === "iNatLink") {
        iNaturalistLink[name] = species["iNatLink"];
      }
      else if(key === "otherName") {
        secundaryName[name] = species["otherName"];
      }
    }

    console.log(species_family[name]);
    console.log(iNaturalistLink[name]);
    console.log(secundaryName[name]);
  });
}

var speciesInfo = {"species":[
    {
        "name":"Aglais io",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=207977",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Aglais_io",
        "otherName":"European Peacock Butterfly"
    },
    {
        "name":"Aglais urticae",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=54468",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Small_tortoiseshell",
        "otherName":"Small Tortoiseshell"
    },
    {
        "name":"Anthocharis cardamines",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=51495",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Anthocharis_cardamines",
        "otherName":"Orange Tip"
    },
    {
        "name":"Anthocharis euphenoides",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=94212",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Anthocharis_euphenoides",
        "otherName":"Provence Orange Tip"
    },
    {
        "name":"Apatura ilia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=322024",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Apatura_ilia",
        "otherName":"Lesser Purple Emperor"
    },
    {
        "name":"Apatura iris",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=343324",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Apatura_iris",
        "otherName":"Purple Emperor"
    },
    {
        "name":"Aphantopus hyperantus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=62426",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Ringlet",
        "otherName":"Ringlet"
    },
    {
        "name":"Aporia crataegi",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=61295",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Aporia_crataegi",
        "otherName":"Black-veined White"
    },
    {
        "name":"Arethusana arethusa",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=337856",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Arethusana",
        "otherName":"False Grayling"
    },
    {
        "name":"Argynnis adippe",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=70105",
        "WikipediaLink":"https://en.wikipedia.org/wiki/High_brown_fritillary",
        "otherName":"High Brown Fritillary"
    },
    {
        "name":"Argynnis aglaja",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=1116165",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Dark_green_fritillary",
        "otherName":"Dark Green Fritillary"
    },
    {
        "name":"Argynnis niobe",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=335001",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Niobe_fritillary",
        "otherName":"Niobe Fritillary"
    },
    {
        "name":"Argynnis pandora",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=147328",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Argynnis_pandora",
        "otherName":"Cardinal Butterfly"
    },
    {
        "name":"Argynnis paphia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123628",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Silver-washed_fritillary",
        "otherName":"Silver-washed Fritillary"
    },
    {
        "name":"Aricia cramera",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=337771",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Aricia_cramera",
        "otherName":"Southern Brown Argus"
    },
    {
        "name":"Aricia eumedon",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=548481",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Eumedonia_eumedon",
        "otherName":"Geranium Argus"
    },
    {
        "name":"Aricia montensis",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362046",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Aricia_(butterfly)",
        "otherName":"Mountain Argus"
    },
    {
        "name":"Boloria dia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=357982",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Boloria_dia",
        "otherName":"Weaver's Fritillary"
    },
    {
        "name":"Boloria euphrosyne",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=132997",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pearl-bordered_fritillary",
        "otherName":"Pearl-bordered Fritillary"
    },
    {
        "name":"Boloria selene",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=54068",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Small_pearl-bordered_fritillary",
        "otherName":"Silver-bordered Fritillary"
    },
    {
        "name":"Brenthis daphne",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=334347",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Brenthis_daphne",
        "otherName":"Marbled Fritillary"
    },
    {
        "name":"Brenthis hecate",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=334984",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Twin-spot_fritillary",
        "otherName":"Twin-spot Fritillary"
    },
    {
        "name":"Brenthis ino",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=334985",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Brenthis_ino",
        "otherName":"Lesser Marbled Fritillary"
    },
    {
        "name":"Brintesia circe",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=334385",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Brintesia",
        "otherName":"Great Banded Grayling"
    },
    {
        "name":"Cacyreus marshalli",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=119664",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Geranium_bronze",
        "otherName":"Common Geranium-Bronze"
    },
    {
        "name":"Callophrys avis",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=333931",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Callophrys_avis",
        "otherName":"Chapman's Green Hairstreak"
    },
    {
        "name":"Callophrys rubi",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=60896",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Green_hairstreak",
        "otherName":"Green Hairstreak"
    },
    {
        "name":"Carcharodus alceae",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=325871",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Carcharodus_alceae",
        "otherName":"Mallow Skipper"
    },
    {
        "name":"Carcharodus baeticus",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=96769",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Carcharodus_baeticus",
        "otherName":"Southern Marbled Skipper"
    },
    {
        "name":"Carcharodus tripolina",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=470953",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Carcharodus_tripolinus",
        "otherName":"False Mallow Skipper"
    },
    {
        "name":"Celastrina argiolus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55640",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Holly_blue",
        "otherName":"Holly Blue"
    },
    {
        "name":"Charaxes jasius",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123912",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Charaxes_jasius",
        "otherName":"Two-tailed Pasha"
    },
    {
        "name":"Coenonympha arcania",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=125815",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Coenonympha_arcania",
        "otherName":"Pearly Heath"
    },
    {
        "name":"Coenonympha dorus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=360342",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Coenonympha_dorus",
        "otherName":"Dusky Heath"
    },
    {
        "name":"Coenonympha iphioides",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=349275",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Coenonympha",
        "otherName":"Chestnut Heath"
    },
    {
        "name":"Coenonympha pamphilus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=52589",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Small_heath_(butterfly)",
        "otherName":"Small Heath"
    },
    {
        "name":"Colias alfacariensis",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=344763",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Colias_alfacariensis",
        "otherName":"Berger's Clouded Yellow"
    },
    {
        "name":"Colias croceus",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=143294",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Colias_croceus",
        "otherName":"Clouded Yellow"
    },
    {
        "name":"Cupido lorquinii",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=326870",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Cupido_lorquinii",
        "otherName":"Lorquin's Blue"
    },
    {
        "name":"Cupido minimus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=129126",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Small_blue",
        "otherName":"Small Blue"
    },
    {
        "name":"Cyaniris semiargus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=62439",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Cyaniris_semiargus",
        "otherName":"Mazarine Blue"
    },
    {
        "name":"Danaus chrysippus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=67835",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Danaus_chrysippus",
        "otherName":"Plain Tiger Butterfly"
    },
    {
        "name":"Danaus plexippus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=48662",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Monarch_butterfly",
        "otherName":"Monarch"
    },
    {
        "name":"Erebia triarius",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362048",
        "WikipediaLink":"https://en.wikipedia.org/wiki/De_Prunner%27s_ringlet",
        "otherName":"Prunner's ringlet"
    },
    {
        "name":"Erynnis tages",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=133434",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Dingy_skipper",
        "otherName":"Dingy Skipper"
    },
    {
        "name":"Euchloe belemia",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=333932",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Euchloe_belemia",
        "otherName":"Green-striped White"
    },
    {
        "name":"Euchloe crameri",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123811",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Euchloe_crameri",
        "otherName":"Western Dappled White"
    },
    {
        "name":"Euchloe tagis",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=360256",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Euchloe_tagis",
        "otherName":"Portuguese Dappled White"
    },
    {
        "name":"Euphydryas aurinia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=207956",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Marsh_fritillary",
        "otherName":"Marsh Fritillary"
    },
    {
        "name":"Euphydryas desfontainii",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362049",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Euphydryas_desfontainii",
        "otherName":"Spanish Fritillary"
    },
    {
        "name":"Favonius quercus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=480251",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Purple_hairstreak",
        "otherName":"Purple Hairstreak"
    },
    {
        "name":"Gegenes nostrodamus",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=335238",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Gegenes_nostrodamus",
        "otherName":"Mediterranean Skipper"
    },
    {
        "name":"Glaucopsyche alexis",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=60834",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Glaucopsyche_alexis",
        "otherName":"Green-underside Blue"
    },
    {
        "name":"Glaucopsyche melanops",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=320934",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Glaucopsyche_melanops",
        "otherName":"Black-eyed Blue"
    },
    {
        "name":"Gonepteryx cleopatra",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123815",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Gonepteryx_cleopatra",
        "otherName":"Cleopatra Butterfly"
    },
    {
        "name":"Gonepteryx rhamni",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=52771",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Gonepteryx_rhamni",
        "otherName":"Common Brimstone"
    },
    {
        "name":"Hamearis lucina",
        "family":"Riodinidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=133154",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hamearis_lucina",
        "otherName":"Duke of Burgundy"
    },
    {
        "name":"Hesperia comma",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=58468",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hesperia_comma",
        "otherName":"Common Branded Skipper"
    },
    {
        "name":"Hipparchia fidia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=141750",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hipparchia_fidia",
        "otherName":"Striped Grayling"
    },
    {
        "name":"Hipparchia hermione",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362064",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hipparchia_hermione",
        "otherName":"Rock Grayling"
    },
    {
        "name":"Hipparchia semele",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=102800",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Grayling_(butterfly)",
        "otherName":"Grayling"
    },
    {
        "name":"Hipparchia statilinus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=141751",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hipparchia_statilinus",
        "otherName":"Tree Grayling"
    },
    {
        "name":"Hyponephele lupinus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362061",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hyponephele_lupina",
        "otherName":"Oriental Meadow Brown"
    },
    {
        "name":"Hyponephele lycaon",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=354746",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Hyponephele_lycaon",
        "otherName":"Dusky Meadow Brown"
    },
    {
        "name":"Iphiclides feisthamelii",
        "family":"Papilionidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=130391",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Iphiclides_feisthamelii",
        "otherName":"Iberian Scarce Swallowtail"
    },
    {
        "name":"Issoria lathonia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=62766",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Queen_of_Spain_fritillary",
        "otherName":"Queen of Spain Fritillary"
    },
    {
        "name":"Laeosopis roboris",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=103936",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Laeosopis",
        "otherName":"Spanish Purple Hairstreak"
    },
    {
        "name":"Lampides boeticus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=121993",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lampides_boeticus",
        "otherName":"Pea Blue"
    },
    {
        "name":"Lasiommata maera",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123629",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lasiommata_maera",
        "otherName":"Large Wall Brown"
    },
    {
        "name":"Lasiommata megera",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=147298",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lasiommata_megera",
        "otherName":"Wall Brown"
    },
    {
        "name":"Leptidea sinapis",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=967568",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Leptidea_sinapis",
        "otherName":"Wood White"
    },
    {
        "name":"Leptotes pirithous",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=1068886",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Leptotes_pirithous",
        "otherName":"Common Blue Complex"
    },
    {
        "name":"Libythea celtis",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=321526",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Libythea_celtis",
        "otherName":"European Beak"
    },
    {
        "name":"Limenitis camilla",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=153105",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Limenitis_camilla",
        "otherName":"Eurasian White Admiral"
    },
    {
        "name":"Limenitis reducta",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=155030",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Limenitis_reducta",
        "otherName":"Southern White Admiral"
    },
    {
        "name":"Lycaena alciphron",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=343429",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Purple-shot_copper",
        "otherName":"Purple-shot Copper"
    },
    {
        "name":"Lycaena bleusei",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=104874",
        "WikipediaLink":"https://en.wikipedia.org/wiki/List_of_butterflies_of_Europe_(Lycaenidae)",
        "otherName":"Iberian Sooty Copper"
    },
    {
        "name":"Lycaena phlaeas",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55655",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lycaena_phlaeas",
        "otherName":"Small Copper"
    },
    {
        "name":"Lycaena tityrus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=154654",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lycaena_tityrus",
        "otherName":"Sooty Copper"
    },
    {
        "name":"Lycaena virgaureae",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=147078",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Scarce_copper",
        "otherName":"Scarce Copper"
    },
    {
        "name":"Maniola jurtina",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55653",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Meadow_brown",
        "otherName":"Meadow Brown"
    },
    {
        "name":"Melanargia ines",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=333930",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melanargia_ines",
        "otherName":"Spanish Marbled White"
    },
    {
        "name":"Melanargia lachesis",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=105458",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melanargia_lachesis",
        "otherName":"Iberian Marbled White"
    },
    {
        "name":"Melanargia occitanica",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362065",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melanargia_occitanica",
        "otherName":"Western Marbled White"
    },
    {
        "name":"Melanargia russiae",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=354680",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melanargia_russiae",
        "otherName":"Esper's Marbled White"
    },
    {
        "name":"Melitaea aetherie",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=484087",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Aetherie_fritillary",
        "otherName":"Aetherie Fritillary"
    },
    {
        "name":"Melitaea cinxia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=57495",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Glanville_fritillary",
        "otherName":"Glanville Fritillary"
    },
    {
        "name":"Melitaea deione",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362066",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Provençal_fritillary",
        "otherName":"Provençal Fritillary"
    },
    {
        "name":"Melitaea diamina",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=207704",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_diamina",
        "otherName":"False Heath Fritillary"
    },
    {
        "name":"Melitaea didyma",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=133295",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_didyma",
        "otherName":"Spotted Fritillary"
    },
    {
        "name":"Melitaea nevadensis",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=359097",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_nevadensis",
        "otherName":"Southern Heath Fritillary"
    },
    {
        "name":"Melitaea parthenoides",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=105559",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_parthenoides",
        "otherName":"European Meadow Fritillary"
    },
    {
        "name":"Melitaea phoebe",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=68354",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_phoebe",
        "otherName":"Knapweed Fritillary"
    },
    {
        "name":"Melitaea trivia",
        "family":"Nymphalinae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=132890",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Melitaea_trivia",
        "otherName":"Lesser Spotted Fritillary"
    },
    {
        "name":"Muschampia proto",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362071",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Muschampia_proto",
        "otherName":"Sage Skipper"
    },
    {
        "name":"Nymphalis antiopa",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=56832",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Nymphalis_antiopa",
        "otherName":"Mourning Cloak"
    },
    {
        "name":"Nymphalis polychloros",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=324088",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Large_tortoiseshell",
        "otherName":"Large Tortoiseshell"
    },
    {
        "name":"Ochlodes sylvanus",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=61781",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Large_skipper",
        "otherName":"Large Skipper"
    },
    {
        "name":"Papilio machaon",
        "family":"Papilionidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=56529",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Papilio_machaon",
        "otherName":"Old World Swallowtail"
    },
    {
        "name":"Pararge aegeria",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=52592",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Speckled_wood_(butterfly)",
        "otherName":"Speckled Wood"
    },
    {
        "name":"Phengaris alcon",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=426193",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Phengaris_alcon",
        "otherName":"Alcon Large Blue"
    },
    {
        "name":"Pieris brassicae",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55401",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pieris_brassicae",
        "otherName":"Large White"
    },
    {
        "name":"Pieris napi",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=54087",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Green-veined_white",
        "otherName":"Green-veined White"
    },
    {
        "name":"Pieris rapae",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55626",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pieris_rapae",
        "otherName":"Cabbage White"
    },
    {
        "name":"Plebejus argus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=57484",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Silver-studded_blue",
        "otherName":"Silver-studded Blue"
    },
    {
        "name":"Polygonia c-album",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=56225",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Polygonia_c-album",
        "otherName":"European Comma"
    },
    {
        "name":"Polyommatus bellargus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=154576",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Adonis_blue",
        "otherName":"Adonis Blue"
    },
    {
        "name":"Polyommatus celina",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=473456",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Polyommatus",
        "otherName":"Austaut's Blue"
    },
    {
        "name":"Polyommatus icarus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=55641",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Common_blue",
        "otherName":"Common Blue"
    },
    {
        "name":"Polyommatus thersites",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=334393",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Polyommatus_thersites",
        "otherName":"Chapman's Blue"
    },
    {
        "name":"Pontia daplidice",
        "family":"Pieridae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=123810",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pontia_daplidice",
        "otherName":"Bath White"
    },
    {
        "name":"Pseudophilotes abencerragus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=467564",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pseudophilotes_abencerragus",
        "otherName":"False Baton Blue"
    },
    {
        "name":"Pseudophilotes baton",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=111074",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pseudophilotes_baton",
        "otherName":"Baton Blue"
    },
    {
        "name":"Pseudophilotes panoptes",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=111075",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pseudophilotes_panoptes",
        "otherName":"Panoptes Blue"
    },
    {
        "name":"Pyrgus armoricanus",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=332693",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Oberthür%27s_grizzled_skipper",
        "otherName":"Oberthür's Grizzled Skipper"
    },
    {
        "name":"Pyrgus malvoides",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=111447",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pyrgus_malvoides",
        "otherName":"Southern Grizzled Skipper"
    },
    {
        "name":"Pyrgus onopordi",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362089",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Rosy_grizzled_skipper",
        "otherName":"Rosy Grizzled Skipper"
    },
    {
        "name":"Pyrgus serratulae",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=357291",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Olive_skipper",
        "otherName":"Olive Skipper"
    },
    {
        "name":"Pyronia bathseba",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=208973",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pyronia_bathseba",
        "otherName":"Spanish Gatekeeper"
    },
    {
        "name":"Pyronia cecilia",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=62452",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Pyronia_cecilia",
        "otherName":"Southern Gatekeeper"
    },
    {
        "name":"Pyronia tithonus",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=62429",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Gatekeeper_(butterfly)",
        "otherName":"Gatekeeper"
    },
    {
        "name":"Satyrium esculi",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=199980",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Satyrium_esculi",
        "otherName":"False Ilex Hairstreak"
    },
    {
        "name":"Satyrium ilicis",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=208979",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Satyrium_ilicis",
        "otherName":"Ilex Hairstreak"
    },
    {
        "name":"Satyrium spini",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=208988",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Satyrium_spini",
        "otherName":"Blue-spot Hairstreak"
    },
    {
        "name":"Satyrus actaea",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=112080",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Satyrus_actaea",
        "otherName":"Black Satyr"
    },
    {
        "name":"Spialia sertorius",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362090",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Spialia_sertorius",
        "otherName":"Red-underwing Skipper"
    },
    {
        "name":"Thecla betulae",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362091",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Brown_hairstreak",
        "otherName":"Brown Hairstreak"
    },
    {
        "name":"Thymelicus acteon",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=362093",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Lulworth_skipper",
        "otherName":"Lulworth Skipper"
    },
    {
        "name":"Thymelicus lineola",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=58484",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Essex_skipper",
        "otherName":"Essex Skipper"
    },
    {
        "name":"Thymelicus sylvestris",
        "family":"Hesperiidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=128544",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Small_skipper",
        "otherName":"Small Skipper"
    },
    {
        "name":"Tomares ballus",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=460602",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Tomares_ballus",
        "otherName":"Provence Hairstreak"
    },
    {
        "name":"Vanessa atalanta",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=49133",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Vanessa_atalanta",
        "otherName":"Red Admiral"
    },
    {
        "name":"Vanessa cardui",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=48548",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Vanessa_cardui",
        "otherName":"Painted Lady"
    },
    {
        "name":"Vanessa virginiensis",
        "family":"Nymphalidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=48549",
        "WikipediaLink":"https://en.wikipedia.org/wiki/American_lady",
        "otherName":"American Lady"
    },
    {
        "name":"Zerynthia rumina",
        "family":"Papilionidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=245872",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Zerynthia_rumina",
        "otherName":"Spanish Festoon"
    },
    {
        "name":"Zizeeria knysna",
        "family":"Lycaenidae",
        "iNatLink":"https://www.inaturalist.org/observations?place_id=any&taxon_id=319796",
        "WikipediaLink":"https://en.wikipedia.org/wiki/Zizeeria_knysna",
        "otherName":"Sooty Blue"
    }
]};
