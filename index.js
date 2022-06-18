// const randomString=length=>Math.random().toString(36).substr(2,length).split("").map(e=>Math.random()<Math.random()?e.toUpperCase():e).join().replaceAll(",","");

// console.log(randomString(10));

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-={}[]:>?,./|'
const passLenghth = 10

function generate(){

let result = ''
    for(let i=0;i< passLenghth;i++){
const password = Math.floor(Math.random() * characters.length)
result += characters.substring(password, password + 1)
    }
    console.log(result)
   one.value = result
   generateTwo()
   generateThree()
   generateFour()
}
function generateTwo(){

    let result = ''
        for(let i=0;i<=passLenghth;i++){
    const password = Math.floor(Math.random() * characters.length)
    result += characters.substring(password, password + 1)
        }
        console.log(result)
       two.value = result
    }
    function generateThree(){

        let result = ''
            for(let i=0;i<=passLenghth;i++){
        const password = Math.floor(Math.random() * characters.length)
        result += characters.substring(password, password + 1)
            }
            console.log(result)
           three.value = result
        }
        function generateFour(){

            let result = ''
                for(let i=0;i<=passLenghth;i++){
            const password = Math.floor(Math.random() * characters.length)
            result += characters.substring(password, password + 1)
                }
                console.log(result)
               four.value = result
            }
           