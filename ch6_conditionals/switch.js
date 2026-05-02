let age = 2;

switch (true) {
  case age >= 0 && age <= 4:
    console.log("Nursery (Early Years)");
    break;

  case age >= 5 && age <= 10:
    console.log("Primary School");
    break;

  case age >= 11 && age <= 16:
    console.log("Secondary School (GCSE level)");
    break;

  case age >= 17 && age <= 18:
    console.log("Sixth Form / College (A-levels)");
    break;

  default:
    console.log("Invalid age");
}
