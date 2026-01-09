// Re: Fwd: Fw: Count
// Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

// For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

// "fw:"
// "fwd:"
// "re:"
// Return the total number of occurrences of these markers.

function emailChainCount(subject) {
  let count = 0;
  const regex = /[fw:\s]|[fwd:\s]|[re:\s]/gi;
  console.log(subject.split(regex));
  console.log(subject);
  return subject;
}
