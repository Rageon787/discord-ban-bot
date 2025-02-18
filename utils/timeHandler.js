// Helper code to parse user input on the duration of something
// Return a ms string if the user has supplied correct input or a null otherwise
import timestring from "timestring";

export function timeValidate(str) {
  let inMs = "";
  try {
    inMs = timestring(str, "ms");
  } catch (e) {
    inMs = "";
    console.log(e);
  }
  return inMs;
}
