// 1/18/2017 ROMAN NUMERALS && DNA && SPLICE && COMMON SUFFIX
// Splice: Go the documentation and implement a less-robust, but fundamentally functional version of splice that accepts the string you will splice as the first argument.
// Longest Common Suffix: Lance is writing his opus: a tome of beat poetry. Always looking for a good rhyme, he seeks words ending with the same letters. Write a function that, given a word array, returns the largest common suffix (word-end). For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not a very creative starting point). If it is ["nice", "ice", "baby"], return "".
// Integer to roman Numeral: Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
// Roman Numeral to integer: Sept 16, 2014 headline: “Ancient Computer Found In Roman Shipwreck”. Composed of more than 30 bronze gears, its wooden frame features at least 2000 characters. Given a string containing the Roman numeral representation of a positive integer, return that integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.
// DNA Code: This algorithm will simulate the conversion of DNA information into an amino-acid chain and then converting the amino-acid chain into a string. First given a valid string of DNA, transform it to the appropriate mRNA. Next, mRNA will attract tRNA carrying codons. These codons will be assembled into an array of strings representing the amino acids they carry. Finally, the amino-acids are commonly combined into a code. Using the array of amino-acids, convert the code into a string that you return.
// DNA will be a string made of the letters G, C, A, T
// These are converted into their corresponding RNA: C, G, U, A
// Sequences of three mRNA are converted into codons,
// each codon corresponds to an Amino-Acid: GCA is Alanine
// Each Amino Acid has single-character it corresponds to: Alanine = A
// So for example, Given the DNA sequence 'TACAAT' you will get the mRNA sequence 'AUGUUA'. This mRNA sequence is then turned into the codons AUG & UUA. Thse codons are then turned into Methionine and Leucene respectively. And, finally, their one-letter-codes are M and L, returning 'ML'
//
// http://www.w3schools.com/jsref/jsref_slice_string.asp

// https://vimeo.com/200102582/37e4449bd7
