const reverseString = str =>
 str.split('').reverse().join('');

export default class Messages {
  constructor() {
    this.englishMessages = {
      languageQuestion: `\nHello, which language do you prefer?\n
English: enter 1
Русский: введите 2
${reverseString('עברית: הקש 3')}\n\n`,
      useDefault: "\nYou didn't choose the language, so I'll speak with You English",
      hoursQuestion: `Please enter how many hours you worked this month
in "hh mm" format.\n\n`,
      chickenQuestion: 'How many chickens you slaughtered this month?\n\n',
      chabadQuestion: `How many days this month was the Chabad slaughter?
(If you didn't slaughter for Chabad this month, press Enter).\n\n`,
      hourlySalaryQuestion: 'How much do you earn per hour?\n\n',
      creditPointsQuestion: `How many credit points do you have in Income Tax?
(For example: 3.25).\n\n`,
      holidaysQuestion: `Were there any holidays this month?
(If there were, please enter the number of days, else press Enter).\n\n`,
      holidayGiftQuestion: `Should you get a holiday gift this month?
(If you shoud, then enter "y" or "yes", else press Enter).\n\n`,
      thanks: 'Thank you for answering all the questions!',
      grossSalary: 'Your expected gross salary this month should be:',
      incomeTax: 'Income Tax:',
      socialSecurity: 'Social Security:',
      healthFee: 'Health Fee:',
      providentFund: 'Provident Fund:',
      totalDeductions: 'Total deductions:',
      netSalary: 'Your expected net salary this month should be:',
      goodLuck: 'Good luck!',
    };

    this.russianMessages = {
      hoursQuestion:
       `Введите, пожалуйста, сколько часов вы проработали в этом месяце
в формате "чч мм".\n\n`,
      chickenQuestion: 'Введите, пожалуйста, количество кур, порезанных вами в течении месяца\n\n',
      chabadQuestion: `Сколько дней в этом месяце была хабадская шхита?
(Если вы не резали для хабада в этом месяце, просто нажмите Enter).\n\n`,
      hourlySalaryQuestion: 'Сколько вы получаете за час?\n\n',
      creditPointsQuestion: `Сколько льготных пунктов у вас имеется в подоходном налоге?
(Например: 3.25).\n\n`,
      holidaysQuestion: `В этом месяце были праздники?
(Если да, введите количество праздничных дней,
в противном случае нажмите Enter).\n\n`,
      holidayGiftQuestion: `Положен ли вам праздничный подарок в этом месяце?
(Если да, введите "да" или "yes",
в противном случае нажмите Enter).\n\n`,
      thanks: 'Спасибо за то, что ответили на все вопросы!',
      grossSalary: 'Ваша ожидаемая зарплата брутто в этом месяце составит:',
      incomeTax: 'Подоходный налог:',
      socialSecurity: 'Социальное страхование:',
      healthFee: 'Медицинское страхование:',
      providentFund: 'Пенсионный взнос:',
      totalDeductions: 'Общая сумма вычетов:',
      netSalary: 'Ваша ожидаемая зарплата нетто в этом месяце составит:',
      goodLuck: 'Всего доброго!',
    };

    this.hebrewMessages = {
      hoursQuestion:
       `${reverseString('נא הזן את כמות שעות עבודה שהיו לך החודש')}\n\n`,
      chickenQuestion: `${reverseString('נא הזן את כמות העופות ששחטת החודש')}\n\n`,
      chabadQuestion:
      `${reverseString(')אם לא שחטת לחב"ד הקש retnE(\n.כמה ימים התקיימה שחיטת חב"ד החודש?')}\n\n`,
      hourlySalaryQuestion: `${reverseString('כמה אתה מקבל בשעה?')}\n\n`,
      creditPointsQuestion:
      `${reverseString(')לדוגמה 52.3(\nכמה נקודות זיכוי במס הכנסה יש לך?')}\n\n`,
      holidaysQuestion:
      `${reverseString(')אם כן נא הקש מספר ימים, אחרת הקש retnE(\nהאם היו חגים החודש?')}\n\n`,
      holidayGiftQuestion:
      `${reverseString(')אם כן הקש "כן" או "sey", אחרת הקש retnE(\nאתה צריך לקבל מתנת חג החודש?')}
      \n`,
      thanks: `${reverseString('תודה שענית על כל השאלות!')}`,
      grossSalary: `${reverseString('משכורתך ברוטו לחודש זה צריכה להיות:')}`,
      incomeTax: `${reverseString('מס הכנסה:')}`,
      socialSecurity: `${reverseString('ביטוח לאומי:')}`,
      healthFee: `${reverseString('דמי בריאות:')}`,
      providentFund: `${reverseString('קופת גמל:')}`,
      totalDeductions: `${reverseString('סה"כ ניכויים:')}`,
      netSalary: `${reverseString('משכורתך נטו לחודש זה צריכה להיות:')}`,
      goodLuck: `${reverseString('כל טוב!')}`,
    };
  }

  getEnglishMessage(messageName) {
    return this.englishMessages[messageName];
  }

  getRussianMessage(messageName) {
    return this.russianMessages[messageName];
  }

  getHebrewMessage(messageName) {
    return this.hebrewMessages[messageName];
  }
}
