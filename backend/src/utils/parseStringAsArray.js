module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); // Remove espaçamento antes e depois de uma String
}