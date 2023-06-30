const Quest = require('./Quest');

const Dog = new Quest(
  'Симпсоны',
  'Как зовут любимую собаку Симпсонов?',
  'Маленький помощник Санты'
);
const Shorts = new Quest(
  'Симпсоны',
  'Самая знаменитая крылатая фраза у Барта Симпсона?',
  'Съешь мои шорты!'
);
const five = new Quest(
  'Симпсоны',
  'Персонаж «Симпсонов», у которого по ​​пять пальцев на каждой руке?',
  'Бог'
);
const bear = new Quest(
  'Симпсоны',
  'Какое пиво обычно подают в таверне Мо?',
  'Duff'
);
const homer = new Quest(
  'Симпсоны',
  'Что означает буква J в полном имени Homer J. Simpson?',
  'Jay'
);
module.exports=[Dog,Shorts,five,bear,homer]
