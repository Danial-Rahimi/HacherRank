function appendAndDelete(s, t, k) {
  let a = s,
    moves = 0,
    empty = false

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (a[i] == t[i]) continue
    else if (!(a[i] && !!t[i])) {
      a += t[i]
      moves++
    } else {
      if (i == 0) empty = true
      a = s.substr(0, i)
      moves += s.length - i--
    }
  }
  if (
    s.length + t.length <= k ||
    (moves <= k && ((k - moves) % 2 == 0 || empty == true))
  )
    return "Yes"
  else return "No"
}
console.log(appendAndDelete("abcdk", "abcdert", 10))
