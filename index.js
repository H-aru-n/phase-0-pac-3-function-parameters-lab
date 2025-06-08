// 1. Basic introduction function
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2. Introduction with language
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3. Introduction with optional language (default to "JavaScript")
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
