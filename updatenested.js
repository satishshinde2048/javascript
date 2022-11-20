/*Input:
const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } }

Output:
{ name: { first: 'John', last: 'Snow' }, jobTitle: 'JS Instructor@Almabetter.com', email: { work: 'kapil@google.com', personal: '' }, status: { isOnline: true, isVerified: false }, isProMember: false } */
const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } };
userDetails.name.first="John";
userDetails.name.last="Snow";
userDetails.isProMember=false;
console.log(userDetails);
