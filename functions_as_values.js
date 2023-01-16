const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Email sent to ${phoneNumber}`;
}

const notify = (emailOrPhone, notifyFuncrion) => {
  return notifyFuncrion(emailOrPhone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
