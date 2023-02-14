"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'applicationPairs' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER deviceCapacity
 *  2. 2D_INTEGER_ARRAY foregroundAppList
 *  3. 2D_INTEGER_ARRAY backgroundAppList
 */

function applicationPairs(
  deviceCapacity,
  foregroundAppList,
  backgroundAppList
) {
  // Write your code here
  let sum = 0;
  let temp_sum = 0;
  let pairs = [];
  console.log(deviceCapacity, foregroundAppList, backgroundAppList);
  for (let i = 0; i < foregroundAppList.length; i++) {
    for (let j = 0; j < backgroundAppList.length; j++) {
      temp_sum = foregroundAppList[i][1] + backgroundAppList[j][1];
      if ((temp_sum > sum) & (temp_sum <= deviceCapacity)) {
        pairs.pop();
        pairs.push([foregroundAppList[i][0], backgroundAppList[j][0]]);
        sum = temp_sum;
        console.log("Test 1", pairs);
      } else if (temp_sum < sum) {
        console.log("Test 2", pairs);
      } else if (temp_sum <= deviceCapacity) {
        console.log("Test 3", pairs);
        pairs.push([foregroundAppList[i][0], backgroundAppList[j][0]]);
      }
    }
  }

  if (pairs.length === 0) return [];
  return pairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const deviceCapacity = parseInt(readLine().trim(), 10);

  const foregroundAppListRows = parseInt(readLine().trim(), 10);

  const foregroundAppListColumns = parseInt(readLine().trim(), 10);

  let foregroundAppList = Array(foregroundAppListRows);

  for (let i = 0; i < foregroundAppListRows; i++) {
    foregroundAppList[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((foregroundAppListTemp) => parseInt(foregroundAppListTemp, 10));
  }

  const backgroundAppListRows = parseInt(readLine().trim(), 10);

  const backgroundAppListColumns = parseInt(readLine().trim(), 10);

  let backgroundAppList = Array(backgroundAppListRows);

  for (let i = 0; i < backgroundAppListRows; i++) {
    backgroundAppList[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((backgroundAppListTemp) => parseInt(backgroundAppListTemp, 10));
  }

  const result = applicationPairs(
    deviceCapacity,
    foregroundAppList,
    backgroundAppList
  );

  ws.write(result.map((x) => x.join(" ")).join("\n") + "\n");

  ws.end();
}
