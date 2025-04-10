export class ConsentLanguages {
    static langSet = new Set([
      "AR",
      "BG",
      "BS",
      "CA",
      "CS",
      "DA",
      "DE",
      "EL",
      "EN",
      "ES",
      "ET",
      "EU",
      "FI",
      "FR",
      "GL",
      "HR",
      "HU",
      "IT",
      "JA",
      "LT",
      "LV",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "PT-BR",
      "RO",
      "RU",
      "SK",
      "SL",
      "SR",
      "SV",
      "TR",
      "ZH",
    ]);
    has(key) {
      return ConsentLanguages.langSet.has(key);
    }
    forEach(callback) {
      ConsentLanguages.langSet.forEach(callback);
    }
    get size() {
      return ConsentLanguages.langSet.size;
    }
  }
  