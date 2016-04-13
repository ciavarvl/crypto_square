var Crypto = function(text){
	this.text = text;
	
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/\W/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegment = function() {
	return this.text;
};

Crypto.prototype.ciphertext = function() {
	return this.text;
};

module.exports = Crypto;

