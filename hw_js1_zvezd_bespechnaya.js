// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// let userAge = 10
// checkAge(17)
// checkAge(18)
// checkAge(61)

//  function checkAge(userAge) {
//     let age_2 = 18
//     let age_3 = 60
    
//     if (userAge  < age_2) {
//         console.log("You don’t have access cause your age is", + userAge, "It’s less than 18")
//     } 
//     else if (userAge >= age_2 && userAge < age_3) {
//          console.log("Welcome!")
//     }
//     else if (userAge >= age_3){
//        console.log("Keep calm and look Culture channe")
//     }
//     else {
//         console.log("Technical work")
//     }
// }

// // 2*:
// // Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// let userAge = 10
// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge('slovo')

//  function checkAge(userAge) {
//     let age_2 = 18
//     let age_3 = 60
//     if (typeof userAge == 'number') {
//             if (userAge < age_2) {
//             console.log("You don’t have access cause your age is", + userAge, "It’s less than 18")
//             } else if (userAge >= age_2 && userAge < age_3) {
//             console.log("Welcome!")
//             } else if (userAge >= age_3) {
//             console.log("Keep calm and look Culture channe")
//             }
//         } else {
//         console.log("error")
//     }
// }

// // 3**:
// // Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// let userAge = 10
// checkAge('17')
// checkAge('18')
// checkAge('61')
// checkAge('slovo')
// checkAge('2a')
//  function checkAge(userAge) {
//     let age_2 = 18
//     let age_3 = 60
//     if (isNaN(userAge)){
//         console.log('error')
//     }
//     else {
//             if (userAge < age_2) {
//                 console.log("You don’t have access cause your age is", + userAge, "It’s less than 18")
//             }
//             else if (userAge >= age_2 && userAge < age_3) {
//                 console.log("Welcome!")
//             } 
//             else if (userAge >= age_3) {
//                 console.log("Keep calm and look Culture channe")
//             }
//         } 
// }

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let userAge = prompt("Your age:")
checkAge(userAge)
 function checkAge(userAge) {
    let age_2 = 18
    let age_3 = 60
    if (isNaN(userAge)){
        alert('error')
    }
    else {
            if (userAge < age_2) {
                alert("You don’t have access cause your age is", + userAge, "It’s less than 18")
            }
            else if (userAge >= age_2 && userAge < age_3) {
                alert("Welcome!")
            } 
            else if (userAge >= age_3) {
                alert("Keep calm and look Culture channe")
            }
        } 
}