var katzDeli = [];
var katzDeliLine = 0;

function takeANumber(katzDeliLine, name) {
  katzDeli[katzDeliLine] = name;
  katzDeliLine++;
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing() {

}

function currentLine() {

}
