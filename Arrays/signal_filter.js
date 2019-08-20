function signalFilter(freq, ft) {
  let filters = []
  let minRange = ft[0][0]
  let maxRange = ft[0][1]

  for(let i = 1; i < ft.length; i++) {
    if(ft[i][0] > minRange) {
      minRange = ft[i][0]
    }
    if(ft[i][1] < maxRange) {
      maxRange = ft[i][1]
    }
  }
  
  // return [minRange, maxRange]
  for(let j = 0; j < freq.length; j++) {
    if(freq[j] >= minRange & freq[j] <= maxRange) {
      filters.push(freq[j])
    }
  }

  return filters
}

frequencies = [8,15,14,16,21]
filtersRanges = [[10,17],[13,15],[13,17]]

const a = signalFilter(frequencies, filtersRanges)
console.log(a)