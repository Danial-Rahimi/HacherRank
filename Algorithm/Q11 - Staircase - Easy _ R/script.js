function staircase(starCount) {
  for (let col = 0; col < starCount; col++) {
    console.log("#".repeat(col + 1).padStart(starCount, " "));
  }
}

staircase(4);
