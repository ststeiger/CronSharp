
var ordinals = {
    "de-CH": [
      "Nullte",
      "Erste",
      "Zweite",
      "Dritte",
      "Vierte",
      "Letzte"
    ],
    "fr-CH": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "it-CH": [
      "Zeroa",
      "Prima",
      "Seconda",
      "Terza",
      "Quarta",
      "Ultimo"
    ],
    "en-US": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "nn-NO": [
      "Nullte",
      "Første",
      "Andre",
      "Tredje",
      "Fjerde",
      "Siste"
    ],
    "sv-SE": [
      "Nollde",
      "Först",
      "Andra",
      "Tredje",
      "Fjärde",
      "Sista"
    ],
    "es-ES": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "pt-PT": [
      "Zero",
      "Primeiro",
      "Segundo",
      "Terceiro",
      "Quarto",
      "Último"
    ],
    "ru-RU": [
      "Нулевой",
      "Первый",
      "Второй",
      "Третий",
      "Четвертый",
      "Последний"
    ],
    "uk-UA": [
      "Нульовий",
      "Перший",
      "Другий",
      "Третій",
      "Четвертий",
      "Останній"
    ],
    "be-BY": [
      "Нулявы",
      "Першы",
      "Другі",
      "Трэці",
      "Чацвёрты",
      "Апошні"
    ],
    "sl-SI": [
      "Ničti",
      "Prva",
      "Drugi",
      "Tretji",
      "Četrti",
      "Zadnja"
    ],
    "bg-BG": [
      "Нулевия",
      "Първи",
      "Втори",
      "Трети",
      "Четвърти",
      "Последно"
    ],
    "el-GR": [
      "Μηδενική",
      "Πρώτα",
      "Δεύτερος",
      "Τρίτος",
      "Τέταρτος",
      "Τελευταίος"
    ],
    "zh-CN": [
      "第零",
      "第一",
      "第二",
      "第三",
      "第四",
      "最后"
    ],
    "vi-VN": [
      "Số Không",
      "Đầu Tiên",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Cuối Cùng"
    ],
    "ja-JP": [
      "ゼロ番目",
      "最初",
      "第2",
      "第3",
      "第4",
      "最後"
    ],
    "th-TH": [
      "ศูนย์",
      "แรก",
      "ที่สอง",
      "ที่สาม",
      "ที่สี่",
      "ล่าสุด"
    ],
    "ar-SA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ca-ES": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "zh-TW": [
      "第零",
      "第一",
      "第二",
      "第三",
      "第四",
      "最后"
    ],
    "cs-CZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "da-DK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "de-DE": [
      "Nullte",
      "Erste",
      "Zweite",
      "Dritte",
      "Vierte",
      "Letzte"
    ],
    "fi-FI": [
      "Nolla-nnen",
      "Ensimmäinen",
      "Toinen",
      "Kolmas",
      "Neljäs",
      "viime"
    ],
    "fr-FR": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "he-IL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "hu-HU": [
      "nulladik",
      "első",
      "második",
      "harmadik",
      "negyedik",
      "utolsó"
    ],
    "is-IS": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "it-IT": [
      "Zeroa",
      "Prima",
      "Seconda",
      "Terza",
      "Quarta",
      "Ultimo"
    ],
    "ko-KR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "nl-NL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "nb-NO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "pl-PL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "pt-BR": [
      "Zero",
      "Primeiro",
      "Segundo",
      "Terceiro",
      "Quarto",
      "Último"
    ],
    "ro-RO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "hr-HR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sk-SK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sq-AL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tr-TR": [
      "Sıfıri",
      "birinci",
      "ikinci",
      "üçüncü",
      "dördüncü",
      "son"
    ],
    "ur-PK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "id-ID": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "et-EE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "lv-LV": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "lt-LT": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fa-IR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "hy-AM": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "az-Latn-AZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "eu-ES": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mk-MK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "af-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ka-GE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fo-FO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "hi-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ms-MY": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "kk-KZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ky-KG": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sw-KE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "uz-Latn-UZ": [
      "nolinchi",
      "birinchi",
      "ikkinchi",
      "uchinchi",
      "to'rtinchi",
      "oxirgi"
    ],
    "tt-RU": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "pa-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "gu-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ta-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "te-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "kn-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mr-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sa-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mn-MN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "gl-ES": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "kok-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "syr-SY": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "dv-MV": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ar-IQ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-GB": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-MX": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "fr-BE": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "nl-BE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Latn-CS": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sv-FI": [
      "Nollde",
      "Först",
      "Andra",
      "Tredje",
      "Fjärde",
      "Sista"
    ],
    "az-Cyrl-AZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ms-BN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "uz-Cyrl-UZ": [
      "nolinchi",
      "birinchi",
      "ikkinchi",
      "uchinchi",
      "to'rtinchi",
      "oxirgi"
    ],
    "ar-EG": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "zh-HK": [
      "第零",
      "第一",
      "第二",
      "第三",
      "第四",
      "最后"
    ],
    "de-AT": [
      "Nullte",
      "Erste",
      "Zweite",
      "Dritte",
      "Vierte",
      "Letzte"
    ],
    "en-AU": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "fr-CA": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "sr-Cyrl-CS": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ar-LY": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "zh-SG": [
      "第零",
      "第一",
      "第二",
      "第三",
      "第四",
      "最后"
    ],
    "de-LU": [
      "Nullte",
      "Erste",
      "Zweite",
      "Dritte",
      "Vierte",
      "Letzte"
    ],
    "en-CA": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-GT": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-DZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "zh-MO": [
      "第零",
      "第一",
      "第二",
      "第三",
      "第四",
      "最后"
    ],
    "de-LI": [
      "Nullte",
      "Erste",
      "Zweite",
      "Dritte",
      "Vierte",
      "Letzte"
    ],
    "en-NZ": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-CR": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "fr-LU": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "ar-MA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-IE": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-PA": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "fr-MC": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "ar-TN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-ZA": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-DO": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-OM": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-JM": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-VE": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-YE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-029": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-CO": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-SY": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-BZ": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-PE": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-JO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-TT": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-AR": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-LB": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-ZW": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-EC": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-KW": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-PH": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "es-CL": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-AE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "es-UY": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-BH": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "es-PY": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ar-QA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "es-BO": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "es-SV": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "es-HN": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "es-NI": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "es-PR": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ur-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "am-ET": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ne-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tzm-Latn-DZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "iu-Latn-CA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sma-NO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ro-MD": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sd-Arab-PK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "smj-NO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "om-ET": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "kl-GL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-SN": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "gd-GB": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Latn-RS": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-MY": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "prs-AF": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "pa-Arab-PK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "bn-BD": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "wo-SN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "rw-RW": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "qut-GT": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sah-RU": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "gsw-FR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "co-FR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "oc-FR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mi-NZ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ga-IE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "se-SE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "br-FR": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "smn-FI": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "moh-CA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "arn-CL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ii-CN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "so-SO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tn-BW": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "haw-US": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "gn-PY": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ti-ET": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "dsb-DE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ig-NG": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-ML": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "lb-LU": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ba-RU": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "nso-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "quz-BO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "yo-NG": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Latn-ME": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ha-Latn-NG": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fil-PH": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ps-AF": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fy-NL": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ne-NP": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "se-NO": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "iu-Cans-CA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "chr-Cher-US": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "si-LK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Cyrl-RS": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "my-MM": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "lo-LA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "km-KH": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "cy-GB": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "bo-CN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-CD": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "as-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ml-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-IN": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "or-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ca-ES-valencia": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "bn-IN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tk-TM": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tzm-Tfng-MA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "bs-Latn-BA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mt-MT": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sms-FI": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "zu-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "xh-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "tn-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ts-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "st-ZA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "hsb-DE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mn-Mong-CN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-CI": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "tg-Cyrl-TJ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ta-LK": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Latn-BA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "bs-Cyrl-BA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "rm-CH": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "smj-SE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "en-HK": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "fr-RE": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "fr-HT": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "quz-EC": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "quz-PE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "es-419": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "hr-BA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sma-SE": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "mn-Mong-MN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-CM": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "en-SG": [
      "Zeroeth",
      "First",
      "Second",
      "Third",
      "Fourth",
      "Last"
    ],
    "sr-Cyrl-ME": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ug-CN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "se-FI": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ku-Arab-IQ": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "ti-ER": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "sr-Cyrl-BA": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ],
    "fr-MA": [
      "Zéro-Ième",
      "Premier",
      "Deuxième",
      "Troisième",
      "Quatrième",
      "Dernier"
    ],
    "es-US": [
      "Ceroa",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Último"
    ],
    "ff-Latn-SN": [
      "0.",
      "1.",
      "2.",
      "3.",
      "4.",
      "L."
    ]
};
