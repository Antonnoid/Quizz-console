// Сделать функцию, которая обрабатывает файл с вопросами, ответами и темами.

class Quest {
  constructor(theme, question, answer) {
    this.theme = theme;
    this.question = question;
    this.answer = answer;
  }
}

const question1 = new Quest(
  'Зеленый Слоник',
  'Где был снят этот фильм?',
  'в Москве'
);
const question2 = new Quest(
  'Зеленый Слоник',
  'Как звали главного героя фильма?',
  'братишка'
);

const question3 = new Quest(
  'Зеленый Слоник',
  'Что принёс Пахом братишке?',
  'покушать'
);
const question4 = new Quest(
  'Зеленый Слоник',
  'Продолжите фразу: Кто мы то? К кому ты обращаещься?',
  'Я здесь один'
);
const question5 = new Quest(
  'Зеленый Слоник',
  'Запрещён ли показ данного фильма на территории РФ?',
  'Да'
);

module.exports = Quest;
