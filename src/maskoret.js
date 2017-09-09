import readline from 'readline';
import calculateProvidentFund from './provident-fund';
import calculateIncomeTax from './income-tax';
import calculateHealthFee from './health-fee';
import calculateSocialSecurity from './social-security';
import calculateTotalDeductions from './total-deductions';
import calculateNetSalary from './net-salary';
import Messages from './Messages';

export default () => {
  let language = 'English';
  let minutes = 0;
  let numberOfChickens = 0;
  let chabadDays = 0;
  let hourlySalary = 0;
  let creditPoints = 2.25;
  let holidaysNumber = 0;
  let holidayGift = 0;

  const messages = new Messages();
  const message = (messageName) => {
    if (language === 'English') {
      return messages.getEnglishMessage(messageName);
    }
    if (language === 'Russian') {
      return messages.getRussianMessage(messageName);
    }
    return messages.getHebrewMessage(messageName);
  };

  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.question(message('languageQuestion'), (LanguageAnswer) => {
    switch (LanguageAnswer) {
      case '1':
        language = 'English';
        break;
      case '2':
        language = 'Russian';
        break;
      case '3':
        language = 'Hebrew';
        break;
      default:
        console.log(message('useDefault'));
        language = 'English';
        break;
    }
    console.log('');

    rl.question(message('hoursQuestion'),
    (minutesAnswer) => {
      if (minutesAnswer === '') {
        minutes = 0;
      }
      let timeArray = [];
      if (minutesAnswer.includes(':')) {
        timeArray = minutesAnswer.split(':');
      } else {
        timeArray = minutesAnswer.split(' ');
      }
      const hh = Number(timeArray[0]);
      const mm = Number(timeArray[1]);
      minutes = timeArray[1] ? ((hh * 60) + mm) : (hh * 60);
      console.log('');

      rl.question(message('chickenQuestion'),
      (chickensAnswer) => {
        if (chickensAnswer === '') {
          numberOfChickens = 0;
        }
        numberOfChickens = Number(chickensAnswer);
        console.log('');

        rl.question(message('chabadQuestion'),
        (chabadAnswer) => {
          if (chabadAnswer === '') {
            chabadDays = 0;
          } else {
            chabadDays = Number(chabadAnswer);
          }
          console.log('');

          rl.question(message('hourlySalaryQuestion'),
          (hourlySalaryAnswer) => {
            hourlySalary = Number(hourlySalaryAnswer);
            console.log('');

            rl.question(message('creditPointsQuestion'),
            (creditPointsAnswer) => {
              creditPoints = Number(creditPointsAnswer);
              console.log('');

              rl.question(message('holidaysQuestion'),
              (holidaysAnswer) => {
                if (holidaysAnswer === '') {
                  holidaysNumber = 0;
                } else {
                  holidaysNumber = Number(holidaysAnswer);
                }
                console.log('');

                rl.question(message('holidayGiftQuestion'),
                (holidayGiftAnswer) => {
                  if (holidayGiftAnswer === ''
                  || holidayGiftAnswer === 'n'
                  || holidayGiftAnswer === 'no'
                  || holidayGiftAnswer === 'н'
                  || holidayGiftAnswer === 'нет'
                  || holidayGiftAnswer === 'אל'
                  || holidayGiftAnswer === 'ל') {
                    holidayGift = 0;
                  } else {
                    holidayGift = 370;
                  }
                  console.log('');

                  const hours = (minutes / 60).toFixed(2);
                  const salaryForHours = Math.round(hours * hourlySalary);
                  const baseSalary = numberOfChickens * 0.21;
                  const chabad = chabadDays * 50;
                  const vacation = Math.round(baseSalary / 22);
                  const holidays = holidaysNumber * 333;
                  const gross = salaryForHours + chabad + vacation + holidays + holidayGift;

                  const providentFund = calculateProvidentFund(baseSalary);
                  const incomeTax = calculateIncomeTax(gross, creditPoints, baseSalary);
                  const healthFee = calculateHealthFee(gross);
                  const socialSecurity = calculateSocialSecurity(gross);
                  const totalDeductions = calculateTotalDeductions(gross, creditPoints, baseSalary);
                  const netSalary = calculateNetSalary(gross, creditPoints, baseSalary);

                  console.log(message('thanks'));
                  console.log('');
                  if (language === 'Hebrew') {
                    console.log(`${gross} ${message('grossSalary')}`);
                    console.log(`${incomeTax} ${message('incomeTax')}`);
                    console.log(`${socialSecurity} ${message('socialSecurity')}`);
                    console.log(`${healthFee} ${message('healthFee')}`);
                    console.log(`${providentFund} ${message('providentFund')}`);
                    console.log(`${totalDeductions} ${message('totalDeductions')}`);
                    console.log(`${netSalary} ${message('netSalary')}`);
                  } else {
                    console.log(`${message('grossSalary')} ${gross}`);
                    console.log(`${message('incomeTax')} ${incomeTax}`);
                    console.log(`${message('socialSecurity')} ${socialSecurity}`);
                    console.log(`${message('healthFee')} ${healthFee}`);
                    console.log(`${message('providentFund')} ${providentFund}`);
                    console.log(`${message('totalDeductions')} ${totalDeductions}`);
                    console.log(`${message('netSalary')} ${netSalary}`);
                  }
                  console.log('');
                  console.log(`${message('goodLuck')}`);
                  console.log('');
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
};
