function replaceAt(index, row, val){
  return row.substr(0, index) + val + row.substr(index + 1, row.lenght);
}

function distToPacman(x1, y1, x2, y2){
  distToPM = sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
  return distToPM;
}
